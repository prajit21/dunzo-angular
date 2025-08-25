import { Routes } from "@angular/router";

import { Accordion } from "./accordion/accordion";
import { Alert } from "./alert/alert";
import { Avatars } from "./avatars/avatars";
import { Dropdown } from "./dropdown/dropdown";
import { Grid } from "./grid/grid";
import { HelperClasses } from "./helper-classes/helper-classes";
import { Lists } from "./lists/lists";
import { Modal } from "./modal/modal";
import { Popover } from "./popover/popover";
import { Progress } from "./progress/progress";
import { Tabs } from "./tabs/tabs";
import { TagPills } from "./tag-pills/tag-pills";
import { Tooltip } from "./tooltip/tooltip";
import { Typography } from "./typography/typography";

export default [
  {
    path: "typography",
    component: Typography,
    data: {
      title: "Typography",
      breadcrumb: "Typography",
    },
  },
  {
    path: "avatars",
    component: Avatars,
    data: {
      title: "Avatars",
      breadcrumb: "Avatars",
    },
  },
  {
    path: "helper-classes",
    component: HelperClasses,
    data: {
      title: "Helper Classes",
      breadcrumb: "Helper Classes",
    },
  },
  {
    path: "grid",
    component: Grid,
    data: {
      title: "Grid",
      breadcrumb: "Grid",
    },
  },
  {
    path: "tag-n-pills",
    component: TagPills,
    data: {
      title: "Tag & Pills",
      breadcrumb: "Tag and Pills",
    },
  },
  {
    path: "progress-bar",
    component: Progress,
    data: {
      title: "Progress",
      breadcrumb: "Progress",
    },
  },
  {
    path: "modal",
    component: Modal,
    data: {
      title: "Modal",
      breadcrumb: "Modal",
    },
  },
  {
    path: "alert",
    component: Alert,
    data: {
      title: "Alert",
      breadcrumb: "Alert",
    },
  },
  {
    path: "popover",
    component: Popover,
    data: {
      title: "Popover",
      breadcrumb: "Popover",
    },
  },
  {
    path: "tooltip",
    component: Tooltip,
    data: {
      title: "Tooltip",
      breadcrumb: "Tooltip",
    },
  },
  {
    path: "dropdown",
    component: Dropdown,
    data: {
      title: "Dropdown",
      breadcrumb: "Dropdown",
    },
  },
  {
    path: "according",
    component: Accordion,
    data: {
      title: "According",
      breadcrumb: "According",
    },
  },
  {
    path: "tabs",
    component: Tabs,
    data: {
      title: "Bootstrap Tabs",
      breadcrumb: "Bootstrap Tabs",
    },
  },
  {
    path: "list",
    component: Lists,
    data: {
      title: "List",
      breadcrumb: "List",
    },
  },
] as Routes;
