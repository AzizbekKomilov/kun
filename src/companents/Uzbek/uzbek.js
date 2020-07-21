import React, { Component } from "react";
import axios from "axios";

class Uzbek extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios
      .get(
        "http://daryo.uz/api/news/"
      )
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data.posts.slice(0, 10),
        });
      });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div>
            <div className="post card p-3 m-4 ">
           <div >Author:<span>{post.author}</span></div>
              <div className="card-content">
                <h4 className="text-info card-title ">{post.title}</h4>
               <a href={post.url} target ='blank'>  <img className="img-thumbnail" src={post.photo} /> </a>
                <p className="text-primary mt-4">{post.description}</p>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts</div>
    );
    return <div>{postList}</div>;
  }
}
export default Uzbek;

