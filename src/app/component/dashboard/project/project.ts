import { Component } from "@angular/core";

import { Budget } from "./budget/budget";
import { LaunchApp } from "./launch-app/launch-app";
import { ProgressChart } from "./progress-chart/progress-chart";
import { ProjectBottom } from "./project-bottom/project-bottom";
import { ProjectCreated } from "./project-created/project-created";
import { ProjectSummary } from "./project-summary/project-summary";
import { ProjectTasks } from "./project-tasks/project-tasks";
import { TopCommonProject } from "./top-common-project/top-common-project";
import { UpcomingMeeting } from "./upcoming-meeting/upcoming-meeting";
import { UpcomingProjectsCards } from "./upcoming-projects-cards/upcoming-projects-cards";

@Component({
  selector: "app-project",
  templateUrl: "./project.html",
  styleUrls: ["./project.scss"],
  imports: [
    TopCommonProject,
    ProjectSummary,
    LaunchApp,
    Budget,
    ProjectCreated,
    ProjectTasks,
    ProgressChart,
    ProjectBottom,
    UpcomingProjectsCards,
    UpcomingMeeting,
  ],
})
export class Project {}
