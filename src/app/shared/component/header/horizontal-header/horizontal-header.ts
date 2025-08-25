import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { TranslateModule } from "@ngx-translate/core";

import {
  Menu,
  NavmenuService,
} from "../../../../shared/services/navmenu.service";
import { SvgIcon } from "../../svg-icon/svg-icon";
import { AppList } from "../app-list/app-list";

@Component({
  selector: "app-horizontal-header",
  templateUrl: "./horizontal-header.html",
  styleUrls: ["./horizontal-header.scss"],
  imports: [AppList, SvgIcon, RouterLink, TranslateModule],
})
export class HorizontalHeader {
  navServices = inject(NavmenuService);

  public menus = this.navServices.MENUITEMS;
  public horizantalList: Menu[] = [];

  constructor() {
    this.menus.forEach((data) => {
      if (data.horizontalList === true) {
        const newData = data;
        this.horizantalList.push(newData);
      }
    });
  }
}
