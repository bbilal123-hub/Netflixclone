import React from 'react';
import Row from '../Row/Row';
import "../Rowlist/rowlist.css"
import requests from '../../utils/request';

function Rowlist() {
  return (
   <>
   <div className='Netflix ORIGINAL'>
         <Row title="Netflix ORIGINAL" fetchUrl={requests.fetchNetflixOriginal} isLarge={true} />
   </div>
      <div className="rowlist">
   
    <div className="rowlist1">
      <Row  title="🔥 Popular" fetchUrl={requests.fetchPopular} />
      <Row title="🔫 Action" fetchUrl={requests.fetchAction} />
      <Row title="😂 Comedy" fetchUrl={requests.fetchComedy} />
      <Row title="😱 Horror" fetchUrl={requests.fetchHorror} />
      <Row title="💘 Romance" fetchUrl={requests.fetchRomance} />
      <Row title="📺 Now Playing" fetchUrl={requests.fetchLive} />
      <Row title="🎞️ Trailers" fetchUrl={requests.fetchTrailers} />
    </div>
    </div>
    </>
  );
}

export default Rowlist;
