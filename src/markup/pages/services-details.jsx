import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion, Card, Header, Button } from "react-bootstrap";

// Layout
import Header1 from "../layout/header/header1";
import Footer1 from "../layout/footer/footer1";

// Elements
import SolutionSidebar from "../elements/services/solution-sidebar";

// Images
import Banner1 from "../../images/banner/banner1.jpg";
import ServicesPic1 from "../../images/services/pic1.jpg";
import ServicesPic2 from "../../images/services/pic2.jpg";

class ServicesDetails extends Component {
  render() {
    return (
      <>
        <Header1 />

        {/* <!-- Content --> */}
        <div className="page-content bg-white">
          <div className="content-block" id="content-area">
            <div className="section-area section-sp2 bg-fix bg-white">
              <div className="container about-video">
                <div className="row">
                  <div
                    className="col-lg-4 col-md-5 m-b30 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <SolutionSidebar />
                  </div>
                  <div className="col-lg-8 col-md-7 service-textarea portfolio-content">
                    <div className="heading-bx text-left m-b20">
                      <h3 className="title-head m-b0">БАРИЛГЫН ЗУРАГ ТӨСӨЛ</h3>
                      <div className="ttr-separator sepimg"></div>
                    </div>
                    <p>
                      Захиалагч, үйлчлүүлэгчийн амьдрах, ажиллах ая тухтай
                      нөхцөлийг бүрдүүлэн, тэдний сэтгэл ханамжийг хангасан
                      өвөрмөц, сонирхолтой орон зайн оновчтой шийдлийг гаргаж,
                      орчин үеийн шинэ технологи, шинэлэг материалын судалгааг
                      үндэслэн интерьер ба экстерьерийн нарийвчилсан зураг
                      төслийг 3 хэмжээст зургийн хамт хийж гүйцэтгэдэг.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer1 />
      </>
    );
  }
}

export default ServicesDetails;
