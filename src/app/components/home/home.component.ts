import { Component, HostListener } from "@angular/core";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faArrowUp,
  faChevronRight,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import {
  CERTIFICATIONS,
  EXPERIENCES,
  PROJECTS,
  TECH_GROUPS,
} from "../../data/portfolio.data";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  public showNavbarBorder: boolean = false;

  public projects = PROJECTS;
  public techGroups = TECH_GROUPS;
  public experiences = EXPERIENCES;
  public certifications = CERTIFICATIONS;

  public faGithub = faGithub;
  public faLinkedIn = faLinkedinIn;
  public faInstagram = faInstagram;
  public faEnvelope = faEnvelope;
  public faSun = faSun;
  public faMoon = faMoon;
  public faChevronRight = faChevronRight;
  public faArrowRight = faArrowRight;
  public faArrowUp = faArrowUp;

  constructor(private themeService: ThemeService) {}

  public get isDarkTheme(): boolean {
    return this.themeService.isDarkTheme;
  }

  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  public scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  @HostListener("window:scroll")
  public onWindowScroll(): void {
    this.showNavbarBorder = window.scrollY > 30;
  }
}
