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

  // Function to zoom in
  const zoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  // Function to zoom out
  const zoomOut = () => {
    setZoomLevel(zoomLevel - 0.1);
  };

  return (
    <div className="py-4">
      <CustomNavbar />
      {/* <Container>
      <Badge
        color="secondary"
        onClick={zoomIn}
        style={{  position: "fixed", top: "50px", right: "100px", zIndex: "100",cursor:"pointer" }}
      >
        Zoom In
      </Badge>

      <Badge
      color="secondary"
        onClick={zoomOut}
        style={{   position: "fixed", top: "50px", right: "20px", zIndex: "100",cursor:"pointer"}}
      >
        Zoom Out
      </Badge>
      </Container>

      <Container> */}
        {/* <div style={{ transform: `scale(${zoomLevel})` }}> */}
        {children}
      {/* </Container> */}
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
