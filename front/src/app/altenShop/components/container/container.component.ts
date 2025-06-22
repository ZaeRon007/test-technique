import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  showProducts : boolean = false;

  public home(){
    this.showProducts = false;
  }

  public products(){
    this.showProducts = true;
  }
}
