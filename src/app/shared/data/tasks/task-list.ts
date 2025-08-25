export interface Tasklist {
  title: string;
  title_id: number;
  status: boolean;
  data: Data[];
}

export interface Data {
  id: number;
  title: string;
  subtitle: string;
  text: string;
}

export interface Tag {
  title: string;
  title_id: number;
  status: boolean;
  data: Data[];
}

export const TaskData: Tasklist[] = [
  {
    title: "Created By Me",
    title_id: 1,
    status: true,
    data: [
      {
        id: 1,
        title: "Client meeting",
        subtitle: "General",
        text: "Documentation that is used to explain regarding some attributes of an object.",
      },
      {
        id: 2,
        title: "Plan webinar",
        subtitle: "General",
        text: "kanban board is one of the tools that can be used to implement kanban to manage.",
      },
      {
        id: 3,
        title: "Email newsletter",
        subtitle: "General",
        text: "There is some Console error in user profile page.",
      },
      {
        id: 4,
        title: "Publish podcast",
        subtitle: "General",
        text: "Clone the theme test data file from the GitHub repository.",
      },
      {
        id: 5,
        title: "Lunch website",
        subtitle: "General",
        text: "Documentation that is used to explain regarding some attributes of an object to the client.",
      },
      {
        id: 6,
        title: "Client meeting",
        subtitle: "General",
        text: "Digital News Report shows that podcasting is now a worldwide that has become one of the hottest topic.",
      },
      {
        id: 7,
        title: "Plan webinar",
        subtitle: "General",
        text: "There are many tools available for testing websites, we’ve chosen classics: Chrome dev tools.",
      },
    ],
  },
  {
    title: "Today's Tasks",
    title_id: 2,
    status: false,
    data: [],
  },
  {
    title: "Delayed Tasks",
    title_id: 3,
    status: false,
    data: [],
  },
  {
    title: "Upcoming Tasks",
    title_id: 4,
    status: false,
    data: [],
  },
  {
    title: "This Week Tasks",
    title_id: 5,
    status: false,
    data: [],
  },
  {
    title: "This Month Tasks",
    title_id: 6,
    status: false,
    data: [],
  },
  {
    title: "Assigned To Me",
    title_id: 7,
    status: false,
    data: [
      {
        id: 1,
        title: "Task name",
        subtitle: "General",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      },
      {
        id: 2,
        title: "Task name",
        subtitle: "General",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      },
      {
        id: 3,
        title: "Task name",
        subtitle: "General",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      },
      {
        id: 4,
        title: "Task name",
        subtitle: "General",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      },
      {
        id: 5,
        title: "Task name",
        subtitle: "General",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      },
    ],
  },
  {
    title: "My Tasks",
    title_id: 8,
    status: false,
    data: [
      {
        id: 1,
        title: "Task name",
        subtitle: "General",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      },
      {
        id: 2,
        title: "Task name",
        subtitle: "General",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      },
      {
        id: 3,
        title: "Task name",
        subtitle: "General",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      },
      {
        id: 4,
        title: "Task name",
        subtitle: "General",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      },
      {
        id: 5,
        title: "Task name",
        subtitle: "General",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      },
    ],
  },
];

export const TagData: Tag[] = [
  {
    title: "Notification",
    title_id: 1,
    status: false,
    data: [],
  },
  {
    title: "Newsletter",
    title_id: 2,
    status: false,
    data: [],
  },
  {
    title: "Business",
    title_id: 3,
    status: false,
    data: [],
  },
  {
    title: "Holidays",
    title_id: 4,
    status: false,
    data: [],
  },
];
