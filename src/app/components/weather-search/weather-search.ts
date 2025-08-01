import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-weather-search',
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './weather-search.html',
  styleUrl: './weather-search.scss',
})
export class WeatherSearch {
  @Input() currentLocation: string = '';
  @Output() search = new EventEmitter<string>();
  Search = Search;
  MapPin = MapPin;
  searchQuery: string = '';

  handleSubmit(event: Event): void {
    event.preventDefault();
    const trimmed = this.searchQuery.trim();
    if (trimmed) {
      this.search.emit(trimmed);
      this.searchQuery = '';
    }
  }
}
