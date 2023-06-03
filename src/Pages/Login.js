import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
} from "reactstrap";
import Base from "../Components/Base";
import { useState } from "react";
import { toast } from "react-toastify";
import { logIn } from "../Services/user-service";
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import { useContext } from "react";

const Login = () => {
  const userContxtData = useContext(userContext);
  const navigate=useNavigate()
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, field) => {
    setLoginData({ ...loginData, [field]: event.target.value });
  };
  // resetting data
  const resetData = () => {
    setLoginData({
      username: "",
      password: "",
    });
  };

  //submitting data
  const submitData = (event) => {
    event.preventDefault();
    console.log(loginData);
    //data validation

    //api calling
    logIn(loginData)
      .then((data) => {
        console.log("user login");
        console.log(data);

        //save the data to the local storage
        doLogin(data, () => {
          console.log("login detail is saved in local storage");
          // redirect to user dashboard page
          userContxtData.setUser({
            data: data.user,
            login: true,
          });
          navigate("/user/dashboard")
        });
        toast.success("Login Succes");
        setLoginData({
          username: "",
          password: "",
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err.response);
      });
  };

  return (
    <Base>
      <Container>
        <Row className="mt-4">
          <Col sm={{ offset: 3, size: 6 }}>
            <Card inverse color="dark">
              <CardHeader>
                <h3>Welcome Again Here!!</h3>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitData}>
                  <FormGroup>
                    <Label for="email "> Email</Label>
                    <Input
                      type="text"
                      placeholder="Enter Here"
                      id="email"
                      onChange={(e) => handleChange(e, "username")}
                      value={loginData.username}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password"> Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter Here"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={loginData.password}
                      required
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button outline color="light">
                      Login
                    </Button>

                    <Button
                      onClick={resetData}
                      outline
                      color="light"
                      className="ms-2"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Login;
