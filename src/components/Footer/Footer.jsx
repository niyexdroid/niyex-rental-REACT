import React, {
    Component
} from 'react';
import './bootstrap.css';
import './Footer.css';
import './mdb.min.css';
import './font-awesome.min.css';
class Footer extends Component {
    render() {
        return(
            <footer className="page-footer font-small warning-color mt-5 pt-4">    
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase font-weight-bold">Contact Info</h5>
                            <p>Address: Iba Housing Estate, Ojo, Lagos
                                <br/>Tel: 08168819022
                                <br/>Email: adeniyi.4568@yahoo.com</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3"/>
                        <div className="col-md-6 mb-md-0 mt-3">
                            <form method="POST" className="input-group needs-validation" noValidate="novalidate">
                                <input type="email" name="email" className="form-control form-control-sm" placeholder="Your email" aria-label="Your email" aria-describedby="basic-addon2"
                                    required />
                                <div className="input-group-append">
                                    <button className="btn btn-md btn-outline-white waves-effect " type="submit">Sign Up for newsletter</button>
                                </div>
                                <div className="invalid-feedback">
                                    Please provide a valid email!
                                </div>
                                <div className="valid-feedback">
                                    Confirmed!
                                </div>
                            </form>
                        </div> 
                        <div className="col-md-12 py-1">
                            <div className="mb-3 flex-center">
                                <a className="fb-ic" href="https://www.facebook.com/niyex15">
                                    <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="tw-ic" href="https://twitter.com/niyexdroid">
                                    <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="gplus-ic" href="https://plus.google.com/110119918843916178209">
                                    <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="li-ic" href="https://www.linkedin.com/in/adeniyi-adegbola-b82a4911a/">
                                    <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="ins-ic" href="https://www.instagram.com/niyexdroid/">
                                    <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="copyright" className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright | Designed by
                    <a href="https://niyexdroid.webflow.io"> Niyexdroid</a>
                </div>       
            </footer>
        );
    }
}

export default Footer;