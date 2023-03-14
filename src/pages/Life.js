import React from "react";
const Life = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="life scroll">
      <div className="inner">
        <h2 data-aos="zoom-out-down">Life</h2>
        <div className="contents">
          <div className="h-box">
            <h3>힐링합니당~</h3>

            {/* 나의 대외활동, 취미, 회사 대표가 바라는 인재상 */}
            <ul className="life-list">
              <li>
                <img src={`${path}/images/a9.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a2.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a3.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a10.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a5.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a6.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a7.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a8.jpg`} alt="life" />
              </li>
            </ul>
            <ul className="life-list">
              <li>
                <img src={`${path}/images/a11.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a12.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a13.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a14.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a15.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a16.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a17.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/a18.jpg`} alt="life" />
              </li>
            </ul>
            <ul className="life-list">
              <li>
                <img src={`${path}/images/b1.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/b2.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/b3.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/b4.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/b5.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/b6.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/b7.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/b8.jpg`} alt="life" />
              </li>
            </ul>
            <h3>여가활동을 합니당~</h3>
            <ul className="life-list">
              <li>
                <img src={`${path}/images/1.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/2.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/d1.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/d2.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/z9.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/z3.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/z2.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/z1.jpg`} alt="life" />
              </li>
            </ul>
            <h3>잘 먹겠습니당~</h3>
            <ul className="life-list">
              <li>
                <img src={`${path}/images/m1.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/m2.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/m3.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/m4.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/m5.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/m6.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/m7.jpg`} alt="life" />
              </li>
              <li>
                <img src={`${path}/images/m8.jpg`} alt="life" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Life;
