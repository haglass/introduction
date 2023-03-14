import React from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Portfolio = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="portfolio scroll">
      <div className="inner">
        {/* 개발담당자 : 팀프로젝트, 개인 작업(5개 목표(퍼블리싱 > 프론트)) */}
        <h2 data-aos="zoom-out-down">Portfolio</h2>
        <div className="contents">
          {/* 팀프로젝트 */}
          <div className="portfolio-box">
            <h3 data-aos="fade-up">Team Project</h3>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <video muted autoPlay loop width="90%">
                    <source src={`${path}/images/vikyo.mp4`} />
                  </video>
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.) (이미지 클릭시
                프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 : 교보문고 </li>
                  <li>프로젝트 기간 :22.12.05~22.12.23 </li>
                  <li>프로젝트 주제 : 교보문고</li>
                  <li>프로젝트 기여도 : </li>
                  <li>프로젝트 도구 : </li>
                  <li>프로젝트 사용언어 : </li>
                  <li>프로젝트 피그마 : </li>
                  <li>
                    프로젝트 Git :{" "}
                    <a
                      href="https://github.com/haglass/kageyo"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="portfolio"
                    >
                      작업물보기
                    </a>
                  </li>
                  <li>프로젝트 노션 : </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <video muted autoPlay loop width="90%">
                    <source src={`${path}/images/vika.mp4`} />
                  </video>
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 : 나의 텅빈통장</li>
                  <li>프로젝트 기간 :23.02.06 ~ 23.03.02 </li>
                  <li>
                    프로젝트 주제 : 목표 소비 금액을 설정할 수 있는 챌린지
                    형태의 가계부
                  </li>
                  <li>
                    프로젝트 기여도 :메인화면, 로그인, 회원가입, 회원정보{" "}
                  </li>
                  <li>프로젝트 도구 : react, notion, figma </li>
                  <li>프로젝트 사용언어 : </li>
                  <li>
                    프로젝트 피그마
                    :https://www.figma.com/file/ZXKIBZRTshLbK6PgOmWgIK/Untitled?t=mM3cUQ0B2iECY8Bj-1{" "}
                  </li>
                  <li>프로젝트 Git : </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="https://github.com/haglass/moneybook"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <video muted autoPlay loop width="90%">
                    <source src={`${path}/images/vibook.mp4`} />
                  </video>
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 : </li>
                  <li>프로젝트 기간 : </li>
                  <li>프로젝트 주제 : </li>
                  <li>프로젝트 기여도 : </li>
                  <li>프로젝트 도구 : </li>
                  <li>프로젝트 사용언어 : </li>
                  <li>프로젝트 피그마 : </li>
                  <li>프로젝트 Git : </li>
                  <li>프로젝트 노션 : </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="https://github.com/haglass/moneybook"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/sample.png`} alt="project" />
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 : </li>
                  <li>프로젝트 기간 : </li>
                  <li>프로젝트 주제 : </li>
                  <li>프로젝트 기여도 : </li>
                  <li>프로젝트 도구 : </li>
                  <li>프로젝트 사용언어 : </li>
                  <li>프로젝트 피그마 : </li>
                  <li>프로젝트 Git : </li>
                  <li>프로젝트 노션 : </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 개인 스터디 프로젝트 */}
          <div className="portfolio-box">
            <h3>Study Project</h3>
            {/* Swiper 배치 */}
            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
              pagination={true}
              navigation={true}
              breakpoints={{
                860: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                960: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1180: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination, Navigation]}
              className="portfolio-slide"
            >
              <SwiperSlide>
                <a
                  href="https://github.com/haglass/hansalim"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/hansal.png`} alt="project" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/dosi.png`} alt="project" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/stx.png`} alt="project" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/h.png`} alt="project" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/bing.png`} alt="project" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/todo.png`} alt="project" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
