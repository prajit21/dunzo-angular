import { Component, inject } from "@angular/core";

import { ClipboardService } from "ngx-clipboard";

@Component({
  selector: "app-copy-protion-form-paragraph",
  templateUrl: "./copy-protion-form-paragraph.html",
  styleUrls: ["./copy-protion-form-paragraph.scss"],
  imports: [],
})
export class CopyProtionFormParagraph {
  private _clipboardService = inject(ClipboardService);

  public copyHighlightTxt: string = "dolor sit amet";
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
