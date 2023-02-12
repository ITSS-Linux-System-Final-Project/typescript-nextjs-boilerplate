import Head from 'next/head';
import type { ReactNode } from 'react';
import React from 'react';

// import GeneralModal from 'src/components/common/GeneralModal';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

type Props = {
  children: ReactNode;
  title?: string;
};

const LayoutDocument = ({
  children,
  title = 'This is the default title',
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {/* <GeneralModal /> */}
      <div className="pt-[74px] pb-[30px]">{children}</div>
      <Footer />
    </>
  );
};
export default LayoutDocument;
