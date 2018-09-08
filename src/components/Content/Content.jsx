import React, { Component } from 'react';
import './bootstrap.css';
import './mdb.min.css';
import './font-awesome.min.css';
import Background from './img/movies.jpg';
import './Content.css';

var CardStyle = {
    backgroundImage: "url(" + Background + ")"
};
class Content extends Component {
    render() {
        return(
            <div>
                <div className="mt-0 py-0 animated fadeIn">
                    <div className="card card-image" style={ CardStyle }>
                        <div className="text-white text-center rgba-stylish-strong py-5 px-4">
                            <div className="py-5 animate bounceIn">
                                <h1 className="card-title pt-3 mb-5 font-bold">Niyexdroid Movie Rentals</h1>
                                <p className="px-5 pb-4">New content arrives on Niyexdroid movie rentals all the time. Here you can see what’s new this week and
                                    browse the top 100 TV shows, movies, and more. Check out our gallery</p>
                                <a className="btn btn-amber" href="gallery.html#carousel-link">
                                    <i className="fa fa-clone left"></i> View Gallery</a>
                            </div>                    
                        </div>
                    </div>
                </div>
                <div className="team-section text-center my-5 animated bounceIn">
                    <h2 className="h1-responsive font-weight-bold my-5">Testimonials</h2>
                    <p className="dark-grey-text w-responsive mx-auto mb-5">Rental you can trust! Read testimonies from our esteemed customers!!!.</p>
                    <div className="row text-center">
                        <div className="col-md-4 mb-md-0 mb-5">
                            <div className="testimonial">
                                <div className="avatar mx-auto">
                                    <img src={require('./img/sabuni.jpg')} className="rounded-circle z-depth-1 img-fluid" alt="A lady"/>
                                </div>
                                <h4 className="font-weight-bold dark-grey-text mt-4">Chioma Okeke</h4>
                                <h6 className="font-weight-bold amber-text my-3">Banker</h6>
                                <p className="font-weight-normal dark-grey-text">
                                    <i className="fa fa-quote-left pr-2"></i>Streaming from their server is awesome. Doesn't break.</p>
                                <div className="orange-text">
                                    <i className="fa fa-star"> </i>
                                    <i className="fa fa-star"> </i>
                                    <i className="fa fa-star"> </i>
                                    <i className="fa fa-star"> </i>
                                    <i className="fa fa-star-half-full"> </i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-5">
                            <div className="testimonial">
                                <div className="avatar mx-auto">
                                    <img src={require('./img/king.png')} className="rounded-circle z-depth-1 img-fluid" alt="gentleman with dreeds"/>
                                </div>
                                <h4 className="font-weight-bold dark-grey-text mt-4">Wale Fatoke</h4>
                                <h6 className="font-weight-bold amber-text my-3">Web Developer</h6>
                                <p className="font-weight-normal dark-grey-text">
                                    <i className="fa fa-quote-left pr-2"></i>Great rentals! they ship very fast.</p>
                                <div className="orange-text">
                                    <i className="fa fa-star"> </i>
                                    <i className="fa fa-star"> </i>
                                    <i className="fa fa-star"> </i>
                                    <i className="fa fa-star"> </i>
                                    <i className="fa fa-star"> </i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="testimonial">
                                <div className="avatar mx-auto">
                                    <img src={require("./img/braids.jpg")} className="rounded-circle z-depth-1 img-fluid" alt="A beautiful lady"/>
                                </div>
                                <h4 className="font-weight-bold dark-grey-text mt-4">Kate Abang</h4>
                                <h6 className="font-weight-bold amber-text my-3">Student</h6>
                                <p className="font-weight-normal dark-grey-text">
                                    <i className="fa fa-quote-left pr-2"></i> Awesome! site their movies are of high resolution</p>
                                <div className="orange-text">
                                    <i className="fa fa-star"> </i>
                                    <i className="fa fa-star"> </i>
                                    <i className="fa fa-star"> </i>
                                    <i className="fa fa-star"> </i>
                                    <i className="fa fa-star-o"> </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;