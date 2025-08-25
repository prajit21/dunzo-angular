import { Component, Output, SimpleChanges, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import * as data from "../../../shared/data/contacts/all-contact";
import { AddCategory } from "../contact-modal/add-category/add-category";
import { NewContact } from "../contact-modal/new-contact/new-contact";
import { Personal } from "../personal/personal";

@Component({
  selector: "app-contact-sidemenu",
  templateUrl: "./contact-sidemenu.html",
  styleUrls: ["./contact-sidemenu.scss"],
  imports: [Feathericon, Personal],
})
export class ContactSidemenu {
  private modalService = inject(NgbModal);

  @Output() selectedId: number;
  @Output() statusData: boolean;
  @Output() getTitleData: string;
  @Output() titleData: string;

  public Personal = data.Personal;
  public organization = data.Organization;
  public viewList = data.viewList;
  public open: boolean = false;
  public lastData: data.lastDataList;

  ngOnInit(_changes: SimpleChanges) {
    let getStatusdata = this.Personal.filter((data) => {
      return data.status == true;
    });
    this.statusData = getStatusdata[0]?.status;
  }

  newContacts() {
    this.modalService.open(NewContact, { size: "lg" });
  }

  addCategory() {
    this.modalService.open(AddCategory, { size: "SM" });
  }

  changeData(list: number, title: string) {
    const getId = this.Personal.filter((x) => x.title_id == list);
    this.selectedId = getId[0].title_id;
    const getTitleData = this.Personal.filter((x) => (x.title = title));
    this.titleData = getTitleData[0].title;
  }

  changeData1(list: number, title: string) {
    const getId = this.organization.filter((x) => x.title_id == list);
    this.selectedId = getId[0].title_id;
    const getTitleData = this.organization.filter((x) => (x.title = title));
    this.titleData = getTitleData[0].title;
  }

  openMenu() {
    this.open = !this.open;
  }
}
