import { FC } from "react";
import { Button } from "reactstrap";
import style from './Footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className={style.wrapper}>
      <footer className="pb-5 text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className={`${style.textColor} text-uppercase fw-bold mb-4`}>
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p className="text-light">
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4"></h6>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4"></h6>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p className="text-light">
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-light text-uppercase fw-bold mb-4">Contact</h6>
                <p className="text-light">
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p className="text-light">
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p className="text-light">
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p className="text-light">
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="w-100 d-flex justify-content-center col-md-5 col-12 mb-4 mb-md-0">
          <div className="form-outline mb-4" style={{display: 'flex'}}>
            <input style={{opacity: '0.7', width: '300px'}} placeholder="Email" type="email" id="form5Example25" className="form-control" />
            <Button style={{background: "red"}} size="lg">
              Button
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
