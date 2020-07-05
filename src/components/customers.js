import React, { Component } from "react"
import Customer from '../components/customer'
import { getAllCustomers } from '../api/customers'


class Customers extends Component {

    state = {
        loading: true,
        customers: []
    };

    componentDidMount() {


        getAllCustomers().then(data => {
            setTimeout(() =>
                this.setState({
                    loading: false,
                    customers: data
                }), 1000);
        });
    }
    componentWillUnmount() {

    }
    render() {
        if (this.state.loading)
            return (<div className="text-center"><br /><br /><div className="text-center  spinner-border  text-primary" style={{ width: "10rem", height: "10rem" }}
                role="status">
                <span className="sr-only">Loading...</span>
            </div></div>);

        const ela = <section id="screenshots" class="padd-section text-center">

            <div className="container" data-aos="fade-up">
                <div className="section-title text-center">
                    <h2>App Gallery</h2>
                    <p className="separator">Integer cursus bibendum augue ac cursus .</p>
                </div>

                <div className="owl-carousel owl-theme" data-aos="fade-up" data-aos-delay="100" >
                    <div><img src="assets/img/screen/1.jpg" alt="img" /></div>
                    <div><img src="assets/img/screen/2.jpg" alt="img" /></div>
                    <div><img src="assets/img/screen/3.jpg" alt="img" /></div>
                    <div><img src="assets/img/screen/4.jpg" alt="img" /></div>
                    <div><img src="assets/img/screen/5.jpg" alt="img" /></div>
                    <div><img src="assets/img/screen/6.jpg" alt="img" /></div>
                    <div><img src="assets/img/screen/7.jpg" alt="img" /></div>
                    <div><img src="assets/img/screen/8.jpg" alt="img" /></div>
                    <div><img src="assets/img/screen/9.jpg" alt="img" /></div>
                </div>
            </div>

        </section>;

        return <>
            {ela}


        </>
    }
}

export default Customers;

