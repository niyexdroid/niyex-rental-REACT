import React, { Component } from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <section class=" section-image pt-5 my-5">
                    <h2 class="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
                    <p class="text-center w-responsive mx-auto mb-3">For enquiry and information, please click on the link below and submit your requst here, we will get back to you
                        within 24hrs.
                        <br/> Thank you!</p>
                    <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog cascading-modal" role="document">
                            <div class="modal-content">
                                <div class="modal-header amber darken-3 white-text">
                                    <h4 class="title">
                                        <i class="fa fa-pencil"></i> Contact form</h4>
                                    <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body mb-0">
                                        <form method="POST" id="formValidate" noValidate="novalidate" class="needs-validation">
                                            <div class="md-form form-sm">
                                                <i class="fa fa-user prefix active"></i>
                                                <input type="text" name="name" id="contact-name" class="form-control" required />
                                                <input type="hidden" name="submitted" value="1" />
                                                <label for="contact-name" class="active">Your name</label>
                                                <div class="valid-feedback">
                                                    Checked!
                                                </div>
                                                <div class="invalid-feedback">
                                                    Please provide a valid name!
                                                </div>
                                            </div>

                                            <div class="md-form form-sm">
                                                <i class="fa fa-envelope prefix active"></i>
                                                <input type="email" name="email" id="contact-email" class="form-control" required />
                                                <label for="contact-email" class="active">Your email</label>
                                                <div class="valid-feedback">
                                                    Looks good!
                                                </div>
                                                <div class="invalid-feedback">
                                                    Please provide a valid email!
                                                </div>
                                            </div>

                                            <div class="md-form form-sm">
                                                <i class="fa fa-phone prefix"></i>
                                                <input type="tel" name="phone" id="contact-phone" pattern="[0-9]{3}[0-9]{4}[0-9]{4}" class="form-control" required />
                                                <label for="contact-phone" class="active">Phone</label>
                                            </div>

                                            <div class="md-form form-sm">
                                                <i class="fa fa-pencil prefix"></i>
                                                <textarea type="text" id="contact-message" name="message" class="md-textarea mb-0 form-control" required></textarea>
                                                <label for="contact-message">Your message</label>
                                                <div class="valid-feedback">
                                                    Correct!
                                                </div>
                                                <div class="invalid-feedback">
                                                    Please input your message!
                                                </div>
                                            </div>

                                            <div class="text-center mt-1-half">
                                                <button class="btn btn-amber mb-2 waves-effect waves-light" id="contact-send" name="submit" type="submit">Send
                                                    <i class="fa fa-send ml-1"></i>
                                                </button>
                                            </div>
                                        </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="" class="btn btn-amber btn-rounded my-3" data-toggle="modal" data-target="#modalContactForm">Contact Us</a>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Contact;