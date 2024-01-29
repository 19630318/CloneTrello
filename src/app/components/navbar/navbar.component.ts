import { Component } from '@angular/core';
import { BtnComponent } from './../../components/btn/btn.component'
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  faBell = faBell;
  faInfoCircle = faInfoCircle;

  isOpen = false
  isBody = false

}
