import React from "react";
import Link from "next/link";
const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="text-solo">Small TEXT</p>
        <h3>MID TEXT</h3>
        <img src="" alt="beenies" className="hero-banner-image" />

        <div>
          <Link href="/product/ID">
            <button type="button">Button TEXT</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
