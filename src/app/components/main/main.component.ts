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

  //Method that is responsible for handling an event that occurs when clicking on the search in the promotional banner section on mobile and desktop devices
  onClick(): void {
    this.clickButton = true;
    setTimeout(() => {
      this.clickButton = false;
    }, 700);
  }

  //Method that is responsible for handling an event that occurs when the view destinations button is clicked
  onClickViewDestinations(): void {
    this.clickButtonDestinations = true;
    setTimeout(() => {
      this.clickButtonDestinations = false;
    }, 700);
  }

  

}
