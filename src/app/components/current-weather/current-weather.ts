import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { WeatherData } from '../../weather.model';
import { Weather } from '../../weather.service';

@Component({
  selector: 'app-current-weather',
  imports: [CommonModule],
  templateUrl: './current-weather.html',
  styleUrl: './current-weather.scss',
})
export class CurrentWeather {
  private readonly _weatherService = inject(Weather);
  weatherData = computed<WeatherData>(() => this._weatherService.weatherData());

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
    const conditionLower = condition?.toLowerCase();
    const isDay = this.weatherData().current.is_day === 1;
    
    // Night backgrounds with stars
    if (!isDay) {
      if (
        conditionLower?.includes('rain') ||
        conditionLower?.includes('drizzle')
      ) {
        return 'bg-gradient-to-r from-[#1a2332] to-[#0f172a] night-sky';
      }
      if (conditionLower?.includes('cloud')) {
        return 'bg-gradient-to-r from-[#2d3748] to-[#1a202c] night-sky';
      }
      if (conditionLower?.includes('sun') || conditionLower?.includes('clear')) {
        return 'bg-gradient-to-r from-[#1e293b] to-[#0f172a] night-sky';
      }
      return 'bg-gradient-to-r from-[#334155] to-[#1e293b] night-sky';
    }
    
    // Day backgrounds (existing)
    if (
      conditionLower?.includes('rain') ||
      conditionLower?.includes('drizzle')
    ) {
      return 'bg-gradient-to-r from-[#7E9EC9] to-[#5A8FC6]';
    }
    if (conditionLower?.includes('cloud')) {
      return 'bg-gradient-to-r from-gray-500 to-gray-700';
    }
    if (conditionLower?.includes('sun') || conditionLower?.includes('clear')) {
      return 'bg-gradient-to-r from-[#F2B35A] to-[#F6D06A]';
    }
    return 'bg-gradient-to-r from-sky-400 to-sky-600';
  }
}
