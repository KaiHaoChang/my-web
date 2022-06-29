import React from "react";
import Pic1 from '../photos/myInfo/myInfo1.jpg'
import Pic2 from '../photos/myInfo/myInfo2.jpg'
import Pic3 from '../photos/myInfo/myInfo3.JPG'
import SocialMedia from '../components/social-media/SocialMedias'

const data =[
  {
    id :'1' ,
    title : '目前的我在做什麼',
    content : '目前我正在持續學習與加強在前端網頁開發的技能。從最一開始的學習Javascript / HTML / CSS 到後來學習React都覺得非常有趣。接下來會開始增進自己關於React更深入的使用以及API的串接。'
  },
  {
    id :'2' ,
    title : '工作方面，我熱衷的點',
    content : '各不管在做甚麼工作，從我的個人觀點來說，都是盡一切努力將工作完成。 隨著工作的熟悉度提升，有效的進行改善已達使效率提升，並享受提升效率所帶來的成就感。'
  },
  {
    id :'3' ,
    title : '團隊中的我',
    content : '不管在任何一個團體中，我相信不管是誰都是團隊中重要的螺絲，重要的一員。身為團隊中一員的我，也致力於協助大家一同完成任務。每個人在團隊中皆扮演著重要的角色，我喜歡成為任何一名角色來完成大大小小的任務。'
  },
  {
    id :'4' ,
    title : '我的個性',
    content : '我自認為自己是責任感強，樂觀向上且適應力好的人。面對著各種繁瑣複雜的任務，都會希望可以儘快完成。 與人的相處皆以誠實為原則，並希望人與人之間可以少一分紛爭多一分親和。'
  },
  {
    id :'5' ,
    title : '我的興趣',
    content : '因為對音樂的節奏較有興趣，所以學習爵士鼓。雖然沒有玩樂團，但也會跟著歌曲演奏。除了音樂，平時也喜歡跑步與走一些登山步道。以及出遊玩時拍攝一些好看的風景照片。除此之外平時休閒娛樂有看影集、遊戲...等等'
  },  
  {
    id :'6' ,
    title : '我的聯絡方式',
    content : ''
  },
]

const MyInfo = () => {

  return (
    <div className="myInfo-container">
      {/* 上 */}
      <section className="section-top">
        <div className="myImage">
          <img src={Pic1} />
        </div>
        <div className="content">
          <div className="content-container">
            <h1 className="title">{data[0].title}</h1>
            <p className="content">{data[0].content}</p>
          </div>
          <div className="content-container">
            <h1 className="title">{data[1].title}</h1>
            <p className="content">{data[1].content}</p>
          </div>
        </div>
      </section>

      {/* 中 */}
      <section className="section-mid">
        <div className="content">
          <div className="content-container">
            <h1 className="title">{data[2].title}</h1>
            <p className="content">{data[2].content}</p>
          </div>
          <div className="content-container">
            <h1 className="title">{data[3].title}</h1>
            <p className="content">{data[3].content}</p>
          </div>
        </div>
        <div className="myImage"> <img src={Pic2} /> </div>
      </section>

      {/* 下 */}
      <section className="section-bottom">
        <div className="myImage"> <img src={Pic3} /> </div>
        <div className="content">
          <div className="content-container">
            <h1 className="title">{data[4].title}</h1>
            <p className="content">{data[4].content}</p>
          </div>
          <div className="content-container">
            <h1 className="title">{data[5].title}</h1>
            <SocialMedia />
          </div>
        </div>
      </section>
    </div>
  )
}

export default MyInfo