import React, { Component } from 'react';
import BootstrapSVG from '../bootstrap-solid.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img className="mb-2" src={BootstrapSVG} alt="" width="24" height="24" />
            <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#top">Cool stuff</a></li>
              <li><a className="text-muted" href="#top">Random feature</a></li>
              <li><a className="text-muted" href="#top">Team feature</a></li>
              <li><a className="text-muted" href="#top">Stuff for developers</a></li>
              <li><a className="text-muted" href="#top">Another one</a></li>
              <li><a className="text-muted" href="#top">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#top">Resource</a></li>
              <li><a className="text-muted" href="#top">Resource name</a></li>
              <li><a className="text-muted" href="#top">Another resource</a></li>
              <li><a className="text-muted" href="#top">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#top">Team</a></li>
              <li><a className="text-muted" href="#top">Locations</a></li>
              <li><a className="text-muted" href="#top">Privacy</a></li>
              <li><a className="text-muted" href="#top">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
