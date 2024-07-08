import Link from "next/link";

export default function MenuSide() {

  return (
    <div id="sidebar" className="span3">
      <div className="well well-small">
        <a id="myCart" href="product_summary.html">
          <img src="template/themes/images/ico-cart.png" alt="cart" />3 Items in your
          cart{" "}
          <span className="badge badge-warning pull-right">$155.00</span>
        </a>
      </div>
      <ul id="sideManu" className="nav nav-tabs nav-stacked">
        <li className="subMenu open">
          <a> LAPTOP [230]</a>
          <ul>
            <li>
              <Link className="active" href="/produk">
                <i className="icon-chevron-right" />
                Asus (100){" "}
              </Link>
            </li>
            <li>
              <Link href="/produk">
                <i className="icon-chevron-right" />
                Acer (30)
              </Link>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Lenovo (80)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Toshiba (15)
              </a>
            </li>
          </ul>
        </li>
        <li className="subMenu">
          <a> PC [840] </a>
          <ul style={{ display: "none" }}>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Acer (45)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Asus (8)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Samsung (5)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Lenovo (45)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                HP (6)
              </a>
            </li>

          </ul>
        </li>
        <li className="subMenu">
          <a>KEYBOARD [1000]</a>
          <ul style={{ display: "none" }}>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Angoves (35)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Bouchard Aine &amp; Fils (8)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                French Rabbit (5)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Louis Bernard (45)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                BIB Wine (Bag in Box) (8)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Other Liquors &amp; Wine (5)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Garden (3)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Khao Shong (11)
              </a>
            </li>
          </ul>
        </li>
        <li className="subMenu">
          <a>HARDDISK[18]</a>
          <ul style={{ display: "none" }}>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Angoves (35)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Bouchard Aine &amp; Fils (8)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                French Rabbit (5)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Louis Bernard (45)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                BIB Wine (Bag in Box) (8)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Other Liquors &amp; Wine (5)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Garden (3)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Khao Shong (11)
              </a>
            </li>
          </ul>
        </li>
        <li className="subMenu">
          <a>FLASHDISK [58]</a>
          <ul style={{ display: "none" }}>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Angoves (35)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Bouchard Aine &amp; Fils (8)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                French Rabbit (5)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Louis Bernard (45)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                BIB Wine (Bag in Box) (8)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Other Liquors &amp; Wine (5)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Garden (3)
              </a>
            </li>
            <li>
              <a href="products.html">
                <i className="icon-chevron-right" />
                Khao Shong (11)
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="products.html">AKSESSORIS</a>
        </li>
      </ul>
      <br />
      <div className="thumbnail">
        <img
          src="template/themes/images/products/panasonic.jpg"
          alt="Bootshop panasonoc New camera"
        />
        <div className="caption">
          <h5>Panasonic</h5>
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
      <br />
      <div className="thumbnail">
        <img
          src="template/themes/images/products/kindle.png"
          title="Bootshop New Kindel"
          alt="Bootshop Kindel"
        />
        <div className="caption">
          <h5>Kindle</h5>
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
      <br />
      <div className="thumbnail">
        <img
          src="template/themes/images/payment_methods.png"
          title="Bootshop Payment Methods"
          alt="Payments Methods"
        />
        <div className="caption">
          <h5>Payment Methods</h5>
        </div>
      </div>
    </div>
  )
}
