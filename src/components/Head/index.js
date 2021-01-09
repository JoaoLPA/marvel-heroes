import React, { useEffect } from 'react';

const Head = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const link = document.createElement('link');
    link.type = 'text/css';
    link.href =
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Source+Sans+Pro:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    head.appendChild(link);
  }, []);

  return <></>;
};

export default Head;
