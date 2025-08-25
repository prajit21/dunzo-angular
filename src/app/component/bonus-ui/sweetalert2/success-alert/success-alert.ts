import { Component } from "@angular/core";

import Swal from "sweetalert2";

@Component({
  selector: "app-success-alert",
  templateUrl: "./success-alert.html",
  styleUrls: ["./success-alert.scss"],
  imports: [],
})
export class SuccessAlert {
  success() {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      confirmButtonColor: "var(--theme-default)",
    });
  }
}
