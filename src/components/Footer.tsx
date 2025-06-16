import {ICildrenProps} from '../interface'
// import InstaIcon from './icons/InstaIcon';
// import TwitterIcon from './icons/TwitterIcon';
// import YoutubeIcon from './icons/YoutubeIcon';

export default function Footer({children}: ICildrenProps):React.JSX.Element {
  return(
    <div className =" flex gap-5 absolute bottom-8 left-8 ">
          {children}
        {/* <InstaIcon color='#535353'/>
        <TwitterIcon color='#535353'/>
        <YoutubeIcon color='#535353'/> */}
    </div>
  )
}