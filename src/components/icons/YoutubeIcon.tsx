import {IIconsProps} from '../../interface'
export default function YoutubeIcon({className,color}:IIconsProps):React.JSX.Element {
  return(
    <svg className={className} width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.543 2.65413C20 4.5475 20 8.5 20 8.5C20 8.5 20 12.4525 19.543 14.3459C19.289 15.3924 18.546 16.2159 17.605 16.4942C15.896 17 10 17 10 17C10 17 4.107 17 2.395 16.4942C1.45 16.2116 0.708 15.3893 0.457 14.3459C2.98023e-08 12.4525 0 8.5 0 8.5C0 8.5 2.98023e-08 4.5475 0.457 2.65413C0.711 1.60756 1.454 0.784125 2.395 0.50575C4.107 -1.8999e-07 10 0 10 0C10 0 15.896 -1.8999e-07 17.605 0.50575C18.55 0.788375 19.292 1.61075 19.543 2.65413ZM8 12.2188L14 8.5L8 4.78125V12.2188Z" fill={color}/>
</svg>
  )
}