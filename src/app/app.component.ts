import { Component } from '@angular/core';
import { routng } from './app.routing';
import {enableProdMode} from '@angular/core';

enableProdMode();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital-managment-system';
}
