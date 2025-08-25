import { Component, inject } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-addtasks-tag",
  templateUrl: "./addtasks-tag.html",
  styleUrls: ["./addtasks-tag.scss"],
  imports: [],
})
export class AddtasksTag {
  activeModal = inject(NgbActiveModal);
}
