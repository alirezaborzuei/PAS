import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


function Index() {
  const router = useRouter();
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    const { mobile } = router.query;
    if (mobile) {
      setMobile(mobile);

    }

    const loadingTimeout = setTimeout(() => {
      router.push('/AddNumber');
    }, 1500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [router]);

  console.log(mobile)
  return (
    <div>
    </div>
  );
}

export default Index;
