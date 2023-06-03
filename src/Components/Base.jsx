import { Card, CardFooter } from "reactstrap";
import CustomNavbar from "./CustomNavbar";
const Base = ({ title = "Welcome to our website", children }) => {
  return (
    <div>
      <CustomNavbar />

      {children}

      <footer
        style={{
          backgroundColor: "black",
          padding: "10px",
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
