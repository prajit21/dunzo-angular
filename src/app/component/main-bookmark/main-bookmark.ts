import { Component } from "@angular/core";

import { BookmarkSideMenu } from "./bookmark-side-menu/bookmark-side-menu";

@Component({
  selector: "app-main-bookmark",
  templateUrl: "./main-bookmark.html",
  styleUrls: ["./main-bookmark.scss"],
  imports: [BookmarkSideMenu],
})
export class MainBookmark {}
