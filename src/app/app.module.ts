import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './Components/app.component';
import { AboutmeComponent } from './Components/aboutme/aboutme.component';
import { HomeComponent } from './Components/home/home.component';
import { ProjectComponent } from './Components/project/project.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    HomeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'aboutme',
        component: AboutmeComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'projects/:projectName',
        component: ProjectComponent
      }
    ]),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
