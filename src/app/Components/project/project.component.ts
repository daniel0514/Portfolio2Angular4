import { Component } from '@angular/core';
import {ProjectService} from "../../Services/Project.Service";
import {Project} from "../../Project";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent{
  //Project Information
  project: Project;
  //Dynamic Project Name Based on Route Parameter
  projectName: string;
  //Boolean value to indicate if the projecct has images
  hasImage: boolean = false;
  //If has image, the index of the image currently displayed
  curIndex: number = 0;
  //Parameters for ChartJS to construct the pie chart
  //Data of the Pie Chart
  data: number[] = [];
  //Labels of the Pie Chart
  labels: string[] = [];
  //Type of the chart, we use Pie Chart here
  chartType: string = 'pie';
  //To indicate whether Project Information is available
  dataAvailable: boolean = false;
  constructor(private projectService: ProjectService, private route: ActivatedRoute){
    //Get the Route parameter
    this.route.params.subscribe(params => {
      this.projectName = params['projectName'];
    });
    //Get the project information from Project Service
    this.projectService.getProject(this.projectName).subscribe(project => {
      //Saving Project Info
      this.project = project;
      this.processProjectData();
    }, error => {
      //Handles Error from Project Service
      console.log("Failed to connect to API Server. Will now load default project information")
      console.log(error)
      //Load Default Project Information by Parsing Predefined JSON String
      var projects: Project[] = JSON.parse(this.rawJSONProject)
      //Fetch the correct Project information based on Routing parameter
      for(var project of projects){
        if(project.name === this.projectName){
          this.project = project;
          break;
        }
      }
      this.processProjectData();
    });
  }

  /**
   * Function to set variables based on Project data
   * from API or default project information. Also sets
   * up the PIE chart.
   */
  processProjectData(){
    if(this.project.images.length){
      this.hasImage = true;
    }
    //Recreate the Pie Chart by feeding new data
    let newLabels:string[] = [];
    let newData:number[] = [];
    for(var key in this.project.technology.proportion){
      newData.push(this.project.technology.proportion[key]);
      newLabels.push(key);
    }
    this.labels = newLabels;
    this.data = newData;
    this.dataAvailable = true;
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

  /**
   * Add the Image folder path
   * @param image       : Location of the Image in Image Folder
   * @returns {string}  : The Complete path to the Image
   */
  getImagePath(image){
    return "./assets/img/projects" + image;
  }

  //Predefined Project Information. Used when Restful API for Project Information is offline
  rawJSONProject: string = `[
  {
    "_id": "58c88fc67deeb9153f842f43",
    "name": "OneClickUpload",
    "page": "#/oneclickupload",
    "technology": {
      "icons": [
        "Android",
        "Java",
        "SQL"
      ],
      "hover": [
        "Android",
        "Java",
        "SQLite Database"
      ],
      "proportion": {
        "Java": 75,
        "SQL": 25
      }
    },
    "descriptions": {
      "brief": "Android app to upload photo to multiple social media platforms simultaneously",
      "paragraph1": "OneClickUpload is an Android app, written in Android Studio, to upload photos to multiple social media accounts at the same time. Currently, the app only implements two social media APIs (Facebook and Twitter).",
      "paragraph2": "Android's built-in database, SQLite, is utilized in the app to persist user data such as Upload Profiles, preventing the loss of user created profiles between app closes. When the app is opened, the profile information is then retrieved from the database and being unmarshalled into objects for use."
    },
    "images": [
      "/oneclickupload/OneClickUpload01.png",
      "/oneclickupload/OneClickUpload02.png",
      "/oneclickupload/OneClickUpload03.png",
      "/oneclickupload/OneClickUpload04.png"
    ]
  },
  {
    "_id": "58c88fc67deeb9153f842f44",
    "name": "PortfolioV1",
    "page": "#/portfolio",
    "technology": {
      "icons": [
        "HTML5",
        "CSS",
        "JavaScript",
        "BootStrap"
      ],
      "hover": [
        "HTML5",
        "CSS",
        "JavaScript",
        "BootStrap"
      ],
      "proportion": {
        "HTML": 50,
        "CSS": 25,
        "JavaScript": 25
      }
    },
    "descriptions": {
      "brief": "The very first responsive Bootstrap website to serve as my web portfolio.",
      "paragraph1": "Portfolio V1 is a website that serves as an online portfolio to host my personal information, my skill set, and my projects. The website is my very first attempt in Web Development, and throughout the development, I was able to gain entry level of knowledge in HTML, CSS, and JavaScript",
      "paragraph2": "The website relies heavily on Twitter's Bootstrap to achieve Responsive Web Design. The Website uses JavaScript and jQuery to handle the scrolling and time change at the footer."
    },
    "images": [
      "/portfolio/portfolio1.png",
      "/portfolio/portfolio2.png",
      "/portfolio/portfolio3.png"
    ]
  },
  {
    "_id": "58c88fc67deeb9153f842f45",
    "name": "Math Riceball",
    "page": "#/mathriceball",
    "technology": {
      "icons": [
        "Unity",
        "CSharp"
      ],
      "hover": [
        "Unity",
        "C#",
        "Visual Studio"
      ],
      "proportion": {
        "Unity": 50,
        "C#": 50
      }
    },
    "descriptions": {
      "brief": "An Unity Game created during 2015 Windows 10 Game Jam by a group of four students.",
      "paragraph1": "During the 2015 Windows 10 Game Jam, a group of four students developed an Unity game within two days. Throughout the game, the player will consume various sushi that represent numbers and mathematical operators. The consumed sushi then forms a mathematical equation that the player must solve at the end",
      "paragraph2": "The purpose of the game is to promote mental math for younger kids with basic math operations. The group and I were able to develop a fully functional game without previous Unity knowledge within just two days, and we learned to worked together, to delegate tasks effectively, and to work under a tight schedule."
    },
    "images": []
  },
  {
    "_id": "58c88fc67deeb9153f842f46",
    "name": "ParkNEat",
    "page": "#/parkneat",
    "technology": {
      "icons": [
        "Java"
      ],
      "hover": [
        "Java",
        "NoSQL Database",
        "Google Web Toolkit"
      ],
      "proportion": {
        "Unity": 50,
        "C#": 50
      }
    },
    "descriptions": {
      "brief": "A Web Application to display restaurants along with their ratings/comments on Google Map and nearby parking spots.",
      "paragraph1": "ParkNEat is a web application developed using Google Web Toolkit (GWT). The web application displays nearby restaurants and parking spots near those locations. In addition, the users can see reviews and ratings of the selected restaurants by other users.",
      "paragraph2": "ParkNEat is developed in Java and GWT framework. The application uses Yelp's API for restaurant locations and online datasets for parking spots. These types of data (along with reviews/ratings) are stored onto Google's NoSQL database for persistence. Google Map API is then used to display these data on a map."
    },
    "images": []
  },
  {
    "_id": "58c88fc67deeb9153f842f47",
    "name": "Shop Online!",
    "page": "#/shoponline",
    "technology": {
      "icons": [
        "PHP",
        "SQL",
        "HTML5"
      ],
      "hover": [
        "PHP",
        "MySQL Database",
        "HTML5"
      ],
      "proportion": {
        "HTML": 40,
        "PHP": 30,
        "SQL": 30
      }
    },
    "descriptions": {
      "brief": "A Web Application to display restaurants along with their ratings/comments on Google Map and nearby parking spots.",
      "paragraph1": "Shop Online! is a website made for online shopping experience (for custoemrs) and inventory management (for managers and clerks). Customers can added items (if available) to their baskets and checkout items at once. Managers or clerks can create reports of top selling items, daily sells, and inventory counts. The website also has a login system to determine user information once accounts are created.",
      "paragraph2": "Shop Online is written in PHP and HTML, and the website uses MySQL database for data storage. The results of SQL queries are then displayed in a readable format without any modification to the results. For security, the website uses POST method in form handling to hide information from users. Passwords are encrypted with Blowfish Encryption and then stored in the database."
    },
    "images": []
  }
]`;
}
