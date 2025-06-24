import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/productService';
import { productEntity } from '../../../core/models/productEntity';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent { 
  public menuIndex : number = 0;
  
  public home(){
    this.menuIndex = 0;
  }
  
  public products(){
    this.menuIndex = 1;
  }
  
  public contact(){
    this.menuIndex = 2;
  }
}
