
import PersonIcon from '@mui/icons-material/Person';
import { useStore } from '../../store';
import { useNavigate } from 'react-router-dom';



export default function BtnEnterAccaunt(): React.JSX.Element {

  const { userId, setPopLoginOpt } = useStore()
  const navigate = useNavigate();
  const showPopup = () => { !userId? setPopLoginOpt(true) : navigate("/cabinet")}  
  
  return (
    <button className='h-10 w-10 rounded-lg hover:bg-[#3f352c]' onClick={showPopup}>
      <PersonIcon style={{ color: '#A6A6A6', height: '35px', width: '35px' }} />
    </button>
  )
}