import {Component} from '@angular/core';
import {Project} from "../Project";
import {ProjectService} from '../Services/Project.Service';

@Component({
  selector: 'app-root',
  templateUrl: '../Views/app.component.html',
  styleUrls: ['../../assets/css/app.component.css'],
  providers: [ProjectService]
})
export class AppComponent {
}
