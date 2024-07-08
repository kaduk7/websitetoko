import React from 'react'
import ScriptJs from '../component/ScriptJs'
import MenuSide from '../component/Menu'
import Header from '../component/Header'
import Link from 'next/link'

const Produk = () => {
    return (
        <>
            <Header />


            <div id="mainBody">
                <div className="container">
                    <div className="row">

                        <MenuSide />

                        <div className="span9">
                            <ul className="breadcrumb">
                                <li>
                                    <Link href="/">Home</Link> <span className="divider">/</span>
                                </li>
                                <li className="active">Products Name</li>
                            </ul>
                            <h3>
                                {" "}
                                Products Name{" "}
                                <small className="pull-right"> 40 products are available </small>
                            </h3>
                            <hr className="soft" />
                            <p>
                                Nowadays the lingerie industry is one of the most successful business
                                spheres.We always stay in touch with the latest fashion tendencies - that is
                                why our goods are so popular and we have a great number of faithful
                                customers all over the country.
                            </p>
                            <hr className="soft" />
                            <form className="form-horizontal span6">
                                <div className="control-group">
                                    <label className="control-label alignL">Sort By </label>
                                    <select>
                                        <option>Priduct name A - Z</option>
                                        <option>Priduct name Z - A</option>
                                        <option>Priduct Stoke</option>
                                        <option>Price Lowest first</option>
                                    </select>
                                </div>
                            </form>
                            <div id="myTab" className="pull-right">
                                <a href="#listView" data-toggle="tab">
                                    <span className="btn btn-large">
                                        <i className="icon-list" />
                                    </span>
                                </a>
                                <a href="#blockView" data-toggle="tab">
                                    <span className="btn btn-large btn-primary">
                                        <i className="icon-th-large" />
                                    </span>
                                </a>
                            </div>
                            <br className="clr" />
                            <div className="tab-content">
                                <div className="tab-pane" id="listView">
                                    <div className="row">
                                        <div className="span2">
                                            <img src="template/themes/images/products/3.jpg" alt="" />
                                        </div>
                                        <div className="span4">
                                            <h3>New | Available</h3>
                                            <hr className="soft" />
                                            <h5>Product Name </h5>
                                            <p>
                                                Nowadays the lingerie industry is one of the most successful
                                                business spheres.We always stay in touch with the latest fashion
                                                tendencies - that is why our goods are so popular..
                                            </p>
                                            <Link className="btn btn-small pull-right" href="/detailproduk">
                                                View Details
                                            </Link>
                                            <br className="clr" />
                                        </div>
                                        <div className="span3 alignR">
                                            <form className="form-horizontal qtyFrm">
                                                <h3> $140.00</h3>
                                                <label className="checkbox">
                                                    <input type="checkbox" /> Adds product to compair
                                                </label>
                                                <br />
                                                <Link
                                                    href="/detailproduk"
                                                    className="btn btn-large btn-primary"
                                                >
                                                    {" "}
                                                    Add to <i className=" icon-shopping-cart" />
                                                </Link>
                                                <Link href="/detailproduk   " className="btn btn-large">
                                                    <i className="icon-zoom-in" />
                                                </Link>
                                            </form>
                                        </div>
                                    </div>
                                    <hr className="soft" />
                                    <div className="row">
                                        <div className="span2">
                                            <img src="template/themes/images/products/1.jpg" alt="" />
                                        </div>
                                        <div className="span4">
                                            <h3>New | Available</h3>
                                            <hr className="soft" />
                                            <h5>Product Name </h5>
                                            <p>
                                                Nowadays the lingerie industry is one of the most successful
                                                business spheres.We always stay in touch with the latest fashion
                                                tendencies - that is why our goods are so popular..
                                            </p>
                                            <a className="btn btn-small pull-right" href="product_details.html">
                                                View Details
                                            </a>
                                            <br className="clr" />
                                        </div>
                                        <div className="span3 alignR">
                                            <form className="form-horizontal qtyFrm">
                                                <h3> $140.00</h3>
                                                <label className="checkbox">
                                                    <input type="checkbox" /> Adds product to compair
                                                </label>
                                                <br />
                                                <a
                                                    href="product_details.html"
                                                    className="btn btn-large btn-primary"
                                                >
                                                    {" "}
                                                    Add to <i className=" icon-shopping-cart" />
                                                </a>
                                                <a href="product_details.html" className="btn btn-large">
                                                    <i className="icon-zoom-in" />
                                                </a>
                                            </form>
                                        </div>
                                    </div>
                                    <hr className="soft" />
                                    <div className="row">
                                        <div className="span2">
                                            <img src="template/themes/images/products/3.jpg" alt="" />
                                        </div>
                                        <div className="span4">
                                            <h3>New | Available</h3>
                                            <hr className="soft" />
                                            <h5>Product Name </h5>
                                            <p>
                                                Nowadays the lingerie industry is one of the most successful
                                                business spheres.We always stay in touch with the latest fashion
                                                tendencies - that is why our goods are so popular..
                                            </p>
                                            <a className="btn btn-small pull-right" href="product_details.html">
                                                View Details
                                            </a>
                                            <br className="clr" />
                                        </div>
                                        <div className="span3 alignR">
                                            <form className="form-horizontal qtyFrm">
                                                <h3> $140.00</h3>
                                                <label className="checkbox">
                                                    <input type="checkbox" /> Adds product to compair
                                                </label>
                                                <br />
                                                <a
                                                    href="product_details.html"
                                                    className="btn btn-large btn-primary"
                                                >
                                                    {" "}
                                                    Add to <i className=" icon-shopping-cart" />
                                                </a>
                                                <a href="product_details.html" className="btn btn-large">
                                                    <i className="icon-zoom-in" />
                                                </a>
                                            </form>
                                        </div>
                                    </div>
                                    <hr className="soft" />
                                    <div className="row">
                                        <div className="span2">
                                            <img src="template/themes/images/products/3.jpg" alt="" />
                                        </div>
                                        <div className="span4">
                                            <h3>New | Available</h3>
                                            <hr className="soft" />
                                            <h5>Product Name </h5>
                                            <p>
                                                Nowadays the lingerie industry is one of the most successful
                                                business spheres.We always stay in touch with the latest fashion
                                                tendencies - that is why our goods are so popular..
                                            </p>
                                            <a className="btn btn-small pull-right" href="product_details.html">
                                                View Details
                                            </a>
                                            <br className="clr" />
                                        </div>
                                        <div className="span3 alignR">
                                            <form className="form-horizontal qtyFrm">
                                                <h3> $140.00</h3>
                                                <label className="checkbox">
                                                    <input type="checkbox" /> Adds product to compair
                                                </label>
                                                <br />
                                                <a
                                                    href="product_details.html"
                                                    className="btn btn-large btn-primary"
                                                >
                                                    {" "}
                                                    Add to <i className=" icon-shopping-cart" />
                                                </a>
                                                <a href="product_details.html" className="btn btn-large">
                                                    <i className="icon-zoom-in" />
                                                </a>
                                            </form>
                                        </div>
                                    </div>
                                    <hr className="soft" />
                                    <div className="row">
                                        <div className="span2">
                                            <img src="template/themes/images/products/3.jpg" alt="" />
                                        </div>
                                        <div className="span4">
                                            <h3>New | Available</h3>
                                            <hr className="soft" />
                                            <h5>Product Name </h5>
                                            <p>
                                                Nowadays the lingerie industry is one of the most successful
                                                business spheres.We always stay in touch with the latest fashion
                                                tendencies - that is why our goods are so popular..
                                            </p>
                                            <a className="btn btn-small pull-right" href="product_details.html">
                                                View Details
                                            </a>
                                            <br className="clr" />
                                        </div>
                                        <div className="span3 alignR">
                                            <form className="form-horizontal qtyFrm">
                                                <h3> $140.00</h3>
                                                <label className="checkbox">
                                                    <input type="checkbox" /> Adds product to compair
                                                </label>
                                                <br />
                                                <a
                                                    href="product_details.html"
                                                    className="btn btn-large btn-primary"
                                                >
                                                    {" "}
                                                    Add to <i className=" icon-shopping-cart" />
                                                </a>
                                                <a href="product_details.html" className="btn btn-large">
                                                    <i className="icon-zoom-in" />
                                                </a>
                                            </form>
                                        </div>
                                    </div>
                                    <hr className="soft" />
                                    <div className="row">
                                        <div className="span2">
                                            <img src="template/themes/images/products/3.jpg" alt="" />
                                        </div>
                                        <div className="span4">
                                            <h3>New | Available</h3>
                                            <hr className="soft" />
                                            <h5>Product Name </h5>
                                            <p>
                                                Nowadays the lingerie industry is one of the most successful
                                                business spheres.We always stay in touch with the latest fashion
                                                tendencies - that is why our goods are so popular..
                                            </p>
                                            <a className="btn btn-small pull-right" href="product_details.html">
                                                View Details
                                            </a>
                                            <br className="clr" />
                                        </div>
                                        <div className="span3 alignR">
                                            <form className="form-horizontal qtyFrm">
                                                <h3> $140.00</h3>
                                                <label className="checkbox">
                                                    <input type="checkbox" /> Adds product to compair
                                                </label>
                                                <br />
                                                <a
                                                    href="product_details.html"
                                                    className="btn btn-large btn-primary"
                                                >
                                                    {" "}
                                                    Add to <i className=" icon-shopping-cart" />
                                                </a>
                                                <a href="product_details.html" className="btn btn-large">
                                                    <i className="icon-zoom-in" />
                                                </a>
                                            </form>
                                        </div>
                                    </div>
                                    <hr className="soft" />
                                </div>
                                <div className="tab-pane  active" id="blockView">
                                    <ul className="thumbnails">
                                        <li className="span3">
                                            <div className="thumbnail">
                                                <Link href="/detailproduk">
                                                    <img src="template/themes/images/products/3.jpg" alt="" />
                                                </Link>
                                                <div className="caption">
                                                    <h5>Manicure &amp; Pedicure</h5>
                                                    <p>I'm a paragraph. Click here</p>
                                                    <h4 style={{ textAlign: "center" }}>
                                                        <Link className="btn" href="/detailproduk">
                                                            {" "}
                                                            <i className="icon-zoom-in" />
                                                        </Link>{" "}
                                                        <a className="btn" href="#">
                                                            Add to <i className="icon-shopping-cart" />
                                                        </a>{" "}
                                                        <a className="btn btn-primary" href="#">
                                                            €222.00
                                                        </a>
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
                                                    <h5>Manicure &amp; Pedicure</h5>
                                                    <p>I'm a paragraph. Click here</p>
                                                    <h4 style={{ textAlign: "center" }}>
                                                        <a className="btn" href="product_details.html">
                                                            {" "}
                                                            <i className="icon-zoom-in" />
                                                        </a>{" "}
                                                        <a className="btn" href="#">
                                                            Add to <i className="icon-shopping-cart" />
                                                        </a>{" "}
                                                        <a className="btn btn-primary" href="#">
                                                            €222.00
                                                        </a>
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
                                                    <h5>Manicure &amp; Pedicure</h5>
                                                    <p>I'm a paragraph. Click here</p>
                                                    <h4 style={{ textAlign: "center" }}>
                                                        <a className="btn" href="product_details.html">
                                                            {" "}
                                                            <i className="icon-zoom-in" />
                                                        </a>{" "}
                                                        <a className="btn" href="#">
                                                            Add to <i className="icon-shopping-cart" />
                                                        </a>{" "}
                                                        <a className="btn btn-primary" href="#">
                                                            €222.00
                                                        </a>
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
                                                    <h5>Manicure &amp; Pedicure</h5>
                                                    <p>I'm a paragraph. Click here</p>
                                                    <h4 style={{ textAlign: "center" }}>
                                                        <a className="btn" href="product_details.html">
                                                            {" "}
                                                            <i className="icon-zoom-in" />
                                                        </a>{" "}
                                                        <a className="btn" href="#">
                                                            Add to <i className="icon-shopping-cart" />
                                                        </a>{" "}
                                                        <a className="btn btn-primary" href="#">
                                                            €222.00
                                                        </a>
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
                                                    <h5>Manicure &amp; Pedicure</h5>
                                                    <p>I'm a paragraph. Click here</p>
                                                    <h4 style={{ textAlign: "center" }}>
                                                        <a className="btn" href="product_details.html">
                                                            {" "}
                                                            <i className="icon-zoom-in" />
                                                        </a>{" "}
                                                        <a className="btn" href="#">
                                                            Add to <i className="icon-shopping-cart" />
                                                        </a>{" "}
                                                        <a className="btn btn-primary" href="#">
                                                            €222.00
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="span3">
                                            <div className="thumbnail">
                                                <a href="product_details.html">
                                                    <img src="template/themes/images/products/2.jpg" alt="" />
                                                </a>
                                                <div className="caption">
                                                    <h5>Manicure &amp; Pedicure</h5>
                                                    <p>I'm a paragraph. Click here</p>
                                                    <h4 style={{ textAlign: "center" }}>
                                                        <a className="btn" href="product_details.html">
                                                            {" "}
                                                            <i className="icon-zoom-in" />
                                                        </a>{" "}
                                                        <a className="btn" href="#">
                                                            Add to <i className="icon-shopping-cart" />
                                                        </a>{" "}
                                                        <a className="btn btn-primary" href="#">
                                                            €222.00
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <hr className="soft" />
                                </div>
                            </div>
                            <a href="compair.html" className="btn btn-large pull-right">
                                Compair Product
                            </a>
                            <div className="pagination">
                                <ul>
                                    <li>
                                        <a href="#">‹</a>
                                    </li>
                                    <li>
                                        <a href="#">1</a>
                                    </li>
                                    <li>
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">4</a>
                                    </li>
                                    <li>
                                        <a href="#">...</a>
                                    </li>
                                    <li>
                                        <a href="#">›</a>
                                    </li>
                                </ul>
                            </div>
                            <br className="clr" />
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
    )
}

export default Produk