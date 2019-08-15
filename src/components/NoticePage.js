import React from 'react';
import { Link } from 'react-router-dom';

import NoticeList from './NoticeList';
import PlusButton from './PlusButton';

const NoticePage = () => {
  const notices = [
    {
      _id: '123',
      name: '공지입니다.',
      content: '냉장고에 김밥 다 드셔도 됩니다.'
    }
  ];
  return (
    <div>
      <div style={{ width: '100%' }}>
        <h2 style={{ display: 'inline-block' }}>공지사항</h2>
        <Link to={'/newfood'} style={{ float: 'right' }}>
          <PlusButton />
        </Link>
      </div>
      <Link to={'/newNotice'} />
      <NoticeList notices={notices} />
    </div>
  );
};

export default NoticePage;
