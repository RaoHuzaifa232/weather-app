import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { WeatherData } from './weather.model';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  private readonly _http = inject(HttpClient);
  private readonly key = '048c1354e370428f97755024253107';

  weatherData = signal<WeatherData>({
    location: {
      name: '',
      region: '',
      country: '',
      lat: 0,
      lon: 0,
      tz_id: '',
      localtime_epoch: 0,
      localtime: '',
    },
    current: {
      last_updated_epoch: 0,
      last_updated: '',
      temp_c: 0,
      temp_f: 0,
      is_day: 0,
      condition: {
        text: '',
        icon: '',
        code: 0,
      },
      wind_mph: 0,
      wind_kph: 0,
      wind_degree: 0,
      wind_dir: '',
      pressure_mb: 0,
      pressure_in: 0,
      precip_mm: 0,
      precip_in: 0,
      humidity: 0,
      cloud: 0,
      feelslike_c: 0,
      feelslike_f: 0,
      windchill_c: 0,
      windchill_f: 0,
      heatindex_c: 0,
      heatindex_f: 0,
      dewpoint_c: 0,
      dewpoint_f: 0,
      vis_km: 0,
      vis_miles: 0,
      uv: 0,
      gust_mph: 0,
      gust_kph: 0,
      short_rad: 0,
      diff_rad: 0,
      dni: 0,
      gti: 0,
    },
  });

  getWeatherData(location: string) {
    const url = `http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${location}&aqi=no`;
    return this._http.get(url);
  }
}
