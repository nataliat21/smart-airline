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

  toggleMenu() {
    this.openMenu = !this.openMenu;
    this.menuToggled.emit(this.openMenu);
  }

  onClickSearchMobile(): void {
    this.searchButtonMobile = true;
    setTimeout(() => {
      this.searchButtonMobile = false;
    }, 700);
  }

  onClickSearchDesktop(): void {
    this.searchButtonDesktop = true;
    setTimeout(() => {
      this.searchButtonDesktop = false;
    }, 700);
  }
}
