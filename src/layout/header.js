import React, { Component } from "react";
  
  export const Header=()=> {


function setDarkMode(event){
  debugger;
  if(event.target.checked )

    document.body.classList.add('darkmode');

    else
 
    document.body.classList.remove('darkmode');

  

}


  return <header id="header" class="header">
    <div class="container">

      <div id="logo" class="pull-left">
        
         <a href="index.html"><img src="./assets/img/logoNav.png" alt="" title="" /></a>
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active"><a href="#">Home</a></li>
          <li><a href="#"></a></li>
          <li><a href="#">Features</a></li>
          
          
          <li><a href="#">Pricing</a></li>
          <li class="menu-has-children"><a href="#">Developers</a>
            <ul>
              <li><a href="#">Documentation</a></li>
             
            </ul>
          </li>
          <li><a href="#">العربية</a></li>
         <li>

         <div class="theme-switch-wrapper">
    <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" onChange={setDarkMode} />
        <div class="slider round" ></div>
  </label>
  <li><a href="#">🌛</a></li>
</div>
         </li>
        </ul>
      </nav>
      
    </div>
  </header>

  }