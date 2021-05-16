import React from "react";
import Carousel from "nuka-carousel";

class Banner extends React.Component {
  render() {
    return (
      <Carousel>
        <img src="https://picsum.photos/400?image=459" />
        <img src="https://picsum.photos/400?image=335" />
        <img src="https://picsum.photos/400?image=444" />
        <img src="https://picsum.photos/400?image=615" />
        <img src="https://picsum.photos/400?image=583" />
        <img src="https://picsum.photos/400?image=962" />
      </Carousel>
    );
  }
}
export default Banner;
