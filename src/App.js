import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <div>
        {post.map((index,key) => {
          return(
            <div key={key}>
              <div>{index.id}</div>
              <div>{index.name}</div>
              <div>{index.username}</div>
              <div>{index.address.street}</div>
              <div>{index.address.suite}</div>
              <div>{index.address.geo.lat}</div>
              <div>{index.address.geo.lng}</div>
              <hr/>
            </div>
          )
        })}
      </div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button >post</button>
    </div>
  );
}
