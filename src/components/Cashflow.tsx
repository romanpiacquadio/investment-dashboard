import DashboardBox from "./DashboardBox";
import { useGetCashflowQuery } from "../state/api"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import BoxHeader from "./BoxHeader";
import { useTheme } from "@mui/material";

const Cashflow = () => {
  const { palette } = useTheme();
  const cashflow = useGetCashflowQuery();

  return (
    <DashboardBox gridArea="a">
      <BoxHeader title="Forecasted Cashflow" subtitle="The line shows the project's cashflow. 'Year 0' represents the initial investment."/>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={300}
          data={cashflow.data || []}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" style={{fontSize: "12px"}} tickLine={false}/>
          <YAxis style={{fontSize: "12px"}} tickLine={false}/>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="cashflow"
            stroke={palette.primary.main[900]}
            dot={true}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>
  )
}

export default Cashflow