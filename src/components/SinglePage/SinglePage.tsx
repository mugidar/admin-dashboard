import { useParams } from "react-router-dom";
import "./singlepage.scss";
import { products } from "../../data";
import { useNavigate } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
  Legend
} from "recharts";

interface SinglePageProps {
  id: number;
  title: string;
  img?: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities: { time: string; text: string };
}

const SinglePage: React.FC<SinglePageProps> = ({
  id,
  title,
  img,
  info,
  chart,
  activities
}) => {
  const params = useParams();

  const navigation = useNavigate();

  const prevPage = () => {
    navigation(-1);
  };
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

  console.log(info);

  return (
    <div className="singlepage">
      <button className="previous_page" onClick={() => prevPage()}>
        Back
      </button>
      <div className="content">
        <div className="left_content">
          <div className="info">
            <div className="edit">
              <img src={img} alt="" />
              <h1>{title}</h1>
              <button>Update</button>
            </div>
            <div className="details">
              {Object?.entries(info)?.map((infoItem) => {
                return (
                  <div className="item" key={infoItem[0]}>
                    <span className="title">{infoItem[0]}: </span>
                    {infoItem[0] == "color" && (
                      <span
                        style={{
                          width: "20px",
                          height: "20px",
                          backgroundColor: infoItem[1]
                        }}
                      ></span>
                    )}
                    <span className="value">{infoItem[1]}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {chart && (
            <div className="chart">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={chart.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {chart.dataKeys.map((dataKey) => (
                    <Line
                      type="monotone"
                      dataKey={dataKey.name}
                      stroke={dataKey.color}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
        <div className="activities">
          <h1>Latest activities</h1>
          {activities && (
            <ul>
              {activities.map((activity) => {
                return (
                  <li>
                    <div>
                      <p>{activity.text}</p>
                      <time>{activity.time}</time>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
