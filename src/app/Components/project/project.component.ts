import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../Services/Project.Service";
import {Project} from "../../Project";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  project: Project;
  projectName: string;
  hasImage: boolean = false;
  curIndex: number = 0;
  data: number[] = [];
  labels: string[] = [];
  chartType: string = 'pie';
  dataAvailable: boolean = false;
  constructor(private projectService: ProjectService, private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      this.projectName = params['projectName'];
    });
    this.projectService.getProject(this.projectName).subscribe(project => {
      this.project = project;
      if(this.project.images.length){
        this.hasImage = true;
      }
      let newLabels:string[] = [];
      let newData:number[] = [];
      for(var key in this.project.technology.proportion){
        newData.push(this.project.technology.proportion[key]);
        newLabels.push(key);
      }
      this.labels = newLabels;
      this.data = newData;
      this.dataAvailable = true;
    });
  }

  ngOnInit() {
  }

  /**
   * Function to switch displayed image in the gallery
   * @param index :   The Index of the image to show
   */
  showImg(index){
    var imgSlide = document.getElementsByClassName('imageSlide')[0] as HTMLImageElement;
    var images = this.project.images;
    if(index >= images.length){
      this.curIndex = index % images.length;
    } else if (index < 0){
      this.curIndex = images.length - 1;
    }
    imgSlide.src = this.getImagePath(images[this.curIndex]);
  }
  /**
   * Increment or Decrement the current index of the image in the gallery
   * @param indexChange   :   The change in the index
   */
   changeImage(indexChange){
      this.showImg(this.curIndex += indexChange);
    }

  getImagePath(image){
    return "../../../assets/img/projects" + image;
  }

}
