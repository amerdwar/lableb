import React from 'react'
const NewsLetter = ()=>
<section id="newsletter" class="newsletter text-center">
  <div class="overlay padd-section">
    <div class="container" data-aos="zoom-in">

      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-6">
          <form class="form-inline" method="POST" action="#">

            <input type="email" class="form-control " placeholder="Email Adress" name="email"/>
            <button type="button" class="btn btn-default"><i class="fa fa-location-arrow"></i>Subscribe</button>

          </form>

        </div>
      </div>

      <ul class="list-unstyled">
        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
      </ul>

    </div>
  </div>
</section>

export default NewsLetter ;