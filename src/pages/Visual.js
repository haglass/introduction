import React, { useRef } from "react";
import Anime from "../assets/Anime";

const Visual = () => {
  const path = process.env.PUBLIC_URL;
  const style = {
    width: 100,
    height: 100,
    background: "green",
    position: "absolute",
    left: 100,
    top: 100,
  };
  const box = useRef(null);
  return (
    <section className="visual scroll">
      <div className="inner">
        {/* <video muted autoPlay loop>
          <source src="/videos/my.mp4" type="video/mp4" />
        </video> */}
        {/* 첫인상 남기기(사진/대표단어 ) */}

        <img src={`${path}/images/me.png`} alt="visual" className="my" />
        {/* <img src="/images/visual.png" alt="visual" /> */}
        {/* Anime 샘플 */}
        {/* <div
          ref={box}
          className="box"
          style={style}
          onClick={(e) => {
            // 애니메이션 대상, 옵션
            new Anime(e.target, {
              prop: "left",
              value: 400,
              duration: 500,
            });
            new Anime(window, {
              prop: "scroll",
              value: 2000,
              duration: 1500,
            });
            // new Anime(box.current, {
            //   prop: "left",
            //   value: 400,
            //   duration: 500,
            //   callback: () => {
            //     new Anime(box.current, {
            //       prop: "top",
            //       value: 400,
            //       duration: 500,
            //       callback: () => {
            //         alert("완료");
            //       },
            //     });
            //   },
            // });
          }}
        ></div> */}
        {/* <div className="inner-left">
          <h2>Ha Kyungmi</h2>

          <p>
            <span>John 3:16</span> <br />
            For God so loved the world that <br />
            he gave his one and only Son,
            <br />
            that whoever believes in him shall <br />
            not perish but have eternal life.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Visual;
