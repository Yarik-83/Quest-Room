
import { NavLink } from "react-router-dom";
import LogoIcon from './icons/LogoIcon';
import BtnEnterAccaunt from "./icons/IconsEnterAccount";

interface INavLink {
  id: number,
  link: string,
  to: string
}

interface INavList {
  arr: INavLink[]
}


const navLinks: INavLink[] = [
  { id: 1, link: "Ігри", to: "/" },
  { id: 2, link: "Новачкам", to: "beginners" },
  { id: 3, link: "Відгуки", to: "reviews" },
  { id: 4, link: "Акції", to: "shares" },
  { id: 5, link: "Контакти", to: "contacts" },
];



export default function Header(): React.ReactElement {

  function NavList({ arr }: INavList) {

    const styleActive: string = ' no-underline text-[#fec432] '
    const style: string = ''

    return (
      <nav>
        <ul className='flex list-none gap-12 text-[#A6A6A6] '  >
          {arr.map((el) => (
            <li key={el.id}>
              <NavLink
                className={({ isActive }) => isActive ? styleActive : style} to={el.to}
              >
                {el.link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

    );
  }


  return (
    <div className=' h-[74px] flex justify-between items-center px-8 absolute w-full z-10 '>
      < LogoIcon color="#A6A6A6" />
      <NavList arr={navLinks} />
      <div className="flex gap-4">
        <BtnEnterAccaunt />
        <p className='text-[#A6A6A6]' >+38 (050) 555-99-55</p>
      </div>

    </div>
  );
}




