import { Routes } from "@angular/router";

import { ForgetPassword } from "./forget-password/forget-password";
import { LoginBgImgTwo } from "./login-bg-img-two/login-bg-img-two";
import { LoginWithBgImg } from "./login-with-bg-img/login-with-bg-img";
import { LoginWithSweetalert } from "./login-with-sweetalert/login-with-sweetalert";
import { LoginWithTooltip } from "./login-with-tooltip/login-with-tooltip";
import { LoginWithValidation } from "./login-with-validation/login-with-validation";
import { Maintenance } from "./maintenance/maintenance";
import { RegisterBgImgTwo } from "./register-bg-img-two/register-bg-img-two";
import { RegisterSimple } from "./register-simple/register-simple";
import { RegisterWithBgImg } from "./register-with-bg-img/register-with-bg-img";
import { ResetPassword } from "./reset-password/reset-password";
import { SimpleLogin } from "./simple-login/simple-login";
import { UnlockUser } from "./unlock-user/unlock-user";

export default [
  {
    path: "simple",
    component: SimpleLogin,
  },
  {
    path: "image-one",
    component: LoginWithBgImg,
  },
  {
    path: "image-two",
    component: LoginBgImgTwo,
  },
  {
    path: "validation",
    component: LoginWithValidation,
  },
  {
    path: "tooltip",
    component: LoginWithTooltip,
  },
  {
    path: "sweetalert",
    component: LoginWithSweetalert,
  },
  {
    path: "register-simple",
    component: RegisterSimple,
  },
  {
    path: "register-image-one",
    component: RegisterWithBgImg,
  },
  {
    path: "register-image-two",
    component: RegisterBgImgTwo,
  },
  {
    path: "unlock-user",
    component: UnlockUser,
  },
  {
    path: "forget-password",
    component: ForgetPassword,
  },
  {
    path: "reset-password",
    component: ResetPassword,
  },
  {
    path: "maintenance",
    component: Maintenance,
  },
] as Routes;
