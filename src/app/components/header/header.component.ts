import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  openMenu: boolean = false;

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }

  clickButton: boolean = false;

  onClick(): void {
    this.clickButton = true;
    setTimeout(() => {
      this.clickButton = false;
    }, 700);
  }
}
