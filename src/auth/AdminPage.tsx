import { LoginAuth } from "../components";
import { useSelector } from "react-redux";
import { SideNav, TopNav } from "../layout";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const AdminPage = () => {
  const auth = useSelector((state: any) => state.authentication);

  if (auth.user?.role === "customer" || auth.user === "") {
    Toast.fire({
      icon: "warning",
      title: auth.message + "or not administrator",
    });
  }

  return (
    <>
      {auth.user?.role === "admin" ? (
        <>
          <SideNav />
          <TopNav />
        </>
      ) : (
        <LoginAuth />
      )}
    </>
  );
};

export default AdminPage;
