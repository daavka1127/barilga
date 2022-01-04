import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

// Images
import BlogGridPic7 from "../../images/blog/grid/pic7.jpg"
import BlogGridPic8 from "../../images/blog/grid/pic8.jpg"
import BlogGridPic9 from "../../images/blog/grid/pic9.jpg"

class NewsSlider extends Component{
	state= {
        responsive:{
            0: {
                items: 1,
            },
			600: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
			1200: {
                items: 3,
            }
        },
    }
	
	render(){
		
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 591,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				
				<Slider {...settings} className="arrow-none">
					<div className="slider-item">
						<div className="recent-news">
							<div className="action-box">
								<img src={BlogGridPic7} alt=""/>
							</div>
							<div className="info-bx">
								<ul className="media-post">
									<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>2021 оны 12-р сарын 31</Link></li>
								</ul>
								<h4 className="post-title"><Link to="blog-details-sidebar">"Ипотекийн зээл төлөлтийг дахин 6 сараар сунгах саналаа хүргүүлсэн"</Link></h4>
								<p>Ипотекийн зээлийг зургаан сараар хойшлуулах эсэх асуудлаар өнөөдөр /2021.12.22/ Сангийн сайд Б.Жавхлан мэдээлэл хийлээ.</p>
								<div className="post-extra">
									<Link to="news-details" className="btn-link black radius-xl">ЦААШ НЬ</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="recent-news">
							<div className="action-box">
								<img src={BlogGridPic8} alt=""/>
							</div>
							<div className="info-bx">
								<ul className="media-post">
									<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>2021 оны 11-р сарын 3</Link></li>
								</ul>
								<h4 className="post-title"><Link to="blog-details-sidebar">Б.Гантулга: Ипотекийн нийт зээлдэгчдийн 59 хувь нь хоёр сая төгрөг хүртэлх өрхийн орлоготой.</Link></h4>
								<p>Энэ үеэр Орон сууцны санхүүжилтийн тогтолцоо сэдвээр МИК ОССК ХХК-ийн Гүйцэтгэх захирал Б.Гантулга илтгэлээ.</p>
								<div className="post-extra">
									<Link to="news-details" className="btn-link black radius-xl">ЦААШ НЬ</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="recent-news">
							<div className="action-box">
								<img src={BlogGridPic9} alt=""/>
							</div>
							<div className="info-bx">
								<ul className="media-post">
									<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>2022 оны 1-р сарын 1</Link></li>
								</ul>
								<h4 className="post-title"><Link to="blog-details-sidebar">Нийт 11 мянган өрхөд 868 тэрбум төгрөгийн ипотекийн зээл олгожээ.</Link></h4>
								<p>Орон сууцны ипотекийн зээлийн хөтөлбөрийн хүрээнд 2021 оны эхний арван сарын эцсийн байдлаар Монголбанк болон банкуудын эх үүсвэрээр...</p>
								<div className="post-extra">
									<Link to="news-details" className="btn-link black radius-xl">ЦААШ НЬ</Link>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</>
		);
	}
}

export default NewsSlider;
