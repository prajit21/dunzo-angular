import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

import { projectBottom } from "../../../../shared/data/dashboard/project/project";

@Component({
  selector: "app-project-bottom",
  templateUrl: "./project-bottom.html",
  styleUrls: ["./project-bottom.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink],
})
export class ProjectBottom {
  public Projectsdata = projectBottom;
}
