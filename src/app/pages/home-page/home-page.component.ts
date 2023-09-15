import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [HeaderComponent]
})
export class HomePageComponent {}
