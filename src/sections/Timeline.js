import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Timeline.css";
import Title from "../components/Title";

export default function App() {
  return (
    <MDBContainer fluid className="py-5">
        <Title color={"OUR"} noncolor={"JOURNEY"} />
      <div className="main-timeline-2">
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardBody className="p-4">
              <div data-aos="flip-up">
                <div className="news_part_timeline">
                  <div className="left_items_timeline">
                    <div className="blog__item_timeline">
                      <h4 className="fw-bold mb-4">The Beginning</h4>
                      <p className="text-muted mb-4">
                        <MDBIcon far icon="clock" size="sm" /> 2007
                      </p>
                      <p className="mb-0">
                        The grand fest of Aavartan had its seed sown back in
                        2007, when few Technical enthusiasts came up with the
                        idea of "Vigyaan"-the national level science exhibition,
                        single event back then which eventually transformed into
                        magnificent Aavartan as we see it today.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard>
            <MDBCardBody className="p-4">
              <div data-aos="flip-up">
                <div className="news_part_timeline">
                  <div className="left_items_timeline">
                    <div className="blog__item_timeline">
                      <h4 className="fw-bold mb-4">Vigyaan</h4>
                      <p className="text-muted mb-4">
                        <MDBIcon far icon="clock" size="sm" /> 2011
                      </p>
                      <p className="mb-0">
                        It was 2011, when people witnessed the massive
                        transition of Vigyaan, a platform for innovative ideas,
                        into a complete fest, Aavartan. The consistent efforts
                        and out of the box ideas of the team members laid the
                        foundation for what now is called as the trademark of
                        tech-fests!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 left-2">
          <MDBCard>
            <MDBCardBody className="p-4">
              <div data-aos="flip-up">
                <div className="news_part_timeline">
                  <div className="left_items_timeline">
                    <div className="blog__item_timeline">
                      <h4 className="fw-bold mb-4">
                        Central India's Largest Tech-fest
                      </h4>
                      <p className="text-muted mb-4">
                        <MDBIcon far icon="clock" size="sm" /> 2019
                      </p>
                      <p className="mb-0">
                        Team Technocracy took it to the next level as
                        Aavartan'19 witnessed a footfall of over 10,000. The
                        family of 200+ members left no stones unturned in
                        creating a paradise for any tech-savvy. Their efforts
                        bore a golden fruit as Aavartan reached the milestone of
                        being recognized as the Central India's largest
                        tech-fest.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard>
            <MDBCardBody className="p-4">
              <div data-aos="flip-up">
                <div className="news_part_timeline">
                  <div className="left_items_timeline">
                    <div className="blog__item_timeline">
                      <h4 className="fw-bold mb-4">We Are Coming Back</h4>
                      <p className="text-muted mb-4">
                        <MDBIcon far icon="clock" size="sm" /> 2014
                      </p>
                      <p className="mb-0">
                        Aavartan will be back with its new edition with stellar
                        range of exciting tech savvy events and evening shows.
                        Stay tuned with us through our social media handles to
                        make sure you don't miss out on the next big tech
                        revolution!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </MDBContainer>
  );
}
