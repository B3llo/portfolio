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
   * Images list for the last projects
   */
  public images: string[] = ["https://unsplash.com/photos/Lljll19NXZk", "", ""];
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
        for (let i = 0; i < data.length; i++) {
          data.image = this.images[i];
        }

        this.projects = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
