import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-weather-card',
  imports: [LucideAngularModule],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.scss',
})
export class WeatherCard {
  @Input() title!: string;
  @Input() value!: string | number;
  @Input() unit?: string;
  @Input() icon!: any;
}
