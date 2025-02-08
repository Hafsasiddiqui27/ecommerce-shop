import Hero from "@/components/widges/Hero";
import DressStyle from "@/components/widges/DressStyle";
import Bar from "@/components/widges/Bar";
import Happy from "@/components/widges/Reviews";
import Product from "@/components/Arrival";
import TopSell from "./(pages)/products/topsell";



export default function Home() {
  return (
    <div>
    <Hero /> 
    <Bar /> 
    <Product />
    <TopSell />

    <DressStyle /> 
    <Happy /> 





      
    </div>
  );
};

