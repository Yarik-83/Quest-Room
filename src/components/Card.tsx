import {IQuest} from "../interface"
import { Link } from 'react-router-dom'
import IconPerson from './icons/IconPerson';
import IconPuzzle from './icons/IconPuzzle';
import IconDivider from './icons/IconDivider';

interface ICard{
    card: IQuest
}

export default function Card({ card }: ICard): React.JSX.Element { 


    const dividerStyle: string = 'ml-3 mr-3'
    const iconStyle: string = 'mr-2 '

    return (
        <Link to={`detailed-quest/${card.id}`} className=' relativ rounded-2xl relative'
            style={{ backgroundImage: `url(${card.picture})`, backgroundSize: 'cover' }}>
            <div className=' flex flex-col items-end absolute mr-6 mb-5 right-0 bottom-0 ' >
                <h4 className=' text-[#FFFFFF] mb-4 text-2xl font-bold ' >{card.title} </h4>
                <div className=' flex  '>
                    <IconPerson className={iconStyle} color='#FFFFFF' />
                    <p className="text-[#E5E5E5]">{card.people} </p>
                    <IconDivider className={dividerStyle} color='#FFFFFF' />
                    <IconPuzzle className={iconStyle} color='#FFFFFF' />
                    <p className="text-[#E5E5E5]">{card.level} </p>
                </div>
            </div>
        </Link>
    )
}