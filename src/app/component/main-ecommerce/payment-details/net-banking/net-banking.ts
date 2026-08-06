import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-net-banking",
  templateUrl: "./net-banking.html",
  styleUrls: ["./net-banking.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class NetBanking {}
