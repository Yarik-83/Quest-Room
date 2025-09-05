import { useEffect } from "react";
import { useStore } from "../../store";
import CloseIcon from "../icons/CloseIcon";
import MyButton from "../MyButton";


export default function PopupLoginOptions() {

  const { setSignUpByPhone, setPopupSignIn, setPopLoginOpt } = useStore();

  const openPopupSignByLogin = () => {
    setPopupSignIn(true)
    setSignUpByPhone(false)
    setPopLoginOpt(false)
  }
  const openPopupSignByPhone = () => {
    setSignUpByPhone(true)
    setPopLoginOpt(false)
    setPopLoginOpt(false)
  }

const closePopup = ()=> setPopLoginOpt(false)

 useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
  }, [closePopup]);

   const styleForBtnPhone = 'w-[185px] h-12 rounded-md  bg-[#fec432] border-none text-[#514321] m-auto   '

  return (
    <div className=" flex justify-center z-10 absolute top-0 w-full h-[768px] backdrop-blur-md ">

      <div className=" flex flex-col bg-[#141414] w-150 h-117 rounded-2xl mt-33 pl-10 pr-11 pb-12 pt-13 relative ">
         <CloseIcon click={closePopup} color="#A6A6A6" className=' items-end justify-end absolute right-8 top-8' />
        <h3 className=" text-center text-[40px] font-extrabold text-[#ffffff] mb-7 ">Оберіть варіант входу </h3>
        <div className=" flex gap-2 pt-20 ">
          <MyButton className={styleForBtnPhone} text="Логін" click={openPopupSignByLogin} />
          <MyButton className={styleForBtnPhone} text="Телефон" click={openPopupSignByPhone} />
        </div>
      </div>
    </div>
  )
}
