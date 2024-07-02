import React, { useState } from 'react';
import Image from 'next/image';

import Layout from '@/Components/Layout';
import Button from '@/Components/Button';

import UnileverLogo from '@/Images/unilever.svg';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setMobile } from '@/lib/slices/dataSlice';

function Index() {
  const [mobileNumber, setMobileNumber] = useState('');

  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddNumber = () => {
    // Remove leading zero if it exists
    const cleanedMobileNumber = mobileNumber.startsWith('0')
      ? mobileNumber.slice(1)
      : mobileNumber;

    if (cleanedMobileNumber && (cleanedMobileNumber.length === 10 || cleanedMobileNumber.length === 11)) {
      router.push('/Home');
      dispatch(setMobile(cleanedMobileNumber));
    } else {
      router.push('/');
    }
  };

  const handleInputChange = (e) => {
    let inputNumber = e.target.value;
    if (inputNumber.length === 11 && inputNumber.startsWith('0')) {
      inputNumber = inputNumber.slice(1);
    }
    setMobileNumber(inputNumber);
  };

  return (
    <Layout>
      <Image src={UnileverLogo} alt="Picture of the author" width={150} height={150} />

      <p className='text-black text-4xl text-center font-bold'>
        شماره تماس خود را وارد کنید؟
      </p>
      <input
        className='w-[80%] h-16 rounded-xl p-3 font-bold text-2xl text-black'
        pattern="[0-9]*"
        type="number"
        value={mobileNumber}
        onChange={handleInputChange}
        maxLength="11" // Allow 11 digits for possible leading zero
        size="11"
        inputMode="numeric"
      />
      <Button
        className={`bg-yellow ${!mobileNumber || (mobileNumber.length !== 10 && mobileNumber.length !== 11) ? 'disabled:bg-darkGray' : ''}`}
        onClick={handleAddNumber}
        disabled={!mobileNumber || (mobileNumber.length !== 10 && mobileNumber.length !== 11)}
      >
        ارسال از طریق اینترنت
      </Button>
    </Layout>
  );
}

export default Index;
