import { useEffect, useState } from 'preact/hooks';
import { Icon } from './Icon';

interface WeatherWidgetViewProps {
  city?: string;
}

interface WeatherData {
  temp: number;
  condition: 'Sunny' | 'Cloudy' | 'Partly Cloudy' | 'Rainy' | 'Stormy' | 'Snowy';
  cityName: string;
  isGeo: boolean;
}

export function WeatherWidgetView({ city = '' }: WeatherWidgetViewProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const load = async () => {
      try {
        let lat: number;
        let lon: number;
        let cityName: string;
        let isGeo = false;

        // 1. If city is explicitly set, use it directly (skip geolocation)
        if (city) {
          const geo = await geocodeCity(city);
          if (!geo) throw new Error('Cidade não encontrada');
          lat = geo.lat;
          lon = geo.lon;
          cityName = geo.name;
        }
        // 2. Try geolocation
        else if (navigator.geolocation) {
          try {
            const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject, {
                enableHighAccuracy: false,
                timeout: 8000,
                maximumAge: 600000
              });
            });
            lat = pos.coords.latitude;
            lon = pos.coords.longitude;
            isGeo = true;
            // reverse geocode
            cityName = await reverseGeocode(lat, lon);
          } catch {
            throw new Error('Localização não disponível');
          }
        } else {
          throw new Error('Localização não disponível');
        }

        // 2. Fetch weather
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`
        );
        if (!response.ok) throw new Error('Falha ao buscar clima');
        const data = await response.json();
        const code = data.current_weather?.weathercode ?? 0;
        const temp = data.current_weather?.temperature;

        if (!cancelled) {
          setWeather({
            temp: Math.round(temp ?? 0),
            condition: weatherCodeToCondition(code),
            cityName,
            isGeo
          });
        }
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Erro');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [city]);

  if (loading) {
    return (
      <div className="weather-widget">
        <div className="weather-widget__city">—</div>
        <div className="weather-widget__row">
          <span className="weather-widget__temp">—</span>
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="weather-widget">
        <div className="weather-widget__city">—</div>
        <div className="weather-widget__row">
          <span className="weather-widget__temp">—</span>
        </div>
      </div>
    );
  }

  const iconName: 'sun' | 'cloud' | 'cloud-sun' | 'cloud-rain' =
    weather.condition === 'Sunny'
      ? 'sun'
      : weather.condition === 'Cloudy'
      ? 'cloud'
      : weather.condition === 'Rainy' || weather.condition === 'Stormy'
      ? 'cloud-rain'
      : 'cloud-sun';

  return (
    <div className="weather-widget">
      <div className="weather-widget__city">
        {weather.isGeo ? '📍 ' : ''}{weather.cityName.toUpperCase()}
      </div>
      <div className="weather-widget__row">
        <Icon name={iconName} size={22} />
        <span className="weather-widget__temp">{weather.temp}°C</span>
      </div>
    </div>
  );
}

async function reverseGeocode(lat: number, lon: number): Promise<string> {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=pt`
    );
    if (!response.ok) return `${lat.toFixed(2)}, ${lon.toFixed(2)}`;
    const data = await response.json();
    return data.city || data.locality || data.principalSubdivision || `${lat.toFixed(2)}, ${lon.toFixed(2)}`;
  } catch {
    return `${lat.toFixed(2)}, ${lon.toFixed(2)}`;
  }
}

async function geocodeCity(city: string): Promise<{ lat: number; lon: number; name: string } | null> {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=pt&format=json`
    );
    if (!response.ok) return null;
    const data = await response.json();
    const result = data.results?.[0];
    if (!result) return null;
    return { lat: result.latitude, lon: result.longitude, name: result.name || result.country || city };
  } catch {
    return null;
  }
}

function weatherCodeToCondition(code: number): WeatherData['condition'] {
  if (code === 0) return 'Sunny';
  if (code >= 1 && code <= 3) return 'Partly Cloudy';
  if (code >= 45 && code <= 48) return 'Cloudy';
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return 'Rainy';
  if (code >= 71 && code <= 77) return 'Snowy';
  if (code >= 95) return 'Stormy';
  return 'Partly Cloudy';
}
