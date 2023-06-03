import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../Components/Base";
import { useEffect, useState } from "react";
import { SignUp, signUp } from "../Services/user-service";
import { toast } from "react-toastify";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, field) => {
    setData({ ...data, [field]: event.target.value });
  };
  // resetting data
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  //submitting data
  const submitData = (event) => {
    event.preventDefault();
    console.log(data);
    //data validation

    //api calling
    signUp(data)
      .then((resp) => {
        console.log(resp);
        toast.success("Success logIn");
        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
      })
      .catch((err) => {
        toast.error(err.response.data.name);
        toast.error(err.response.data.password);
        toast.error(err.response.data.email);
        toast.error(err.response.data.about);
        console.log(err.response);
      });
  };
  return (
    <Base>
      <Container>
        <Row className="mt-4">
          {/* {JSON.stringify(data)} */}
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3>Fill information to register !!</h3>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitData}>
                  <FormGroup>
                    <Label for="name"> Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter here"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email"> Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter here"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password"> Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter here"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="about"> About</Label>
                    <Input
                      id="about"
                      type="textarea"
                      placeholder="Enter here"
                      onChange={(e) => handleChange(e, "about")}
                      value={data.about}
                      style={{ height: "100px" }}
                      required
                    />
                  </FormGroup>
                  <Container className="text-center">
                    <Button outline color="light">
                      Register
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

export default Signup;
