import { Component, Input } from '@angular/core';
import { WeatherData } from '../../weather.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-weather',
  imports: [CommonModule],
  templateUrl: './current-weather.html',
  styleUrl: './current-weather.scss',
})
export class CurrentWeather {
  @Input() data!: WeatherData;

  formatTime(datetime: string): string {
    const date = new Date(datetime);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  getWeatherGradient(condition: string): string {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
      return 'bg-gradient-to-r from-[#7E9EC9] to-[#5A8FC6]';
    }
    if (conditionLower.includes('cloud')) {
      return 'bg-gradient-to-r from-gray-500 to-gray-700';
    }
    if (conditionLower.includes('sun') || conditionLower.includes('clear')) {
      return 'bg-gradient-to-r from-[#F2B35A] to-[#F6D06A]';
    }
    return 'bg-gradient-to-r from-sky-400 to-sky-600';
  }
}
