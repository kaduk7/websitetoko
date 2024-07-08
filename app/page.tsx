
import ScriptJs from "./component/ScriptJs";
import MenuSide from "./component/Menu";
import Header from "./component/Header";

export default function Home() {
  return (
    <>
      <Header />

      <div id="carouselBlk">
        <div id="myCarousel" className="carousel slide">
          <div className="carousel-inner">
            <div className="item active">
              <div className="container">
                <a href="register.html">
                  <img
                    style={{ width: "100%" }}
                    src="template/themes/images/carousel/11.png"
                    alt="special offers"
                  />
                </a>
                <div className="carousel-caption">
                  <h4>Second Thumbnail label</h4>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus. Nullam id
                    dolor id nibh ultricies vehicula ut id elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="container">
                <a href="register.html">
                  <img
                    style={{ width: "100%" }}
                    src="template/themes/images/carousel/12.png"
                    alt=""
                  />
                </a>
                <div className="carousel-caption">
                  <h4>Second Thumbnail label</h4>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus. Nullam id
                    dolor id nibh ultricies vehicula ut id elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="container">
                <a href="register.html">
                  <img src="template/themes/images/carousel/13.png" alt="" />
                </a>
                <div className="carousel-caption">
                  <h4>Second Thumbnail label</h4>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus. Nullam id
                    dolor id nibh ultricies vehicula ut id elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="container">
                <a href="register.html">
                  <img src="template/themes/images/carousel/14.png" alt="" />
                </a>
                <div className="carousel-caption">
                  <h4>Second Thumbnail label</h4>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus. Nullam id
                    dolor id nibh ultricies vehicula ut id elit.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            ‹
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            ›
          </a>
        </div>
      </div>
      <div id="mainBody">
        <div className="container">
          <div className="row">

            <MenuSide />

            <div className="span9">
              <div className="well well-small">
                <h4>
                  Produk Pilihan{" "}
                  <small className="pull-right">50+ pilihan produk</small>
                </h4>
                <div className="row-fluid">
                  <div id="featured" className="carousel slide">
                    <div className="carousel-inner">
                      <div className="item active">
                        <ul className="thumbnails">
                          <li className="span3">
                            <div className="thumbnail">
                              <i className="tag" />
                              <a href="product_details.html">
                                <img src="template/themes/images/products/b1.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="thumbnail">
                              <i className="tag" />
                              <a href="product_details.html">
                                <img src="template/themes/images/products/b2.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="thumbnail">
                              <i className="tag" />
                              <a href="product_details.html">
                                <img src="template/themes/images/products/b3.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="thumbnail">
                              <i className="tag" />
                              <a href="product_details.html">
                                <img src="template/themes/images/products/b4.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="item">
                        <ul className="thumbnails">
                          <li className="span3">
                            <div className="thumbnail">
                              <i className="tag" />
                              <a href="product_details.html">
                                <img src="template/themes/images/products/5.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="thumbnail">
                              <i className="tag" />
                              <a href="product_details.html">
                                <img src="template/themes/images/products/6.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="thumbnail">
                              <a href="product_details.html">
                                <img src="template/themes/images/products/7.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="thumbnail">
                              <a href="product_details.html">
                                <img src="template/themes/images/products/8.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="item">
                        <ul className="thumbnails">
                          <li className="span3">
                            <div className="thumbnail">
                              <a href="product_details.html">
                                <img src="template/themes/images/products/9.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="thumbnail">
                              <a href="product_details.html">
                                <img src="template/themes/images/products/10.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="thumbnail">
                              <a href="product_details.html">
                                <img src="template/themes/images/products/11.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="thumbnail">
                              <a href="product_details.html">
                                <img src="template/themes/images/products/1.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="item">
                        <ul className="thumbnails">
                          <li className="span3">
                            <div className="thumbnail">
                              <a href="product_details.html">
                                <img src="template/themes/images/products/2.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="thumbnail">
                              <a href="product_details.html">
                                <img src="template/themes/images/products/3.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="thumbnail">
                              <a href="product_details.html">
                                <img src="template/themes/images/products/4.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="thumbnail">
                              <a href="product_details.html">
                                <img src="template/themes/images/products/5.jpg" alt="" />
                              </a>
                              <div className="caption">
                                <h5>Product name</h5>
                                <h4>
                                  <a className="btn" href="product_details.html">
                                    VIEW
                                  </a>{" "}
                                  <span className="pull-right">$222.00</span>
                                </h4>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a
                      className="left carousel-control"
                      href="#featured"
                      data-slide="prev"
                    >
                      ‹
                    </a>
                    <a
                      className="right carousel-control"
                      href="#featured"
                      data-slide="next"
                    >
                      ›
                    </a>
                  </div>
                </div>
              </div>
              <h4>Latest Products </h4>
              <ul className="thumbnails">
                <li className="span3">
                  <div className="thumbnail">
                    <a href="product_details.html">
                      <img src="template/themes/images/products/6.jpg" alt="" />
                    </a>
                    <div className="caption">
                      <h5>Product name</h5>
                      <p>Lorem Ipsum is simply dummy text.</p>
                      <h4 style={{ textAlign: "center" }}>
                        <a className="btn" href="product_details.html">
                          {" "}
                          <i className="icon-zoom-in" />
                        </a>{" "}
                        <a className="btn" href="#">
                          Add to <i className="icon-shopping-cart" />
                        </a>{" "}
                        <a className="btn btn-primary" href="#">
                          $222.00
                        </a>
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="span3">
                  <div className="thumbnail">
                    <a href="product_details.html">
                      <img src="template/themes/images/products/7.jpg" alt="" />
                    </a>
                    <div className="caption">
                      <h5>Product name</h5>
                      <p>Lorem Ipsum is simply dummy text.</p>
                      <h4 style={{ textAlign: "center" }}>
                        <a className="btn" href="product_details.html">
                          {" "}
                          <i className="icon-zoom-in" />
                        </a>{" "}
                        <a className="btn" href="#">
                          Add to <i className="icon-shopping-cart" />
                        </a>{" "}
                        <a className="btn btn-primary" href="#">
                          $222.00
                        </a>
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="span3">
                  <div className="thumbnail">
                    <a href="product_details.html">
                      <img src="template/themes/images/products/8.jpg" alt="" />
                    </a>
                    <div className="caption">
                      <h5>Product name</h5>
                      <p>Lorem Ipsum is simply dummy text.</p>
                      <h4 style={{ textAlign: "center" }}>
                        <a className="btn" href="product_details.html">
                          {" "}
                          <i className="icon-zoom-in" />
                        </a>{" "}
                        <a className="btn" href="#">
                          Add to <i className="icon-shopping-cart" />
                        </a>{" "}
                        <a className="btn btn-primary" href="#">
                          $222.00
                        </a>
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="span3">
                  <div className="thumbnail">
                    <a href="product_details.html">
                      <img src="template/themes/images/products/9.jpg" alt="" />
                    </a>
                    <div className="caption">
                      <h5>Product name</h5>
                      <p>Lorem Ipsum is simply dummy text.</p>
                      <h4 style={{ textAlign: "center" }}>
                        <a className="btn" href="product_details.html">
                          {" "}
                          <i className="icon-zoom-in" />
                        </a>{" "}
                        <a className="btn" href="#">
                          Add to <i className="icon-shopping-cart" />
                        </a>{" "}
                        <a className="btn btn-primary" href="#">
                          $222.00
                        </a>
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="span3">
                  <div className="thumbnail">
                    <a href="product_details.html">
                      <img src="template/themes/images/products/10.jpg" alt="" />
                    </a>
                    <div className="caption">
                      <h5>Product name</h5>
                      <p>Lorem Ipsum is simply dummy text.</p>
                      <h4 style={{ textAlign: "center" }}>
                        <a className="btn" href="product_details.html">
                          {" "}
                          <i className="icon-zoom-in" />
                        </a>{" "}
                        <a className="btn" href="#">
                          Add to <i className="icon-shopping-cart" />
                        </a>{" "}
                        <a className="btn btn-primary" href="#">
                          $222.00
                        </a>
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="span3">
                  <div className="thumbnail">
                    <a href="product_details.html">
                      <img src="template/themes/images/products/11.jpg" alt="" />
                    </a>
                    <div className="caption">
                      <h5>Product name</h5>
                      <p>Lorem Ipsum is simply dummy text.</p>
                      <h4 style={{ textAlign: "center" }}>
                        <a className="btn" href="product_details.html">
                          {" "}
                          <i className="icon-zoom-in" />
                        </a>{" "}
                        <a className="btn" href="#">
                          Add to <i className="icon-shopping-cart" />
                        </a>{" "}
                        <a className="btn btn-primary" href="#">
                          $222.00
                        </a>
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer ================================================================== */}
      <div id="footerSection">
        <div className="container">
          <div className="row">
            <div className="span3">
              <h5>ACCOUNT</h5>
              <a href="login.html">YOUR ACCOUNT</a>
              <a href="login.html">PERSONAL INFORMATION</a>
              <a href="login.html">ADDRESSES</a>
              <a href="login.html">DISCOUNT</a>
              <a href="login.html">ORDER HISTORY</a>
            </div>
            <div className="span3">
              <h5>INFORMATION</h5>
              <a href="contact.html">CONTACT</a>
              <a href="register.html">REGISTRATION</a>
              <a href="legal_notice.html">LEGAL NOTICE</a>
              <a href="tac.html">TERMS AND CONDITIONS</a>
              <a href="faq.html">FAQ</a>
            </div>
            <div className="span3">
              <h5>OUR OFFERS</h5>
              <a href="#">NEW PRODUCTS</a>
              <a href="#">TOP SELLERS</a>
              <a href="special_offer.html">SPECIAL OFFERS</a>
              <a href="#">MANUFACTURERS</a>
              <a href="#">SUPPLIERS</a>
            </div>
            <div id="socialMedia" className="span3 pull-right">
              <h5>SOCIAL MEDIA </h5>
              <a href="#">
                <img
                  width={60}
                  height={60}
                  src="template/themes/images/facebook.png"
                  title="facebook"
                  alt="facebook"
                />
              </a>
              <a href="#">
                <img
                  width={60}
                  height={60}
                  src="template/themes/images/twitter.png"
                  title="twitter"
                  alt="twitter"
                />
              </a>
              <a href="#">
                <img
                  width={60}
                  height={60}
                  src="template/themes/images/youtube.png"
                  title="youtube"
                  alt="youtube"
                />
              </a>
            </div>
          </div>
          <p className="pull-right">©Hizratech Official</p>
        </div>
        {/* Container End */}
        <ScriptJs />
      </div>

    </>
  );
}
