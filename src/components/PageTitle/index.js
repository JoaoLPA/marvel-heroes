import React, { useEffect } from 'react';

const PageTitle = ({ title }) => {
  useEffect(() => (document.title = title), []);
  return <></>;
};

export default PageTitle;
