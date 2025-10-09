import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, MapPin, Search } from 'lucide-angular';
import { Weather } from '../../weather.service';

@Component({
  selector: 'app-weather-search',
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './weather-search.html',
  styleUrl: './weather-search.scss',
})
export class WeatherSearch implements OnInit {
  private readonly _weatherService = inject(Weather);
  private readonly _cdr = inject(ChangeDetectorRef);

  currentLocation: string = '';
  Search = Search;
  MapPin = MapPin;
  searchQuery: string = '';

  ngOnInit(): void {
    this.searchQuery = 'London';
    this.handleSubmit(new Event('submit'));
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    const trimmed = this.searchQuery.trim();
    if (trimmed) {
      this._weatherService.getWeatherData(trimmed).subscribe({
        next: (res: any) => {
          this._weatherService.weatherData.set(res);
          this.currentLocation = `${res.location.name}, ${res.location.region}`;
          this._cdr.markForCheck();
          this.searchQuery = '';
        },
        error: (err) => {},
      });
    }
  }
}
