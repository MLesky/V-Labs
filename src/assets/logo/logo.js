import logo from "./logo.svg";

const Logo = ({size = '40px'}) => {
  return <img src={logo} 
  alt="v-labs" width={size} style={{margin: '0 10px'}}/>;
};

export default Logo;
