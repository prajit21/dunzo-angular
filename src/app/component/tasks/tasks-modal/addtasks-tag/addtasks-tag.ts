import { Component, inject, ChangeDetectionStrategy } from "@angular/core";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-addtasks-tag",
  templateUrl: "./addtasks-tag.html",
  styleUrls: ["./addtasks-tag.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class AddtasksTag {
  activeModal = inject(NgbActiveModal);
}
