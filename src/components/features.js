import  React,{ Component } from "react"
import { getAllFeatures } from '../api/features'

class Features extends Component {

    state = {
        loading: true,
        features: []
    };

    componentDidMount() {
        getAllFeatures().then(data => {
            setTimeout(() =>
                this.setState({
                    loading: false,
                    features: data
                }), 1000);
        });
    }
    render() {
        if (this.state.loading)
            return (<div className="text-center"><br /><br /><div className="text-center  spinner-border  text-primary" style={{ width: "10rem", height: "10rem" }}
                role="status">
                <span className="sr-only">Loading...</span>
            </div></div>);

        return <>
            <section id="features" className="padd-section text-center">

                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center">
                        <h2>Amazing Features.</h2>
                        <p className="separator">Lableb Custom Search supports indexing Arabic content and data in addition to out-of-the-box support of English language. Delivering wide variety of features such as: auto-complete, spell-correction, filters, snippets, highlighting, search analytics and more.</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        {this.state.features.map((feature, index) =>

                            <Feature feature={feature} key={index} />
                        )
                        }
                    </div>
                </div>
            </section>

        </>

    }
}





const Feature = (props) => <>

    <div className="col-md-6 col-lg-3 mb-5">
        <div className="feature-block"  style={{height:"100%"}}>
            <img src={props.feature.image} alt="img" className="img-fluid" />
            <h4>{props.feature.name}</h4>
            <p>{props.feature.text}</p>
        </div>
    </div>
</>;


export default Features;

