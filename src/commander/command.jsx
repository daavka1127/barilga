import TeamPic1 from "../../images/team/122.jpg"
import TeamPic2 from "../../images/team/pic1.jpg"
import TeamPic3 from "../../images/team/pic15.jpg"
import TeamPic4 from "../../images/team/a.jpg"
export function FileNamePascalCase() {
    return (
		<div className="section-area section-sp1 team-page bg-white" style={{backgroundImage:"url("+BackBg2+")", backgroundPosition:"bottom", backgroundSize:"100%"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Компанийн удирдлага</h6>
									<h2 className="title-head m-b0">Удирдлага</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<div className="row">
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic4} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Д.БОЛД</Link></h4>
												<span>ГҮЙЦЭТГЭХ ЗАХИРАЛ</span>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic1} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">У.ГАНБАТ</Link></h4>
												<span>ДЭД ЗАХИРАЛ</span>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic2} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">А.БАТ</Link></h4>
												<span>ЕРӨНХИЙ ИНЖЕНЕР</span>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic3} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>	
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Г.ЧИНБАТ</Link></h4>
												<span>АХЛАХ НЯГТЛАН БОДОГЧ</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
    )
  }