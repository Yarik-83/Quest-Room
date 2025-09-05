import {IChildrenProps} from '../interface'


export default function Footer({children}: IChildrenProps):React.JSX.Element {
  return(
    <div className =" flex gap-5 absolute bottom-8 left-8 ">
          {children}
    </div>
  )
}