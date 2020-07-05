
import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import { getAllPosts } from '../api/posts'
class Posts extends Component {

  state = {
    loading: true,
    posts: []
  };

  componentDidMount() {
    getAllPosts().then(data => {
      setTimeout(() =>
        this.setState({
          loading: false,
          posts: data
        }), 1000);
    });
  }
  render() {
    if (this.state.loading)
      return (<div className="text-center"><br /><br /><div className="text-center  spinner-border  text-primary" style={{ width: "10rem", height: "10rem" }}
        role="status">
        <span className="sr-only">Loading...</span>
      </div></div>);

    return <section id="testimonials" class="padd-section text-center">
      <div class="container" data-aos="fade-up">
        <div class="row justify-content-center">

          <div class="col-md-8">

            <div class="testimonials-content">
           

                <div class="carousel-inner" role="listbox">
                <Carousel controls={false} indicators={false}>
                  {this.state.posts.map((post, index) =>
                    <Carousel.Item>
                      {/* <img
                      //   className="d-block w-100"
                      //   src="holder.js/800x400?text=First slidejbg=373940"
                      //   alt="First slide"
                      // /> */}
                    <div class="active" >
                          <div class="top-top" >

                            <h2>Articles about Lableb</h2>
                            <div style={{maxHeight:"100px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"pre-line"}}>
                            <p >{post.text}</p>
                            </div>
                            <h4>{post.name}<span>{post.position}</span></h4>

                          </div>
                        </div>
                      <Carousel.Caption>
                        
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                  }
              </Carousel>
            </div>

              </div>
            </div>
          </div>

        
      </div>
    </section>;

  }
}







export default Posts;