import React from "react";

const Profile = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="profile scroll">
      <div className="inner">
        {/* 자기소개(인사팀) : 약력, 학력, 업무, 교육, 성격, MBTI */}
        <h2
          className="pro-h2"
          data-aos="fade-up "
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Profile
        </h2>
        <div
          className="contents"
          data-aos="fade-up "
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="profile-box">
            <img src={`${path}/images/profile1.jpg`} alt="profile" />
          </div>
          <div className="profile-box">
            <img src={`${path}/images/profile2.jpg`} alt="profile" />
          </div>
        </div>
        <div className="pro-za">
          {" "}
          <ul>
            <li>
              {" "}
              <img
                src={`${path}/images/pro1-1.png`}
                alt="profile"
                className="pro-img"
              />{" "}
              <span>ITQ(한글,엑셀,파워포인트)</span>
            </li>

            <li>
              {" "}
              <img
                src={`${path}/images/pro2.png`}
                alt="profile"
                className="pro-img"
              />
              <span>직업훈련교사3급(디자인)</span>
            </li>

            <li>
              {" "}
              <img
                src={`${path}/images/pro3.png`}
                alt="profile"
                className="pro-img"
              />{" "}
              <span>직업훈련교사3급(귀금속)</span>
            </li>
            <li>
              {" "}
              <img
                src={`${path}/images/pro3.png`}
                alt="profile"
                className="pro-img"
              />{" "}
              <span>귀금속가공기능사</span>
            </li>
            <li>
              {" "}
              <img
                src={`${path}/images/pro3.png`}
                alt="profile"
                className="pro-img"
              />{" "}
              <span>보석감정사</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
