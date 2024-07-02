import React, { useState, useEffect } from 'react';
import Layout from '@/Components/Layout';
import Button from '@/Components/Button';
import Image from 'next/image';
import UnileverLogo from '@/Images/unilever.svg';
import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';
import { setResponseStatus } from '@/lib/slices/dataSlice';

function Index() {
  const [userState, setUserState] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const mobile = useSelector((state) => state.data.mobile);


  useEffect(() => {
    if (mobile === null) {
      router.push('/');
    }
  }, [mobile]);

  const handleGoodStateClick = () => {
    setUserState('NoNeedHelp');
    router.push('/Address');
    dispatch(setResponseStatus('NoNeedHelp'));
  };

  const handleHelpNeededClick = () => {
    setUserState('NeedHelp');
    router.push('/Address');
    dispatch(setResponseStatus('NeedHelp'));
  };

  return (
    <Layout>
      <Image
        src={UnileverLogo}
        alt="Picture of the author"
        width={150}
        height={150}
      />

      <p className="text-black text-3xl text-center font-bold">
        در حال حاضر در چه وضعیتی هستید ؟
      </p>

      <Button className="bg-green" onClick={handleGoodStateClick}>
        در وضعیت خوبی هستم
      </Button>

      <Button className="bg-red" onClick={handleHelpNeededClick}>
        نیاز به کمک دارم
      </Button>
    </Layout>
  );
}

export default Index;
