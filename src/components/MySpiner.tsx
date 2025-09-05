import { PulseLoader } from 'react-spinners';


export default function MySpiner() {

  return(
        <div className='flex h-[768px] items-center justify-center'>
      <PulseLoader
        color="#F2890F"
        loading
        margin={4}
        size={20}
        speedMultiplier={1}
      />
    </div>
  )
}

