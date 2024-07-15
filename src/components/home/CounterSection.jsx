import React from 'react'

const CounterSection = () => {
  return (
    <>
         {/* <!-- Counter Section Start --> */}
  <section class="counter-section">
    <div class="container">
      <div class="counter-wrapper-area">
        <div class="row g-4">
          <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div class="counter-items">
              <h2><span class="count">250</span>+</h2>
              <p>Active Team Members</p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div class="counter-items">
              <h2><span class="count">45</span>k+</h2>
              <p>Happy Customers</p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div class="counter-items">
              <h2><span class="count">80</span>%</h2>
              <p>Increase Traffics</p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
            <div class="counter-items">
              <h2><span class="count">80</span>%</h2>
              <p>Increase Traffics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default CounterSection