import "./Login_styles.css";
import SplitPane from "react-split-pane";
import { useState } from "react";

import App from "./App";

export default function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((Username === "test@test.com") & (Password === "password")) {
      alert(`Login ID: ${Username}`);
    } else {
      alert("Wrong ID");
    }
    console.log(Username, Password);
  };

  return (
    <div>
      <div className="topnav">
        <label className="icon">Notes</label>
      </div>

      <div className="row">
        <div class="column">
          
        </div>

        {/* sample -1 */}
        <div class="column">
          <div className="LoginPane">
            <form onSubmit={handleSubmit} className="form-floating LoginPage">
              <div className=" input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputValue"
                  placeholder="Email"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="PasswordTB"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
