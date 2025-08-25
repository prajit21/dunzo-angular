import { Routes } from "@angular/router";

import { Default } from "./default/default";
import { Ecommerce } from "./ecommerce/ecommerce";
import { Project } from "./project/project";

export default [
  {
    path: "default",
    component: Default,
    data: {
      title: "Default Dashboard",
      breadcrumb: "Default",
    },
  },
  {
    path: "ecommerce",
    component: Ecommerce,
    data: {
      title: "Ecommerce Dashboard",
      breadcrumb: "E-Commerce",
    },
  },
  {
    path: "project",
    component: Project,
    data: {
      title: "Project Dashboard",
      breadcrumb: "Project",
    },
  },
] as Routes;
