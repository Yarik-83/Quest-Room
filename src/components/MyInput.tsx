



interface IInputProps {
    type: string;
    placeholder: string;
    labelText: string;
    value: number |string | undefined;
   onChange: (value: number | string) => void;
}

export default function zMyInput(props: IInputProps): React.ReactElement {

const {type,placeholder,value, onChange,labelText} = props

    return(
      <>
         <label className="text-amber-50">  {labelText}  </label>
       <input type={type} placeholder={placeholder} value={value}  onChange={(e) => onChange(e.target.value)} className='className="  font-bold tracking-widest  text-white bg-[#535353] border-none text-sm w-100 h-14 rounded-m pl-6 placeholder:text-[#A6A6A6] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ' />
  
      </>
   
          
    )
}