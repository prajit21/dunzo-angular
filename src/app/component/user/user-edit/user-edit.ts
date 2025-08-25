import { Component } from "@angular/core";

import { AddProjectsUpload } from "./add-projects-upload/add-projects-upload";
import { EditProfileForm } from "./edit-profile-form/edit-profile-form";
import { MyProfile } from "./my-profile/my-profile";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.html",
  styleUrls: ["./user-edit.scss"],
  imports: [MyProfile, EditProfileForm, AddProjectsUpload],
})
export class UserEdit {}
