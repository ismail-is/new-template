import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
			  <div className="ltn__slider-11-inner">
			    <div className="ltn__slider-11-active">
			      {/* slide-item */}
			      <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
			                    <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Architecture & interior</h6>
			                    <h1 className="slide-title animated ">Innovative  <br /><span>Architecture</span> </h1>
			                    <div className="slide-brief animated">
			                      <p>Pushing Boundaries, Shaping the Future, and Transforming the Way We Experience Built Environments</p>
			                    </div>
			                    <div className="btn-wrapper animated">
			                      <Link to="/about" className="theme-btn-1 btn btn-effect-1">Read More</Link>
			                      <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/0g7mrHt3OPw?si=9xOwg4s-AcYJl0EP" data-rel="lightcase">
			                        <i className="icon-play  ltn__secondary-color" />
			                      </a>
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/slider/61.jpg"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* slide-item */}
			      <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
			                    <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Architecture & interior</h6>
			                    <h1 className="slide-title animated ">Classic  <span>And</span> <br/>Modern</h1>
			                    <div className="slide-brief animated">
			                      <p>Unveiling the Seamless Integration of Classic and Modern Design Aesthetics</p>
			                    </div>
			                    <div className="btn-wrapper animated">
			                      <Link to="/service" className="theme-btn-1 btn btn-effect-1">Read More</Link>
								  <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/0g7mrHt3OPw?si=9xOwg4s-AcYJl0EP" data-rel="lightcase">
			                        <i className="icon-play  ltn__secondary-color" />
			                      </a>
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/slider/62.jpg"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* slide-item */}
			      <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
			                    <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span>Architecture & interior</h6>
			                    <h1 className="slide-title animated ">Elegant And  <br /> <span>Unique</span> </h1>
			                    <div className="slide-brief animated">
			                      <p>Transforming Ordinary Spaces into Elegant Masterpieces with Our Unique and Creative Designs</p>
			                    </div>
			                    <div className="btn-wrapper animated">
			                      <Link to="/service" className="theme-btn-1 btn btn-effect-1">Read More</Link>
								  <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/0g7mrHt3OPw?si=9xOwg4s-AcYJl0EP" data-rel="lightcase">
			                        <i className="icon-play  ltn__secondary-color" />
			                      </a>
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/slider/63.jpg"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* slide-item */}
			      <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
			                    <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Architecture & interior</h6>
			                    <h1 className="slide-title animated ">Interior Design  <br /> <span>Agency</span> </h1>
			                    <div className="slide-brief animated">
			                      <p>Bring Your Dream House from Paper to Reality with Our Experienced and Creative Team.</p>
			                    </div>
			                    <div className="btn-wrapper animated">
			                      <Link to="/service" className="theme-btn-1 btn btn-effect-1">Read More</Link>
			                      {/* <Link to="/about" className="btn btn-transparent btn-effect-3">LEARN MORE</Link> */}
								  <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/0g7mrHt3OPw?si=9xOwg4s-AcYJl0EP" data-rel="lightcase">
			                        <i className="icon-play  ltn__secondary-color" />
			                      </a>
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/slider/64.jpg"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    {/* slider-4-pagination */}
			    <div className="ltn__slider-11-pagination-count">
			      <span className="count" />
			      <span className="total" />
			    </div>
			    {/* slider-sticky-icon */}
			    <div className="slider-sticky-icon-2">
			      <ul>
			        <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
			        <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
			        <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
			      </ul>
			    </div>
			    {/* slider-4-img-slide-arrow */}
			    <div className="ltn__slider-11-img-slide-arrow">
			      <div className="ltn__slider-11-img-slide-arrow-inner">
			        <div className="ltn__slider-11-img-slide-arrow-active">
			          <div className="image-slide-item">
			            <img src={publicUrl+"assets/img/slider/61.jpg"} alt="Flower Image" />
			          </div>
			          <div className="image-slide-item">
			            <img src={publicUrl+"assets/img/slider/62.jpg"} alt="Flower Image" />
			          </div>
			          <div className="image-slide-item">
			            <img src={publicUrl+"assets/img/slider/63.jpg"} alt="Flower Image" />
			          </div>
			          <div className="image-slide-item">
			            <img src={publicUrl+"assets/img/slider/64.jpg"} alt="Flower Image" />
			          </div>
			        </div>
			        {/* slider-4-slide-item-count */}
			        <div className="ltn__slider-11-slide-item-count">
			          <span className="count" />
			          <span className="total" />
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default BannerV2