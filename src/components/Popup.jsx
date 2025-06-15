
import CloseIcon from './icons/CloseIcon';
import MyButton from './MyButton';
import { useStore } from '../store';
import Checkbox from './Checkbox';



export default function Popup() {

  const { setPopupShow, } = useStore()

  const handleClick = () => { }
  const closePopup = () => { setPopupShow(false) }


  const inputStyle = ' text-white bg-[#535353] border-none text-sm w-100 h-14 rounded-m mb-8 pl-6 placeholder:text-[#A6A6A6] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none '


  return (
    <div className=" flex justify-center z-10 absolute top-0 w-full h-[768px] backdrop-blur-md ">
      <div className=" flex flex-col bg-[#141414] w-120 h-147 rounded-2xl mt-13 pl-8 pr-11 pb-12 pt-13 relative ">
        <CloseIcon click={closePopup} color="#A6A6A6" className=' items-end justify-end absolute right-8 top-8' />
        <h3 className=" text-[40px] font-extrabold text-[#ffffff] mb-7 ">Заявка на гру</h3>
        <form action="" className="">
          <input className={inputStyle} name='name' type="text" placeholder='Ваше ім’я' />
          <input className={inputStyle} name='phone' type="tel" placeholder='Ваш номер телефону' />
          <input className={inputStyle} name='counts' type="number" placeholder='Кількість гравців' />
          <div className=" flex gap-6 ">
            <Checkbox className='appearance-none bg-[#535353] min-w-[16px] max-h-[16px] checked:border-[#F2890F] checked:border-[2px]' />
            <p className=" text-[#e5e5e5] leading-[144%] font-bold mb-8 ">Погоджуюсь з <span className=' underline  '>правилами обробки персональних даних</span>  та <span className='trxt-rules__span'>угодою користувачів</span> </p>
          </div>
        </form>
        <MyButton click={handleClick} className='w-[229px] rounded-md bg-[#fec432] border-none text-[#514321] m-auto leading-12 ' text='Відправити заявку' />
      </div>
    </div>
  )
}


