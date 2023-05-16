import Header from "./header/Header";
import Nav from "./nav/Nav";

import { styled } from "@mui/material/styles";

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
  background: "#fff"
});

const DashboardLayout = () => {
  return (
    <StyledRoot>
      <Nav />
      {/* <Header /> */}

    </StyledRoot>
  );
};

export default DashboardLayout;
