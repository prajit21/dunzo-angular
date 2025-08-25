import { Component, inject } from "@angular/core";

import { ClipboardService } from "ngx-clipboard";

@Component({
  selector: "app-clipboard-on-paragraph",
  templateUrl: "./clipboard-on-paragraph.html",
  styleUrls: ["./clipboard-on-paragraph.scss"],
  imports: [],
})
export class ClipboardOnParagraph {
  private _clipboardService = inject(ClipboardService);

  public paragraphData =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  public basic = false;
  public copyText: string = "";

  callServiceToCopy() {
    this._clipboardService.copy(
      "This is copy thru service copyFromContent directly",
    );
  }

  onCopyFailure() {
    alert("copy fail!");
  }

  copyFunction(txt: string) {
    navigator.clipboard.writeText(txt);
    alert("Copied");
  }

  ngOnInit(): void {
    this._clipboardService.copyResponse$.subscribe((re) => {
      if (re.isSuccess) {
        alert("copy success!");
      }
    });
  }
}
