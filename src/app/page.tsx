import Hero from "@/components/widges/Hero";
import DressStyle from "@/components/widges/DressStyle";
import Bar from "@/components/widges/Bar";
import Happy from "@/components/widges/Reviews";

import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <div>
    <Hero /> 
    <Bar /> 
     <main >
        <div  className="max-w-7xl mx-auto px-4 py-8">
        <h2 className=" text-extrabold text-4xl text-center ">
            NEW ARRIVALS</h2>
          
          <div className="text-center mt-8">
        <Button>View All</Button>
        </div>
        </div>
      </main> 


    <DressStyle /> 
    <Happy /> 





      
    </div>
  );
};

