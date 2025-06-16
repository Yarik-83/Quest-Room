
import * as React from 'react';
import SetOfButtons from '../components/SetOfButtons.jsx';
import WrapCards from '../components/WrapCards';
import {useStore} from '../store';

export default function MainPage(): React.ReactElement {

const listButtons: string[] = ['Всі Ігри','Пригодне','Страшне','Містичне','Детективне','Sci-Fi']

const{questsOfGenre,} = useStore()

    return(
        <div className=" mx-33.25 pt-30.5 h-[768px] ">
            <p className=" text-[#F2890F] mb-2.5 ">Ігри у Львові</p>
            <h2 className="text-white text-[64px] font-extrabold mb-12.5  ">В яку гру зіграємо?</h2>
            <SetOfButtons arr={listButtons} />
            <div className=" h-[365px] overflow-auto  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] " >
                <WrapCards arr={questsOfGenre} />
            </div>
        </div>
    )
}