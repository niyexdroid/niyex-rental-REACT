import React, { Component } from 'react';
import Background from '../img/minions.jpg';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

var BackgroundImage = {
    backgroundImage: "url(" + Background + ")"
}
class Gallery extends Component {
    render() {
        return (
            <div>
                <Header />
                <section>
                    <div className="card card-image" style={BackgroundImage}>
                        <div className="text-white text-center rgba-stylish-strong py-5">
                            <div className="py-5">
                                <h6 className="amber-text font-bold">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </h6>
                                <h1 className="card-title pt-4 mb-1 font-bold">Niyexdroid Movies Rentals</h1>
                                <p className="px-2 pb-1">We have the latest collections of movies and Tvseries in our gallery. Try Us Out Today!!!!
                                    <br /> Check out our gallery for new and latest movies.You can also toggle the gallery view by clicking the button below.
                                </p>
                                <button className="btn btn-amber" id="gallery-btn">
                                    <i className="fa fa-clone left"></i> View Gallery</button>
                            </div>
                        </div>
                    </div>
                    <section className="section-image animated " id="carousel-link">
                        <h1 className="h1-responsive text-center black-text my-2">Gallery Slider</h1>
                        <hr className="my-2" />
                        <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel" data-slide-to="1"></li>
                                <li data-target="#carousel" data-slide-to="2"></li>
                                <li data-target="#carousel" data-slide-to="3"></li>
                                <li data-target="#carousel" data-slide-to="4"></li>
                                <li data-target="#carousel" data-slide-to="5"></li>
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <div className="view">
                                        <img className="d-block w-100" src={require("../img/lawbreakers.jpg")} alt="First slide" />
                                        <div className="mask rgba-black-slight"></div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="view ">
                                        <img className="d-block w-100" src={require("../img/beyond-good-and-evil.jpg")} alt="Second slide" />
                                        <div className="mask rgba-black-slight"></div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="view">
                                        <img className="d-block w-100" src={require("../img/justice-league.jpg")} alt="Third slide" />
                                        <div className="mask rgba-black-slight"></div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="view">
                                        <img className="d-block w-100" src={require("../img/star-wars-battlefront.jpg")} alt="Fourth slide" />
                                        <div className="mask rgba-black-slight "></div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="view">
                                        <img className="d-block w-100" src={require("../img/avengers.jpg")} alt="Fifth slide" />
                                        <div className="mask rgba-black-slight "></div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="view">
                                        <img className="d-block w-100" src={require("../img/mission-impossible.jpg")} alt="Sixth slide" />
                                        <div className="mask rgba-black-slight "></div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>    
                    </section>
                    </section>
                <Footer />
            </div>
        );
    }
}

export default Gallery;