import { Chart } from "react-google-charts";

export const data = [
      ["Year", "Sales", "Expenses", "Profit"],
      ["2010", 800, 300, 400],
      ["2011", 900, 350, 550],
      ["2016", 1000, 400, 600],
      ["2013", 1100, 450, 700],
      ["2014", 1200, 500, 800],
      ["2011", 1300, 550, 900],
      ["2012", 1400, 600, 1000],
      ["2017", 1500, 650, 1100],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2010-2017",
  },
  colors: ["#FF7F50", "#00CED1", "#FFD700"],
};

export default function ChartGeo() {
  return (
      <Chart
      chartType="Bar"
      width="100%"
      height="400px" 
      data={data}
      options={options}
    />
  );
}
