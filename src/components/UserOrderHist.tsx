
import { IOrderGameRes } from "../interface";
import {useQuery} from '@tanstack/react-query'
import MySpiner from "./MySpiner";
import Cookies from "js-cookie";
import { BASE_URL } from "../config";
import { useStore } from "../store";



export default function UserOrderHist(): React.JSX.Element {


  const{setFetchErrMessage} = useStore()

  const URL = `${BASE_URL}/order/list`

  const getOrders = async () => {
    const res = await fetch(URL,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        }
      }
    )
    if (res.ok) return await res.json()
    else throw new Error(`${res.status} ${res.statusText}`);
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
    retry: 2,
  })

  if (error) {
 if(error instanceof Error){
  setFetchErrMessage(error.message)
 }
 throw error
  }

  if (isLoading) return <MySpiner />

  return (
    <div className=" w-full h-150  overflow-auto  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
      <div className=" mx-auto flex flex-col h-250 w-[500px]  gap-y-6 mb-5 bg-transparent ">
        {data.map((order: IOrderGameRes) => (
          <CardOrder key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}

interface IOrderGame {
  order: IOrderGameRes
}

function CardOrder({ order }: IOrderGame): React.JSX.Element {

  return (
    <div className='  rounded-2xl h-[200px] flex-shrink-0 flex'
      style={{ backgroundImage: `url(${order?.quest.picture})`, backgroundSize: 'cover' }}>
      <div className=' flex flex-col text-center justify-around  h-full  ' >
        <h4 className=' text-[#FFFFFF] mb-2 text-2xl font-bold ' >{order.quest.title} </h4>
        <p className="text-[#A6A6A6] ">{`Дата замовлення: ${order.createAt.split('T')[0]}`}</p>

      </div>
    </div>
  )

}
