import DashboardBox from "./DashboardBox";
import { useGetRevenueQuery } from "../state/api";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar, Rectangle } from 'recharts';
import BoxHeader from "./BoxHeader";

const ProfitRevenue = () => {
  const revenue = useGetRevenueQuery();

  return (
    <DashboardBox gridArea="a">
      <BoxHeader title="Revenue vs Profit" subtitle="Forecasted comparison between Revenue and Profit."/>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={revenue.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="profit" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </DashboardBox>
  )
};

export default ProfitRevenue;