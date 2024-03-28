import { Component } from '@angular/core';

@Component({
  selector: 'main-component',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  clickButton: boolean = false;
  clickButtonDestinations: boolean = false;

  onClick(): void {
    this.clickButton = true;
    setTimeout(() => {
      this.clickButton = false;
    }, 700);
  }

  onClickViewDestinations(): void {
    this.clickButtonDestinations = true;
    setTimeout(() => {
      this.clickButtonDestinations = false;
    }, 700);
  }

  

}
