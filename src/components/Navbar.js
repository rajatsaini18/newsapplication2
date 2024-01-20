import React, { Component } from 'react'
import {
  Link
} from "react-router-dom"




export default class Navbar extends Component {


  render() {

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/ ">NewsApp</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                <li className="nav-item" >
                  <Link className="nav-link active" aria-current="page" to="/business">business</Link>
                </li>
                <li className="nav-item" >
                  <Link className="nav-link active" aria-current="page" to="/entertainment">entertainment</Link>
                </li>
                <li className="nav-item" >
                  <Link className="nav-link active" aria-current="page" to="/general">general
                  </Link>
                </li>
                <li className="nav-item" >
                  <Link className="nav-link active" aria-current="page" to="/health">health
                  </Link>
                </li>
                <li className="nav-item" >
                  <Link className="nav-link active" aria-current="page" to="/science">science
                  </Link>
                </li>
                <li className="nav-item" >
                  <Link className="nav-link active" aria-current="page" to="/sports">sports
                  </Link>
                </li>
                <li className="nav-item" >
                  <Link className="nav-link active" aria-current="page" to="/technology">technology</Link>
                </li>
              </ul>




            </div>
            <div className="dropdown mx-4"  >
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
               {`${this.props.countries[`${this.props.country}`]}`}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                
                <li><button className="dropdown-item" value='in' type="button"  onClick={() => this.props.onCountryChange('in')}>India</button></li>
                <li><button className="dropdown-item" type="button"  value='in' onClick={() => this.props.onCountryChange('ar')}>Argentina</button></li>
                <li><button className="dropdown-item" value='in' type="button" onClick={() => this.props.onCountryChange('us')} >USA</button></li>
                <li><button className="dropdown-item" type="button"  value='in' onClick={() => this.props.onCountryChange('ca')}>Canada</button></li>
                <li><button className="dropdown-item" type="button"  value='in' onClick={() => this.props.onCountryChange('jp')}>Japan</button></li>
                <li><button className="dropdown-item" type="button"  value='in' onClick={() => this.props.onCountryChange('au')}>Australia</button></li>
                <li><button className="dropdown-item" type="button"  value='in' onClick={() => this.props.onCountryChange('ua')}>Ukraine</button></li>
                <li><button className="dropdown-item" type="button"  value='in' onClick={() => this.props.onCountryChange('il')}>Israel</button></li>
              </ul>
            </div>
          </div>

        </nav>
      </div>
    )
  }
}
