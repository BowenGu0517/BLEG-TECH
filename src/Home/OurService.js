import React, { Component } from 'react';

const EachBlock = ( {title,content, ...rest } ) =>(
  <div className="each col-sm-4" >
    <h4> {title} </h4>
    <div> {content}</div>
  </div>
)

class OurService extends Component {
  componentDidMount(){
  }
  render() {
    return (
      <div id="OurService">
        <div className="container" >
          <h2> Our Service  </h2>
          <div className="row">
            <EachBlock title="Web Design"  content="We understand that the art of defining and designing a web presence for professional business firms. We offer various design services, including branding, graphics design, animation, and everything you will need for Digital Marketing." icon="111"  />
            <EachBlock title="Web Design"  content="We understand that the art of defining and designing a web presence for professional business firms. We offer various design services, including branding, graphics design, animation, and everything you will need for Digital Marketing." icon="111"  />
            <EachBlock title="Web Design"  content="We understand that the art of defining and designing a web presence for professional business firms. We offer various design services, including branding, graphics design, animation, and everything you will need for Digital Marketing." icon="111"  />
            <EachBlock title="Web Design"  content="We understand that the art of defining and designing a web presence for professional business firms. We offer various design services, including branding, graphics design, animation, and everything you will need for Digital Marketing." icon="111"  />
            <EachBlock title="Web Design"  content="We understand that the art of defining and designing a web presence for professional business firms. We offer various design services, including branding, graphics design, animation, and everything you will need for Digital Marketing." icon="111"  />
          </div>
          <img id="house" src="/static/image/House.png" width="600"/>
        </div>

      </div>
    );
  }
}

export default OurService;
