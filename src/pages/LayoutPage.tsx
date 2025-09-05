import { Outlet, useLocation } from "react-router";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.js";
import bg from "../assets/bg/bg0.jpg";
import { useEffect } from "react";
import { useStore } from "../store.js";
import InstaIcon from "../components/icons/InstaIcon.jsx";
import TwitterIcon from "../components/icons/TwitterIcon.jsx";
import YoutubeIcon from "../components/icons/YoutubeIcon.jsx";
import PopupRequestOnGame from "../components/popups/PopupRequestOnGame.js";
import PopupSignUp from "../components/popups/PopupSignUp.js";
import PopupSignIn from "../components/popups/PopupSignIn.js";
import PopSignUpByPhone from "../components/popups/PopSignUpByPhone.js";
import SignInByPhone from "../components/popups/PopSignInByPhone.js";
import PopupLoginOptions from "../components/popups/PopupLoginOptions.js";



export default function Layout(): React.ReactElement {
  const { setGenre, setBtnActive, popupGameRequest, popupSignIn, popupSignUp, signUpByPhone, signInByPhone, popLoginOptions } = useStore();
  const location = useLocation();


  useEffect(() => {
    setGenre("Всі Ігри");
    setBtnActive(0);
  }, [location]);

  return (
    <div className="layout-page" style={{ backgroundImage: `url(${bg})` }}>
      <Header />
      <Outlet />
      <Footer>
        <InstaIcon color="#535353" />
        <TwitterIcon color="#535353" />
        <YoutubeIcon color="#535353" />
      </Footer>
      {popupGameRequest && <PopupRequestOnGame />}
      {popupSignIn && <PopupSignIn />}
      {popupSignUp && <PopupSignUp />}
      {signUpByPhone && <PopSignUpByPhone />}
      {signInByPhone && <SignInByPhone />}
      {popLoginOptions && <PopupLoginOptions />}
    </div>
  );
}


