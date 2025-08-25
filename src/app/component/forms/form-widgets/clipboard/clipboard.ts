import { Component } from "@angular/core";

import { ClipboardOnParagraph } from "./clipboard-on-paragraph/clipboard-on-paragraph";
import { ClipboardOnTextarea } from "./clipboard-on-textarea/clipboard-on-textarea";
import { ClipboardTextInput } from "./clipboard-text-input/clipboard-text-input";
import { CopyProtionFormParagraph } from "./copy-protion-form-paragraph/copy-protion-form-paragraph";

@Component({
  selector: "app-clipboard",
  templateUrl: "./clipboard.html",
  styleUrls: ["./clipboard.scss"],
  imports: [
    ClipboardTextInput,
    ClipboardOnParagraph,
    ClipboardOnTextarea,
    CopyProtionFormParagraph,
  ],
})
export class Clipboard {}
