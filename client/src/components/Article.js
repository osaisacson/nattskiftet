import React, { Component } from "react";
import { ParallaxProvider, Parallax } from "react-skrollr"; //https://github.com/Prinzhorn/skrollr/tree/master/examples

const Content = () => {
  return (
    <Parallax
      data={{
        "data-center-center": "opacity: 1;",
        "data-bottom-top": "opacity: 0;"
      }}
    >
      Some content
    </Parallax>
  );
};

export default class Article extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Parallax
          data={{
            "data-center-center": "opacity: 1;",
            "data-bottom-top": "opacity: 0;"
          }}
        >
          <Content />
        </Parallax>
      </ParallaxProvider>
    );
  }
}
