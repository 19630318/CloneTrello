import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';

  @Input() color: 'success' | 'primary' | 'danger' | 'light' | 'sky' = 'primary';

  mapColors = {
    success: {
      'bg-susccess-700': true,
      'hover:bg-susccess-800': true,
      'focus:ring-susccess-300':true,
      'text-white': true
    },
    primary: {
      'bg-primary-700': true,
      'hover:bg-primary-800': true,
      'focus:ring-primary-300':true,
      'text-white': true
    },
    danger: {
      'bg-red-700': true,
      'hover:bg-red-800': true,
      'focus:ring-red-300':true,
      'text-white': true
    },
    light: {
      'bg-gray-200': true,
      'hover:bg-gray-500': true,
      'focus:ring-gray-50':true,
      'text-gray-700': true
    },
    sky: {
      'bg-sky-200': true,
      'hover:bg-sky-500': true,
      'focus:ring-sky-50':true,
      'text-sky-700': true
    }
  }

  get colors(){
    const colors = this.mapColors[this.color];
    if (colors){
      return this.color;
    }
    return {};
  }

}
