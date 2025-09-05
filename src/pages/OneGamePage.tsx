import { useParams } from "react-router-dom";
import MyButton from "../components/MyButton";
import IconPerson from "../components/icons/IconPerson";
import IconPuzzle from "../components/icons/IconPuzzle";
import IconDivider from "../components/icons/IconDivider";
import ClockIcon from "../components/icons/ClockIcon";
import { useStore } from "../store";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import MySpiner from "../components/MySpiner";
import { fetchData } from "../utils";
import { BASE_URL } from '../config';


interface IInfoItemProps {
  children: React.ReactNode;
  text: string;
}

export default function OneGamePage(): React.ReactElement | null {

  const styleIcon: string = " mr-2 ";

  const { setGameRequest, setMinPlayers, setMaxPlayers, setQuestId, setPopLoginOpt, userId } = useStore();

  const { id } = useParams<{ id: string }>();
  const openPopup = () => {
    if(userId){
      setGameRequest(true);
    }else{
      setPopLoginOpt(true)
    }
  } 
  const URL = `${BASE_URL}/quests/${id}`

  function InfoItem({ children, text }: IInfoItemProps): React.ReactElement {
    return (
      <div className=" flex text-[#fec432] ">
        {children}
        {text}
      </div>
    );
  }

  if (!id) return null;
  
  const { isError, data, error, isLoading } = useQuery({
    queryKey: ['qust', id],
    queryFn: () => fetchData(URL),
    staleTime: 0,
    gcTime: 0,
  })

  useEffect(() => {
    setQuestId(+id)
    setMinPlayers(data?.minPlayers)  
    setMaxPlayers(data?.maxPlayers)  
  }, [id, data])

  if (isLoading) return <MySpiner />

  if (isError) {
    return (
      <main className="  h-[768px]  ">
        <div className="flex justify-center items-center h-full text-[#f2890f] text-5xl">{error.message}</div>
      </main>
    )
  }

  return (
    <main
      className=" relative h-[768px] "
      style={{
        backgroundImage: `url(${data.picture})`,
        backgroundSize: "cover",
      }}
    >
      <div className=" w-[580px] g-[560px] relative left-[588px] top-[123px] ">
        <p className=" text-[#f2890f] mb-2 ">{data.genre}</p>
        <h1 className=" text-white text-[92px] font-black mb-10 leading-[95%] ">
          {data.title}
        </h1>
        <div className=" flex mb-6.5 ">
          <InfoItem text={data.time}>
            <ClockIcon className={styleIcon} color="#FEC432" />
          </InfoItem>
          <IconDivider className="mr-5 ml-5" color="#FEC432" />
          <InfoItem text={data.people}>
            <IconPerson className={styleIcon} color="#FEC432" />
          </InfoItem>
          <IconDivider className="mr-5 ml-5" color="#FEC432" />
          <InfoItem text={data.level}>
            <IconPuzzle className={styleIcon} color="#FEC432" />
          </InfoItem>
        </div>
        <p className="text-[#e5e5e5] font-medium text-base leading-[120%] mb-9 ">
          {data.description}
        </p>
        <MyButton
          click={openPopup}
          className=" w-[185px] h-12 rounded-md  bg-[#fec432] border-none text-[#514321] m-auto  "
          text="Взяти участь"
        />
      </div>
    </main>
  );
}







