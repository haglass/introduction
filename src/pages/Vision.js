import React from "react";
import "aos/dist/aos.css";
const Vision = () => {
  return (
    <section className="vision scroll">
      <div className="inner">
        {/* 1년 목표, 3년후 목표, 5년후 목표 */}
        <h2 data-aos="zoom-out-down">Vision</h2>
        <div className="contetns">
          <ul className="vision-list">
            <li>1년후 : 강원도 한달살기</li>
            <li>3년후 : 스페인 여행</li>
            <li>5년후 : 세계여행</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Vision;
