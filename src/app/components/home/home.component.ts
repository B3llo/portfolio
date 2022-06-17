import { Component, OnInit } from "@angular/core";
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
   * Last projects from Github
   */
  public projects: any[] = [];
  /**
   * Home Service
   */
  private homeService: HomeService;

  constructor(homeService: HomeService) {
    this.homeService = homeService;
  }

  ngOnInit(): void {
    this.fetchData();
    this.isScrolling();
  }

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

  public toArray(obj: any): any[] {
    return Object.keys(obj).map((key) => obj[key]);
  }
}
