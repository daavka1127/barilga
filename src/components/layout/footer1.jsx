import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogoWhite from "../../images/logo-white.png"
import IconImg1 from "../../images/icon/contact/icon1.png"
import IconImg2 from "../../images/icon/contact/icon2.png"
import IconImg3 from "../../images/icon/contact/icon3.png"

class Footer1 extends Component{
	render(){
		return(
			<>
				{/* <!-- Footer ==== --> */}
				<footer className="footer-style2">
					<div className="footer-top bt0">
						<div className="container">
							<div className="row align-items-center footer-info">
								<div className="col-lg-3 col-md-6 col-sm-6 m-md-b30">
									<div className="feature-container left footer-info-bx">
										<div className="feature-lg text-white">
											<span className="icon-cell"><img src={IconImg3} alt=""/></span> 
										</div>
										<div className="icon-content">
											<h5 className="ttr-tilte">Хаяг</h5>
											<p>УБ хот Баянгол 9-р хороо 9-р байр 99 тоот</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-md-b30">
									<div className="feature-container left footer-info-bx">
										<div className="feature-lg text-white">
											<span className="icon-cell"><img src={IconImg1} alt=""/></span> 
										</div>
										<div className="icon-content">
											<h5 className="ttr-tilte">Утасны дугаар</h5>
											<p>+976 99999999<br/>+976 88888888</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-sm-b30">
									<div className="feature-container left footer-info-bx">
										<div className="feature-lg text-white">
											<span className="icon-cell"><img src={IconImg2} alt=""/></span> 
										</div>
										<div className="icon-content">
											<h5 className="ttr-tilte">И-мэйл хаяг</h5>
											<p>info@yourdomain.com <br/>example@support.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="container">
							<div className="row">
								<div className="col-12 col-lg-3 col-md-5 col-sm-6">
									<div className="widget footer_widget">
										<h5 className="footer-title">Our Solutions</h5>
										<ul>
											<li><Link to="solution-material-science-and-engineering"><span>Engineering</span></Link></li>
											<li><Link to="solution-oil-and-gas"><span>Petrolium & Gas</span></Link></li>
											<li><Link to="solution-power-and-energy"><span>Power & Engergy</span></Link></li>
											<li><Link to="solution-mechanical-engineering"><span>Mechanical Engineering</span></Link></li>
											<li><Link to="solution-agricultural-engineering"><span>Agricultural Processing</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-lg-4 col-md-7 col-sm-6">
									<div className="widget list-2">
										<h5 className="footer-title">Company</h5>
										<ul>
											<li><Link to="index">Home</Link></li>
											<li><Link to="about-1">About Us</Link></li>
											<li><Link to="company-history">Company News</Link></li>
											<li><Link to="projects-single-1">Projects</Link></li>
											<li><Link to="case-study">Case Study</Link></li>
											<li><Link to="faq-1">Faq's</Link></li>
											<li><Link to="awards">Awards</Link></li>
											<li><Link to="services-1">Services</Link></li>
											<li><Link to="contact-1">Contact Us</Link></li>
											<li><Link to="team">Out Team</Link></li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-lg-5 col-md-12 col-sm-12">
									<div className="widget widget_info">
										<h5 className="footer-title">Visit Our Studio At</h5>
										<p>Weekly Breaking News Analysis And Cutting Edge <br/>Advices On Job Searching.</p>
										<form className="subscribe-form m-b20" action="assets/script/mailchamp.php" method="post">
											<div className="ajax-message"></div>
											<div className="input-group">
												<input name="email" required="required" className="form-control" placeholder="Email Address" type="email"/>
												<div className="input-group-append">
													<button name="submit" value="Submit" type="submit" className="btn btn-block radius-sm">Subscribe</button>	
												</div>
											</div>
										</form>
										<ul className="list-inline ft-social-bx">
											<li><Link to="#" className="btn button-sm"><i className="fa fa-facebook"></i></Link></li>
											<li><Link to="#" className="btn button-sm"><i className="fa fa-twitter"></i></Link></li>
											<li><Link to="#" className="btn button-sm"><i className="fa fa-linkedin"></i></Link></li>
											<li><Link to="#" className="btn button-sm"><i className="fa fa-google-plus"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div> */}
					</div>
					<div className="footer-bottom">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-left">
									<p className="m-b0">Copyright © 2021 
									<img src={LogoWhite} className="footer-b-logo m-lr5" width="50" alt=""/> 
									All Rights Reserved.</p>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-right">
									<ul className="link-inline">
										<li><Link to="/">Home</Link></li>
										<li><Link to="about-1">About</Link></li>
										<li><Link to="faq-1">FAQs</Link></li>
										<li><Link to="contact-1">Contact</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
	}
}

export default Footer1;
