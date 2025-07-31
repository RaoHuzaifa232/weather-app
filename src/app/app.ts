import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrentWeather } from './components/current-weather/current-weather';
import { WeatherDetails } from './components/weather-details/weather-details';
import { WeatherSearch } from './components/weather-search/weather-search';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    WeatherSearch,
    CurrentWeather,
    WeatherDetails,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'weather-app';
  currentLocation: string = 'London, City of London, Greater London';

  weatherData: any = {
    location: {
      name: 'London',
      region: 'City of London, Greater London',
      country: 'United Kingdom',
      lat: 51.5171,
      lon: -0.1062,
      tz_id: 'Europe/London',
      localtime_epoch: 1753941570,
      localtime: '2025-07-31 06:59',
    },
    current: {
      last_updated_epoch: 1753940700,
      last_updated: '2025-07-31 06:45',
      temp_c: 15.1,
      temp_f: 59.2,
      is_day: 1,
      condition: {
        text: 'Heavy rain',
        icon: '//cdn.weatherapi.com/weather/64x64/day/308.png',
        code: 1195,
      },
      wind_mph: 5.1,
      wind_kph: 8.3,
      wind_degree: 261,
      wind_dir: 'W',
      pressure_mb: 1017.0,
      pressure_in: 30.03,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 100,
      cloud: 75,
      feelslike_c: 15.1,
      feelslike_f: 59.2,
      windchill_c: 17.3,
      windchill_f: 63.1,
      heatindex_c: 17.3,
      heatindex_f: 63.1,
      dewpoint_c: 12.2,
      dewpoint_f: 53.9,
      vis_km: 1.5,
      vis_miles: 0.0,
      uv: 0.0,
      gust_mph: 6.9,
      gust_kph: 11.2,
      short_rad: 12.59,
      diff_rad: 6.41,
      dni: 0.0,
      gti: 0.0,
    },
  };

  sampleCityData: { [key: string]: any } = {
    paris: {
      location: {
        name: 'Paris',
        region: 'Ile-de-France',
        country: 'France',
        localtime: '2025-07-31 08:59',
      },
      current: {
        temp_c: 22.5,
        temp_f: 72.5,
        feelslike_c: 24.0,
        feelslike_f: 75.2,
        condition: {
          text: 'Partly cloudy',
          icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
        },
        humidity: 65,
        wind_kph: 12.5,
        wind_dir: 'NW',
        pressure_mb: 1013.0,
        vis_km: 10.0,
        uv: 5.0,
        precip_mm: 0.0,
        windchill_c: 22.5,
      } as any,
    },
    tokyo: {
      /* similar data */
    } as any,
    'new york': {
      /* similar data */
    } as any,
  };

  // constructor(private toastService: ToastService) {}

  handleSearch(location: string) {
    const cityKey = location.toLowerCase();
    const cityData = this.sampleCityData[cityKey];

    if (cityData) {
      this.weatherData = cityData;
      this.currentLocation = `${cityData.location.name}, ${cityData.location.region}`;
      // this.toastService.success(
      //   `Now showing weather for ${cityData.location.name}`,
      //   'Location Updated'
      // );
    } else {
      // this.toastService.error(
      //   'Try searching for Paris, Tokyo, New York, or London',
      //   'Location Not Found'
      // );
    }
  }
}
