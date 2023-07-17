import "./barchart.scss";
import {
  BarChart as BarChartComponent,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer
} from "recharts";

interface BarChartProps {
  title: string;
  dataKey: number;
  chartData: object[];
  color: string;
}
const BarChart: React.FC<BarChartProps> = ({
  dataKey,
  chartData,
  color,
  title
}) => {
  return (
    <div className="bar_chart">
      <h4>{title}</h4>
      <div className="chart">
        <ResponsiveContainer width={400} height={120}>
          <BarChartComponent width={150} height={40} data={chartData}>
            <Tooltip
              cursor={{ fill: "none" }}
              labelStyle={{ display: "none" }}
              position={{ x: 250, y: -10 }}
              contentStyle={{ backgroundColor: "gray", opacity: 0.75 }}
            />
            <Legend
              payload={chartData.map((chart) => ({
                id: chart.id,
                type: "wye",
                value: chart.name,
                color: "pink"
              }))}
              verticalAlign="bottom"
              height={36}
            />

            <Bar dataKey={dataKey} fill={color} />
          </BarChartComponent>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart;
