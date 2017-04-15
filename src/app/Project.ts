import {Technology} from './Technology';
import {Descriptions} from './Descriptions';
export class Project {
  _id: number;
  name: string;
  page: string;
  technology: Technology;
  descriptions: Descriptions;
  images: string[];
}
