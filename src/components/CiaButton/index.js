import { GradientButton } from "react-simple-gradient-button";
import { useHistory } from 'react-router-dom';
import "./css/button.css";

export default function Button() {
  
  const history = useHistory();

  // navigated to pricing page
  return <div onClick={() => history.push('/pricing')}><GradientButton text={"Try it now"} gradientColor={{ left: 219, mid: 333, right: 33 }} /></div>
}