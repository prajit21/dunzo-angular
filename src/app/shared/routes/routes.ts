import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "dashboard",
    data: {
      title: "Dashboard",
      breadcrumb: "Dashboard",
    },
    loadChildren: () => import("../../component/dashboard/dashboard.routes"),
  },
  {
    path: "widgets",
    data: {
      title: "Widgets",
      breadcrumb: "Widgets",
    },
    loadChildren: () => import("../../component/widgets/widgets.routes"),
  },
  {
    path: "page-layout",
    data: {
      title: "Page Layout",
      breadcrumb: "Page Layout",
    },
    loadChildren: () =>
      import("../../component/page-layout/page-layout.routes"),
  },
  {
    path: "project",
    data: {
      title: "Project",
      breadcrumb: "Project",
    },
    loadChildren: () =>
      import("../../component/main-project/main-project.routes"),
  },
  {
    path: "file-manager",
    data: {
      title: "File manager",
      breadcrumb: "File manager",
    },
    loadChildren: () =>
      import("../../component/file-manager/file-manager.routes"),
  },
  {
    path: "ecommerce",
    data: {
      title: "Ecommerce",
      breadcrumb: "Ecommerce",
    },
    loadChildren: () =>
      import("../../component/main-ecommerce/main-ecommerce.routes"),
  },
  {
    path: "invoice",
    data: {
      title: "Invoice",
      breadcrumb: "Ecommerce",
    },
    loadChildren: () =>
      import("../../component/main-ecommerce/invoice/invoice.routes"),
  },
  {
    path: "email",
    data: {
      title: "Email",
      breadcrumb: "Email",
    },
    loadChildren: () => import("../../component/email/email.routes"),
  },
  {
    path: "ecommerce",
    data: {
      title: "Chat",
      breadcrumb: "Ecommerce",
    },
    loadChildren: () => import("../../component/chat/chat.routes"),
  },
  {
    path: "user",
    data: {
      title: "User Profile",
      breadcrumb: "User",
    },
    loadChildren: () => import("../../component/user/user.routes"),
  },
  {
    path: "bookmarks",
    data: {
      title: "Bookmarks",
      breadcrumb: "Apps",
    },
    loadChildren: () =>
      import("../../component/main-bookmark/main-bookmark.routes"),
  },
  {
    path: "contacts",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () => import("../../component/contacts/contacts.routes"),
  },
  {
    path: "task",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () => import("../../component/tasks/tasks.routes"),
  },
  {
    path: "calender",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () => import("../../component/calender/calender.routes"),
  },
  {
    path: "social-app",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () => import("../../component/social-app/social-app.routes"),
  },
  {
    path: "todo",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () => import("../../component/to-do/to-do.routes"),
  },
  {
    path: "search-pages",
    data: {
      breadcrumb: "Search Pages",
    },
    loadChildren: () =>
      import("../../component/search-result/search-result.routes"),
  },
  {
    path: "form/form-controls",
    data: {
      breadcrumb: "Form-Controls",
    },
    loadChildren: () =>
      import("../../component/forms/form-controls/form-controls.routes"),
  },
  {
    path: "form-widgets",
    data: {
      breadcrumb: "Form Widgets",
    },
    loadChildren: () =>
      import("../../component/forms/form-widgets/form-widgets.routes"),
  },
  {
    path: "table/bootstrap-tables",
    data: {
      breadcrumb: "Table",
    },
    loadChildren: () =>
      import("../../component/table/bootstrap-tables/bootstrap-tables.routes"),
  },
  {
    path: "table/datatable",
    data: {
      title: "Data Table",
      breadcrumb: "Data Table",
    },
    loadChildren: () =>
      import("../../component/table/data-table/data-table.routes"),
  },
  {
    path: "ui-kits",
    data: {
      title: "Ui-kits",
      breadcrumb: "Ui-kits",
    },
    loadChildren: () => import("../../component/ui-kits/ui-kits.routes"),
  },
  {
    path: "bonus-ui",
    data: {
      title: "Bonus Ui",
      breadcrumb: "Bonus Ui",
    },
    loadChildren: () => import("../../component/bonus-ui/bonus-ui.routes"),
  },
  {
    path: "icons",
    data: {
      title: "Icons",
      breadcrumb: "Icons",
    },
    loadChildren: () => import("../../component/icons/icons.routes"),
  },
  {
    path: "buttons",
    data: {
      title: "Buttons",
      breadcrumb: "Buttons",
    },
    loadChildren: () => import("../../component/buttons/buttons.routes"),
  },
  {
    path: "chart",
    data: {
      title: "Charts",
      breadcrumb: "Charts",
    },
    loadChildren: () => import("../../component/charts/charts.routes"),
  },
  {
    path: "sample-page",
    data: {
      breadcrumb: "Pages",
    },
    loadChildren: () =>
      import("../../component/sample-page/sample-page.routes"),
  },
  {
    path: "gallary",
    data: {
      breadcrumb: "Gallery",
    },
    loadChildren: () => import("../../component/gallery/gallery.routes"),
  },
  {
    path: "blog",
    data: {
      breadcrumb: "Blog",
    },
    loadChildren: () => import("../../component/blog/blog.routes"),
  },
  {
    path: "faq",
    data: {
      breadcrumb: "FAQ",
    },
    loadChildren: () => import("../../component/faq/faq.routes"),
  },
  {
    path: "job",
    data: {
      breadcrumb: "Job Search",
    },
    loadChildren: () => import("../../component/job-search/job-search.routes"),
  },
  {
    path: "learning",
    data: {
      breadcrumb: "Learning",
    },
    loadChildren: () => import("../../component/learning/learning.routes"),
  },
  {
    path: "maps",
    data: {
      breadcrumb: "Maps",
    },
    loadChildren: () => import("../../component/maps/maps.routes"),
  },
  {
    path: "editors",
    data: {
      breadcrumb: "Editors",
    },
    loadChildren: () => import("../../component/editors/editors.routes"),
  },
  {
    path: "knowledgebase",
    data: {
      breadcrumb: "knowledgebase",
    },
    loadChildren: () =>
      import("../../component/knowledgebase/knowledgebase.routes"),
  },
  {
    path: "support-ticket",
    data: {
      breadcrumb: "Apps",
    },
    loadChildren: () =>
      import("../../component/support-ticket/support-ticket.routes"),
  },
];
