import React from 'react';


const Member = props => {
    return (
        <div className="col-md-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
        <div className="team-block bottom">
          <img src={props.member.image} className="img-responsive" alt="img"/>
          <div className="team-content">
            <ul className="list-unstyled">
              <li><a href={props.member.facebook}><i class="fa fa-facebook"></i></a></li>
              <li><a href={props.member.twitter}><i class="fa fa-twitter"></i></a></li>
              <li><a href={props.member.linkedin}><i class="fa fa-linkedin"></i></a></li>
            </ul>
            <span>{props.member.eposition}</span>
            <h4>{props.member.ename}</h4>
          </div>
        </div>
      </div>
    );
};

export default Member;