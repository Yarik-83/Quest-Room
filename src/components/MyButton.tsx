import {IBtnProps} from '../interface'



export default function MyButton(props:IBtnProps): React.ReactElement{
   const {className,text,click}= props; 

   return (
    <button onClick={click}  className={className}>{text}</button>
   )
}