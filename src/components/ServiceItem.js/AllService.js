import React from "react";
import image1 from '../../images/service/consumer-goods.jpg'
import image2 from '../../images/ai/ai-brain.png'
import image3 from '../../images/service/retail.jpg'
import image4 from '../../images/service/retail.jpg'
import image5 from '../../images/service/manufacturing.jpg'
import image6 from '../../images/service/smart-mirror-sale.jpg'
import image7 from '../../images/service/medical-screening.jpg'
import image8 from '../../images/service/medical-screening-child.jpg'
import image9 from '../../images/service/pharmacy.jpg'
import image10 from '../../images/service/pharmacy-child.jpg'
import image11 from '../../images/service/warehouse.jpg'
import image12 from '../../images/service/safety.jpg'
import image13 from '../../images/service/monitoring.jpg'
import image14 from '../../images/service/training.JPG'
import image15 from '../../images/service/real_state.jpg'
import image16 from '../../images/service/camera_monitor.jpg'
import image17 from '../../images/service/online_exp.jpg'
import image18 from '../../images/service/online_exp.jpg'
import image19 from '../../images/service/unlock.jpg'
import image20 from '../../images/service/cyber_sec.jpg'


export default function AllService() {
  return (
    <>
      <section className="w-100 primary-bg-color features">
        <div className="container text-white text-center" data-aos="zoom-in">
          <h2>What can we do in your industry?</h2>
          <p className="primary-text-color">See our works here.</p>
          <div className="cus-over">
            <div className="hr-scrol mt-3">
              <div
                className="nav-tab nav-tab-1"
                data-bs-toggle="collapse"
                data-bs-target="#nav-1"
                role="tab"
                aria-controls="nav-tabs"
                aria-selected="false"
              >
                <h4>Consumer Goods</h4>
              </div>
              <div
                className="nav-tab nav-tab-2 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#nav-2"
                role="tab"
                aria-controls="nav-tabs"
                aria-selected="false"
              >
                <h4>Retail</h4>
              </div>
              <div
                className="nav-tab nav-tab-3 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#nav-3"
                role="tab"
                aria-controls="nav-tabs"
                aria-selected="false"
              >
                <h4>Manufacturing</h4>
              </div>
              <div
                className="nav-tab nav-tab-4 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#nav-4"
                role="tab"
                aria-controls="nav-tabs"
                aria-selected="false"
              >
                <h4>Medical and Screening</h4>
              </div>
              <div
                className="nav-tab nav-tab-5 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#nav-5"
                role="tab"
                aria-controls="nav-tabs"
                aria-selected="false"
              >
                <h4>Pharmaceuticals</h4>
              </div>
              <div
                className="nav-tab nav-tab-6 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#nav-6"
                role="tab"
                aria-controls="nav-tabs"
                aria-selected="false"
              >
                <h4>Warehouses/Transport</h4>
              </div>

              <div
                className="nav-tab nav-tab-8 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#nav-7"
                role="tab"
                aria-controls="nav-tabs"
                aria-selected="false"
              >
                <h4>Defense and Travel</h4>
              </div>
              <div
                className="nav-tab nav-tab-9 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#nav-8"
                role="tab"
                aria-controls="nav-tabs"
                aria-selected="false"
              >
                <h4>Real Estate and Allied Industries</h4>
              </div>
              <div
                className="nav-tab nav-tab-9 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#nav-9"
                role="tab"
                aria-controls="nav-tabs"
                aria-selected="false"
              >
                <h4>Ecommerce, OTT, and Education</h4>
              </div>
              <div
                className="nav-tab nav-tab-9 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#nav-10"
                role="tab"
                aria-controls="nav-tabs"
                aria-selected="false"
              >
                <h4>Banking</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="scene tab-content" id="nav-tabContent">
        <div
          className="container text-white collapse show"
          role="tab"
          data-aos="fade-up"
          aria-labelledby="nav-home-tab"
          id="nav-1"
          data-bs-parent="#nav-tabContent"
        >
          <div
            className="row align-items-center flex-wrap-reverse"
            data-aos="fade-up"
          >
            <div className="col-lg-7 my-5 ">
              <div className="left-feature">
                <p>
                  Virtual Reality/Augmented Reality experiential technology that
                  lets you display products in an interactive format to allow
                  users to see products in different environments either
                  completely virtual or real in virtual world. The benefits are:
                </p>
                <div className="checklist">
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>
                      {" "}
                      Showcase your products in the most immersive manner
                      possible yet.{" "}
                    </span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>
                      {" "}
                      Let the users witness the crisp detailing to your products
                      in an interactive manner.
                    </span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>
                      {" "}
                      Take users to your environment from their home.
                    </span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span> Curated customised as per need.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 my-5">
              <div className="image">
                <img
                  src={image1}
                  alt="tech"
                  className="shadow"
                />
              </div>
            </div>
          </div>
          <div className="row work align-items-center ">
            <div className="col-lg-6 my-5">
              <div className="img">
                <img src={image2} className="shadow" alt="" />
              </div>
            </div>
            <div className="col-lg-6 my-5">
              <h2>Data, AI and Recommendations</h2>
              <p>
                Using AI, Data, and Deep Learning explore personalised
                recommendations, experiences, and landing pages to allow users
                to explore specific elements of interest. View shelf space
                effectiveness visually through cameras Recommendation model to
                suggest specific products at the right moments Track conversions
                and view attribution Understand creative, packaging attribution
                to marketing return metrics.{" "}
              </p>
            </div>
          </div>
        </div>

        <div
          className="container text-white collapse"
          role="tab"
          aria-labelledby="nav-home-tab"
          id="nav-2"
          data-bs-parent="#nav-tabContent"
        >
          <div className="row align-items-center flex-wrap-reverse">
            <div className="col-lg-7 my-5 ">
              <div className="left-feature">
                <p>
                  Smart cameras to monitor your premises to the absolute detail
                  to provide marketing insights and compliance data.{" "}
                </p>
                <div className="checklist">
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span> Body temperature checks and attendance</span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span> Occupancy counts, demographics details.</span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span> Heatmaps of areas of interest.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 my-5">
              <div className="image">
                <img
                  src={image3}
                  alt="tech"
                  className="shadow"
                />
              </div>
            </div>
          </div>
          <div className="row work align-items-center ">
            <div className="col-lg-6 my-5">
              <div className="img">
                <img
                  src={image6}
                  className="shadow"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 my-5">
              <h2>
                Smart Mirror Sales Assistant to solve your issues of showcasing
                most relevant attire.
              </h2>

              <div className="checklist">
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span> Always shows right outfit</span>
                </div>
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span> Maximises purchase</span>
                </div>
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span> Virtual try on for all categories </span>
                </div>
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span> Trademark Conversational AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container text-white collapse"
          role="tab"
          aria-labelledby="nav-home-tab"
          id="nav-3"
          data-bs-parent="#nav-tabContent"
        >
          <div className="row align-items-center flex-wrap-reverse">
            <div className="col-lg-7 my-5 ">
              <div className="left-feature">
                <p>
                  Virtual Reality based training is bound to lead to more
                  effective retention plus augmented reality based assisted task
                  execution with real time validation.
                </p>
                <div className="checklist">
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>
                      {" "}
                      Process data with computer vision real time for effective
                      suggestions while executing tasks.
                    </span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>
                      Showcase in premise training remotely on demand in an
                      immersive oculus device
                    </span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>
                      {" "}
                      Remote monitoring of key metrics across factories through
                      headsets to provide quick real snapshots, and ability to
                      control devices through IOT.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 my-5">
              <div className="image">
                <img
                  src={image4}
                  alt="tech"
                  className="shadow"
                />
              </div>
            </div>
          </div>
          <div className="row work align-items-center ">
            <div className="col-lg-6 my-5">
              <div className="img">
                <img
                  src={image5}
                  className="shadow"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 my-5">
              <h2>
                Compliance and monitoring using smart cameras to make your
                management less costlier.
              </h2>

              <div className="checklist">
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span> Manage attendance and timesheets through CCTVs</span>
                </div>
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span> Manage safety and quality through CCTVs</span>
                </div>
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span>
                    {" "}
                    Monitor occupancy at various work stations to watch
                    efficiency
                  </span>
                </div>
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span> Conduct remote autonomous QC checks at sites.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container text-white collapse"
          role="tab"
          aria-labelledby="nav-home-tab"
          id="nav-4"
          data-bs-parent="#nav-tabContent"
        >
          <div className="row align-items-center flex-wrap-reverse">
            <div className="col-lg-7 my-5 ">
              <div className="left-feature">
                <p>
                  AI Deep Learning based diagnosis assistance through data for
                  various ailments visible through medical images or actual.{" "}
                </p>
                <div className="checklist">
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>
                      {" "}
                      Can diagnose melanoma and serious skin conditions
                    </span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span> Can detect tooth defects through X-rays</span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span> Can detect bone damage through X-rays</span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span> Breast cancer through Mamograms,and much more</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 my-5">
              <div className="image">
                <img
                  src={image7}
                  alt="tech"
                  className="shadow"
                />
              </div>
            </div>
          </div>
          <div className="row work align-items-center ">
            <div className="col-lg-6 my-5">
              <div className="img">
                <img
                  src={image8}
                  className="shadow"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 my-5">
              <h2>Experience</h2>
              <p>
                VR and AR based experiential learning to depict actual surgery
                procedures, try out various ideas and their real effects on
                patients, show patients the strategy for various surgeries and
                more.
              </p>
            </div>
          </div>
        </div>
        
        <div
          className="container text-white collapse"
          role="tab"
          aria-labelledby="nav-home-tab"
          id="nav-5"
          data-bs-parent="#nav-tabContent"
        >
          <div className="row align-items-center flex-wrap-reverse">
            <div className="col-lg-7 my-5 ">
              <div className="left-feature">
                <p>
                  Virtual reality based drug effectiveness demonstration along
                  with condition visualisation to allow for better visual
                  understanding of patients symptoms. These could be -
                </p>
                <div className="checklist">
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span> VR for Glaucoma </span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>AR for CPR </span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>Diabetes experience </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 my-5">
              <div className="image">
                <img
                  src={image9}
                  alt="tech"
                  className="shadow"
                />
              </div>
            </div>
          </div>
          <div className="row work align-items-center ">
            <div className="col-lg-6 my-5">
              <div className="img">
                <img
                  src={image10}
                  className="shadow"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 my-5">
              <h2>Cameras to manage factory compliance and patient checkins</h2>
              <p>
                Manage patient checks in’s for trials through automated
                efficient cameras Compliance based custom modules for factories.
                Restrict access to premises and secure equipment with cameras
                and RFID.
              </p>
            </div>
          </div>
        </div>

        <div
          className="container text-white collapse"
          role="tab"
          aria-labelledby="nav-home-tab"
          id="nav-6"
          data-bs-parent="#nav-tabContent"
        >
          <div className="row align-items-center flex-wrap-reverse">
            <div className="col-lg-7 my-5 ">
              <div className="left-feature">
                <p>
                  Stock management solutions using RFIDs for easier long range
                  tracking of location of devices/Products providing easy
                  insights on stock.{" "}
                </p>
                <div className="checklist">
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span> RFID tracking for various placed containers. </span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>RFID checks while loading.</span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>
                      Truck live location reporting and alarm if not on path.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 my-5">
              <div className="image">
                <img
                  src={image11}
                  alt="tech"
                  className="shadow"
                />
              </div>
            </div>
          </div>
          <div className="row work align-items-center ">
            <div className="col-lg-6 my-5">
              <div className="img">
                <img src={image12} className="shadow" alt="" />
              </div>
            </div>
            <div className="col-lg-6 my-5">
              <h2>Safety and security</h2>
              <p>
                Make sure no ones visiting when they’re not supposed to through
                smart cameras. Monitor premises and raise alarm on movement.
              </p>
            </div>
          </div>
        </div>

        <div
          className="container text-white collapse"
          role="tab"
          aria-labelledby="nav-home-tab"
          id="nav-7"
          data-bs-parent="#nav-tabContent"
        >
          <div className="row align-items-center flex-wrap-reverse">
            <div className="col-lg-7 my-5 ">
              <div className="left-feature">
                <p>
                  Procedure monitoring in AR and verification real time to walk
                  through a check list.{" "}
                </p>
                <div className="checklist">
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span> Visual verification of surface damage.</span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>
                      Audio verification of malfunction in electronic equipment.
                    </span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>
                      Severity rating of various issues, and raising alarm for
                      operator to view.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 my-5">
              <div className="image">
                <img
                  src={image13}
                  alt="tech"
                  className="shadow"
                />
              </div>
            </div>
          </div>
          <div className="row work align-items-center ">
            <div className="col-lg-6 my-5">
              <div className="img">
                <img src={image14} className="shadow" alt="" />
              </div>
            </div>
            <div className="col-lg-6 my-5">
              <h2>Training</h2>
              <p>
                Training for staff that promotes retention. Simulations, and
                experiential learning of procedures of operation.
              </p>
            </div>
          </div>
        </div>

        <div
          className="container text-white collapse"
          role="tab"
          aria-labelledby="nav-home-tab"
          id="nav-8"
          data-bs-parent="#nav-tabContent"
        >
          <div className="row align-items-center flex-wrap-reverse">
            <div className="col-lg-7 my-5 ">
              <div className="left-feature">
                <p>
                  Virtual experience of real estate in development with ability
                  to walk through complete environment and interact.{" "}
                </p>
                <div className="checklist">
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span> See the actual furniture across the location</span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>Floor map based exact visualisation.</span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>Seeing is believing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 my-5">
              <div className="image">
                <img
                  src={image15}
                  alt="tech"
                  className="shadow"
                />
              </div>
            </div>
          </div>
          <div className="row work align-items-center ">
            <div className="col-lg-6 my-5">
              <div className="img">
                <img
                  src={image16}
                  alt=""
                  className="shadow"
                />
              </div>
            </div>
            <div className="col-lg-6 my-5">
              <p>
                Cameras can make our monitoring and access control much easier
              </p>
              <div className="checklist">
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span> Attendance and name plate recognition</span>
                </div>
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span>Tailgating detection</span>
                </div>
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span>Premise safety detection </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container text-white collapse"
          role="tab"
          aria-labelledby="nav-home-tab"
          id="nav-9"
          data-bs-parent="#nav-tabContent"
        >
          <div className="row align-items-center flex-wrap-reverse">
            <div className="col-lg-7 my-5 ">
              <div className="left-feature">
                <p>
                  Complete online experiential platform for purchasing products
                  through website, application, and voice.{" "}
                </p>
                <div className="checklist">
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span> Android and IOS applications</span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>Websites in various technologies</span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>Enterprise grade security and speed</span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>Personalised recommendations.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 my-5">
              <div className="image">
                <img
                  src={image17}
                  alt="tech"
                  className="shadow"
                />
              </div>
            </div>
          </div>
          <div className="row work align-items-center ">
            <div className="col-lg-6 my-5">
              <div className="img">
                <img src={image18} className="shadow" alt="" />
              </div>
            </div>
            <div className="col-lg-6 my-5">
              <h2>Content</h2>
              <p>
                Content compression for lower resolution storage and real time
                AI based enhancement to allow for lower cost storage plus an HD
                experience.
              </p>
            </div>
          </div>
        </div>

        <div
          className="container text-white collapse"
          role="tab"
          aria-labelledby="nav-home-tab"
          id="nav-10"
          data-bs-parent="#nav-tabContent"
        >
          <div className="row align-items-center flex-wrap-reverse">
            <div className="col-lg-7 my-5 ">
              <div className="left-feature">
                <p>
                  Unlock the most potential from your data through customised
                  data discovery through various big data, and regular data
                  solutions to deliver the perfect experience.{" "}
                </p>
                <div className="checklist">
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span> Spatial data algorithms</span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>Textual data processing</span>
                  </div>
                  <div className="checks">
                    <span className="tick text-white">✓ </span>
                    <span>ML analysis of various data sets</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 my-5">
              <div className="image">
                <img
                  src={image19}
                  alt="tech"
                  className="shadow"
                />
              </div>
            </div>
          </div>
          <div className="row work align-items-center ">
            <div className="col-lg-6 my-5">
              <div className="img">
                <img src={image20} className="shadow" alt="" />
              </div>
            </div>
            <div className="col-lg-6 my-5">
              <p>
                Cybersecurity to ensure compliance through penetration tests and
                vulnerability assessments across various hosted layers.{" "}
              </p>
              <div className="checklist">
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span> Red team tests</span>
                </div>
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span>Email spam testing</span>
                </div>
                <div className="checks">
                  <span className="tick text-white">✓ </span>
                  <span>Cyber security management training.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
