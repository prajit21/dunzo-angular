import { Routes } from "@angular/router";

import { BasicTables } from "./basic-tables/basic-tables";
import { TableComponent } from "./table-component/table-component";

export default [
  {
    path: "basic-table",
    component: BasicTables,
    data: {
      title: "Bootstrap Basic Tables",
      breadcrumb: "Bootstrap Basic Tables",
    },
  },
  {
    path: "table-components",
    component: TableComponent,
    data: {
      title: "Table Components",
      breadcrumb: "Table Components",
    },
  },
] as Routes;
