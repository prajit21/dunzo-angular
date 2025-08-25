import { Component } from "@angular/core";

import { GeneralTrading } from "./general-trading/general-trading";
import { ActiveTasks } from "../../dashboard/default/active-tasks/active-tasks";
import { TotalEarning } from "../../dashboard/default/total-earning/total-earning";
import { TotalExpense } from "../../dashboard/default/total-expense/total-expense";
import { CategoriesSales } from "../../dashboard/ecommerce/categories-sales/categories-sales";
import { DealOfDay } from "../../dashboard/ecommerce/deal-of-day/deal-of-day";
import { EcommerceInvoices } from "../../dashboard/ecommerce/ecommerce-invoices/ecommerce-invoices";
import { EcommerceMonthlySale } from "../../dashboard/ecommerce/ecommerce-monthly-sale/ecommerce-monthly-sale";
import { EcommerceOrderOverview } from "../../dashboard/ecommerce/ecommerce-order-overview/ecommerce-order-overview";
import { OfflineOrder } from "../../dashboard/ecommerce/top-ecommerce/offline-order/offline-order";
import { OnlineOrder } from "../../dashboard/ecommerce/top-ecommerce/online-order/online-order";
import { Budget } from "../../dashboard/project/budget/budget";
import { ProjectCreated } from "../../dashboard/project/project-created/project-created";
import { TopCommonProject } from "../../dashboard/project/top-common-project/top-common-project";

@Component({
  selector: "app-general",
  templateUrl: "./general.html",
  styleUrls: ["./general.scss"],
  imports: [
    TopCommonProject,
    CategoriesSales,
    ProjectCreated,
    Budget,
    EcommerceOrderOverview,
    EcommerceMonthlySale,
    EcommerceInvoices,
    GeneralTrading,
    DealOfDay,
    TotalEarning,
    TotalExpense,
    ActiveTasks,
    OnlineOrder,
    OfflineOrder,
  ],
})
export class General {}
