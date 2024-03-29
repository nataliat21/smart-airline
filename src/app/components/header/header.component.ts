import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() menuToggled = new EventEmitter<boolean>();

  openMenu: boolean = false;
  searchButtonMobile: boolean = false;
  searchButtonDesktop: boolean = false;

  //Method that is responsible for toggling the visibility of the menu
  toggleMenu() {
    this.openMenu = !this.openMenu;
    this.menuToggled.emit(this.openMenu);
  }

  //Method that is responsible for handling an event that occurs when a search is clicked on the mobile device.
  onClickSearchMobile(): void {
    this.searchButtonMobile = true;
    setTimeout(() => {
      this.searchButtonMobile = false;
    }, 700);
  }
//Method that is responsible for handling an event that occurs when a search is clicked on the desktop.
  onClickSearchDesktop(): void {
    this.searchButtonDesktop = true;
    setTimeout(() => {
      this.searchButtonDesktop = false;
    }, 700);
  }
}
