import React from 'react';
import { Link } from 'react-router-dom';

const NoticePage = () => {
  return (
    <div>
      <Link to={'/newNotice'}>
        <button>+</button>
      </Link>
      여기는 notice입니다만
    </div>
  );
};

export default NoticePage;
