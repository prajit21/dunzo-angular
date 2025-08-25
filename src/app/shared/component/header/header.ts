import { NgClass, NgStyle, SlicePipe } from "@angular/common";
import { Component, HostListener, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

import { Bookmark } from "./bookmark/bookmark";
import { Cart } from "./cart/cart";
import { HorizontalHeader } from "./horizontal-header/horizontal-header";
import { Language } from "./language/language";
import { Message } from "./message/message";
import { Notification } from "./notification/notification";
import { Search } from "./search/search";
import { ClickOutsideDirective } from "../../directives/outside.directive";
import { HideNavScrollService } from "../../services/hide-nav-scroll.service";
import { Menu, NavmenuService } from "../../services/navmenu.service";
import { SvgIcon } from "../svg-icon/svg-icon";
import { Profile } from "./profile/profile";
import { Theme } from "./theme/theme";

@Component({
  selector: "app-header",
  templateUrl: "./header.html",
  styleUrls: ["./header.scss"],
  imports: [
    NgClass,
    NgStyle,
    RouterLink,
    HorizontalHeader,
    ClickOutsideDirective,
    FormsModule,
    Search,
    Notification,
    Bookmark,
    Cart,
    Message,
    Theme,
    Language,
    Profile,
    SvgIcon,
    SlicePipe,
  ],
})
export class Header {
  hidenav = inject(HideNavScrollService);
  navmenu = inject(NavmenuService);

  public menuItems: Menu[] = [];
  public item: Menu[] = [];
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string = "";
  public open = false;

  constructor() {
    this.navmenu.item.subscribe((menuItems: Menu[]) => (this.item = menuItems));
  }

  openMenu() {
    this.navmenu.isDisplay = !this.navmenu.isDisplay;
  }

  @HostListener("window:resize", ["$event"])
  onResize(_event: number) {
    this.navmenu.isDisplay = window.innerWidth < 1200 ? true : false;
  }

  openSearch() {
    this.open = !this.open;
    this.searchResult = false;
  }

  languageToggle() {
    this.navmenu.language = !this.navmenu.language;
  }

  searchTerm(term: string) {
    term ? this.addFix() : this.removeFix();
    if (!term) return (this.menuItems = []);
    let items: Menu[] = [];
    term = term.toLowerCase();
    this.item.forEach((data) => {
      if (data.title?.toLowerCase().includes(term) && data.type === "link") {
        items.push(data);
      }
      data.children?.filter((subItems) => {
        if (
          subItems.title?.toLowerCase().includes(term) &&
          subItems.type === "link"
        ) {
          subItems.icon = data.icon;
          items.push(subItems);
        }
        subItems.children?.filter((suSubItems) => {
          if (suSubItems.title?.toLowerCase().includes(term)) {
            suSubItems.icon = data.icon;
            items.push(suSubItems);
          }
        });
        return;
      });
      this.checkSearchResultEmpty(items);
      this.menuItems = items;
    });
    return;
  }

  checkSearchResultEmpty(items: Menu[]) {
    if (!items.length) this.searchResultEmpty = true;
    else this.searchResultEmpty = false;
  }

  addFix() {
    this.searchResult = true;
    document.body.classList.add("offcanvas");
  }

  removeFix() {
    this.searchResult = false;
    this.text = "";
    document.body.classList.remove("offcanvas");
  }

  clickOutside(): void {
    this.open = false;
    this.searchResult = false;
    this.searchResultEmpty = false;
  }
}
