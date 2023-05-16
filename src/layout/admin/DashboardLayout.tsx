import Header from "./header/Header";
import Nav from "./nav/Nav";

import { styled } from "@mui/material/styles";

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const DashboardLayout = () => {
  return (
    <StyledRoot>
      <Header />
      <Nav />
    </StyledRoot>
  );
};

export default DashboardLayout;
