import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexGrid,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexMarkers,
  ApexTooltip,
  ApexLegend,
  ApexPlotOptions,
  ApexResponsive,
  ApexTitleSubtitle,
} from "ng-apexcharts";

let primary_color = localStorage.getItem("primary_color") || "#307EF3";

export interface BudgetChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  markers: ApexMarkers;
}
export const budgetChart: BudgetChartInterface = {
  series: [
    {
      name: "Desktops",
      data: [15, 14, 11, 20, 10, 15, 11],
    },
  ],
  chart: {
    type: "area",
    height: 120,
    offsetY: 10,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 2,
      color: primary_color,
      opacity: 0.2,
    },
  },
  colors: [primary_color],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.2,
      stops: [0, 100, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: primary_color,
        strokeColor: "#fff",
        size: 6,
        shape: "circle",
      },
    ],
  },
};

export interface CreatedProjectChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  colors: string[];
  dropShadow: {
    enabled: boolean;
    top: number;
    left: number;
    bottom: number;
    blur: number;
    color: string;
    opacity: number;
  };
  fill: ApexFill;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  tooltip: ApexTooltip;
}
export const CreatedProject: CreatedProjectChartInterface = {
  series: [
    {
      name: "TEAM A",
      type: "column",
      data: [220, 250, 210, 210, 270, 220, 250, 260, 210, 230],
    },
    {
      name: "TEAM B",
      type: "area",
      data: [
        210, 170, 240, 160, 200, 170, 200, 150, 260, 170, 210, 170, 240, 160,
        250, 140, 200, 140, 220, 220,
      ],
    },
  ],
  chart: {
    height: 355,
    type: "area",
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: [0, 2, 5],
    curve: "stepline",
  },
  plotOptions: {
    bar: {
      columnWidth: "40px",
    },
  },
  colors: ["#bebebe", primary_color],
  dropShadow: {
    enabled: true,
    top: 5,
    left: 6,
    bottom: 5,
    blur: 2,
    color: primary_color,
    opacity: 0.5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  grid: {
    show: true,
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "",
      "feb",
      "",
      "Mar",
      "",
      "Apr",
      "",
      "May",
      "",
      "Jun",
      "",
      "July",
      "",
      "Aug",
      "",
      "Sep",
      "",
      "Oct",
      "",
    ],
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "Project Created" +
        "<h3>" +
        "$" +
        series[seriesIndex][dataPointIndex] +
        "<h3/>" +
        "</span>" +
        "</div>"
      );
    },
  },
};

export interface RadialBarChartInterface {
  series: number[];
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  colors: string[];
  labels: string[];
  responsive: ApexResponsive[];
}

export const progresChart: RadialBarChartInterface = {
  series: [75],
  chart: {
    height: 300,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "55%",
      },
    },
  },
  responsive: [
    {
      breakpoint: 1661,
      options: {
        chart: {
          height: 280,
        },
      },
    },
    {
      breakpoint: 1581,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 1471,
      options: {
        chart: {
          height: 242,
        },
      },
    },
    {
      breakpoint: 1441,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1301,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1140,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 821,
      options: {
        chart: {
          height: 270,
        },
      },
    },
  ],
  colors: [primary_color],
  labels: ["Progress"],
};

export interface RadarChartInterface {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
}
export const raderchart: RadarChartInterface = {
  series: [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ],
  chart: {
    height: 350,
    type: "radar",
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1,
    },
    toolbar: {
      show: false,
    },
  },
  title: {
    text: "Radar Chart - Multi Series",
  },
  stroke: {
    width: 2,
  },
  fill: {
    opacity: 0.1,
  },
  markers: {
    size: 0,
  },
  xaxis: {
    categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
  },
};
