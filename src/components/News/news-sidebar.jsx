import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox';

import RecentPic1 from "../../images/blog/recent-blog/pic1.jpg"
import RecentPic2 from "../../images/blog/recent-blog/pic2.jpg"
import RecentPic3 from "../../images/blog/recent-blog/pic3.jpg"
import GalleryPic1 from "../../images/gallery/pic1.jpg"
import GalleryPic2 from "../../images/gallery/pic2.jpg"
import GalleryPic3 from "../../images/gallery/pic3.jpg"
import GalleryPic4 from "../../images/gallery/pic4.jpg"
import GalleryPic5 from "../../images/gallery/pic5.jpg"
import GalleryPic6 from "../../images/gallery/pic6.jpg"

const content = [
	{
		thumb: GalleryPic1,
	},
	{
		thumb: GalleryPic2,
	},
	{
		thumb: GalleryPic3,
	},
	{
		thumb: GalleryPic4,
	},
	{
		thumb: GalleryPic5,
	},
	{
		thumb: GalleryPic6,
	}
]

const options = {
	settings: {
		overlayColor: "rgba(0,0,0,0.9)",
		backgroundColor: "#fe5a0e",
		slideAnimationType: 'slide',
	},
	buttons: {
		backgroundColor: "#fe5a0e",
		iconColor: "rgba(255, 255, 255, 1)",
		showAutoplayButton: false,
		showDownloadButton: false,
	},
	caption: {
		captionColor: "#a6cfa5",
		captionFontFamily: "Raleway, sans-serif",
		captionFontWeight: "300",
		captionTextTransform: "uppercase",
	}
};

function GalleryImg(){
	return(
		<>
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<ul className="magnific-image">
						{content.map((item) => (
							<li><img src={item.thumb} alt=""/></li>
						))}
					</ul>
				</SRLWrapper>
			</SimpleReactLightbox>	
		</>
	);
}

class NewsSidebar extends Component{
	render(){
		return(
			<>
				<aside className="side-bar sticky-top aside-bx">
					<div className="widget">
						<div className="search-bx style-1">
							<form role="search" method="post">
								<div className="input-group">
									<input name="text" className="form-control" placeholder="Хайх үгээ бичнэ үү..." type="text"/>
									<span className="input-group-btn">
										<button type="submit" className="fa fa-search text-primary"></button>
									</span> 
								</div>
							</form>
						</div>
					</div>
					<div className="widget recent-posts-entry">
						<h6 className="widget-title">Сүүлд нэмэгдсэн</h6>
						<div className="widget-post-bx">
							<div className="widget-post clearfix">
								<div className="ttr-post-media"> <img src={RecentPic1} width="200" height="143" alt=""/> </div>
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<h6 className="post-title"><Link to="blog-details-sidebar">Амины орон сууцны ипотекийн зээлд хамруулна.</Link></h6>
									</div>
									<ul className="media-post">
										<li><Link to="#">2021/12/01</Link></li>
									</ul>
								</div>
							</div>
							<div className="widget-post clearfix">
								<div className="ttr-post-media"> <img src={RecentPic2} width="200" height="160" alt=""/> </div>
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<h6 className="post-title"><Link to="blog-details-sidebar">Ten Doubts You Should Clarify About.</Link></h6>
									</div>
									<ul className="media-post">
										<li><Link to="#">2021/12/01</Link></li>
									</ul>
								</div>
							</div>
							<div className="widget-post clearfix">
								<div className="ttr-post-media"> <img src={RecentPic3} width="200" height="160" alt=""/> </div>
								<div className="ttr-post-info">
									<div className="ttr-post-header">
										<h6 className="post-title"><Link to="blog-details-sidebar">Иргэдийн ипотекийн зээлийн эргэн төлөлтийг 2022 он дуустал хойшлуулахаар болжээ.</Link></h6>
									</div>
									<ul className="media-post">
										<li><Link to="#">2021/12/01</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="widget widget_gallery gallery-grid-3">
						<h6 className="widget-title">Зургийн цомог</h6>
						<GalleryImg />
					</div>
					
				</aside>
			</>
		);
	}
}

export default NewsSidebar;
