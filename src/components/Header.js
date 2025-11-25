import  LOGO_IMG  from "../utils/constants";

const Header=()=>(
    <div className="heading-bar">
        <img className="logo-image" src={LOGO_IMG} alt="Pizza"/>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Cart</li>
            <li>About</li>
            <li>Support</li>
        </ul>
    </div>
);

export default Header;
