import { Routes } from "@angular/router";

import { EmailApp } from "./email-app/email-app";
import { EmailCompose } from "./email-compose/email-compose";
import { LetterBox } from "./letter-box/letter-box";

export default [
  {
    path: "email-app",
    component: EmailApp,
    data: {
      title: "Email Application",
      breadcrumb: "Email Application",
    },
  },
  {
    path: "email-compose",
    component: EmailCompose,
    data: {
      title: "Email Compose ",
      breadcrumb: "Email Compose",
    },
  },
  {
    path: "letter-box",
    component: LetterBox,
    data: {
      title: "Letter Box",
      breadcrumb: "Letter Box",
    },
  },
] as Routes;
