import roundIcon from "../assets/logo.png";

const SignInComponent = () => {
  return (
    <div className="invisible sign-in">
      <img src={roundIcon} alt="icon" />
      <div>
        <button className="header-button">Sign Up</button>
        <button className="header-button sign-in-button">Sign In</button>
      </div>
    </div>
  );
};

export default SignInComponent;
