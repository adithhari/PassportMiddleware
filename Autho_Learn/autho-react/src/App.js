import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  return (
  <LoginButton/>
  )
}


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default App;
