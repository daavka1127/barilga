import React, { Component, useState, handleShow } from "react";
import { Link } from "react-router-dom";
import Sticky from "react-stickynode";

// Images
import Logo from "../../../images/logo.png";
import ProductImg1 from "../../../images/product/pic1.jpg";
import ProductImg2 from "../../../images/product/pic2.jpg";

class Header1 extends Component {
  componentDidMount() {
    // Mobile Menu sidebar function
    var btn = document.querySelector(".menuicon");
    var nav = document.querySelector(".menu-links");

    function toggleFunc() {
      btn.classList.toggle("open");
      nav.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);

    // Mobile Submenu open close function
    var navMenu = [].slice.call(
      document.querySelectorAll(".menu-links > ul > li")
    );
    for (var y = 0; y < navMenu.length; y++) {
      navMenu[y].addEventListener("click", function () {
        menuClick(this);
      });
    }

    function menuClick(current) {
      const active = current.classList.contains("open");
      navMenu.forEach((el) => el.classList.remove("open"));

      if (active) {
        current.classList.remove("open");
        console.log("active");
      } else {
        current.classList.add("open");
        console.log("close");
      }
    }
  }

  render() {
    return (
      <>
        {/* <!-- Header Top ==== --> */}
        <header className="header rs-nav">
          <Sticky enabled={true} className="sticky-header navbar-expand-lg">
            <div className="menu-bar clearfix">
              <div className="container clearfix">
                {/* <!-- Header Logo ==== --> */}
                <div className="menu-logo">
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
                {/* <!-- Mobile Nav Button ==== --> */}
                <button
                  className="navbar-toggler collapsed menuicon justify-content-end"
                  type="button"
                  data-toggle="collapse"
                  data-target="#menuDropdown"
                  aria-controls="menuDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                {/* <!-- Navigation Menu ==== --> */}
                <div
                  className="menu-links navbar-collapse collapse justify-content-end"
                  id="menuDropdown"
                >
                  <div className="menu-logo">
                    <Link to="/index-dadaa">
                      <img src={Logo} alt="" />
                    </Link>
                  </div>
                  <ul className="nav navbar-nav">
                    <li className="active">
                      <Link to="/index-dadaa">Нүүр</Link>
                    </li>
                    <li className="has-mega-menu ">
                      <Link to="#">
                        Бидний тухай<i className="fa fa-chevron-down"></i>
                      </Link>
                      <ul className="mega-menu">
                        <li>
                          <Link to="#">Цэс1</Link>
                          <ul>
                            <li>
                              <Link to="about-1">
                                <span>Мэндчилгээ</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="about-2">
                                <span>Компанийн танилцуулга</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="about-3">
                                <span>Эрхэм зорилго</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="awards">
                                <span>Харилцагч байгууллага</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="job-career">
                                <span>Удирдлага</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">Цэс2</Link>
                          <ul>
                            <li>
                              <Link to="about-1">
                                <span>Мэндчилгээ</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="about-2">
                                <span>Компанийн танилцуулга</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="about-3">
                                <span>Эрхэм зорилго</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="awards">
                                <span>Харилцагч байгууллага</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="job-career">
                                <span>Удирдлага</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">Цэс3</Link>
                          <ul>
                            <li>
                              <Link to="about-1">
                                <span>Мэндчилгээ</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="about-2">
                                <span>Компанийн танилцуулга</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="about-3">
                                <span>Эрхэм зорилго</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="awards">
                                <span>Харилцагч байгууллага</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="job-career">
                                <span>Удирдлага</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">Цэс4</Link>
                          <ul>
                            <li>
                              <Link to="about-1">
                                <span>Мэндчилгээ</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="about-2">
                                <span>Компанийн танилцуулга</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="about-3">
                                <span>Эрхэм зорилго</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="awards">
                                <span>Харилцагч байгууллага</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="job-career">
                                <span>Удирдлага</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">
                        Бүтээн байгуулалт<i className="fa fa-chevron-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li className="add-menu-left">
                          <ul>
                            <li>
                              <Link to="solution-agricultural-engineering">
                                <span>Хэрэгжүүлсэн ажлууд</span>{" "}
                              </Link>
                            </li>
                            <li>
                              <Link to="solution-chemical-research-engineering">
                                <span>Хэрэгжиж буй ажлууд</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">Мэдээ мэдээлэл</Link>
                    </li>
                    <li>
                      <Link to="#">Холбоо барих</Link>
                    </li>
                  </ul>
                  <div className="nav-social-link">
                    <Link to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-google-plus"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </div>
                </div>
                {/* <!-- Navigation Menu END ==== --> */}
              </div>
            </div>
          </Sticky>
        </header>
        {/* <!-- Header Top END ==== --> */}
      </>
    );
  }
}

export default Header1;
