import { LoginAuth } from "../components";
import { useSelector } from "react-redux";

const AdminPage = () => {
  console.log(useSelector((state: any) => state.authentication));

  return (
    <>
      <LoginAuth />
    </>
  );
};

export default AdminPage;
