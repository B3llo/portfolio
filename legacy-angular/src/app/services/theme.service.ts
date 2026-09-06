import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, RendererFactory2 } from "@angular/core";

const STORAGE_KEY = "isDarkTheme";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  public isDarkTheme = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.isDarkTheme = this.readInitialTheme();
    this.applyTheme(this.isDarkTheme);
  }

  public toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.persistTheme(this.isDarkTheme);
    this.applyTheme(this.isDarkTheme);
  }

  private readInitialTheme(): boolean {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        return stored === "true";
      }
      return (
        window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false
      );
    } catch {
      return false;
    }
  }

  private persistTheme(dark: boolean): void {
    try {
      localStorage.setItem(STORAGE_KEY, String(dark));
    } catch {
      // Storage unavailable (e.g. private mode) — theme still applies in-memory.
    }
  }

  private applyTheme(dark: boolean): void {
    const classList = this.document.documentElement.classList;
    if (dark) {
      classList.add("dark");
    } else {
      classList.remove("dark");
    }
  }
}
