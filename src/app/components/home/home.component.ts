import { Component, OnInit } from "@angular/core";
import {
  faAngular,
  faDocker,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { HomeService } from "./home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  /**
   * Flag to show/hide the navbar bottom border
   */
  public showNavbarBorder: boolean = false;
  /**
   * Flag that indicates which color theme is being used
   */
  public isDarkTheme: boolean = false;
  /**
   * Last projects from Github
   */
  public projects: any[] = [];
  /**
   * Home Service
   */
  private homeService: HomeService;

  // Social icons
  public faGithub = faGithub;
  public faLinkedIn = faLinkedinIn;
  public faInstagram = faInstagram;
  public faEnvelope = faEnvelope;

  // Technologies Icons
  public faAngular = faAngular;
  public faNodeJS = faNodeJs;
  public faDocker = faDocker;
  public faReact = faReact;

  constructor(homeService: HomeService) {
    this.homeService = homeService;
  }

  ngOnInit(): void {
    if (localStorage.getItem("isDarkTheme") !== null) {
      this.isDarkTheme =
        localStorage.getItem("isDarkTheme") === "true" ? true : false;
    } else {
      localStorage.setItem("isDarkTheme", "false");
    }

    this.fetchData();
    this.isScrolling();
  }

  // #region Public Methods

  public isScrolling(): void {
    // Transient variable to avoid "this" conflict
    let isScrolling = false;

    window.onscroll = function () {
      if (window.scrollY > 30) {
        isScrolling = true;
      } else {
        isScrolling = false;
      }

      isScrollingEvent(isScrolling);
    };

    const isScrollingEvent = (isScrolling: boolean) => {
      if (isScrolling) {
        this.showNavbarBorder = true;
      } else {
        this.showNavbarBorder = false;
      }
    };
  }

  public toArray(obj: any): any[] {
    return Object.keys(obj).map((key) => obj[key]);
  }

  public toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem("isDarkTheme", this.isDarkTheme.toString());
  }
  // #endregion

  //#region Private Methods
  private async fetchData(): Promise<void> {
    this.homeService
      .getGithubData()
      .then((data: any) => {
        this.projects = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //#endregion
}
