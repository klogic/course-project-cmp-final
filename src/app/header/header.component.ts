import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() routeSelectedEvent = new EventEmitter<string>();
  onSelect(route: string) {
    this.routeSelectedEvent.emit(route);
  }
}
