import { Routes } from "@angular/router";

import { Invoice1 } from "./invoice1/invoice1";
import { Invoice2 } from "./invoice2/invoice2";
import { Invoice3 } from "./invoice3/invoice3";
import { Invoice4 } from "./invoice4/invoice4";
import { Invoice5 } from "./invoice5/invoice5";
import { Invoice6 } from "./invoice6/invoice6";

export default [
  {
    path: "invoice1",
    component: Invoice1,
    data: {
      title: "Invoice",
      breadcrumb: "Invoice",
    },
  },
  {
    path: "invoice2",
    component: Invoice2,
    data: {
      title: "Invoice",
      breadcrumb: "Invoice",
    },
  },
  {
    path: "invoice3",
    component: Invoice3,
    data: {
      title: "Invoice",
      breadcrumb: "Invoice",
    },
  },
  {
    path: "invoice4",
    component: Invoice4,
    data: {
      title: "Invoice",
      breadcrumb: "Invoice",
    },
  },
  {
    path: "invoice5",
    component: Invoice5,
    data: {
      title: "Invoice",
      breadcrumb: "Invoice",
    },
  },
  {
    path: "invoice6",
    component: Invoice6,
    data: {
      title: "Invoice",
      breadcrumb: "Invoice",
    },
  },
] as Routes;
