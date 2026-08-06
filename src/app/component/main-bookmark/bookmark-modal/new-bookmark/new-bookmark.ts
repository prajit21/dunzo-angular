import { Component, inject, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-new-bookmark",
  templateUrl: "./new-bookmark.html",
  styleUrls: ["./new-bookmark.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class NewBookmark {
  activeModal = inject(NgbActiveModal);
}
