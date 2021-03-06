import React, { Component } from "react";
import axios from "axios";

class Jahon extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=2151c508125443dfac525de9c05310dc"
      )
      .then((response) => {
               this.setState({
          posts: response.data.articles.slice(0, 10),
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
                <h2 className="text-info card-title ">{post.title}</h2>
               <a href={post.url} target ='blank'>  <img className="img-thumbnail" src={post.urlToImage} /> </a>
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
export default Jahon;

