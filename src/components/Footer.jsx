import InstaIcon from '../components/icons/InstaIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import YoutubeIcon from '../components/icons/YoutubeIcon';

export default function Footer() {
  return(
    <div className=" flex gap-5 absolute bottom-8 left-8 ">
        <InstaIcon color='#535353'/>
        <TwitterIcon color='#535353'/>
        <YoutubeIcon color='#535353'/>
    </div>
  )
}