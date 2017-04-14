import { Component, OnInit } from '@angular/core';
import {Project} from "../../Project";
import {ProjectService} from "../../Services/Project.Service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})
export class HomeComponent implements OnInit {
  projects: Project[];
  hovered: boolean[];

  constructor(private projectService: ProjectService){
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      for (let project of this.projects) {;
        console.log(project.page);
        project.page = project.page.replace("#", "");
        console.log(project.page);
      }
      this.hovered = new Array(this.projects.length);
      for(var i = 0; i < this.projects.length; i++){
        this.hovered[i] = false;
      }
    });
  }

  /**
   * Method to get Image Path
   * @param tech    : The technology of the image requested
   * @returns {any} : Image path of the technology
   */
  getTechnologyPath(tech){
    if(tech.includes("Android")){
      return "../assets/img/skills/Android_Icon.png";
    } else if(tech.includes("Java")){
      return "../assets/img/skills/Java_Icon.png";
    } else if(tech.includes("SQL")){
      return "../assets/img/skills/SQL_Icon.png";
    } else if(tech.includes("HTML")){
      return "../assets/img/skills/HTML_Icon.png";
    }  else if(tech.includes("CSS")){
      return "../assets/img/skills/CSS_Icon.png";
    } else if(tech.includes("JavaScript")){
      return "../assets/skills/JS_Icon.png";
    } else if(tech.includes("BootStrap")){
      return "../assets/img/skills/Bootstrap_Icon.png";
    } else if(tech.includes("Unity")){
      return "../assets/img/skills/UNITY_Icon.png";
    } else if(tech.includes("CSharp")){
      return "../assets/img/skills/CSharp_Icon.png";
    } else if(tech.includes("PHP")){
      return "../assets/img/skills/PHP_Icon.png";
    } else {
      console.log(tech);
      return null;
    }
  }

  ngOnInit() {
  }

}
