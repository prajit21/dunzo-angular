import { Routes } from "@angular/router";

import { UserCards } from "./user-cards/user-cards";
import { UserEdit } from "./user-edit/user-edit";
import { UserProfile } from "./user-profile/user-profile";

export default [
  {
    path: "users-profile",
    component: UserProfile,
    data: {
      title: "Users Profil",
      breadcrumb: "Users Profile",
    },
  },
  {
    path: "profile-edit",
    component: UserEdit,
    data: {
      title: "Edit Profile",
      breadcrumb: "Edit Profile",
    },
  },
  {
    path: "users-cards",
    component: UserCards,
    data: {
      title: "Users Cards",
      breadcrumb: "Users Cards",
    },
  },
] as Routes;
