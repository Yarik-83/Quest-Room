
import {IArrQuests} from "../interface"
import Card from './Card';


export default function WrapCards({ arr }: IArrQuests):React.JSX.Element{

  return (
    <div className=" grid grid-cols-3 auto-rows-[232px] grid-flow-row gap-x-5 gap-y-6 mb-5 bg-transparent ">
      {arr.map((quest) => (
        <Card key={quest.id} card={quest} />
      ))}
    </div>
  )
}


