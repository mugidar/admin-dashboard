import "./chartbox.scss";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import { chartBoxUser } from "../../data";
import { Link } from "react-router-dom";



interface ChartBoxProps {
  title: string;
  number: number | string;
  icon: string;
  color: string;
  chartData: object[];
  dataKey: string;
  percentage: number;

}

const ChartBox: React.FC<ChartBoxProps> = ({
  title,
  number,
  icon,
  color,
  chartData,
  dataKey,
  percentage
}) => {
  console.log(icon)
  const Icon = icon ? icon : "Icon"


  return (
    <div className="chartbox">
      <div className="info">
        <h3>
         <Icon />{title}
        </h3>
        <h1>11.238</h1>
        <Link to={"/"} style={{ color: color }}>
          View all
        </Link>
      </div>

      <div className="charts">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={chartData}>
              <Tooltip
                contentStyle={{ border: 0, background: "transparent" }}
                labelStyle={{ display: "none" }}
                position={{ x: 150, y: 0 }}
              />
              <Line
                dot={false}
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text">
          <span
            className="percents"
            style={{ color: percentage < 50 ? "tomato" : "lime" }}
          >
            {percentage}%
          </span>
          <span className="period">This month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
