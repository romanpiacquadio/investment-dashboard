import DashboardBox from "./DashboardBox";
import { useGetNpvQuery } from "../state/api";
import { GetNpvResponse } from "../state/types";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import BoxHeader from "./BoxHeader";

const gradientOffset = (data: Array<GetNpvResponse>) => {
  const dataMax = Math.max(...data.map((i) => i.npv));
  const dataMin = Math.min(...data.map((i) => i.npv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};


const NetPresentValue = () => {
  const npv = useGetNpvQuery();
  const off = (npv && npv.data) ? gradientOffset(npv.data) : 1

  return (
    <DashboardBox gridArea="a">
        <BoxHeader 
          title="NPV as function of discount rate"
          subtitle="Net Present Value is positive when discount rate is lower than Internal Rate of Return (IRR)."
        />
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart
            width={500}
            height={300}
            data={npv.data || []}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="discountRate" style={{fontSize: "10px"}} tickLine={false}/>
            <YAxis style={{fontSize: "10px"}} tickLine={false}/>
            <Tooltip />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={off} stopColor="green" stopOpacity={1} />
                <stop offset={off} stopColor="red" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="npv" stroke="#000" fill="url(#splitColor)" />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
  )
};

export default NetPresentValue;