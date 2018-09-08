import React, { Component } from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
class Rent extends Component {
    render() {
        return (
            <div>
                <Header />
                <section id="rent" className="mx-3 my-5 pt-5 animated fadeInRightBig">
                    <h3 className="h3-responsive my-3 text-center">POPULAR MOVIES</h3>
                    <hr className= "my-2" />
                    <div className="card-deck">
                        <div className="card mb-4">
                            <div className="view overlay zoom">
                                <img className="card-img-top" src={require("../img/12-strong-rent.jpg")} alt="Card movie cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">₦50.00</h4>
                                <button type="button" className="btn btn-amber btn-md">Rent</button>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="view overlay zoom">
                                <img className="card-img-top" src={require("../img/black-panther-rent.jpg")} alt="Card movie cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">₦50.00</h4>
                                <button type="button" className="btn btn-amber btn-md">Rent</button>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="view overlay zoom">
                                <img className="card-img-top" src={require("../img/rampage-rent.jpg")} alt="Card movie cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">₦50.00</h4>
                                <button type="button" className="btn btn-amber btn-md">Rent</button>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="view overlay zoom">
                                <img className="card-img-top" src={require("../img/star-wars-rent.jpeg")} alt="Card movie cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">₦50.00</h4>
                                <button type="button" className="btn btn-amber btn-md">Rent</button>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="view overlay zoom">
                                <img className="card-img-top" src={require("../img/avatar-2-rent.jpg")} alt="Card movie cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">₦50.00</h4>
                                <button type="button" className="btn btn-amber btn-md">Rent</button>
                            </div>
                        </div>
                    </div>
                    <h3 className="h3-responsive my-5 text-center">MOST DOWNLOADED MOVIES</h3>
                    <hr className = "my-2"/>
                    <div className="card-deck px-0">
                        <div className="card mb-4">
                            <div className="view overlay zoom">
                                <img className="card-img-top" src={require("../img/oceans-8-rent.jpg")} alt="Card movie cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">₦50.00</h4>
                                <button type="button" className="btn btn-amber btn-md">Rent</button>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="view overlay zoom">
                                <img className="card-img-top" src={require("../img/predator-rent.jpg")} alt="Card movie cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">₦50.00</h4>
                                <button type="button" className="btn btn-amber btn-md">Rent</button>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="view overlay zoom">
                                <img className="card-img-top" src={require("../img/sherlockgnomes-rent.jpg")} alt="Card movie cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">₦50.00</h4>
                                <button type="button" className="btn btn-amber btn-md">Rent</button>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="view overlay zoom">
                                <img className="card-img-top" src={require("../img/ted-rent.jpg")} alt="Card movie cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="card-body center">
                                <h4 className="card-title">₦50.00</h4>
                                <button type="button" className="btn btn-amber btn-md">Rent</button>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="view overlay zoom">
                                <img className="card-img-top" src={require("../img/avengers-rent.jpg")} alt="Card movie cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="card-body center">
                                <h4 className="card-title">₦50.00</h4>
                                <button type="button" className="btn btn-amber btn-md">Rent</button>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Rent;