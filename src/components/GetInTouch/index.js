import React from "react";

export default function index() {
  return (
    <div className="page-content bg-white">
      <div className="page-banner contact-page bg-white">
        <div className="container-fuild">
          <div className="row m-lr0">
            <div className="col-lg-6 col-md-6 p-lr0 d-flex">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.1298878182047!2d-81.38369578541523!3d30.204840081824198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e437ac927a996b%3A0x799695b1a2b970ab!2sNona+Blue+Modern+Tavern!5e0!3m2!1sen!2sin!4v1548177305546"
                className="align-self-stretch d-flex"
                style={{ width: "100%", minHeight: "100%" }}
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-lg-6 col-md-6 section-sp2 p-lr30">
              <form
                className="form-area-box ajax-form mw700 m-auto"
                action="assets/script/contact.php"
              >
                <div className="ajax-message"></div>
                <div className="heading-bx">
                  <h6 className="title-ext m-b0">Холбоо барих</h6>
                  <div className="ttr-separator sepimg"></div>
                  <p className="head-px2">
                    Хэрвээ бидэнтэй холбоо барихыг хүсвэл доорх талбарыг бөглөх
                    эсвэл 95959595 утсаар холбогдоно уу.
                  </p>
                </div>
                <div className="row placeani">
                  <div className="col-lg-6 ">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Таны нэр</label>
                        <input
                          name="name"
                          type="text"
                          required
                          className="form-control valid-character"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Таны цахим хаяг</label>
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Утасны дугаар</label>
                        <input
                          name="phone"
                          type="text"
                          required
                          className="form-control int-value"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Гарчиг</label>
                        <input
                          name="subject"
                          type="text"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="input-group">
                        <label>Таны мессеж</label>
                        <textarea
                          name="message"
                          rows="4"
                          className="form-control"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="btn button-md"
                    >
                      {" "}
                      Илгээх
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
