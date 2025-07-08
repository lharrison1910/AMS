import { useNavigate } from "react-router";

function HomePage() {
  const user = {
    username: "puid",
    password: "password",
  };

  const navigate = useNavigate();
  /*
  check if a user is in the user context
  if not then route straigt to login


  */
  user === undefined ? navigate("/Login") : null;

  return <>HomePage</>;
}

export default HomePage;
