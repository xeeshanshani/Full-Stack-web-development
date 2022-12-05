import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const LoginModal = (props) => {
  const { show, handleClose, handleShow } = props;
  const [currentView, setCurrentView] = useState(null);

  const handleViewChange = (view) => {
    if (view) {
      setCurrentView(view);
    } else {
      setCurrentView(null);
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        handleViewChange();
        handleClose();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className="popupBody">
          {currentView === "Login" ? (
            <div className="user_login">
              <form>
                <label>Email / Username</label>
                <input type="text" />
                <br />

                <label>Password</label>
                <input type="password" />
                <br />

                <div className="checkbox">
                  <input id="remember" type="checkbox" />
                  <label htmlFor="remember">Remember me on this computer</label>
                </div>

                <div className="action_btns">
                  <div className="one_half">
                    <a
                      onClick={() => handleViewChange()}
                      className="btn back_btn"
                    >
                      <i className="fa fa-angle-double-left"></i> Back
                    </a>
                  </div>
                  <div className="one_half last">
                    <a href="#" className="btn btn_red">
                      Login
                    </a>
                  </div>
                </div>
              </form>

              <a href="#" className="forgot_password">
                Forgot password?
              </a>
            </div>
          ) : currentView === "Register" ? (
            <div className="user_register">
              <form>
                <label>Full Name</label>
                <input type="text" />
                <br />

                <label>Email Address</label>
                <input type="email" />
                <br />

                <label>Password</label>
                <input type="password" />
                <br />

                <div className="checkbox">
                  <input id="send_updates" type="checkbox" />
                  <label htmlFor="send_updates">
                    Send me occasional email updates
                  </label>
                </div>

                <div className="action_btns">
                  <div className="one_half">
                    <a
                      onClick={() => handleViewChange()}
                      className="btn back_btn"
                    >
                      <i className="fa fa-angle-double-left"></i> Back
                    </a>
                  </div>
                  <div className="one_half last">
                    <a href="#" className="btn btn_red">
                      Register
                    </a>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="social_login">
              <div className="">
                <a href="#" className="social_box fb">
                  <span className="icon">
                    <i className="fab fa-facebook"></i>
                  </span>
                  <span className="icon_title">Connect with Facebook</span>
                </a>

                <a href="#" className="social_box google">
                  <span className="icon">
                    <i className="fab fa-google-plus"></i>
                  </span>
                  <span className="icon_title">Connect with Google</span>
                </a>
              </div>

              <div className="centeredText">
                <span>Or use your Email address</span>
              </div>

              <div className="action_btns">
                <div className="one_half">
                  <a
                    onClick={() => handleViewChange("Login")}
                    id="login_form"
                    className="btn"
                  >
                    Login
                  </a>
                </div>
                <div className="one_half last">
                  <a
                    onClick={() => handleViewChange("Register")}
                    id="register_form"
                    className="btn"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
