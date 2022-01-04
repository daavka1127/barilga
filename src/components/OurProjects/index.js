import React from "react";
import { Link } from "react-router-dom";
import css from "./style.module.css";

export default function index() {
  return (
    <div className="section-area section-sp1 bg-white">
      <div className="container">
        <div className="row">
          <div
            className={`col-lg-4 col-md-6 wow fadeInUp m-md-b30 ${css.Services}`}
            data-wow-delay="0.3s"
          >
            <div className="feature-container feature-bx2">
              <div className="feature-lg text-white m-b20">
                <span className="icon-cell">
                  <i className="ti-world"></i>
                </span>
              </div>
              <div className="icon-content">
                <h4 className="ttr-tilte">БАРИЛГЫН ЗУРАГ ТӨСӨЛ</h4>
                <p>
                  Захиалагч, үйлчлүүлэгчийн амьдрах, ажиллах ая тухтай нөхцөлийг
                  бүрдүүлэн, тэдний сэтгэл ханамжийг хангасан өвөрмөц...
                </p>
                <Link to="services-details" className="feature-btn">
                  <i className="la la-long-arrow-alt-right"></i>
                </Link>
              </div>
              <i className="ti-world bg-icon"></i>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 wow fadeInUp m-md-b30"
            data-wow-delay="0.6s"
          >
            <div className="feature-container feature-bx2">
              <div className="feature-lg text-white m-b20">
                <span className="icon-cell">
                  <i className="ti-shield"></i>
                </span>
              </div>
              <div className="icon-content">
                <h4 className="ttr-tilte">БАРИЛГЫН ТӨСЛИЙН МЕНЕЖМЕНТ</h4>
                <p>
                  Барилгын ажил нь зураг төсөл, барилга барихад шаардлагатай
                  олон төрлийн зөвшөөрлүүд, техникийн нөхцлүүд...
                </p>
                <Link to="services-details" className="feature-btn">
                  <i className="la la-long-arrow-alt-right"></i>
                </Link>
              </div>
              <i className="ti-shield bg-icon"></i>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 wow fadeInUp m-md-b30"
            data-wow-delay="0.9s"
          >
            <div className="feature-container feature-bx2">
              <div className="feature-lg text-white m-b20">
                <span className="icon-cell">
                  <i className="ti-panel"></i>
                </span>
              </div>
              <div className="icon-content">
                <h4 className="ttr-tilte">
                  ИНЖЕНЕРИНГ, БАРИЛГА УГСРАЛТЫН АЖИЛ
                </h4>
                <p>
                  Захилагчийн хүсэлтээр инженерингийн шийдэл гаргах, барилга
                  угсралтын ажил гүйцэтгэнэ.
                </p>
                <Link to="services-details" className="feature-btn">
                  <i className="la la-long-arrow-alt-right"></i>
                </Link>
              </div>
              <i className="ti-panel bg-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
