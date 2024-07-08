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
                                <li>
                                    <Link href="/produk">Products</Link> <span className="divider">/</span>
                                </li>
                                <li className="active">product Details</li>
                            </ul>
                            <div className="row">
                                <div id="gallery" className="span3">
                                    <a
                                        href="template/themes/images/products/large/f1.jpg"
                                        title="Fujifilm FinePix S2950 Digital Camera"
                                    >
                                        <img
                                            src="template/themes/images/products/large/3.jpg"
                                            style={{ width: "100%" }}
                                            alt="Fujifilm FinePix S2950 Digital Camera"
                                        />
                                    </a>
                                    <div id="differentview" className="moreOptopm carousel slide">
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <a href="template/themes/images/products/large/f1.jpg">
                                                    {" "}
                                                    <img
                                                        style={{ width: "29%" }}
                                                        src="template/themes/images/products/large/f1.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <a href="template/themes/images/products/large/f2.jpg">
                                                    {" "}
                                                    <img
                                                        style={{ width: "29%" }}
                                                        src="template/themes/images/products/large/f2.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <a href="template/themes/images/products/large/f3.jpg">
                                                    {" "}
                                                    <img
                                                        style={{ width: "29%" }}
                                                        src="template/themes/images/products/large/f3.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a href="template/themes/images/products/large/f3.jpg">
                                                    {" "}
                                                    <img
                                                        style={{ width: "29%" }}
                                                        src="template/themes/images/products/large/f3.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <a href="template/themes/images/products/large/f1.jpg">
                                                    {" "}
                                                    <img
                                                        style={{ width: "29%" }}
                                                        src="template/themes/images/products/large/f1.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <a href="template/themes/images/products/large/f2.jpg">
                                                    {" "}
                                                    <img
                                                        style={{ width: "29%" }}
                                                        src="template/themes/images/products/large/f2.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-toolbar">
                                        <div className="btn-group">
                                            <span className="btn">
                                                <i className="icon-envelope" />
                                            </span>
                                            <span className="btn">
                                                <i className="icon-print" />
                                            </span>
                                            <span className="btn">
                                                <i className="icon-zoom-in" />
                                            </span>
                                            <span className="btn">
                                                <i className="icon-star" />
                                            </span>
                                            <span className="btn">
                                                <i className=" icon-thumbs-up" />
                                            </span>
                                            <span className="btn">
                                                <i className="icon-thumbs-down" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="span6">
                                    <h3>Fujifilm FinePix S2950 Digital Camera </h3>
                                    <small>- (14MP, 18x Optical Zoom) 3-inch LCD</small>
                                    <hr className="soft" />
                                    <form className="form-horizontal qtyFrm">
                                        <div className="control-group">
                                            <label className="control-label">
                                                <span>$222.00</span>
                                            </label>
                                            <div className="controls">
                                                <input type="number" className="span1" placeholder="Qty." />
                                                <button
                                                    type="submit"
                                                    className="btn btn-large btn-primary pull-right"
                                                >
                                                    {" "}
                                                    Add to cart
                                                    <i className=" icon-shopping-cart" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <hr className="soft" />
                                    <h4>100 items in stock</h4>
                                    <form className="form-horizontal qtyFrm pull-right">
                                        <div className="control-group">
                                            <label className="control-label">
                                                <span>Color</span>
                                            </label>
                                            <div className="controls">
                                                <select className="span2">
                                                    <option>Black</option>
                                                    <option>Red</option>
                                                    <option>Blue</option>
                                                    <option>Brown</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                    <hr className="soft clr" />
                                    <p>
                                        14 Megapixels. 18.0 x Optical Zoom. 3.0-inch LCD Screen. Full HD photos
                                        and 1280 x 720p HD movie capture. ISO sensitivity ISO6400 at reduced
                                        resolution. Tracking Auto Focus. Motion Panorama Mode. Face Detection
                                        technology with Blink detection and Smile and shoot mode. 4 x AA
                                        batteries not included. WxDxH 110.2 ×81.4x73.4mm. Weight 0.341kg
                                        (excluding battery and memory card). Weight 0.437kg (including battery
                                        and memory card).
                                    </p>
                                    <a className="btn btn-small pull-right" href="#detail">
                                        More Details
                                    </a>
                                    <br className="clr" />
                                    <a href="#" id="detail" />
                                    <hr className="soft" />
                                </div>
                                <div className="span9">
                                    <ul id="productDetail" className="nav nav-tabs">
                                        <li className="active">
                                            <a href="#home" data-toggle="tab">
                                                Product Details
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#profile" data-toggle="tab">
                                                Related Products
                                            </a>
                                        </li>
                                    </ul>
                                    <div id="myTabContent" className="tab-content">
                                        <div className="tab-pane fade active in" id="home">
                                            <h4>Product Information</h4>
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr className="techSpecRow">
                                                        <th colSpan={2}>Product Details</th>
                                                    </tr>
                                                    <tr className="techSpecRow">
                                                        <td className="techSpecTD1">Brand: </td>
                                                        <td className="techSpecTD2">Fujifilm</td>
                                                    </tr>
                                                    <tr className="techSpecRow">
                                                        <td className="techSpecTD1">Model:</td>
                                                        <td className="techSpecTD2">FinePix S2950HD</td>
                                                    </tr>
                                                    <tr className="techSpecRow">
                                                        <td className="techSpecTD1">Released on:</td>
                                                        <td className="techSpecTD2"> 2011-01-28</td>
                                                    </tr>
                                                    <tr className="techSpecRow">
                                                        <td className="techSpecTD1">Dimensions:</td>
                                                        <td className="techSpecTD2">
                                                            {" "}
                                                            5.50" h x 5.50" w x 2.00" l, .75 pounds
                                                        </td>
                                                    </tr>
                                                    <tr className="techSpecRow">
                                                        <td className="techSpecTD1">Display size:</td>
                                                        <td className="techSpecTD2">3</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <h5>Features</h5>
                                            <p>
                                                14 Megapixels. 18.0 x Optical Zoom. 3.0-inch LCD Screen. Full HD
                                                photos and 1280 x 720p HD movie capture. ISO sensitivity ISO6400 at
                                                reduced resolution. Tracking Auto Focus. Motion Panorama Mode. Face
                                                Detection technology with Blink detection and Smile and shoot mode.
                                                4 x AA batteries not included. WxDxH 110.2 ×81.4x73.4mm. Weight
                                                0.341kg (excluding battery and memory card). Weight 0.437kg
                                                (including battery and memory card).
                                                <br />
                                                OND363338
                                            </p>
                                            <h4>Editorial Reviews</h4>
                                            <h5>Manufacturer's Description </h5>
                                            <p>
                                                With a generous 18x Fujinon optical zoom lens, the S2950 really
                                                packs a punch, especially when matched with its 14 megapixel sensor,
                                                large 3.0" LCD screen and 720p HD (30fps) movie capture.
                                            </p>
                                            <h5>Electric powered Fujinon 18x zoom lens</h5>
                                            <p>
                                                The S2950 sports an impressive 28mm – 504mm* high precision Fujinon
                                                optical zoom lens. Simple to operate with an electric powered zoom
                                                lever, the huge zoom range means that you can capture all the
                                                detail, even when you're at a considerable distance away. You can
                                                even operate the zoom during video shooting. Unlike a bulky D-SLR,
                                                bridge cameras allow you great versatility of zoom, without the
                                                hassle of carrying a bag of lenses.
                                            </p>
                                            <h5>Impressive panoramas</h5>
                                            <p>
                                                With its easy to use Panoramic shooting mode you can get creative on
                                                the S2950, however basic your skills, and rest assured that you will
                                                not risk shooting uneven landscapes or shaky horizons. The camera
                                                enables you to take three successive shots with a helpful tool which
                                                automatically releases the shutter once the images are fully aligned
                                                to seamlessly stitch the shots together in-camera. It's so easy and
                                                the results are impressive.
                                            </p>
                                            <h5>Sharp, clear shots</h5>
                                            <p>
                                                Even at the longest zoom settings or in the most challenging of
                                                lighting conditions, the S2950 is able to produce crisp, clean
                                                results. With its mechanically stabilised 1/2 3", 14 megapixel CCD
                                                sensor, and high ISO sensitivity settings, Fujifilm's Dual Image
                                                Stabilisation technology combines to reduce the blurring effects of
                                                both hand-shake and subject movement to provide superb pictures.
                                            </p>
                                        </div>
                                        <div className="tab-pane fade" id="profile">
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
                                            <hr className="soft" />
                                            <div className="tab-content">
                                                <div className="tab-pane" id="listView">
                                                    <div className="row">
                                                        <div className="span2">
                                                            <img src="template/themes/images/products/4.jpg" alt="" />
                                                        </div>
                                                        <div className="span4">
                                                            <h3>New | Available</h3>
                                                            <hr className="soft" />
                                                            <h5>Product Name </h5>
                                                            <p>
                                                                Nowadays the lingerie industry is one of the most successful
                                                                business spheres.We always stay in touch with the latest
                                                                fashion tendencies - that is why our goods are so popular..
                                                            </p>
                                                            <a
                                                                className="btn btn-small pull-right"
                                                                href="product_details.html"
                                                            >
                                                                View Details
                                                            </a>
                                                            <br className="clr" />
                                                        </div>
                                                        <div className="span3 alignR">
                                                            <form className="form-horizontal qtyFrm">
                                                                <h3> $222.00</h3>
                                                                <label className="checkbox">
                                                                    <input type="checkbox" /> Adds product to compair
                                                                </label>
                                                                <br />
                                                                <div className="btn-group">
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
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <hr className="soft" />
                                                    <div className="row">
                                                        <div className="span2">
                                                            <img src="template/themes/images/products/5.jpg" alt="" />
                                                        </div>
                                                        <div className="span4">
                                                            <h3>New | Available</h3>
                                                            <hr className="soft" />
                                                            <h5>Product Name </h5>
                                                            <p>
                                                                Nowadays the lingerie industry is one of the most successful
                                                                business spheres.We always stay in touch with the latest
                                                                fashion tendencies - that is why our goods are so popular..
                                                            </p>
                                                            <a
                                                                className="btn btn-small pull-right"
                                                                href="product_details.html"
                                                            >
                                                                View Details
                                                            </a>
                                                            <br className="clr" />
                                                        </div>
                                                        <div className="span3 alignR">
                                                            <form className="form-horizontal qtyFrm">
                                                                <h3> $222.00</h3>
                                                                <label className="checkbox">
                                                                    <input type="checkbox" /> Adds product to compair
                                                                </label>
                                                                <br />
                                                                <div className="btn-group">
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
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <hr className="soft" />
                                                    <div className="row">
                                                        <div className="span2">
                                                            <img src="template/themes/images/products/6.jpg" alt="" />
                                                        </div>
                                                        <div className="span4">
                                                            <h3>New | Available</h3>
                                                            <hr className="soft" />
                                                            <h5>Product Name </h5>
                                                            <p>
                                                                Nowadays the lingerie industry is one of the most successful
                                                                business spheres.We always stay in touch with the latest
                                                                fashion tendencies - that is why our goods are so popular..
                                                            </p>
                                                            <a
                                                                className="btn btn-small pull-right"
                                                                href="product_details.html"
                                                            >
                                                                View Details
                                                            </a>
                                                            <br className="clr" />
                                                        </div>
                                                        <div className="span3 alignR">
                                                            <form className="form-horizontal qtyFrm">
                                                                <h3> $222.00</h3>
                                                                <label className="checkbox">
                                                                    <input type="checkbox" /> Adds product to compair
                                                                </label>
                                                                <br />
                                                                <div className="btn-group">
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
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <hr className="soft" />
                                                    <div className="row">
                                                        <div className="span2">
                                                            <img src="template/themes/images/products/7.jpg" alt="" />
                                                        </div>
                                                        <div className="span4">
                                                            <h3>New | Available</h3>
                                                            <hr className="soft" />
                                                            <h5>Product Name </h5>
                                                            <p>
                                                                Nowadays the lingerie industry is one of the most successful
                                                                business spheres.We always stay in touch with the latest
                                                                fashion tendencies - that is why our goods are so popular..
                                                            </p>
                                                            <a
                                                                className="btn btn-small pull-right"
                                                                href="product_details.html"
                                                            >
                                                                View Details
                                                            </a>
                                                            <br className="clr" />
                                                        </div>
                                                        <div className="span3 alignR">
                                                            <form className="form-horizontal qtyFrm">
                                                                <h3> $222.00</h3>
                                                                <label className="checkbox">
                                                                    <input type="checkbox" /> Adds product to compair
                                                                </label>
                                                                <br />
                                                                <div className="btn-group">
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
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <hr className="soft" />
                                                    <div className="row">
                                                        <div className="span2">
                                                            <img src="template/themes/images/products/8.jpg" alt="" />
                                                        </div>
                                                        <div className="span4">
                                                            <h3>New | Available</h3>
                                                            <hr className="soft" />
                                                            <h5>Product Name </h5>
                                                            <p>
                                                                Nowadays the lingerie industry is one of the most successful
                                                                business spheres.We always stay in touch with the latest
                                                                fashion tendencies - that is why our goods are so popular..
                                                            </p>
                                                            <a
                                                                className="btn btn-small pull-right"
                                                                href="product_details.html"
                                                            >
                                                                View Details
                                                            </a>
                                                            <br className="clr" />
                                                        </div>
                                                        <div className="span3 alignR">
                                                            <form className="form-horizontal qtyFrm">
                                                                <h3> $222.00</h3>
                                                                <label className="checkbox">
                                                                    <input type="checkbox" /> Adds product to compair
                                                                </label>
                                                                <br />
                                                                <div className="btn-group">
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
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <hr className="soft" />
                                                    <div className="row">
                                                        <div className="span2">
                                                            <img src="template/themes/images/products/9.jpg" alt="" />
                                                        </div>
                                                        <div className="span4">
                                                            <h3>New | Available</h3>
                                                            <hr className="soft" />
                                                            <h5>Product Name </h5>
                                                            <p>
                                                                Nowadays the lingerie industry is one of the most successful
                                                                business spheres.We always stay in touch with the latest
                                                                fashion tendencies - that is why our goods are so popular..
                                                            </p>
                                                            <a
                                                                className="btn btn-small pull-right"
                                                                href="product_details.html"
                                                            >
                                                                View Details
                                                            </a>
                                                            <br className="clr" />
                                                        </div>
                                                        <div className="span3 alignR">
                                                            <form className="form-horizontal qtyFrm">
                                                                <h3> $222.00</h3>
                                                                <label className="checkbox">
                                                                    <input type="checkbox" /> Adds product to compair
                                                                </label>
                                                                <br />
                                                                <div className="btn-group">
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
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <hr className="soft" />
                                                </div>
                                                <div className="tab-pane active" id="blockView">
                                                    <ul className="thumbnails">
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <a href="product_details.html">
                                                                    <img src="template/themes/images/products/10.jpg" alt="" />
                                                                </a>
                                                                <div className="caption">
                                                                    <h5>Manicure &amp; Pedicure</h5>
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
                                                                            €222.00
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
                                                                    <h5>Manicure &amp; Pedicure</h5>
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
                                                                            €222.00
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <a href="product_details.html">
                                                                    <img src="template/themes/images/products/12.jpg" alt="" />
                                                                </a>
                                                                <div className="caption">
                                                                    <h5>Manicure &amp; Pedicure</h5>
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
                                                                            €222.00
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <a href="product_details.html">
                                                                    <img src="template/themes/images/products/13.jpg" alt="" />
                                                                </a>
                                                                <div className="caption">
                                                                    <h5>Manicure &amp; Pedicure</h5>
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
                                                                            €222.00
                                                                        </a>
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
                                                                    <h5>Manicure &amp; Pedicure</h5>
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
                                            <br className="clr" />
                                        </div>
                                    </div>
                                </div>
                            </div>
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