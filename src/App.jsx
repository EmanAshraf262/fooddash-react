import './App.css'
import { TypeAnimation } from 'react-type-animation';
function App() {
  return (
    <>
  <header className="bg-header">
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a href="" className="navbar-brand">
          <img className="logo" src="assets/logo/frame18.png " alt="" />
        </a>
        <button
          className="navbar-toggler"
          data-bs-target="#buttonOnOff"
          data-bs-toggle="collapse"
        >
          Click me
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="buttonOnOff"
        >
          <div className="navbar-nav">
            <a href="" className="nav-link">
              Home
            </a>
            <a href="" className="nav-link">
              Menu
            </a>
            <a href="" className="nav-link">
              Offers
            </a>
            <a href="" className="nav-link">
              Service
            </a>
            <a href="" className="nav-link">
              About Us
            </a>
          </div>
        </div>
        <div className="d-flex align-items-center  gap-2">
          <div className="search rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-search" />
          </div>
          <img className="img-icon" src="assets/icons/icon2.png" alt="" />
        </div>
      </div>
    </nav>
  </header>
  <main>
    <div className="bg-header position-relative">
      <div className="container">
        {/* row 1 */}
        <div className="row">
          <div className="col-lg-7 col-12 text-lg-start text-center align-items-lg-start align-items-center d-flex flex-column justify-content-center gap-3">
            <div className="h-heading">
              <span>Quick </span>and <span> Tasty</span>
              <span>Food Delivered</span> with <span> a Dash of </span> 
               <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'speed',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'quick',
        2000,
        'fast',
        2000,
       
      ]}
      wrapper="small"
      speed={30}
      
      repeat={Infinity}
    />
            </div>
            <button className="btn btn-primary rounded-pill w-25 btn-order-now shadow">
              Order Now
            </button>
            <button className="btn btn-outline-primary  rounded-pill w-25 btn-track-order">
              Track Order
            </button>
          </div>
          <div className="col-lg-5 col-12">
            <img
              className="img-fluid p-5 hh position-relative "
              src="assets/images/header.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className="container ">
      {/* Row 2 */}
      <div className="bg-white shadow rounded-4 p-3 position-absolute top-60 start-50 translate-middle w-75 t-t">
        <div className="row">
          <div className="col-4 d-flex align-items-center gap-3">
            <img src="assets/icons/fastdelivery1.png" alt="" />
            <div>
              <div className="d-box-heading">Fast Delivery</div>
              <div className="d-box-subheading">
                Promise To Deliver Within 30 Mins
              </div>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center gap-3">
            <img src="assets/icons/fresh.png" alt="" />
            <div>
              <div className="d-box-heading">Fresh Food</div>
              <div className="d-box-subheading">
                Your Food Will Be Delivered 100% Fresh To Your Home.{" "}
              </div>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center gap-3">
            <img src="assets/icons/box1.png" alt="" />
            <div>
              <div className="d-box-heading">Free Delivery</div>
              <div className="d-box-subheading">
                Your Food Delivery Is Absolutely Free. No Cost Just Order
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* indian dish secction */}
    <section className="section">
      <div className="container">
        {/* Heading */}
        <div className="row">
          <div className="col-lg-5 col-12 h-heading2">
            Our <span>Best Delivered </span>
            Indian Dish
          </div>
          <div className="col-lg-4 col-12" />
          <div className="col-lg-3 col-12  h-subheading2 d-flex flex-column justify-content-center">
            It’s Not Just About Bringing You Good Food From Restaurants, We
            Deliver You Experience
          </div>
        </div>
        {/* products */}
        <div className="row">
          <div className="col-4 col-md-4 col-12 text-center ">
            <img
              className="img-fluid pic im "
              src="assets/products/frame23.png"
              alt=""
            />
            <div className="p-name">Indian Vegetable Pulao</div>
            <a className="p-link" href="#">
              Order Now
            </a>
          </div>
          <div className="col-4  col-md-4 col-12 text-center ">
            <img
              className="img-fluid pic im "
              src="assets/products/frame24.png"
              alt=""
            />
            <div className="p-name">Paneer Bhuna Masala</div>
            <a className="p-link" href="#">
              Order Now
            </a>
          </div>
          <div className="col-4 col-md-4 col-12 text-center ">
            <img
              className="img-fluid pic im"
              src="assets/products/frame25.png"
              alt=""
            />
            <div className="p-name">Vermicelli Upma</div>
            <a className="p-link" href="#">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Bar */}
    <section className="category-bar py-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-stars" />
                <h4 className="mb-0">Rajasthan</h4>
              </div>
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-stars" />
                <h4 className="mb-0">South Indian</h4>
              </div>
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-stars" />
                <h4 className="mb-0">Gujarat</h4>
              </div>
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-stars" />
                <h4 className="mb-0">Maharashtra</h4>
              </div>
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-stars" />
                <h4 className="mb-0">West</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* regular menu */}
    <section className="mt-5">
      <div className="container">
        {/* ROW 1 */}
        <div className="row ">
          <div className="col-4 h-heading3">
            Our <span>Regular</span> Menu
            <div className="h-subheading3 mt-3">
              There Are Our Regular Menus. You Can Order Anything You Like.
            </div>
          </div>
          <div className="col-8 d-flex flex-column justify-content-center">
            <div>
              <button className="btn-see-all btn btn-primary rounded-pill float-end ">
                See All
              </button>
            </div>
          </div>
        </div>
        {/* ROW 2 */}
        <div className="row row-cards">
          <div className="col-4 d-flex">
            <div className="bg-header2 position-relative  p-3  w-75 h-100 rounded-4">
              <img
                src="assets/products/group8.png"
                className="rounded-circle position-absolute top-0 start-100 translate-middle w-75"
              />
              <div className="pt-5">
                <div className="h mb-0">
                  <span>Indian Dessert</span>{" "}
                </div>
                <div className="h-1">Angoori Rasmala</div>
                <div className="food-rating">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <span>(100)</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                  <div className="h-2">₹250</div>
                  <div>
                    <button className="btn-see-all btn btn-primary rounded-pill">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex">
            <div className="bg-header2 position-relative p-3  w-75 h-100 rounded-4">
              <img
                src="assets/products/group9.png"
                alt=""
                className="rounded-circle position-absolute top-0 start-100 translate-middle w-75"
              />
              <div className="pt-5">
                <div className="h mb-0">
                  <span>Indian</span>{" "}
                </div>
                <div className="h-1">Tea Time Snacks</div>
                <div className="food-rating">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <span>(80)</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                  <div className="h-2">₹250</div>
                  <div>
                    <button className="btn-see-all btn btn-primary rounded-pill">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex">
            <div className="bg-header2 position-relative p-3  w-75 h-100 rounded-4">
              <img
                src="assets/products/group10.png"
                alt=""
                className="rounded-circle position-absolute top-0 start-100 translate-middle w-75"
              />
              <div className="pt-5">
                <div className="h mb-0">
                  <span>Indian</span>
                </div>
                <div className="h-1">Tea Time Snacks</div>
                <div className="food-rating">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <span>(50)</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                  <div className="h-2">₹200</div>
                  <div>
                    <button className="btn-see-all btn btn-primary rounded-pill">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex mg-t">
            <div className="bg-header2 position-relative p-3  w-75 h-100 rounded-4">
              <img
                src="assets/products/group11.png"
                alt=""
                className="rounded-circle position-absolute top-0 start-100 translate-middle w-75"
              />
              <div className="pt-5">
                <div className="h mb-0">
                  <span>South Indian</span>{" "}
                </div>
                <div className="h-1">Masala Dosa</div>
                <div className="food-rating">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <span>(100)</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                  <div className="h-2">₹150</div>
                  <div>
                    <button className="btn-see-all btn btn-primary rounded-pill">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex mg-t">
            <div className="bg-header2 position-relative p-3  w-75 h-100 rounded-4">
              <img
                src="assets/products/group12.png"
                alt=""
                className="rounded-circle position-absolute top-0 start-100 translate-middle w-75"
              />
              <div className="pt-5">
                <div className="h mb-0">
                  <span>Gujarati</span>{" "}
                </div>
                <div className="h-1">Pav Bhaji</div>
                <div className="food-rating">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <span>(120)</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                  <div className="h-2">₹250</div>
                  <div>
                    <button className="btn-see-all btn btn-primary rounded-pill">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex mg-t">
            <div className="bg-header2 position-relative p-3  w-75 h-100 rounded-4">
              <img
                src="assets/products/group13.png"
                alt=""
                className="rounded-circle position-absolute top-0 start-100 translate-middle w-75"
              />
              <div className="pt-5">
                <div className="h mb-0">
                  <span>Rajasthan </span>
                </div>
                <div className="h-1">Dal Bati Churma</div>
                <div className="food-rating">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <span>(50)</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5">
                  <div className="h-2">₹450</div>
                  <div>
                    <button className="btn-see-all btn btn-primary rounded-pill">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* img bar */}
    <section>
      <div className="container">
        <div className="row">
          <div className="col-5 mt-5">
            <img
              className="left-img  "
              src="assets/images/lastimg1.png"
              alt=""
            />
          </div>
          <div className="col-7  mt-5">
            <img
              className="mb-4 w-100"
              src="assets/images/lastimg2.png"
              alt=""
            />
            <img className="w-100" src="assets/images/latimg3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="footer-section">
  <div className="container">
    <div className="row">
      {/* Column 1 */}
      <div className="col-lg-4 col-md-6 col-12 footer-about">
        <div className="footer-logo">
          <img src="assets/logo/frame18.png" alt="Food Dash Logo" />
        </div>
        <p>Food Dash ©2026 All Rights Reserved</p>
        <p>By - Eman Ashraf</p>
        <h5>Follow Us On</h5>
        <div className="social-icons">
          <i className="bi bi-instagram" />
          <i className="bi bi-linkedin" />
          <i className="bi bi-facebook" />
          <i className="bi bi-twitter" />
          <i className="bi bi-dribbble" />
        </div>
      </div>
      {/* Column 2 */}
      <div className="col-lg-2 col-md-6 col-12 footer-links">
        <h4>Menu</h4>
        <a href="#">Home</a>
        <a href="#">Offers</a>
        <a href="#">Service</a>
        <a href="#">About Us</a>
      </div>
      {/* Column 3 */}
      <div className="col-lg-3 col-md-6 col-12 footer-links">
        <h4>Information</h4>
        <a href="#">Menu</a>
        <a href="#">Quality</a>
        <a href="#">Make A Choice</a>
        <a href="#">Fast Delivery</a>
      </div>
      {/* Column 4 */}
      <div className="col-lg-3 col-md-6 col-12 footer-links">
        <h4>Contact</h4>
        <a href="#">+123456789</a>
        <a href="#">Explore</a>
        <a href="#">Info@Fooddash.com</a>
        <a href="#">12, Maharashtra, Pakistan</a>
      </div>
    </div>
  </div>
</footer>
</>
  )
}
export default App
