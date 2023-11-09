import "./styles.css";
type Props = {
  text: string
}

const ButtonSecondary = ({text}:Props) => {
  return <div className="dsc-btn dsc-btn-white">{text}</div>;
};

export default ButtonSecondary;
