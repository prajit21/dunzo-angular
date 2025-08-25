import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Editor, NgxEditorModule } from "ngx-editor";

@Component({
  selector: "app-ngx-editor",
  templateUrl: "./ngx-editor.html",
  styleUrl: "./ngx-editor.scss",
  imports: [NgxEditorModule, FormsModule],
})
export class NgxEditor {
  editor: Editor;
  html = "";

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
