import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class HomePageComponent {}
