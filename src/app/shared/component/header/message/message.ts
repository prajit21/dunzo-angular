import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

import { Feathericon } from "../../feathericon/feathericon";

@Component({
  selector: "app-message",
  templateUrl: "./message.html",
  styleUrls: ["./message.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink, Feathericon],
})
export class Message {
  public MassageData: boolean = false;

  Message() {
    this.MassageData = !this.MassageData;
  }
}
