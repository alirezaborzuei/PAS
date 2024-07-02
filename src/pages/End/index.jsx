import React from 'react'

import Layout from '@/Components/Layout'

import Image from 'next/image';

import UnileverLogo from '@/Images/unilever.svg'
function index() {
  return (
    <Layout>
      <Image
        src={UnileverLogo}
        alt="Picture of the author"
        width={150}
        height={150}
      />

      <p className='text-black text-4xl text-center font-bold'>
        با تشکر از همکاری شما      </p>

    </Layout>
  )
}

export default index