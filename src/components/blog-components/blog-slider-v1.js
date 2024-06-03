import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class BlogSlider extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = this.props.customClass ? this.props.customClass :''
    let sectionClass = this.props.sectionClass ? this.props.sectionClass :''
    return (
      <div className={ "ltn__blog-area pt-115--- pb-70 go-top "+ sectionClass}>
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-12">
		        <div className="section-title-area ltn__section-title-2--- text-center">
		          <h6 className={"section-subtitle ltn__secondary-color "+customClass}>Latest  &amp; Works</h6>
		          <h1 className="section-title">Our Works</h1>
		        </div>
		      </div>
		    </div>
		    <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/1.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		          
		            <h3 className="ltn__blog-title"><Link to="/blog-details">Hospitality /Rohan Suite</Link></h3>
		            <div className="ltn__blog-meta-btn">
					<div className="ltn__blog-meta">
		              
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/blog-details">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/2.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/blog-details">Rohan / Mall</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		           
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/blog-details">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/3.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		          
		            <h3 className="ltn__blog-title"><Link to="/blog-details">Ekaa</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		               
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/blog-details">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      
		    </div>



			<div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/1.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/blog-details">Rohan Hills</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		              
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/blog-details">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/2.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/blog-details">Vermont Valley</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/blog-details">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/3.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            
		            <h3 className="ltn__blog-title"><Link to="/blog-details">Fathers Mullers University</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		               
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/blog-details">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      
		    </div>

			<div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/1.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		          
		            <h3 className="ltn__blog-title"><Link to="/blog-details">Shakthi Residential School</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		               
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/blog-details">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/2.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		           
		            <h3 className="ltn__blog-title"><Link to="/blog-details">Kerala Sheni Farmhouse</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		              
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/blog-details">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      
		      
		    </div>
		  </div>




		  
		</div>
    )
  }
}

export default BlogSlider;
