import "./userPlans.css";
function userPlans() {
  return (
    <div class="pricing-section">
      <div class="container">
        <div class="sec-title text-center">
          <h2>Choose a Plan</h2>
        </div>

        <div class="outer-box">
          <div class="row">
            <div class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
              <div class="inner-box">
                <div class="icon-box">
                  <div class="icon-outer">
                    <i class="fas fa-paper-plane"></i>
                  </div>
                </div>
                <div class="price-box">
                  <div class="title">Starter.</div>
                  <h4 class="price">₹ 119.00 /mo</h4>
                </div>
                <ul class="features">
                  <li class="true">512 MB RAM</li>
                  <li class="true">1 website</li>
                  <li class="true">10 GB storage</li>
                  <li class="false">Unmetered bandwidth</li>
                  <li class="false">Free 1-click WordPress install</li>
                </ul>
                <div class="btn-box">
                  <a href="https://rzp.io/i/zR5Ia6T5" class="theme-btn">
                    BUY plan
                  </a>
                </div>
              </div>
            </div>

            <div
              class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div class="inner-box">
                <div class="icon-box">
                  <div class="icon-outer">
                    <i class="fas fa-gem"></i>
                  </div>
                </div>
                <div class="price-box">
                  <div class="title">Economy</div>
                  <h4 class="price">₹ 219.00 /mo</h4>
                </div>
                <ul class="features">
                  <li class="true">Standard Performance</li>
                  <li class="true">1 website</li>
                  <li class="true">25 GB storage</li>
                  <li class="true">Unmetered bandwidth﻿</li>
                  <li class="false">Free 1-click WordPress install</li>
                </ul>
                <div class="btn-box">
                  <a href="https://imjo.in/b4J4nF" class="theme-btn">
                    BUY plan
                  </a>
                </div>
              </div>
            </div>

            <div
              class="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div class="inner-box">
                <div class="icon-box">
                  <div class="icon-outer">
                    <i class="fas fa-rocket"></i>
                  </div>
                </div>
                <div class="price-box">
                  <div class="title">Deluxe</div>
                  <h4 class="price">₹ 299.00 /mo</h4>
                </div>
                <ul class="features">
                  <li class="true">Standard Performance</li>
                  <li class="true">10 websites</li>
                  <li class="true">50 GB storage</li>
                  <li class="true">Unmetered bandwidth</li>
                  <li class="true">Free 1-click WordPress install</li>
                </ul>
                <div class="btn-box">
                  <a href="https://imjo.in/FajM7p" class="theme-btn">
                    BUY plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default userPlans;
