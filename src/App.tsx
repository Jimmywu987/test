import React from 'react';
import './App.css';
import Nav from './components/Nav';
import LowBar from './components/LowBar';
import ContentUpperPart from './components/ContentUpperPart';
import Content from './components/Content';
import ContentLowerPart from './components/ContentLowerPart';
import ContentLowestPart from './components/ContentLowestPart';
import ContentBottom from './components/ContentBottom';

function App() {
  return (
    <div>
      <Nav />
      <LowBar />
      <ContentUpperPart />
      <Content img="1.png" bigImgWeigth="1200px" flex="row"title="提升曝光率" src1="icon1.png" smallTitle1="優先排名" words1="購買「專頁廣告」之後，你的個人專頁將會被優先顯示於搜索頁面。" src2="icon2.png" smallTitle2="出現更多" words2="你的專頁會出現在網頁上更多地方，包括網站首頁、搜索列表頂部、相關行業文章和客戶工作記錄版。" src3="icon3.png" smallTitle3="機會倍升" words3="購買專頁廣告，最多可以獲得超過30倍專頁曝光！" width1="100px" width2="150px" width3="80px"/>
      <Content img="2.png" bigImgWeigth="800px" flex="row-reverse" title="解鎖訊息限制" src1="icon4.png" smallTitle1="無上限訊息" words1="可接收訊息上限提升至無限個，獲取更多客戶查詢。" src2="icon5.png" smallTitle2="線上聊天室" words2="在網站上聊天室直接與客戶直接進行商討工作詳情。" src3="icon6.png" smallTitle3="增廣人脈" words3="更容易吸引我們平台上各行各業的客人主動聯絡你。" width1="100px" width2="100px" width3="100px"/>
      <Content img="3.png" bigImgWeigth="1000px" flex="row" title="專頁數據分析" src1="icon7.png" smallTitle1="知道誰在關注你" words1="清楚知道檢視專頁人數，與他們的身份。" src2="icon8.png" smallTitle2="專頁點擊率" words2="提供更多有用數據例如專頁點擊率，令你更容易了解專頁表現。" src3="icon9.png" smallTitle3="專頁逗留時間" words3="了解訪客平均逗留時間，有助你創作更吸引的專頁內容。" width1="85px" width2="120px" width3="105px"/>
      <ContentLowerPart />
      <ContentLowestPart />
      <ContentBottom />
    </div>
  );
}

export default App;
