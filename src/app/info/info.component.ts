import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: false,
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  email:string = 'turki.t.almalki@outlook.com';
  whats:string = '966545050766';

}
