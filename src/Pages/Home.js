import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Base from "../Components/Base";
import CategorySideMenu from "../Components/CategorySideMenu";
import NewFeed from "../Components/NewFeed";

const Home = () => {
  return (
    <Base>
      <Container className="mt-3">
        <Row>
          <Col md={2} className="pt-5">
            <CategorySideMenu />
          </Col>
          <Col md={10}>
            <NewFeed />
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Home;
