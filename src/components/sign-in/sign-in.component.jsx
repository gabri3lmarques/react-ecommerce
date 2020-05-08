import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-buton/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Eu já tenho uma conta</h2>
        <p>Entre com seu email e senha.</p>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">enviar</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              logar com google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
