import React from "react";
import orangeImg from "../../../assets/PromoCards/imgi_20_Orange.png";
import mangoImg from "../../../assets/PromoCards/imgi_21_mango-banner.jpg";

const PromoCards = () => {
  return (
    <div className="max-w-[1380px] mx-auto grid md:grid-cols-2 gap-6 px-4 py-6">
      
      {/* LEFT - Orange Image */}
      <div className="rounded-2xl overflow-hidden">
        <img
          src={orangeImg}
          alt="orange"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT - Mango Image */}
      <div className="rounded-2xl overflow-hidden">
        <img
          src={mangoImg}
          alt="mango"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default PromoCards;