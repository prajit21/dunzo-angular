import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { Feedback } from "./feedback/feedback";
import { OfflineOrder } from "./offline-order/offline-order";
import { OnlineOrder } from "./online-order/online-order";
import { TotalRevenue } from "./total-revenue/total-revenue";

@Component({
  selector: "app-top-ecommerce",
  templateUrl: "./top-ecommerce.html",
  styleUrls: ["./top-ecommerce.scss"],
  imports: [OnlineOrder, OfflineOrder, TotalRevenue, Feedback, RouterLink],
})
export class TopEcommerce {}
