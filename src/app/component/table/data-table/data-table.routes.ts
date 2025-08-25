import { Routes } from "@angular/router";

import { DataTable } from "./data-table";

export default [
  {
    path: "",
    component: DataTable,
    data: {
      title: "Data Table",
      breadcrumb: "Data Table",
    },
  },
] as Routes;
