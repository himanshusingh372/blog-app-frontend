import userContext from "../context/userContext";
import Base from "../Components/Base";
import Slide from "../Components/Caraosel";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardImgOverlay,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          <div className="mt-3">
            <CardGroup>
              <Card inverse>
                <CardImg
                  alt="Card image cap"
                  // src="https://picsum.photos/900/270?grayscale"
                  src="https://i.ibb.co/Z8n1C4p/pexels-prakash-aryal-38326.jpg"
                  style={{
                    height: 250,
                  }}
                  width="100%"
                />
                <CardImgOverlay
                  style={{ overflowY: "scroll", maxHeight: "300px" }}
                >
                  <CardTitle tag="h5">
                    <h2>BLOGGING APPLICATION</h2>
                  </CardTitle>
                  <CardText color="black">
                    A blogging application is a platform that allows users to
                    create and publish their own blog posts online. It provides
                    a convenient and organized way for individuals or businesses
                    to share their thoughts, insights, and expertise with a
                    wider audience. Users can create personalized profiles,
                    manage their blog posts, engage with readers through
                    comments and social sharing, and potentially monetize their
                    content through advertising or partnerships. Blogging
                    applications empower individuals to express themselves,
                    connect with like-minded individuals, and establish their
                    online presence in the digital world.
                    {console.log(object)}
                    <h1>
                      Welcome : {object.user.login && object.user.data.name}
                    </h1>
                  </CardText>
                </CardImgOverlay>
              </Card>

              <CardGroup className="pt-2">
                <Card className="mr-4">
                  <CardImg
                    alt="Card image cap"
                    src="https://i.ibb.co/9TMwjsV/my2.jpg"
                    top
                    width="80%"
                    height="70%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Himanshu Singh</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Founder
                    </CardSubtitle>
                    <CardText>
                      Skilled in Backend and Frontend Technologies.
                      <br />
                      Expert in Java and Java Framework.
                    </CardText>
                  </CardBody>
                </Card>

                <Card className="mr-4">
                  <CardImg
                    alt="Card image cap"
                    src="https://i.ibb.co/NFXyTsk/abhi2.jpg"
                    top
                    width="80%"
                    height="70%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Abhishek Choudhary</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Co-Founder
                    </CardSubtitle>
                    <CardText>Coming soon</CardText>
                  </CardBody>
                </Card>

                <Card>
                  <CardImg
                    alt="Card image cap"
                    src="https://i.ibb.co/0nB3YNN/arvi.jpg"
                    top
                    width="80%"
                    height="70%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Arvind Kumar</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Co-Founder
                    </CardSubtitle>
                    <CardText>Coming soon</CardText>
                  </CardBody>
                </Card>
              </CardGroup>
            </CardGroup>
          </div>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
