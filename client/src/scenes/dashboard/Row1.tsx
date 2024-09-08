import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/states/api";

const Row1 = () => {
  const { data } = useGetKpisQuery();
  console.log('data:', data);

  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};

export default Row1;
