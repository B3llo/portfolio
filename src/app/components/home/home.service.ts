import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  public async getGithubData() {
    const response = await fetch(
      'https://api.github.com/users/B3llo/repos?sort=created&per_page=3'
    );

    const repos = await response.json();
    return repos;
  }
}
