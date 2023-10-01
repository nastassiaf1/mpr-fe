import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  animations: [
    trigger('showNews', [
      state('opened', style({
        transition: 'init',
      })),
      state('closed', style({
        transform: 'translate(100%, 0)'
      })),
      transition('opened <=> closed', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class HomePageComponent {
  isNewsShown = true;
}
