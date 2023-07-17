import "./piechart.scss";
import {
  PieChart as PieChartComponent,
  Pie,
  Sector,
  Cell,Tooltip,
  ResponsiveContainer,Legend
} from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" }
];


const PieChart = () => {
  return (
    <div className="pie_chart">
      <h1>Leads</h1>
      <PieChartComponent width={400} height={400}>
        <Tooltip/>
        <Legend payload={
          data.map((item) => ({id: item.name, type: "square", value: item.name , color: item.color}))
        } />
        <Pie
          data={data}
          innerRadius={80}
          outerRadius={110}
          fill="#8884d8"
          paddingAngle={15}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
      </PieChartComponent>
    </div>
  );
};

export default PieChart;
