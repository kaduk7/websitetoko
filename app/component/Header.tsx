import React from 'react'

export default  function Header() {
    return (
        <div id="header">
        <div className="container">
          <div id="welcomeLine" className="row">
          </div>
          <div id="logoArea" className="navbar">
            <a id="smallScreen" data-target="#topMenu" data-toggle="collapse" className="btn btn-navbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </a>
            <div className="navbar-inner">
              <a className="brand" href="/">
                <img src="template/themes/images/logo3.png" alt="Bootsshop" />
              </a>
              <form className="form-inline navbar-search" method="post" action="products.html">
                <input id="srchFld" className="srchTxt" type="text" />
                <select className="srchTxt">
                  <option>All</option>
                  <option>Laptop </option>
                  <option>PC</option>
                  <option>Keyboard</option>
                  <option>Harddisk </option>
                  <option>Lain-lain</option>
                </select>
                <button type="submit" id="submitButton" className="btn btn-primary">
                  Go
                </button>
              </form>
              <ul id="topMenu" className="nav pull-right">
                <li className="">
                  <a href="special_offer.html">Penawaran Khusus</a>
                </li>
                <li className="">
                  <a href="normal.html">Pengiriman</a>
                </li>
                <li className="">
                  <a href="contact.html">Kontak</a>
                </li>
                <li className="">
                  <a
                    href="#login"
                    role="button"
                    data-toggle="modal"
                    style={{ paddingRight: 0 }}
                  >
                    <span className="btn btn-large btn-success">Login</span>
                  </a>
                  <div
                    id="login"
                    className="modal hide fade in"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="login"
                    aria-hidden="false"
                  >
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                      <h3>Login Block</h3>
                    </div>
                    <div className="modal-body">
                      <form className="form-horizontal loginFrm">
                        <div className="control-group">
                          <input type="text" id="inputEmail" placeholder="Email" />
                        </div>
                        <div className="control-group">
                          <input
                            type="password"
                            id="inputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="control-group">
                          <label className="checkbox">
                            <input type="checkbox" /> Remember me
                          </label>
                        </div>
                      </form>
                      <button type="submit" className="btn btn-success">
                        Sign in
                      </button>
                      <button className="btn" data-dismiss="modal" aria-hidden="true">
                        Close
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}
