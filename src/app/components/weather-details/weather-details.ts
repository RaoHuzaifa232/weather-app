import { Component, Input, OnInit } from '@angular/core';
import { WeatherCard } from '../weather-card/weather-card';
import {
  Droplets,
  Wind,
  Gauge,
  Eye,
  Thermometer,
  CloudRain,
  Sun,
} from 'lucide-angular';

interface CurrentData {
  humidity: number;
  wind_kph: number;
  wind_dir: string;
  pressure_mb: number;
  vis_km: number;
  uv: number;
  precip_mm: number;
  windchill_c: number;
}

@Component({
  selector: 'app-weather-details',
  imports: [WeatherCard],
  templateUrl: './weather-details.html',
  styleUrl: './weather-details.scss',
})
export class WeatherDetails implements OnInit {
  @Input() data!: { current: CurrentData };

  weatherMetrics: Array<any> = [];

  ngOnInit(): void {
    const current = this.data.current;

    this.weatherMetrics = [
      { title: 'Humidity', value: current.humidity, unit: '%', icon: Droplets },
      {
        title: 'Wind Speed',
        value: Math.round(current.wind_kph),
        unit: 'km/h',
        icon: Wind,
      },
      {
        title: 'Wind Direction',
        value: current.wind_dir,
        unit: '',
        icon: Wind,
      },
      {
        title: 'Pressure',
        value: Math.round(current.pressure_mb),
        unit: 'mb',
        icon: Gauge,
      },
      { title: 'Visibility', value: current.vis_km, unit: 'km', icon: Eye },
      {
        title: 'UV Index',
        value: this.getUVLevel(current.uv),
        unit: '',
        icon: Sun,
      },
      {
        title: 'Precipitation',
        value: current.precip_mm,
        unit: 'mm',
        icon: CloudRain,
      },
      {
        title: 'Wind Chill',
        value: Math.round(current.windchill_c),
        unit: '°C',
        icon: Thermometer,
      },
    ];
  }

  getUVLevel(uv: number): string {
    if (uv <= 2) return 'Low';
    if (uv <= 5) return 'Moderate';
    if (uv <= 7) return 'High';
    if (uv <= 10) return 'Very High';
    return 'Extreme';
  }
}
