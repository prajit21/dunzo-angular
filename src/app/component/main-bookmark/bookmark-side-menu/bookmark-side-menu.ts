import { Component, Output, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import {
  allBookmarkData,
  tagData,
} from "../../../shared/data/bookmark/bookmarks";
import { ClickOutsideDirective } from "../../../shared/directives/outside.directive";
import { BookmarkData } from "../bookmark-data/bookmark-data";
import { AddTag } from "../bookmark-modal/add-tag/add-tag";
import { NewBookmark } from "../bookmark-modal/new-bookmark/new-bookmark";

@Component({
  selector: "app-bookmark-side-menu",
  templateUrl: "./bookmark-side-menu.html",
  styleUrls: ["./bookmark-side-menu.scss"],
  imports: [ClickOutsideDirective, Feathericon, BookmarkData],
})
export class BookmarkSideMenu {
  private modalService = inject(NgbModal);

  @(Output()!) selectedheading_id: number;
  @(Output()!) selectegTagId: number;

  public open: boolean = false;
  public BookmarkData = allBookmarkData;
  public tag = tagData;

  openMenu() {
    this.open = !this.open;
  }

  clickOutside(): void {
    this.open = false;
  }

  openAddBookmark() {
    this.modalService.open(NewBookmark, { size: "lg" });
  }

  openAddTag() {
    this.modalService.open(AddTag, { size: "lg" });
  }

  getData(title_id: number) {
    const getHeadingData = this.BookmarkData.filter((data) => {
      return data.title_id === title_id;
    });
    this.selectedheading_id = getHeadingData[0].title_id!;
  }

  getTagData(title_id: number) {
    const getHeadingData = this.tag.filter((data) => {
      return data.title_id === title_id;
    });
    this.selectegTagId = getHeadingData[0].title_id!;
  }
}
