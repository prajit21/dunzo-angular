import { NgClass } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-new-contact",
  templateUrl: "./new-contact.html",
  styleUrls: ["./new-contact.scss"],
  imports: [FormsModule, NgClass, ReactiveFormsModule],
})
export class NewContact {
  activeModal = inject(NgbActiveModal);

  public validate: boolean = false;

  myForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl("", [Validators.email, Validators.required]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    img: new FormControl("/assets/images/user/2.png"),
  });

  add() {
    this.activeModal.dismiss();
  }

  get firstName() {
    return this.myForm.get("firstName");
  }

  get lastName() {
    return this.myForm.get("lastName");
  }

  get email() {
    return this.myForm.get("email");
  }

  get mobile() {
    return this.myForm.get("mobile");
  }
}
