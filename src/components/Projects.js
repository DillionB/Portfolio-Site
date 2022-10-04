import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.PNG";
import projImg2 from "../assets/img/project-img2.PNG";
import projImg3 from "../assets/img/project-img3.PNG";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.PNG";
import projImg6 from "../assets/img/project-img6.PNG";
import projImg7 from "../assets/img/project-img7.PNG";
import projImg8 from "../assets/img/project-img8.PNG";
import projImg9 from "../assets/img/project-img9.PNG";
import projImg10 from "../assets/img/project-img10.PNG";
import projImg11 from "../assets/img/project-img11.PNG";
import projImg12 from "../assets/img/project-img12.PNG";
import projImg13 from "../assets/img/project-img13.PNG";
import projImg14 from "../assets/img/project-img14.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Kiosk Manager",
      description: "React, .Net 6, SQL",
      imgUrl: projImg1,
    },
    {
      title: "Admin Dashboard",
      description: "React, Bootstrap, Tailwind",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio Website",
      description: "React, Photoshop",
      imgUrl: projImg3,
    },
    {
      title: "Crypto Trading Bot",
      description: "Python, C++, Solidity",
      imgUrl: projImg4,
    },
    {
      title: "Flappy Bird With a Gun",
      description: "C++, Photoshop",
      imgUrl: projImg5,
    },
    {
      title: "Galaga Clone",
      description: "Python",
      imgUrl: projImg6,
    },
  ];
    const projects2 = [
    {
      title: "User Registration AIP",
      description: ".Net 6, SQL",
      imgUrl: projImg7,
    },
    {
      title: "Crypto Scraper API",
      description: "Python",
      imgUrl: projImg8,
    },
    {
      title: "Static Mesh Import Automation",
      description: "Python, UE4, Blender",
      imgUrl: projImg9,
    },
  ];

const projects3 = [
{
  title: "Social Distancing Simulator",
  description: "UE4, Blender, Photoshop, premeir Pro",
  imgUrl: projImg10,
},
{
  title: "Roll.io",
  description: "UE4, IOS",
  imgUrl: projImg11,
},
{
  title: "Combat Operative Responsible for government insurgence",
  description: "UE4",
  imgUrl: projImg12,
},
{
  title: "Behavior Trees, Blueprints, Animations, and More ",
  description: "C++, UE4, Blender",
  imgUrl: projImg13,
},
{
  title: "ERC-20 and BEP-20 Smart Contracts",
  description: "Solidity",
  imgUrl: projImg14,
},
];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have created a number of both frontend and backend applications. I have also experiemented with a variety of other technologies </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Frontend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Backend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Row>
                  </Row>
                    <Tab.Pane eventKey="second">
                    <Row>
                    {
                      projects2.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
                  </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
