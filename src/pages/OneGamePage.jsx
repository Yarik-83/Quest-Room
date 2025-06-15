import { useParams } from 'react-router-dom';
import MyButton from '../components/MyButton';
import IconPerson from '../components/icons/IconPerson';
import IconPuzzle from '../components/icons/IconPuzzle';
import IconDivider from '../components/icons/IconDivider';
import ClockIcon from '../components/icons/ClockIcon';
import { useStore } from '../store';




export default function OneGamePage({ arr }) {


    const styleIcon = ' mr-2 ';

    const { setPopupShow } = useStore()
    const { id } = useParams();
    const quest = arr.filter((el) => el.id === +id)[0]

    const openPopup = () => setPopupShow(true)

    function InfoItem({ children, text }) {

        return (
            <div className=" flex text-[#fec432] ">
                {children}
                {text}
            </div>
        )
    }

    return (
        <main className=" relative h-[768px] " style={{ backgroundImage: `url(${quest.picture})`, backgroundSize: 'cover' }}>
            <div className=" w-[580px] g-[560px] relative left-[588px] top-[123px] ">
                <p className=" text-[#f2890f] mb-2.5 ">{quest.genre}</p>
                <h1 className=" text-white text-[96px] font-black mb-10 leading-[95%] ">{quest.title}</h1>
                <div className=" flex mb-6.5 ">
                    <InfoItem text={quest.time}><ClockIcon className={styleIcon} color="#FEC432" /></InfoItem>
                    <IconDivider className='mr-5 ml-5' color="#FEC432" />
                    <InfoItem text={quest.people}><IconPerson className={styleIcon} color="#FEC432" /></InfoItem>
                    <IconDivider className='mr-5 ml-5' color='#FEC432' />
                    <InfoItem text={quest.level}><IconPuzzle className={styleIcon} color="#FEC432" /></InfoItem>
                </div>
                <p className="text-[#e5e5e5] font-medium leading-[150%] mb-9 " >{quest.description}</p>
                <MyButton click={openPopup} className=' w-[185px] h-12 rounded-md  bg-[#fec432] border-none text-[#514321] m-auto  ' text="Взяти участь" />
            </div>
        </main>
    )
}

