import { ReactNode, useEffect } from "react"
import CloseIcon from "../icons/CloseIcon"
import { useStore } from "../../store";
import MySpiner from "../MySpiner";




interface IPopupProps {
  children: ReactNode;
  onSubmitForm: () => void;
  btnText: string;
  title: string;
}

export default function Popup(props: IPopupProps): React.ReactElement {
  const { children, btnText, onSubmitForm, title } = props

  const { setPopupSignUp, fetchErrMessage, setPopupSignIn, isLoading,
     setGameRequest, setFetchErrMessage,setSignUpByPhone, setSignInByPhone } = useStore()

  const closePopup = () => {
    setPopupSignUp(false)
    setPopupSignIn(false)
    setGameRequest(false)
    setSignUpByPhone(false)
    setSignInByPhone(false)
    setFetchErrMessage(null)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
  }, [closePopup]);

  return (
    <div className=" flex justify-center z-10 absolute top-0 w-full h-[768px] backdrop-blur-md ">
      <div className=" flex flex-col bg-[#141414] w-120 h-160 rounded-2xl mt-13 pl-10 pr-11 pb-12 pt-13 relative ">
        <CloseIcon click={closePopup} color="#A6A6A6" className=' items-end justify-end absolute right-8 top-8' />
        <h3 className=" text-[40px] font-extrabold text-[#ffffff] mb-7 ">{title} </h3>
        <form onSubmit={(e)=>{
          e.preventDefault()
          onSubmitForm()
        }} className="flex flex-col justify-center">
          {children}
          <button type="submit" className='w-[229px] rounded-md bg-[#fec432] border-none text-[#514321] m-auto leading-12'
          >{btnText}</button>
        </form>
        {!fetchErrMessage ? null : <div className='text-[#F2890F] mx-auto text-center mt-4'>{fetchErrMessage}</div>}
        {!isLoading? null : <MySpiner/>}
      </div>
    </div>
  )
}