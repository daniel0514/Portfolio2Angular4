import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService{
  constructor(private http: Http){}
  getProjects(){
    return this.http.get('http://localhost:8000/projects/')
      .map(res => res.json());
  }
  getProject(project){
    return this.http.get('http://localhost:8000/projects/' + project)
      .map(res => res.json());
  }
}
