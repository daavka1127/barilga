import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import IconPdf from "../../../images/icon/pdf.png";
import IconDoc from "../../../images/icon/doc.png";
import AboutPic3 from "../../../images/about/pic3.jpg";
import HeadPhones from "../../../images/icon/headphones.png";

class SolutionSidebar extends Component {
  render() {
    return (
      <>
        <aside className="sticky-top">
          <div className="widget">
            <ul className="service-list">
              <li className="active">
                <Link to="solution-agricultural-engineering">
                  <span>БАРИЛГЫН ЗУРАГ ТӨСӨЛ</span>
                  <i className="fa fa-angle-right"></i>{" "}
                </Link>
              </li>
              <li>
                <Link to="solution-chemical-research-engineering">
                  <span>БАРИЛГЫН ТӨСЛИЙН МЕНЕЖМЕНТ</span>
                  <i className="fa fa-angle-right"></i>
                </Link>
              </li>
              <li>
                <Link to="solution-material-science-and-engineering">
                  <span>ИНЖЕНЕРИНГ, БАРИЛГА УГСРАЛТЫН АЖИЛ</span>
                  <i className="fa fa-angle-right"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="widget">
            <div className="help-bx">
              <div className="media">
                <img src={AboutPic3} alt="" />
              </div>
              <div className="info text-white">
                <img src={HeadPhones} alt="" />
                <h5 className="title">Тусламж</h5>
                <p>
                  Хэрвээ танд асууж лавлах зүйл гарвал бид танд туслахдаа таатай
                  байх болно.
                </p>
                <a href="contact-1.html" className="btn-secondry">
                  Холбоо барих
                </a>
              </div>
            </div>
          </div>
        </aside>
      </>
    );
  }
}

export default SolutionSidebar;
