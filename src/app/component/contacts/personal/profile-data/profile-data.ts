import { NgStyle } from "@angular/common";
import {
  Component,
  Input,
  SimpleChanges,
  inject,
  input,
  viewChild,
} from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";

import { AddressContent } from "./edit-profile/address-content/address-content";
import { General } from "./edit-profile/general/general";
import { PersonalContent } from "./edit-profile/personal-content/personal-content";
import * as data from "../../../../shared/data/contacts/all-contact";
import {
  contactData,
  lastDataList,
} from "../../../../shared/data/contacts/all-contact";
import { Print } from "../../contact-modal/print/print";

@Component({
  selector: "app-profile-data",
  templateUrl: "./profile-data.html",
  styleUrls: ["./profile-data.scss"],
  imports: [
    NgStyle,
    FormsModule,
    General,
    PersonalContent,
    AddressContent,
    Print,
  ],
})
export class ProfileData {
  private modalService = inject(NgbModal);

  readonly selectedSubId = input<number>();
  readonly status = input<boolean>();
  @Input() lastData: lastDataList;
  readonly getTitleData = input<contactData>();
  readonly TaskData = input<contactData>();
  public editContact: boolean = false;
  public open: boolean = false;
  public Personal = data.Personal;
  public Organization = data.Organization;
  public getTaskData: contactData;
  public statusData: contactData;

  readonly PrintModal = viewChild<Print>("printModal");

  ngOnInit() {
    this.Personal.map((data) => {
      if (data.status) {
        this.statusData = data;
      }
      const listnewData = this.statusData.data;
      const currentData = listnewData.filter((data: { status: boolean }) => {
        return data.status === true;
      });
      this.lastData = currentData[0];
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    let tagsid = changes["selectedSubId"]?.currentValue;
    this.Organization.map((data) => {
      if (data.title_id === tagsid) {
        this.getTaskData = data;
      }
    });
  }

  openHistory() {
    this.open = !this.open;
  }

  printContact(_id: number) {
    this.modalService.open(Print);
  }

  deleteContact() {
    Swal.fire({
      text: "This contact will be deleted from your Personal Contacts and from the chat list too.",
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#EFEFEE !important",
      confirmButtonColor: "var(--theme-default)",
    }).then((result: { isConfirmed: boolean; isDenied: boolean }) => {
      if (result.isConfirmed) {
      } else {
        Swal.fire("", "Your contact is safe!");
      }
    });
  }
}
