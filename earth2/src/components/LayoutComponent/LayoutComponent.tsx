import { useEffect, useState } from "react";
import SignInComponent from "../SignInComponent";
import SignUpComponent from "../SignUpComponent";
import GlobeComponent from "../GlobeComponent/GlobeComponent";

function LayoutComponent() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <GlobeComponent />
      {isLogin ? <SignInComponent isLogin={isLogin} setIsLogin={setIsLogin} /> : <SignUpComponent />}
    </>
  );
}

export default LayoutComponent;
