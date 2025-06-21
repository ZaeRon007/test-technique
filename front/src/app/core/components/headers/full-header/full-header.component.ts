import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-full-header',
  templateUrl: './full-header.component.html',
  styleUrl: './full-header.component.scss'
})
export class FullHeaderComponent {
  constructor(private authService: AuthService){

  }

  logOut(){
    this.authService.logOut();
  }
}
