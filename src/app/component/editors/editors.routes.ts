import { Routes } from "@angular/router";

import { MdeEditors } from "./mde-editors/mde-editors";
import { NgxEditor } from "./ngx-editor/ngx-editor";

export default [
  {
    path: "ngx-editor",
    component: NgxEditor,
    data: {
      title: "Ngx Editor",
      breadcrumb: "Ngx Editor",
    },
  },
  {
    path: "mde-editors",
    component: MdeEditors,
    data: {
      title: "MDE Editor",
      breadcrumb: "MDE Editor",
    },
  },
] as Routes;
