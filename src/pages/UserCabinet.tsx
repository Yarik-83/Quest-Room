
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import MySpiner from '../components/MySpiner';
import MyButton from '../components/MyButton';
import { useState } from 'react';
import UserOrderHist from '../components/UserOrderHist';
import { BASE_URL } from '../config';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';


export default function UserCabinet() {

  const { userId,setUserId } = useStore()
  const [isShowHist, setIsShowHist] = useState(false)
  const [btnText, setBtnText] = useState('Історія замовлень')
  const navigate = useNavigate()

  const handleClick = () => {
    if (!isShowHist) {
      setIsShowHist(true)
      setBtnText('Скрити історію')
    } else {
      setIsShowHist(false)
      setBtnText('Історія замовлень')
    }
  }

  const getOut = () => {
    setUserId(null)
    Cookies.remove('token')
        navigate("/")
  }

  const URL = `${BASE_URL}/user`;
  async function fetchUsers() {
    try {
      const res = await fetch(URL, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
          'Cache-Control': 'no-cache',
        },
      });

      if (!res.ok) {
        throw new Error(`ERROR ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw error;
    }
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: fetchUsers,
    retry: 1,
    staleTime: 0,
    gcTime: 0,
  });

  if (isLoading) return <MySpiner />

  if (error instanceof Error) return (
    <div className='flex h-[768px] items-center justify-center text-white text-3xl'> {error.message} </div>
  )

  if (data) {
    return (
      <div className=" flex flex-col h-[768px] pt-19 relative ">
        <div className='flex justify-between ' >
          <h2 className=" text-3xl font-bold text-[#FFFFFF] ml-125  h-12 mt- ">Особистий кабінет</h2>
          <MyButton className='absolute top-19 right-9 w-[185px] h-12 rounded-md  bg-[#fec432] border-none text-[#514321] m-auto active:bg-[#F2890F]  ' text={btnText} click={handleClick} />
        </div>
        <div className='flex '>
          <div className='flex flex-col ml-9 '>
            {data.phone ? <h1 className="text-white pt-8 text-2xl">Телефон:  {data.phone}</h1> : null}
            {data.name ? <h1 className="text-white pt-8 text-2xl">Ім'я:  {data.name}</h1> : null}
            {data.email ? <p className='text-white pt-4'> Email: {data.email}</p> : null}
            <p className='text-white pt-4'> На сайті з : {new Date(data.createAt).toLocaleDateString('uk-UA')}</p>
          </div>
          <div className='flex-1 px-9 pt-9'>
            {isShowHist ? <UserOrderHist /> : null}
          </div>
        </div>
        <MyButton className='absolute bottom-19 left-9 w-[185px] h-12 rounded-md  bg-[#dfd6bf] border-none text-[#514321] m-auto active:bg-[#a09d99]  ' text='Вийти з акаунту' click={getOut} />
      </div>
    )
  }
}

