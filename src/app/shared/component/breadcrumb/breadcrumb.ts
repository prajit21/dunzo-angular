import { Component, inject } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  PRIMARY_OUTLET,
  RouterLink,
} from "@angular/router";

import { map } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.html",
  styleUrls: ["./breadcrumb.scss"],
  imports: [RouterLink],
})
export class Breadcrumb {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  public breadcrumbs:
    | { parentBreadcrumb?: string | null; childBreadcrumb?: string }
    | undefined;
  public title: string = "";

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
      )
      .pipe(filter((route) => route.outlet === PRIMARY_OUTLET))
      .subscribe((route) => {
        this.router.routerState.snapshot;
        let title = route.snapshot.data["title"];
        let parent = route.parent?.snapshot.data["breadcrumb"];
        let child = route.snapshot.data["breadcrumb"];
        this.breadcrumbs = {};
        this.title = title;
        this.breadcrumbs = {
          parentBreadcrumb: parent,
          childBreadcrumb: child,
        };
      });
  }
}
