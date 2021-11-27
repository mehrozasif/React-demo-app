import React from "react";
import { Card } from "react-bootstrap";
import blog_demo from "../../assets/images/blogdemo.jpg";
const Blogs = (props) => {
  return (
    <>
      <div className="mb-3 col-xl-4 col-md-6 col-10 col-xxl-3 mx-auto mx-lg-0">
        <Card className="px-0 pb-xl-3 br-8 w-100 over-flow-none text-left mx-auto h-100">
          <Card.Img variant="top" src={blog_demo} />
          <Card.Body>
            <Card.Title className="text-center">Lorem Epsum</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
              metus libero. Vivamus ac nisl aliquet ipsum pulvinar gravida.
              Integer pulvinar metus tortor, id euismod nisi suscipit sit amet.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      {props.blogs.map((i) => {
        return (
          <div className="mb-3 col-xl-4 col-md-6 col-10 col-xxl-3 mx-auto mx-lg-0 mb-xl-3">
            <Card
              className="px-0 pb-xl-3 br-8 w-100 over-flow-none text-left mx-auto h-100"
              key={i.id}
            >
              <Card.Img variant="top" src={blog_demo} />
              <Card.Body>
                <Card.Title>{i.title}</Card.Title>
                <Card.Text>{i.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default Blogs;
