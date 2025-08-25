export interface activity {
  title: string;
  des: string;
  id: number;
  data: boolean;
}

export const NewsUpdates = [
  {
    img: "assets/images/dashboard/1.jpg",
    des: "Indonesian Navy Lauds Mental Perseverance of Teenager...",
    info: "Today's News Headlines, Breaking...",
    time: "10 Min ago",
  },
  {
    img: "assets/images/dashboard/2.jpg",
    des: "Why now may be the 'golden age' for Southeast asia start-ups....",
    info: "Check out the latest news from...",
    time: "10 Min ago",
  },
  {
    img: "assets/images/dashboard/3.jpg",
    des: "China's renewed crypto crackdown wipes nearly $400...",
    info: "Technology and indian business news...",
    time: "14 Min ago",
  },
  {
    img: "assets/images/dashboard/4.jpg",
    des: "Indonesian Navy Lauds Mental Perseverance of Teenager...",
    info: "Today's News Headlines, Breaking...",
    time: "17 Min ago",
  },
];

export const RecentOrders = [
  {
    name: "Elle Amberson",
    id: "#Gh3649K",
    img: "assets/images/dashboard/user/1.png",
    date: "15 Nov, 2022",
    time: "02:45 PM",
    itemname: "Wood Chair",
    price: "$152",
    text: "paid",
    class: "primary",
  },
  {
    name: "Anna Catmire",
    id: "#A5647KB",
    img: "assets/images/dashboard/user/2.png",
    date: "25 Nov, 2022",
    time: "01:24 PM",
    itemname: "Men Sneakers",
    price: "$652",
    text: "pending",
    class: "secondary",
  },
  {
    name: "Laura Dagson",
    id: "#KO093M",
    img: "assets/images/dashboard/user/3.png",
    date: "26 Nov, 2022",
    time: "12:34 PM",
    itemname: "Tree Stylish",
    price: "$256",
    text: "Paid",
    class: "primary",
  },
  {
    name: "Rachel Green",
    id: "#KMG403",
    img: "assets/images/dashboard/user/4.png",
    date: "28 Nov, 2022",
    time: "10:27 PM",
    itemname: "Mi Watch",
    price: "$659",
    text: "Overdue",
    class: "danger",
  },
];

export const tradingData = [
  {
    title: "Customers",
    info: "1.485",
    class: "primary",
    icon: "male",
    data: "+ 4.6%",
    arrow: "arrow-up",
    statusclass: "success",
  },
  {
    title: "Revenue",
    info: "$5.873",
    class: "secondary",
    icon: "money",
    data: "+ 3.10%",
    arrow: "arrow-up",
    borderclass: "money",
    statusclass: "success",
  },
  {
    title: "Profit",
    info: "70%",
    class: "danger",
    icon: "profile",
    data: "+ 2.3%",
    arrow: "arrow-down",
    borderclass: "profit",
    statusclass: "danger",
  },
  {
    title: "Invoices",
    info: "1.256",
    class: "success",
    icon: "invoice",
    data: "+ 6.3%",
    arrow: "arrow-up",
    borderclass: "invoice-profit",
    statusclass: "success",
  },
];

export const activeTasks: activity[] = [
  {
    id: 1,
    title: "Regina Cooper",
    des: "Create userflow social application design",
    data: true,
  },
  {
    id: 2,
    title: "RInstall Appointment",
    des: "Homepage design for slimmuch product",
    data: true,
  },
  {
    id: 3,
    title: "Regina Cooper",
    des: "Interactive prototype design - web design",
    data: true,
  },
  {
    id: 4,
    title: "Regina Cooper",
    des: "Create Application design for topbuzz",
    data: true,
  },
];

export const notifications = [
  {
    id: 1,
    img: "assets/images/dashboard/user/15.png",
    isShow: false,
    des: "Paul Svensson invite you Prototyping",
    time: "05 April, 2023 | 03:00 PM",
  },
  {
    id: 2,
    img: "assets/images/dashboard/user/16.png",
    isShow: false,
    des: "Adam Nolan mentioned you in UX Basics",
    time: "04 April, 2023 | 05:00 PM",
  },
  {
    id: 3,
    img: "assets/images/dashboard/user/17.png",
    isShow: false,
    des: "Paul Morgan Commented in UI Design",
    time: "05 April, 2023 | 02:00 PM",
  },
  {
    id: 4,
    img: "assets/images/dashboard/user/18.png",
    isShow: false,
    des: "Robert Babinski Said nothing important",
    time: "01 April, 2023 | 06:00 PM",
  },
];

export const reviewData = [
  {
    name: "John Connor",
    star: "4.3",
    number: "136",
  },
  {
    name: "Paul Miller",
    star: "5.6",
    number: "120",
  },
  {
    name: "Alen Lee",
    star: "6.3",
    number: "140",
  },
];

export const reviewOptions = {
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    1000: {
      items: 1,
    },
    0: {
      items: 1,
    },
  },
};
