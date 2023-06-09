import {
  Badge,
  Button,
  Card,
  CardFooter,
  Container,
  NavItem,
} from "reactstrap";
import CustomNavbar from "./CustomNavbar";

import { useState } from "react";
const Base = ({ title = "Welcome to our website", children }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <div>
      <CustomNavbar />
      <Container className=" pt-5 pb-5">{children}</Container>
      <footer
        style={{
          backgroundColor: "black",
          padding: "5px",
          textAlign: "center",
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
        }}
      >
        <h5 style={{ color: "white" }}>
          &copy; 2023 Your Website. All rights reserved.
        </h5>
      </footer>
    </div>
  );
};

export default Base;
