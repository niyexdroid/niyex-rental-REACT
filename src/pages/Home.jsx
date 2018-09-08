import React, { Component } from 'react';
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Home;