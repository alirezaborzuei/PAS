import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMobile } from '@/lib/slices/dataSlice';

const MyPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {

    const { id } = router.query;
    if (id && id.length === 10) {
      router.push('/Home');
      dispatch(setMobile(id));
    } else {
      router.push('/404');

    }

  }, [router.query.id]);

  return (
    <div>

    </div>
  );
};

export default MyPage;
