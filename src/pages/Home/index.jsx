import React from "react";

// === Components === //
import { Carousel } from '@/components'

const Home = () => {
  return (
    <div className="block w-full">
      <div className="block items-center py-52 px-40 bg-no-repeat bg-center bg-[url('https://bankofchain.io/images/home/bg-gradient.png')]">
        <Carousel></Carousel>
      </div>
      <div className="block text-center bg-gray-500 pt-20 pb-12">
        <h2 className="text-6xl font-normal leading-normal mt-0 mb-2 text-white">
          Major integrations
        </h2>
        <h4 className="text-3xl font-normal leading-normal mt-0 mb-2 text-white">
          Bank of Chain integrates with the major chain of DeFi and the world’s
          top 8 stablecoins, optimizing 13 AMM and lending pools.
        </h4>
      </div>
    </div>
  );
};

export default Home;
