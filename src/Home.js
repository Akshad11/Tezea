import HeroSection from "./components/HeroSection";
import FeatureProduct from "./components/FeatureProduct";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Trezea:",
  };


  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />

    </>
  );
};
export default Home;