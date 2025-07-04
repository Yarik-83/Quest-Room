import {IIconsProps} from '../../interface'


export default function CloseIcon({ color,click,className }:IIconsProps) :React.JSX.Element{

  return (
    <svg onClick={click} className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 15L15 1.00003" stroke={color} />
      <path d="M1 1L15 15" stroke={color} />
    </svg>
  )
}