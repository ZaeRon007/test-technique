import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  
  constructor(private router: Router){

  }
  public readonly appTitle = "Alten Shop";

  public start(){
    this.router.navigateByUrl('/auth');
  }
}
