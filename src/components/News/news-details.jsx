import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header1';
import Footer1 from '../layout/footer1';

// Elements
import NewsSidebar from './news-sidebar';

// Images
import DefaultPic1 from "../../images/blog/default/pic1.jpg"
import GalleryPic2 from "../../images/gallery/pic2.jpg"
import GalleryPic5 from "../../images/gallery/pic5.jpg"
import TestimonialsPic1 from "../../images/testimonials/pic1.jpg"
import TestimonialsPic2 from "../../images/testimonials/pic2.jpg"
import TestimonialsPic3 from "../../images/testimonials/pic3.jpg"

class NewsDetails extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner page-banner-sm">
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-black">Banner байж болно</h1>
								
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-white">
							<div className="container">
								<div className="row">
									<div className="col-md-12 col-lg-8 col-xl-8 m-md-b50 wow fadeInUp" data-wow-delay="0.2s">
										{/* <!-- blog start --> */}
										<div className="blog-lg blog-single">
											<div className="action-box blog-lg">
												<img src={DefaultPic1} alt=""/>
											</div>
											<div className="info-bx">
												<ul className="media-post">
													<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i> 2021 оны 12-р сарын 31</Link></li>
												</ul>
												<div className="ttr-post-title">
													<h4 className="post-title">"Ипотекийн зээл төлөлтийг дахин 6 сараар сунгах саналаа хүргүүлсэн"</h4>
												</div>
												<div className="ttr-post-text">
													<p>Ипотекийн зээлийг зургаан сараар хойшлуулах эсэх асуудлаар өнөөдөр /2021.12.22/ Сангийн сайд Б.Жавхлан мэдээлэл хийлээ.</p>
													<blockquote className="wp-block-quote">
														<p>Монголбанкнаас ипотекийн зээлийн эргэн төлөлтийг ирэх оны нэгдүгээр сарын 1-нээс төлж эхэлнэ гэж мэдээлсэн юм. </p>
													</blockquote>
													<p>Сангийн сайд Б.Жавхлан "Засгийн газар цар тахлын хуулийг зургаан сараар сунгах саналыг өнөөдөр УИХ-д хүргүүлэхээр шийдлээ. Одоо хүчин төгөлдөр хэрэгжиж буй хуульд ипотекийн зээлийн үндсэн төлбөр болон хүүг хуулийн үйлчлэх хугацаанд сунгаж болно гэж тусгасан. Энэ заалт хэвээрээ, зургаан сараар сунгах саналыг Засгийн газар өргөн барьж байна гэсэн үг. Зээлдэгчдийн хувьд энэ хугацаанд үндсэн төлбөр, хүүгээ төлж болно. Тэгснээр зээлийн хугацаа нь хойшлохгүй. Өөрсдийн нэр дээр хурдан өмчилж авна гэсэн үг.</p>
													<ul className="wp-block-gallery columns-6 is-cropped">
														<li className="blocks-gallery-item"><img alt="" src={GalleryPic2}/></li>
														<li className="blocks-gallery-item"><img alt="" src={GalleryPic5}/></li>
													</ul>
													<ul>
														<li>нэгдүгээр сарын 1-нээс төлж эхэлнэ гэж мэдээлсэн юм. </li>
														<li>Зээлдэгчдийн хувьд энэ хугацаанд үндсэн төлбөр, хүүгээ төлж болно. </li>
														<li>Бараг 750 тэрбум төгрөгийн ипотекийн зээл гарлаа.</li>
													</ul>
													<p>Монголбанкнаас мэдээлэл хийснийг би сонссон. Банкны системд хяналт тавьж буй институцын хувьд тийм тайлбар хэлэхээс аргагүй. Гэхдээ Засгийн газар өөрийн бүрэн эрхийн хүрээнд ипотекийн зээлийг сунгах санал гаргасан. Бид энэ саналаа ч дэмжинэ. УИХ дахь МАН-ын бүлэг ч дэмжихээ илэрхийлсэн.</p>
													<p>Хоёр жил зээлийн хугацааг сунгасан. Одоо нэмээд зургаан сараар сунгах гэж байна. Энэ хугацаанд арилжааны банкуудыг алдагдалд оруулаагүй. Тиймээс энэ удаа ч гэсэн ямар нэгэн эрсдэл гарахгүй гэж бодож байна. Засгийн газрын 10 их наядын хөтөлбөрийн нэгд ипотекийн зээл багтаж байгаа. Урьд өмнө нь ипотекийн зээл хэзээ ч ийм өндөр хэмжээнд гарч байгаагүй. Бараг 750 тэрбум төгрөгийн ипотекийн зээл гарлаа. Өмнө нь бас хугацааг нь сунгаж байсан. Тэгэхээр зээлийн хугацааг сунгаснаас болж, зээл удаашрах асуудал гарахгүй. Хэрвээ иргэд төлбөрийн чадамжтай бол зээлээ төлөөд явсан нь дээр. Хугацааг сунгасан хугацаанд зээлийн хүү, үндсэн төлбөр хуримтлагдахгүй.</p>
												</div>
												{/* <div className="ttr-divider bg-gray"><i className="icon-dot c-square"></i></div>
												<div className="ttr-post-meta d-flex">
													<div className="post-tags"> 
														<Link to="#">Creative</Link> 
														<Link to="#">Media</Link> 
														<Link to="#">Fashion</Link> 
														<Link to="#">Photography</Link> 
													</div>
													<div className="share-post ml-auto">
														<ul className="social">
															<li>Share:</li>
															<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
															<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
															<li><Link to="#"><i className="fa fa-pinterest"></i></Link></li>
														</ul>
													</div>
												</div> */}
											</div>
										</div>
										{/* <div className="author-box blog-user m-b60">
											<div className="author-profile-info">
												<div className="author-profile-pic">
													<img src={TestimonialsPic2} alt=""/>
												</div>
												<div className="author-profile-content">
													<h6>Sonar Z. Moyna</h6>
													<p>Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
													<ul className="list-inline m-b0">
														<li><Link to="#" className="btn-link"><i className="fa fa-facebook"></i></Link></li>
														<li><Link to="#" className="btn-link"><i className="fa fa-google-plus"></i></Link></li>
														<li><Link to="#" className="btn-link"><i className="fa fa-instagram"></i></Link></li>
														<li><Link to="#" className="btn-link"><i className="fa fa-twitter"></i></Link></li>
													</ul>
												</div>
											</div>
										</div> */}
										<div className="clear" id="comment-list">
											<div className="comments-area" id="comments">
												<h2 className="comments-title">3 Сэтгэгдэл</h2>
												<div className="clearfix">
													{/* <!-- comment list END --> */}
													<ol className="comment-list">
														<li className="comment">
															<div className="comment-body">
																<div className="comment-author vcard"> <img  className="avatar photo" src={TestimonialsPic1} alt=""/> <cite className="fn">Зочин</cite> <span className="says">says:</span> </div>
																<div className="comment-meta"> <Link to="#">2021/12/31 10:41</Link> </div>
																<p>8 хувийн зээлтэй иргэдээ 6 хувь руу шилжүүлээчээ зээлээ төлөөд амьжиргаандаа хүрэхгүй байгаа иргэд маш олон байгаа шүү дээ </p>
																<div className="reply"> <Link to="#" className="comment-reply-link">Хариулах</Link> </div>
															</div>
															<ol className="children">
																<li className="comment odd parent">
																	<div className="comment-body">
																		<div className="comment-author vcard"> <img  className="avatar photo" src={TestimonialsPic2} alt=""/> <cite className="fn">Зочин</cite> <span className="says">says:</span> </div>
																		<div className="comment-meta"> <Link to="#">2021/12/31 10:49</Link> </div>
																		<p>Юм бүхэн 2 талтай. Нэг талаасаа ипотекийн зээл хүртээмжтэй болоод хүмүүст авах боломж бүрдүүлээд байгаа юм шиг боловч нөгөөтэйгүүр байрны үнийг хөөрөгдөөд л байгаа. </p>
																		
																	</div>
																	{/* <ol className="children">
																		<li className="comment odd parent">
																			<div className="comment-body">
																				<div className="comment-author vcard"> <img  className="avatar photo" src={TestimonialsPic3} alt=""/> <cite className="fn">John Doe</cite> <span className="says">says:</span> </div>
																				<div className="comment-meta"> <Link to="#">December 02, 2019 at 10:45 am</Link> </div>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. 
																					In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, 
																					ac elementum ligula blandit ac.</p>
																				<div className="reply"> <Link to="#" className="comment-reply-link">Reply</Link> </div>
																			</div>
																		</li>
																	</ol> */}
																	{/* <!-- list END --> */}
																</li>
															</ol>
															{/* <!-- list END --> */}
														</li>
														<li className="comment">
															<div className="comment-body">
																<div className="comment-author vcard"> <img  className="avatar photo" src={TestimonialsPic1} alt=""/> <cite className="fn">Зочин</cite> <span className="says">says:</span> </div>
																<div className="comment-meta"> <Link to="#">2021/12/31 10:49</Link> </div>
																<p>Ипотекийн зээлээ өгөхөө болиод зүгээр зах зээлийн зарчмаар нь хаячих үнэ нь аяндаа бууна. 1 өрөө байр 80-100 сая хүрэхэд нөлөөлсөн гол нэг хүчин зүйл бол 6 хувь штээ.</p>
																<div className="reply"> <Link to="#" className="comment-reply-link">Хариулах</Link> </div>
															</div>
														</li>
														
													</ol>
													{/* <!-- comment list END --> */}
													{/* <!-- Form --> */}
													<div className="comment-respond" id="respond">
														<h4 className="comment-reply-title" id="reply-title">Сэтгэгдэл үлдээх <small> <Link style={{display: "none"}} to="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link> </small> </h4>
														<form className="comment-form" id="commentform" method="post">
															<p className="comment-form-author">
																<label htmlFor="author">Нэр <span className="required">*</span></label>
																<input type="text" defaultValue="" name="Author"  placeholder="Нэр" id="author"/>
															</p>
															
															<p className="comment-form-comment">
																<label htmlFor="comment">Сэтгэгдэл</label>
																<textarea rows="8" name="comment" placeholder="Сэтгэгдэл" id="comment"></textarea>
															</p>
															<p className="form-submit">
																
																<a class="btn m-r20" href="#">Илгээх</a>
															</p>
														</form>
													</div>
													{/* <!-- Form --> */}
												</div>
											</div>
										</div>
										{/* <!-- blog END --> */}
									</div>
									<div className="col-md-12 col-lg-4 col-xl-4 sticky-top wow fadeInUp" data-wow-delay="0.4s">
										<NewsSidebar />
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

export default NewsDetails;