import userContext from "../context/userContext";
import Base from "../Components/Base";
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

const Services = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          <CardGroup>
            <Card>
              <CardImg
                alt="Card image cap"
                // src="https://picsum.photos/318/180"
                src="https://i.ibb.co/X4vbRmF/pexels-fauxels-3183165.jpg"
                width="80%"
                height="58%"
              />
              <CardBody>
                <CardTitle tag="h5">Web Development</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  For All Browsers
                </CardSubtitle>
                <CardText>
                <h5>We are professional in Web Development. since 2010.</h5><br/> <br/>
              <h6>  Any Web browser  you have doesn't matter we have always Solution. This website is just example of our experties.</h6>
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                //src="https://picsum.photos/318/180"
                src="https://i.ibb.co/QK991yL/pexels-realtoughcandycom-11035468.jpg" 
                width="90%"
                height="58%"
              />
              <CardBody>
                <CardTitle tag="h5">Android  Application</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  For version above 7
                </CardSubtitle>
                <CardText>
               <h5>We are professional in Android. since 2010.</h5><br/> <br/>
                ,<h6>Any Android device you have does't matter we have always Solution. This website is just example of our experties.</h6>
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                alt="Card image cap"
                //src="https://picsum.photos/318/180"
                src="https://i.ibb.co/9p87kSJ/pexels-junior-teixeira-2047905.jpg" 
                top
                width="80%"
                height="58%"
              />
              <CardBody>
                <CardTitle tag="h5"> Native Applications</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  IOS/MAC/UBUNTU
                </CardSubtitle>
                <CardText>
               <h5> We are professional in Native  Applications. since 2010.</h5><br/> <br/>
             <h6>   Any Native device you have does't matter we have always Solution. This website is just example of our experties.</h6>
                </CardText>
              </CardBody>
            </Card>
          </CardGroup>
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default Services;
