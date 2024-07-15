import React from 'react'

const Get = () => {
  return (
    <>
          <section className="contact-section-2 fix section-padding pt-0">
  <div className="container">
    <div className="contact-form-items">
      <div className="title">
        <h2>Let’s Get in Touch</h2>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <form

        id="contact-form"
        method=""
      >
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="form-clt">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name*"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-clt">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email*"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-clt">
              <input type="text" name="text" id="text" placeholder="Website*" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-clt">
              <textarea
                name="message"
                id="message"
                placeholder="Write Message*"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <button type="submit" className="theme-btn">
              SEND YOUR MEASSAGE
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>
    </>
  )
}

export default Get