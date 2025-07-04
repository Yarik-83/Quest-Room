import {IIconsProps} from '../../interface'
export default function IconDivide({color, className}:IIconsProps):React.JSX.Element {
  
    return(
       <svg className={className} width="2" height="20" viewBox="0 0 2 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d ="M1 0V20" stroke={color} />
</svg>

    )
}