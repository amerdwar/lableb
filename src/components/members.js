
import React, { Component } from "react";
import Member from '../components/member'
import { getAll } from '../api/team'
 class Members extends Component {

    state = {
        loading: true,
        members: []
    };

    componentDidMount() {
        getAll().then(data => {
            setTimeout(() =>
                this.setState({
                    loading: false,
                    members: data
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

            <section id="team" class="padd-section text-center">

                <div class="container" data-aos="fade-up">
                    <div class="section-title text-center">

                        <h2>Our Team Members</h2>
                        
                    </div>

                    <div class="row">
                    {this.state.members.map((member, index) =>

<Member member={member} key={index} />
)
}
                    </div>
                </div>
            </section>
          

        </>

    }
}

export default Members;