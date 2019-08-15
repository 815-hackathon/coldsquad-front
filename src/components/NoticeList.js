import React from 'react';

import Notice from './Notice';

const NoticeList = ({ notices }) => {
  const getComponents = () => notices.map(notice => <Notice key={notice._id} {...notice} />);
  return <>{getComponents()}</>;
};

export default NoticeList;
