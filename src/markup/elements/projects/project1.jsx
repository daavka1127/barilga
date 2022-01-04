import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images
import PortImg1 from "../../../images/portfolio/agriculture/7.png"
import PortImg2 from "../../../images/portfolio/agriculture/8.png"
import PortImg3 from "../../../images/portfolio/agriculture/6.png"
import PortImg4 from "../../../images/portfolio/agriculture/0.png"
import PortImg5 from "../../../images/portfolio/agriculture/3.png"
import PortImg6 from "../../../images/portfolio/agriculture/5.png"

// Portfolio Content
const content = [
	{ 
		thumb: PortImg1, 
		LightImg: PortImg1,
		tag: ['НИЙСЛЭЛИЙН ТӨР ЗАХИРГААНЫ АВТОБААЗЫН ОРОН СУУЦ',],
		title: "НИЙСЛЭЛИЙН ТӨР ЗАХИРГААНЫ АВТОБААЗЫН ОРОН СУУЦ",
		exetitle: "",
	},
	{ 
		thumb: PortImg2,
		LightImg: PortImg2,
		tag: ['',],
		title: "НАЛАЙХ 55 АЙЛЫН ОРОН СУУЦ",
		exetitle: "",
	},
	{ 
		thumb: PortImg3,
		LightImg: PortImg3,
		tag: ['',],
		title: "НИЙСЛЭЛИЙН ТӨР ЗАХИРГААНЫ АВТОБААЗЫН ОРОН СУУЦ",
		exetitle: "",
	},
	{ 
		thumb: PortImg4,
		LightImg: PortImg4,
		tag: ['',],
		title: "DREAM APARMENT",
		exetitle: "",
	},
	{ 
		thumb: PortImg5,
		LightImg: PortImg5,
		tag: ['',],
		title: "BUDDHA VISTA Хотхон",
		exetitle: "",
	},
	{ 
		thumb: PortImg6,
		LightImg: PortImg6,
		tag: ['Fruits',],
		title: "ЗАХИАЛГАТ БАРИЛГА",
		exetitle: "Agricultural",
	},
]

// Magnific Anchor
const MagnificAnchor = props => {
	const { openLightbox } = useLightbox()

	return (
		<Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="magnific-anchor" >
			<i className="la la-plus"></i>
		</Link>
	)
}

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

const FilterList = ({dataFilter, defaultTag, activeFilter}) => {                                                               
	return (	
		<li className={`${activeFilter ? 'btn active' : 'btn'}` } onClick={() => defaultTag(dataFilter)} >
			<Link to={"#"}><span>{dataFilter}</span></Link>
		</li> 
	);
};

function PortfolioContent(){
	const [tag, setTag] = useState('All Cases');
	const [filteredImages, setFilterdImages] = useState([]);
	
	useEffect( () => {
		tag === 'All Cases' ? setFilterdImages(content) : setFilterdImages(content.filter( image => image.tag.find(element => element === tag)))
	}, [tag])	
	
	return(
			
			<>
			
			{/* <div className="feature-filters clearfix left m-b40 style1">
				<ul className="filters" data-toggle="buttons">
					<FilterList 
						dataFilter="All Cases" 
						defaultTag={setTag} 
						activeFilter={ tag === 'All Cases' ? true : false }	
					/>
					<FilterList 
						dataFilter="Eco Product" 
						defaultTag={setTag} 
						activeFilter={ tag === 'Eco Product' ? true : false }
					/>
					<FilterList 
						dataFilter="Fruits" 
						defaultTag={setTag} 
						activeFilter={ tag === 'Fruits' ? true : false }
					/>
					<FilterList 
						dataFilter="Vegetables"
						defaultTag={setTag} 
						activeFilter={ tag === 'Vegetables' ? true : false }	
					/>
					<FilterList 
						dataFilter="Agricultural"
						defaultTag={setTag} 
						activeFilter={ tag === 'Agricultural' ? true : false }	
					/>
				</ul>
			</div> */}
			
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<Masonry className="row magnific-image">
						{filteredImages.map((item, index)=>(	
							<div className="action-card col-lg-4 col-md-6 col-sm-12 m-b30" key={index}>
								<div className="portfolio-box style-1">
									<div className="portfolio-media">
										<img src={item.thumb}  alt="" />	
									</div>
									<div className="portfolio-info bg-white">
										<h4 className="title"><Link to={"projects-single-1"}>{item.title}</Link></h4>
										<span className="exe-title">{item.exetitle}</span>
									</div>
								</div>
							</div>
						))}	
					</Masonry>
				</SRLWrapper>
			</SimpleReactLightbox>
		</>
		
	);
}

class PortMasonry extends Component{
	render(){
		return(
			<>
				<PortfolioContent />
			</>
		)
	}
}
export default PortMasonry;