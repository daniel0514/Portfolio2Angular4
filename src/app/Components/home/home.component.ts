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
      this.hovered = new Array(this.projects.length);
      for(var i = 0; i < this.projects.length; i++){
        this.hovered[i] = false;
      }
    }, error => {
      console.log("Failed to connect to API Server. Will now load default project information")
      console.log(error)
      this.projects = JSON.parse(this.rawJSONProject);
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

  getHrefPath(name){
    return "projects/" + name;
  }

  ngOnInit() {
  }

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
