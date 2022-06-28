import React from "react";
import "./footer.css";
import {Outlet, Link} from 'react-router-dom'

function footer() {
  return (
    <footer className="footer ">

      <div className="fb container-fluid">
        <div className="row col-12">
          <div className="col-sm-12 col-md-4 text-center align-self-center">
            <div>
              <h5>Pages</h5>
              <ul className="list-unstyled">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About Us</Link></li>
                  <li><Link to='/research'>Research</Link></li>
                  <li><Link to='/seq-analyst'>Sequence Analysis</Link></li>
              </ul>
              <Outlet />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 text-center align-self-center">
            <h5>Links</h5>
            <ul className="list-unstyled">
                <li><a href="https://www.ncbi.nlm.nih.gov/">NCBI</a></li>
                <li><a href="https://dbtindia.gov.in/covid/dbt-initiatives">DBT, Govt. of India</a></li>
                <li><a href="https://www.rcb.res.in/">Regional Centre for Biotechnology</a></li>
                <li><a href="http://www.svbpmeerut.ac.in/">SVPUAT, Meerut</a></li>
                <li><a href="https://www.csir.res.in/">CSIR</a></li>
                <li><a href="https://icar.org.in/">ICAR</a></li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-4 text-center align-self-center">
            <div className="h4">
              <a href='http://www.linkedin.com/in/srivast-avan/'><i className="fa fa-linkedin social-button" /></a>
              <a href='https://www.coursera.org/user/8c8d045fb7dc8d79fea6e36370a3fe18'><i  className="fa fa-google social-button"/></a>
              <a href='mailto:avaneesh2812@gmail.com'><i className="fa fa-envelope social-button"/></a>
              <a href='tel: 8299575981'><i  className="fa fa-phone social-button"/></a>
            </div>
            <h5>My Address</h5>          
          <address>
              G-14, Jawaharlal Nehru Hostel, <br/>
              SVPUAT, Modipuram, 
              Meerut - 250110.
          </address>
          </div>
        </div>
        <div className='row justify-content-center'>
            <p className='text-center'>&copy;2022 Avaneesh Srivastava</p>
        </div>
      </div>
    </footer>
  );
}

export default footer;
