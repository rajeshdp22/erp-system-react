import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Study", 4],
  ["Exercise", 2],
  ["Socialize", 3],
  ["Sleep", 7],
];

export const options = {
  is3D: true,
  colors:["#FF7F50", "#00CED1", "#FFD700"],
};

export default function Chart3d() {
  return (
    <div style={{ width: "100%", maxWidth: "500px", height: "300px", margin: "auto" }}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
}
