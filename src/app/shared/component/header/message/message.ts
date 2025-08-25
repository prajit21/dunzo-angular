import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { Feathericon } from "../../feathericon/feathericon";

@Component({
  selector: "app-message",
  templateUrl: "./message.html",
  styleUrls: ["./message.scss"],
  imports: [NgClass, RouterLink, Feathericon],
})
export class Message {
  public MassageData: boolean = false;

  Message() {
    this.MassageData = !this.MassageData;
  }
}
