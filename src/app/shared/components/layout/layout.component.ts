import { Component } from '@angular/core';
import { NavbarComponent } from './../../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

}
