import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p>{`${label} : $${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
function Chart({height,main,data}) {
  
  return (
 
        <ResponsiveContainer width="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          {
            main &&
          <YAxis axisLine={{ stroke: 'white' }} />
          }
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" className="chartGrid" />
          <Tooltip/>
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#2EBDB6"
            fillOpacity={0.06}
            fill="#2EBDB6"
          />
        </AreaChart>
      </ResponsiveContainer>
        
  )
}

export default Chart
