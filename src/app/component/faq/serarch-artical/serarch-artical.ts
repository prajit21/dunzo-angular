import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-serarch-artical",
  templateUrl: "./serarch-artical.html",
  styleUrls: ["./serarch-artical.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [Feathericon],
})
export class SerarchArtical {}
