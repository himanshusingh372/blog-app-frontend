import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import Base from "../Components/Base";

const ContactUsPage = () => {
  return (
    <Base>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Card
          className="pt-2"
          style={{ width: "500px", maxHeight: "80vh", overflowY: "auto" }}
        >
          <CardBody>
            <CardTitle tag="h4" className="text-center mb-4">
              Contact Us
            </CardTitle>
            <div>
              <h5>Contacts:</h5>
              <ul>
                <li>Phone: +91 9996-56-3051</li>
                <li>Email: himanshu372singh@gmail.com</li>
              </ul>
            </div>
            <div>
              <h5>Emails:</h5>
              <ul>
                <li>General Inquiries : himanshu372singh@gmail.com</li>
                <li>Support : abhi0256@gmail.com</li>
                <li>Sales : arvind0324@gmail.com</li>
              </ul>
            </div>
            <div>
              <h5>Social Media:</h5>
              <ul>
                <li>
                  <a href="https://www.youtube.com">YouTube</a>
                </li>
                <li>
                  <a href="https://www.instagram.com">Instagram</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/himanshu-singh-584346178/">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </div>
    </Base>
  );
};

export default ContactUsPage;
