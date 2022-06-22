import React from "react";
import avatar from '../photos/avatarHP.svg';
import Footer from "../components/Footer";

import SocialMedias from "../components/social-media/SocialMedias";
import Motto from "../components/Motto";
import PersonalInfos from "../components/PersonalInfos";

const Homepage = () => { 
  return (
    <div className="homepage-container">
      {/* 左邊頁 */}
      <section className="homepage section-left">
        <div className="backgroundImg"></div>
        <div className="title-containers">
          <div className="title-container">
            <h1 className="title1">你好，</h1>
            <h1 className="title2">我的名字叫<span>張凱皓</span>，</h1>
            <h1 className="title3">歡迎蒞臨我的個人網站。</h1>
          </div>
        </div>

        <div className="avatar-container">
          <img className="avatarHomePage" src={avatar} alt="terry" />
        </div>
        
        <SocialMedias />
      </section>
      
      {/* 右邊頁 */}
      <section className="homepage section-right">
        <div className="backgroundImg"></div>
        <Motto />
        <PersonalInfos />
        <Footer />
      </section>
    </div>
  )
}

export default Homepage;