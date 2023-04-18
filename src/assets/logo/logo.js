import logo from "./logo.svg";

const Logo = ({size = '80px'}) => {
  return <img src={logo} 
  alt="v-labs" width={size} />;
};

export default Logo;
