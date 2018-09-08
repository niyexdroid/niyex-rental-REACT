import React, { Component } from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
class About extends Component {

    render() {
        return (
            <div>
                <Header />
                <section className="team-section text-center pt-5 my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">The Amazing Designer</h2>
                    <p className="grey-text w-responsive mx-auto mb-5">Am Adegbola Adeniyi, the designer of this rental service webpage. Its fully responsive on all forms of devices and
                        its transitioning is very smooth. Am a front end developer, i have also mastered some other programming languages.
                        My hobbies include building powerbanks, inverter, meeting new dev peeps. Also love watching movies. Am also a
                        freelancer.
                    </p>
                    <hr className="my-5" />
                    <div className="row text-center">
                        <div className="col-md-12 mb-md-0 mb-5">
                            <div className="avatar mx-auto" id="social">
                                <img src={require("../img/niyi.jpg")} className="rounded z-depth-1-half" alt="Sample avatar" />
                                <h4 className="font-weight-bold dark-grey-text my-4">Adegbola Adeniyi</h4>
                                <h6 className="text-uppercase grey-text mb-3">
                                    <strong>Front End Developer</strong>
                                </h6>
                                <a type="button" href="https://www.facebook.com/niyex15" className="btn-floating btn-sm mx-1 mb-0 btn-fb">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a type="button" href="https://www.linkedin.com/in/adeniyi-adegbola-b82a4911a/" className="btn-floating btn-sm mx-1 mb-0 btn-li">
                                    <i className="fa fa-linkedin "></i>
                                </a>
                                <a type="button" href="https://twitter.com/niyexdroid"  className="btn-floating btn-sm mx-1 mb-0 btn-tw">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default About;