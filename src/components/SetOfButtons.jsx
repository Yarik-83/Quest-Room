// import "./SetOfButtons.css";
import { useStore } from "../store";


export default function SetOfButtons({ arr }) {
    const { setGenre, setBtnActive, btnIsActive } = useStore();

    const styleBtn = ' border- '
    const styleBtnActive = ''

    function handleClick(e, index) {
        const btnId = e.target.id;
        setGenre(btnId);
        setBtnActive(index);
    }

    return (
        <div className=" mb-16  ">
            {arr.map((text, index) => (
                <button
                    onClick={(e) => handleClick(e, index)}
                    className={btnIsActive === index ? "border-[1px] border-solid border-[#fec432] w-[120px] h-9 bg-[#fec432] text-[#514321] last:rounded-r-2xl  first:rounded-l-2xl " : "border-[1px] border-solid border-[#615e5c] w-[120px] h-9 bg-[#615E5C] shadow-[0_0px_8px_rgba(250,250,250,0.25)] text-[#e5e5e5] last:rounded-r-2xl  first:rounded-l-2xl"}
                    key={index}
                    id={text}
                >
                    {text}
                </button>
            ))}
        </div>
    )
}
