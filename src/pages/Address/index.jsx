import React, { useState, useEffect } from "react";
import Layout from '@/Components/Layout';
import Button from '@/Components/Button';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
const MapCompo = dynamic(() => import("../../Components/Map"), { ssr: false });

import { useSelector, useDispatch } from 'react-redux';
import { sendDataToServer } from '@/lib/slices/dataSlice';

function Address() {
  const status = useSelector((state) => state.data.status);
  const mobile = useSelector((state) => state.data.mobile);


  const dispatch = useDispatch();
  const router = useRouter();

  let [viewport, setViewport] = useState({
    longitude: 35.74122082775211,
    latitude: 51.412425376250965,
    zoom: 15,
  });

  let [userLocation, setUserLocation] = useState(null);
  let [address, setAddress] = useState(null);

  useEffect(() => {
    if (status === null) {
      router.push('/Home');
    } else if (typeof window !== "undefined") {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          setViewport((prevViewport) => ({
            ...prevViewport,
            longitude,
            latitude,
          }));
          setUserLocation({ longitude, latitude });

          fetchAddress(latitude, longitude);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    }
  }, [status]);

  const fetchAddress = (latitude, longitude) => {
    const url = `https://map.ir/reverse?lat=${latitude}&lon=${longitude}`;

    fetch(url, {
      headers: {
        "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImExYzVlY2YwMWI1Mjk4M2NjYjQzOWZiYjE5MWViOTBhYzRjY2Y5ODc1N2YzY2ViOTBmYWFjNmQ3ZWEzNzg1ZDczZTBkZmRjMTZhNWVkOGI1In0.eyJhdWQiOiIyNTYwMSIsImp0aSI6ImExYzVlY2YwMWI1Mjk4M2NjYjQzOWZiYjE5MWViOTBhYzRjY2Y5ODc1N2YzY2ViOTBmYWFjNmQ3ZWEzNzg1ZDczZTBkZmRjMTZhNWVkOGI1IiwiaWF0IjoxNzA3MDUwMjMzLCJuYmYiOjE3MDcwNTAyMzMsImV4cCI6MTcwOTM4MzAzMywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.jrqpAKcZWEqzFDsfggJgQ0ROBkX7jvLvCq78R3uxNThKvMNXL9l2rqHj-MrgftXbQqAXXg4TaWBKkH1g15bnri-ohzlDxhgbmfq79sMHUW4RncMEl6InlVlLZz_mk3dzSnEHTjoSU7Ba5rWVCPNXuVPsiVbOwVpwRWeTyDXxP36b38aOLlBVxvQzs41lsbMoDWhP42nbBt7ipudE1j-d3WAASYCM80118X3zmK6hd005KgRG-v5v5tEbIv7NTMJd-5EIwOyMxQXQm_kc1WhdWcGqh3ddBC1yT9kBSwbPL6ef24VdgAf0dWhcX_LbCLLBcjv1uzdovC218BG5VC7Rzw',
      },
    })
      .then(response => response.json())
      .then(data => {
        setAddress(data.address);
      })
      .catch(error => {
        console.error("Error fetching address:", error);
      });
  };

  const handleSendViaInternet = () => {
    if (status) {
      dispatch(
        sendDataToServer({
          mobile: mobile,
          status: status,
          address: address,
          lat: userLocation?.latitude,
          lang: userLocation?.longitude,
        })
      );
    } else {
      console.error("Status not set");
    }
    router.push('/End');
  };

  return (
    <Layout>
      <div className='w-full flex flex-col justify-center items-center'>
        <p className='text-black text-3xl text-center font-bold'>
          موقعیت شما
        </p>
        <MapCompo />
      </div>
      <div className='w-full flex flex-col content-end items-end'>
        <p className='text-black text-xl text-center font-bold mb-3'>
          : آدرس شما
        </p>
        <textarea
          className='w-full h-16 p-2 text-black rounded-xl'
          style={{ resize: 'none' }}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          dir="rtl"
          lang="fa"
        />
      </div>
      <Button
        className={`bg-yellow ${!address ? 'disabled:bg-darkGray' : ''}`}
        onClick={handleSendViaInternet}
        disabled={address === null || address === undefined}
      >
        ارسال از طریق اینترنت
      </Button>
    </Layout>
  );
}

export default Address;
