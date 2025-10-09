import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrentWeather } from './components/current-weather/current-weather';
import { LoadingSpinner } from './components/loading-spinner/loading-spinner';
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
    LoadingSpinner,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'weather-app';
}
