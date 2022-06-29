import React from "react";
import Pic from '../photos/avatar.JPG'

const MyExperience = () => {
  return (
    <div className="myExperience-container">
      {/* 上 */}
      <section className="section-top">
        <div className="avatar-container">
          <img className="avatar" src={Pic} alt="avatar" />
        </div>
        <div className="content-container">
          <h1 className="title">張凱皓 Terry Chang</h1>
          <p>
            在職期間因為看到遊戲設計的相關影片而受到啟發轉而對寫程式感興趣，從而開始了自我學習與變換跑道的計畫與理想。
          </p>
          <p>
            目前熟悉使用React，同時也在繼續透過學習增進React-redux / Context 等相關知識。
          </p>
          <div className="contact">
            <a href="mailto:terry611004@gmail.com">Email : terry611004@gmail.com</a>
            <br/>
            <a href="https://github.com/KaiHaoChang?tab=repositories" target='blank'>Github</a>
          </div>
        </div>
      </section>

      <hr className="horizontal-line" />

      {/* 中 */}
      <section className="section-mid">
        <h1 className="title">Skills</h1>
        <div className="class-types-container">

          <div className="class-types">
            <h1 className="class-type-title">Web Layout</h1>
            <div className="class-type">
              <h2>HTML / CSS</h2>
              <h2>SCSS</h2>
              <h2>RWD</h2>
            </div>
          </div>
          <div className="class-types">
            <h1 className="class-type-title">JavaScript</h1>
            <div className="class-type">
              <h2>React</h2>
              <h2>ES6</h2>
              <h2>RESTful API</h2>
            </div>
          </div>
          <div className="class-types">
            <h1 className="class-type-title">Others</h1>
            <div className="class-type">
              <h2>Git / GitHub</h2>
              <h2>Figma</h2>
              <h2>Visual Studio</h2>
            </div>
          </div>

        </div>
      </section>

      <hr className="horizontal-line" />

      {/* 下 */}
      <section className="section-bottom">
        <h1 className="title">Experiences</h1>
        <div className="experiences-container">
          <div className="experience-container">
            <h1 className="title">現況 / Current</h1>
            <div className="content">
              <p>
                工業 4.0 科技人文時代講求多元能力 TT 型人才，若不能及時跟上最新的資訊，便很難在這個社會立足。所以要培養跨領域能力，因應時代變遷與需求並同時發展自身興趣。
              </p>
              <p>
                除了英文之外，我也希望我能培養出一個更為專業的專長，以前找尋興趣的路上，發現了自己對程式語言充滿憧憬。故而開始了學習程式語言的旅程。起初的我對程式語言一知半解，在網路上查詢程式語言後，發現這世上有的程式語言有很多類型。當時我選擇了 C++自學，在自學後做了一些較為簡單的邏輯運算後，仍然在原地徘迴，無法了解要如何實現並在實務上使用。經過此次打擊，我重新來過，並在網路上看到了 Alpha camp 的資訊後再閱讀報名前的相關文章才知道實際上程式語言會再根據不同的使用上選擇。而我相對來說對於網頁部分較為感興趣，所以選擇了前端的課程學習。在經過了三個學期的課程後，也更進一步的了解網頁三兄弟的使用。
              </p>
              <p>
                當我閱覽了求職網頁後，使用工具除了 JS/HTML/CSS 外也有其他的 React/Vue..等需求，經了解後得知這些是前端常使用的框架，所以現階段的我也在 Udemy 上找了關於框架的課程持續學習中。我希望我能在學習完前端相關之技能後找到一份自己熱愛的工作，並在這段期間磨練團隊溝通的技巧，並且在最短的時程內，學習到公司所傳授的技術與技能，以便我在未來獲得更高職位時，有統籌事務的能力。此外，工作期間自我勉勵能學習更多事業管理課程，待有機會時，可為公司發揮所長。
              </p>
            </div>
          </div>

          <div className="experience-container">
            <h1 className="title">欣鴻精密機械股份有限公司  /  售服專員 / 2018 - 2022</h1>
            <div className="content">
              <p>主要工作事項：</p>
              <ol>
                <li>處理客戶抱怨問題與協調</li>
                <li>客戶零件之報價</li>
                <li>保固內零件與客購零件之出貨安排(包裝、貨運、報關)</li>
                <li>零件交期追蹤、廠商聯繫</li>
                <li>客戶組裝問題與技術協助問題回覆</li>
                <li>相關技術文件與操作流程製作</li>
                <li>文件英譯作業</li>
                <li>主管交辦事項處理</li>
                <li>相關電控零組件 BOM 表、料號建立</li>
                <li>人員出差之安排與相關作業申請、費用申請。(機票、旅行社、飯店、護照、防疫政策)</li>
                <li>相關部門協助溝通</li>
                <li>季中、季末盤點</li>
                <li>ISO 相關文件整理、審查</li>
              </ol>
              <p>
                心得：過程中學習到人與人、部門與部門之間的相處。因為遇到的客戶問題七成都是機器停止運作，所以需要採取快速的回應已達成客戶滿意，所以在過程中會需要很多部門與人員的協助來達成。
              </p>
            </div>
          </div>

          <div className="experience-container">
            <h1 className="title">雪芙蘭盛香堂股份有限公司  /  廠務 /  畢業後等待服役前</h1>
            <div className="content">
              <p>
                主要為處理商品退貨。要處理的是保養水、面膜、肥皂、洗髮精、乳液等用品的退貨。將過期的物品與尚未過期的區分開來，以便公司之後的運用。過期的產品，後續會將它的內容物取出，放成廢料處理；而未過期的部分則是入倉。
              </p>
            </div>
          </div>

          <div className="experience-container">
            <h1 className="title">在學期間</h1>
            <div className="content">
              <p>
                大學四年期間，靜宜大學寰宇國際學程開放的自由選課架構下我修習了許多類型的課程，其中以會計相關課學類是我的重點項目。修習會計的課程中，讓我更了會計科目對於公司營運的影響。像是成本方面，人資費用所占的成本比例往往是很高的，但也要看是甚麼行業。一間公司要拿捏的好在如何發配薪資並不會造成勞方的反彈。而公司也可以再處理廢料方面進行很好的運用，這可以使得廢料變成有價值的東西。由於在會計科目上突出的表現，更被授課教師選為助教輔導同學，讓我在教導的過程中更能深入熟悉科目。
              </p>
              <p>
                銷/物流管理、企業倫理、證交法等科目也是我修習的重點，由於對這些科目有濃厚的興趣，在愛爾蘭都柏林理工學院海外研習，就讀一年期的管理學院，期間藉由這個機會能更了解不同國家文化的行銷/物流管理與觀念和不同國籍的企業倫理；當時在愛爾蘭最大的議題莫過於英國脫歐(Breixt)，因此上課時教授總是讓我們關心英國脫歐對愛爾蘭的影響並探討其中供應鏈的影響以及愛爾蘭在農產品以及乳製品方面的影響。
              </p>
              <h1>海外留學</h1>
              <p>
                2016 年的 9 月，獨自到了愛爾蘭首都都柏林的都柏林理工學院(Dublin Institute of technology)就讀一年的管理學院，除了完成各項學業課程之外，最大的收穫是了解到當地文化以及更加獨立自主；在校期間接觸到世界各國的學生，且課堂上開放自由的討論模式，來自各國多元文化的交流打開了我的視界，由於有了海外文化的薰陶讓我們可以更多面向的思考去研究。
              </p>
              <h1>國稅局實習</h1>
              <p>
                在校期間，因修習稅務會計之課程，由於成績優異得到了到沙鹿國稅局實習的機會，實習期間主要的工作是推廣國稅局電子發票的軟體，於第一線接觸民眾說明業務的方便性與重要性，並協助民眾繳稅與報稅作業。由於這項歷練，培養出我陌生推廣的能力。
              </p>
            </div>
          </div>


        </div>
      </section>
    </div>
  )
}

export default MyExperience