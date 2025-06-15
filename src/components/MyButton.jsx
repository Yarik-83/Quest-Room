



export default function MyButton(props){
  const {className,text,click}= props; 

   return (
    <button onClick={click}  className={className}>{text}</button>
   )
}