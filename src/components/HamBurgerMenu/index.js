import { scaleRotate as Menu } from 'react-burger-menu';
import "./css/hamBurgerMenu.css"

export default function Sidebar() {
  return (
    <Menu left width={'25%'}>
      <h1>EXPO|CON</h1>
      <a id="home" className="menu-item" href="/"><strong>WHAT IS IT</strong></a>
      <a id="pricing" className="menu-item" href="/pricing"><strong>PRICING</strong></a>
      <a id="pricing" className="menu-item" href="/perks"><strong>PERKS</strong></a>
    </Menu>
  );
}
