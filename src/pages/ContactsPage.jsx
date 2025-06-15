
import MyMap from '../components/MyMap';


export default function ContactsPage() {


function ContactDetails({ firstText, secondText }) {
    return (
        <div className=" flex flex-col gap-2.5 ">
            <p className="text-[#E5E5E5] text-base font-bold ">{firstText}</p>
            <p className="text-[#E5E5E5] text-base ">{secondText} </p>
        </div>
    )
}

    return (
        <div className='block max-h-[768px]'>
            <div  className=" flex pt-[138px] pb-[163px] pl-[145px] pr-[150px] justify-between items-end h-[768" >
                   <div className=" flex flex-col ">
                <p className=" mb-4 font-medium text-[#F2890F] ">Львові</p>
                <h2 className=" text-[64px] font-extrabold text-[#FFFFFF] mb-7.5 ">Контакти</h2>
                <div className=" flex flex-col gap-6 ml-7 ">
                    <ContactDetails firstText="Адреса" secondText="Львів, Площа Ринок, 3Б" />
                    <ContactDetails firstText="Години роботи" secondText="Щоденно, з 9:00 до 20:00" />
                    <ContactDetails firstText="Телефон" secondText="+38 (050) 555-99-55" />
                    <ContactDetails firstText="E-mail" secondText="lviv.games@game.ua" />
                </div>
                
            </div>
                  <MyMap />
            </div>
         
          
        </div>
    )
}
