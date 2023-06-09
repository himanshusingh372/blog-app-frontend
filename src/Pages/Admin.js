import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import userContext from "../context/userContext";
import { Container, Row, Col } from "reactstrap";
import Base from "../Components/Base";
import { toast } from "react-toastify";
import { ListGroup, ListGroupItem } from "reactstrap";
import { GetAllUsers } from "../Services/user-service";

function Admin() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        GetAllUsers()
          .then((data) => {
            console.log("loading users ");
            console.log(data);
            setUsers([...data]);
          })
          .catch((error) => {
            console.log(error);
            toast.error("error in loading Users");
          });
      }, []);
    

  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          <Container className="py=10">
            
          <ListGroup >
        {users &&
          users.map((user, index) => {
            return (
              <ListGroupItem
                // tag={Link}
                // to={"/categories/" + user.userId}
                className="border-0 shadow-0 mt-1"
                key={index}
                action={true}
              >
                {user.name}
              </ListGroupItem>
            );
          })}
      </ListGroup>
          
          </Container>
        </Base>
      )}
    </userContext.Consumer>
  );
}

export default Admin;
