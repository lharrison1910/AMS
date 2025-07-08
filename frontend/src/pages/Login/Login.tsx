import { Button, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const inputStyle = {
    backgroundColor: "white",
    margin: 4,
  };

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div>Welcome to AMS</div>
      <div className="input">
        <TextField
          placeholder="username"
          name="username"
          onChange={(event) => handleChange(event)}
          value={formData.username}
          variant="filled"
          sx={inputStyle}
        />
        <TextField
          placeholder="password"
          type="password"
          name="password"
          onChange={(event) => handleChange(event)}
          value={formData.password}
          variant="filled"
          sx={inputStyle}
        />
        <Button variant="contained" color="success" endIcon={<LoginIcon />}>
          Login
        </Button>
      </div>

      <div>To get an account please speak to one of your Sqn SuperUsers</div>
    </>
  );
}

export default Login;
