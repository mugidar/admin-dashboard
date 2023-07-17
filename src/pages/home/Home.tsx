import AreaChart from "../../components/AreaChart/AreaChart";
import ChartBox from "../../components/ChartBox/ChartBox";
import PieChart from "../../components/PieChart/PieChart";
import BarChart from "../../components/barChart/barChart";
import TopBox from "../../components/topBox/topBox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxVisit,
  barChartBoxRevenue,
  soldItems
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChart />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">
        <AreaChart data={soldItems} {...soldItems} />
      </div>
      <div className="box box8">
        <BarChart {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChart {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
