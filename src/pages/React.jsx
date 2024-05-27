// import React from 'react';
import reactImg from '../images/react_img.png';

export default function ReactPage() {
  return (
    <div>
      <h1>React</h1>
      <img src={reactImg}></img>
      <p>리액트란? </p>
      <ul>
        <li>UI 구축을 위한 자바스크립트 라이브러리</li>
        <li>주로 SPA(Single Page Application)을 만들 때 사용</li>
      </ul>
      <br></br>
      <p>리액트의 장점?</p>
      <ul>
        <li>재사용 가능한 UI 구성 요소 만들 수 있음</li>
        <li>컴포넌트를 조립하여 UI를 개발하기 때문에 유지, 보수 용이</li>
        <li>페이지 전체를 렌더링 하지 않고 부분만 렌더링 가능</li>
      </ul>
      <br></br>
      <p>리액트를 사용하는 이유?</p>
      <ul>
        <li>Virtual DOM의 사용</li>
        <li>컴포넌트 단위 개발</li>
        <li>JSX의 지원</li>
        <li>서버 사이드 렌더링, 클라이언ㅌ 사이드 렌더링 지원</li>
        <li>다른 프레임워크와 혼용 가능</li>
      </ul>
    </div>
  );
}
