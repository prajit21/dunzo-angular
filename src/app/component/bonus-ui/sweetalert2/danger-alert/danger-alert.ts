import { Component, ChangeDetectionStrategy } from "@angular/core";

import Swal from "sweetalert2";

@Component({
  selector: "app-danger-alert",
  templateUrl: "./danger-alert.html",
  styleUrls: ["./danger-alert.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class DangerAlert {
  danger() {
    Swal.fire({
      title: "It's danger",
      text: "Something went wrong!",
      icon: "error",
      confirmButtonColor: "var(--theme-default)",
    });
  }
}
