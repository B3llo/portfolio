import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "repoName",
})
export class RepoNamePipe implements PipeTransform {
  transform(repoName: string): string {
    return repoName.replace(/-/g, " ").replace(/\w\S*/g, (w) =>
      w
        .replace(/^\w/, (c) => c.toUpperCase())
        .replace(/Ci(?=\s|$)/, "")
        .replace(/.*Cd/i, "CI/CD")
        .replace("Aws", "AWS")
    );
  }
}
