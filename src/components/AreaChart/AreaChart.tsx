import "./areachart.scss";
import {
  AreaChart as AreaChartComponents,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";



const AreaChart = ({data}) => {
  return (
    <div className="area_chart">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChartComponents
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="weekDay" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="electronic"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="clothes"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="books"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChartComponents>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;
