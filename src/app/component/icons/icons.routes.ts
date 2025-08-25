import { Routes } from "@angular/router";

import { FeatherIcons } from "./feather-icons/feather-icons";
import { FlagIcons } from "./flag-icons/flag-icons";
import { FontAwesome } from "./font-awesome/font-awesome";
import { IcoIcon } from "./ico-icon/ico-icon";
import { ThemifyIcon } from "./themify-icon/themify-icon";
import { WeatherIcons } from "./weather-icons/weather-icons";

export default [
  {
    path: "flag-icons",
    component: FlagIcons,
    data: {
      title: "flag icons",
      breadcrumb: "flag icons",
    },
  },
  {
    path: "fontawesome-icons",
    component: FontAwesome,
    data: {
      title: "Font Awesome Icon",
      breadcrumb: "Font Awesome Icon",
    },
  },
  {
    path: "ico-icons",
    component: IcoIcon,
    data: {
      title: "ICO Icon",
      breadcrumb: "ICO Icon",
    },
  },
  {
    path: "feather-icons",
    component: FeatherIcons,
    data: {
      title: "Feather Icon",
      breadcrumb: "Feather Icon",
    },
  },
  {
    path: "themify-icons",
    component: ThemifyIcon,
    data: {
      title: "Themify Icon",
      breadcrumb: "Themify Icon",
    },
  },
  {
    path: "weather-icons",
    component: WeatherIcons,
    data: {
      title: "Weather Icon",
      breadcrumb: "Weather Icon",
    },
  },
] as Routes;
