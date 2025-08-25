import { Component } from "@angular/core";

import { BalanceModal } from "./balance-modal/balance-modal";
import { ProfileModal } from "./profile-modal/profile-modal";
import { ResultModal } from "./result-modal/result-modal";

@Component({
  selector: "app-custom-modals",
  templateUrl: "./custom-modals.html",
  styleUrls: ["./custom-modals.scss"],
  imports: [ProfileModal, ResultModal, BalanceModal],
})
export class CustomModals {}
