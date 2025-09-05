
import * as React from 'react';
import SetOfButtons from '../components/SetOfButtons.jsx';
import WrapCards from '../components/WrapCards';
import { useStore } from '../store';
import { useEffect } from 'react';
import { IQuest } from '../interface.js';
import { useQuery } from '@tanstack/react-query';
import MySpiner from '../components/MySpiner.js';
import { fetchData } from '../utils.js';
import { BASE_URL } from '../config';


export default function MainPage(): React.ReactElement {

  const { questsOfGenre, setAllQuests, listQuests, setListQuests, } = useStore()
  const URL = `${BASE_URL}/quests`

  const {  isError, data, error, isLoading } = useQuery({
    queryKey: ['qusts'],
    queryFn: () => fetchData(URL),
    staleTime: 24*60*60*1000,
    gcTime: 24*60*60*1000,
    retry: false,
  })

  useEffect(() => {
    if (data) {     
      setAllQuests(data)
       setListQuests(Array.from(new Set(data.map((quest: IQuest) => quest.genre).flat())))
    }
  }, [data])

if(isLoading) {
  return(
   <div className=" mx-33.25 pt-30.5 h-[768px] ">
    <MySpiner />
  </div>
  )
}

  if (isError) {
    return (
      <div className=" mx-33.25 pt-30.5 h-[768px] ">
        <div className='flex justify-center pt-60 h-full text-[#F2890F] text-3xl'>{error.message}</div>
      </div>
    )
  }

  return  <div className=" mx-33.25 pt-30.5 h-[768px] ">
    <p className=" text-[#F2890F] mb-2 ">Ігри у Львові</p>
    <h2 className="text-white text-[64px] font-extrabold mb-2.5  ">В яку гру зіграємо?</h2>
    <SetOfButtons arr={listQuests} />
    <div className=" h-[365px] overflow-auto  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] " >
      <WrapCards arr={questsOfGenre} />
    </div>
  </div> 
}



