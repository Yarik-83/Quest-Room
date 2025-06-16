import { useStore } from "../store";


interface ISetBtnProps {
  arr: string[]
}

export default function SetOfButtons({ arr }:ISetBtnProps): React.ReactNode{
  const { setGenre, setBtnActive, btnIsActive } = useStore();

  const styleBtn : string =
    "border-[1px] border-solid border-[#615e5c] w-[120px] h-9 bg-[#615E5C] shadow-[0_0px_8px_rgba(250,250,250,0.25)] text-[#e5e5e5] last:rounded-r-2xl  first:rounded-l-2xl ";
  const styleBtnActive : string =
    "border-[1px] border-solid border-[#fec432] w-[120px] h-9 bg-[#fec432] text-[#514321] last:rounded-r-2xl  first:rounded-l-2xl ";


  
  function handleClick(e: React.MouseEvent<HTMLButtonElement>, index: number) {
    const btnId = e.currentTarget.id;
    setGenre(btnId);
    setBtnActive(index);
  }

  return (
    <div className=" mb-16  ">
      {arr.map((text, index) => (
        <button
          onClick={(e) => handleClick(e, index)}
          className={btnIsActive === index ? styleBtnActive : styleBtn}
          key={index}
          id={text}
        >
          {text}
        </button>
      ))}
    </div>
  );
}
