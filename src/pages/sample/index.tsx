import { useRouter } from 'next/router';
import React from 'react';

const Sample = () => {
  const { push } = useRouter();
  return (
    <>
      <h2>Here is example of using sample code</h2>
      <ul>
        <li onClick={() => push('/sample/use-lang')}>Demo useLanguage</li>
        <li onClick={() => push('/sample/use-toggle')}>Demo useToggle</li>
        <li onClick={() => push('/sample/use-debounce')}>Demo useDebounce</li>
        <li onClick={() => push('/sample/swr')}>Demo call api</li>
        <li onClick={() => push('/sample/redux-reducer')}>Demo Redux</li>
      </ul>
    </>
  );
};

export default Sample;
