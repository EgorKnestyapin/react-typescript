import Button from "components/Button";
import { UsersWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <UsersWrapper>
      Users
      <Button name="Go to homepage" onClick={goToHomePage} />
    </UsersWrapper>
  );
}
export default Users;
