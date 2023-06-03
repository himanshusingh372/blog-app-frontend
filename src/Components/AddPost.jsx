import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  Input,
  Label,
} from "reactstrap";
import { GetAllCategories } from "../Services/Category-services";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";

import {
  createPost as doCreatePost,
  uploadPostImage,
} from "../Services/post-service";
import { getCurrentUserDetail } from "../auth";

const AddPost = () => {
  const editor = useRef(null);
  // const [content, setContent] = useState("");
  const [categories, SetCategories] = useState([]);
  const [user, setUser] = useState(undefined);
  const [image, setImage] = useState(null);


  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });
  useEffect(() => {
    setUser(getCurrentUserDetail());
    GetAllCategories()
      .then((data) => {
        console.log(data);
        SetCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // resetting data
  const resetData = () => {
    setPost({
      title: "",
      content: "",
      categoryId: "",
    });
  };

  //field changed function
  const fieldChanged = (event) => {
    // console.log();
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const contentChanged = (data) => {
    setPost({ ...post, content: data });
  };

  //create post function
  const createpost = (event) => {
    event.preventDefault();

    if (post.content.trim() === "") {
      toast.error("post content is required !!");
      return;
    }

    if (post.categoryId === "") {
      toast.error("select some category !!");
      return;
    }

    //submit the form one server
    post["userId"] = user.id;

    doCreatePost(post)
      .then((data) => {
        uploadPostImage(image, data.postId)
          .then(() => {
            console.log("Image uploaded");  
          })
          .catch((error) => {
            toast.error("Error in uploading image");
            console.log(error);
          });

        toast.success("Post Created !!");
        console.log(post);

        setPost({
          title: "",
          content: "",
          categoryId: "",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Post not created due to some error !!");
      });
  };

  //handling file chagne event
  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setImage(event.target.files[0]); 
    console.log("image uploaded");
    toast.success("image uploaded");
  };

  return (
    <div className="wrapper">
      <Card className="my-3 shadow">
        <CardBody>
          {/* {JSON.stringify(post)} */}
          <h3>What going in your mind ?</h3>
          <Form onSubmit={createpost}>
            <div className="my-2">
              <Label for="title">Post Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Enter Here"
                //  className="rounded-0"
                onChange={fieldChanged}
                required
              />
            </div>
            <div>
              <Label for="content">Content</Label>

              <JoditEditor
                ref={editor}
                value={post.content}
                onBlur={(newContent) => contentChanged(newContent)}
              />
            </div>

            {/* file field  */}

            <div className="mt-3">
              <Label for="image">Select Post banner</Label>
              <Input id="image" type="file" onChange={handleFileChange} />
            </div>

            <div>
              <Label for="category">Post Category</Label>
              <Input
                type="select"
                id="category"
                name="categoryId"
                onChange={fieldChanged}
                defaultValue={0}
              >
                <option disabled value={0}>
                  --Select category--
                </option>

                {categories.map((category) => (
                  <option value={category.categoryId} key={category.categoryId}>
                    {category.categoryTitle}
                  </option>
                ))}
              </Input>
            </div>

            <Container className="text-center">
              <Button type="submit" color="primary" className="my-3">
                Create Post
              </Button>
              <Button onClick={resetData} color="danger" className="ms-3">
                Reset Content
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddPost;
