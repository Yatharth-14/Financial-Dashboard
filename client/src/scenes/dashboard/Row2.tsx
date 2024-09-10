// import BoxHeader from "@/components/BoxHeader";
// import DashboardBox from "@/components/DashboardBox";
// import { useGetProductsQuery } from "@/states/api";
// import { useTheme } from "@mui/material";
// import { useMemo } from "react";
// import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// const Row2 = () => {
//   const {data} = useGetProductsQuery();
//   const {palette} = useTheme();
//   const revenueExpenses = useMemo(() => {
//     return (
//       data &&
//       data[0].monthlyData.map(({ month, revenue, expenses }) => {
//         return {
//           name: month.substring(0, 3),
//           revenue: revenue,
//           expenses: expenses,
//         }
//       })
//     );
//   }, [data])
  
//   return (
//     <>
//       <DashboardBox gridArea="d">
//         <BoxHeader
//           title="Operational vs Non-Operational Expenses"
//           sideText="+4%"
//         />
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             width={500}
//             height={400}
//             data={revenueExpenses}
//             margin={{
//               top: 20,
//               right: 0,
//               left: -10,
//               bottom: 55,
//             }}
//           >
//             <CartesianGrid vertical={false} stroke={palette.grey[800]} />
//             <XAxis
//               dataKey="name"
//               tickLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <YAxis
//               yAxisId="left"
//               orientation="left"
//               tickLine={false}
//               axisLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <YAxis
//               yAxisId="right"
//               orientation="right"
//               tickLine={false}
//               axisLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <Tooltip />
            
//             <Line
//               yAxisId="left"
//               type="monotone"
//               dataKey="Non Operational Expenses"
//               stroke={palette.tertiary[500]}
//             />
//             <Line
//               yAxisId="right"
//               type="monotone"
//               dataKey="Operational Expenses"
//               stroke={palette.primary.main}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </DashboardBox>
//       <DashboardBox gridArea="e"></DashboardBox>
//       <DashboardBox gridArea="f"></DashboardBox>
//     </>
//   );
// };

// export default Row2;
