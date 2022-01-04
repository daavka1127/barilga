import React, { Component } from "react";
import Slider from "../../components/MainSlider/slider";
import NewsSlider from "../../components/News/news-slider";
import Footer1 from "../../components/layout/footer1";
import Header1 from "../../components/layout/header1";
import OurProjects from "../../components/OurProjects";

export class index extends Component {
  render() {
    return (
      <>
        <Header1 />
        <div className="page-content bg-white">
          <Slider />
        </div>

        <OurProjects />
        <div className="section-area section-sp1 bg-white">
          <div className="container">
            <div className="heading-bx text-center">
              <h6 className="title-ext m-b0">Мэдээ & Мэдээлэл</h6>
              <h2 className="title-head m-b0">
                Барилгын салбарын эргэн тойронд
              </h2>
              <div className="ttr-separator sepimg"></div>
            </div>

            <NewsSlider />
          </div>
        </div>
        <Footer1 />
      </>
    );
  }
}

export default index;
