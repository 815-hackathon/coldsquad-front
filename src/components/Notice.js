import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const NoticeIMG = styled.img.attrs(({ src }) => {
  src;
})`
  width: 100px;
  height: 100px;
`;

const Notice = ({ name, content }) => {
  return (
    <Wrapper>
      <div>
        <NoticeIMG src="../assets/notice.png" />
      </div>
      <div>
        <h3>{name}</h3>
        <div>{content}</div>
      </div>
    </Wrapper>
  );
};

export default Notice;
