import { useRouter } from 'next/router';
import React from 'react';

const Sample = () => {
  const { push } = useRouter();
  return (
    <>
      <h2>Here is example of using sample code</h2>
      <ul>
        <li onClick={() => push('/sample/use-lang')}>useLanguage</li>
        <li onClick={() => push('/sample/use-toggle')}>useToggle</li>
      </ul>
    </>
  );
};

export default Sample;
