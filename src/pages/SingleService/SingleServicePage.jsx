import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import {
  StyledMain,
  StyledServiceTitle,
  StyledWrapper,
  StyledOtherServices,
  StyledProsContainer,
  StyledSingleService,
} from "./SingleServicePage.style";

// components
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";

const singleServiceIcon1 = require("../Services/images/icon5.png");
const singleServiceIcon2 = require("../Services/images/icon2.png");
const singleServiceIcon3 = require("../Services/images/icon3.png");
const singleServiceIcon4 = require("../Services/images/icon4.png");

const services = [
  {
    id: "autodiagnostics",
    name: "Auto Diagnostics",
    icon: singleServiceIcon1,
  },
  {
    id: "enginerepair",
    name: "Engine Repair",
    icon: singleServiceIcon2,
  },
  {
    id: "bodywork",
    name: "Body Work",
    icon: singleServiceIcon3,
  },
  {
    id: "batteries",
    name: "Batteries",
    icon: singleServiceIcon4,
  },
  {
    id: "carwash",
    name: "Car wash",
    icon: singleServiceIcon1,
  },
  {
    id: "acrepair",
    name: "AC Repair",
    icon: singleServiceIcon2,
  },
];

const SingleServicePage = () => {
  let shallowServicesCopy = [...services];

  const { id } = useParams();
  // State

  const [currentService, setCurrentService] = useState("");

  const [serviceOne, setServiceOne] = useState({
    serviceOneId: "",
    serviceOneName: "",
    serviceOneIcon: "",
  });

  const [serviceTwo, setServiceTwo] = useState({
    serviceTwoId: "",
    serviceTwoName: "",
    serviceTwoIcon: "",
  });

  const [serviceThree, setServiceThree] = useState({
    serviceThreeId: "",
    serviceThreeName: "",
    serviceThreeIcon: "",
  });

  // Side effects
  useEffect(() => {
    services.map((item, index) => {
      if (item.id === id) {
        if (shallowServicesCopy.length === 5) {
          shallowServicesCopy = [...services];
        }
        setCurrentService(item.name);
        shallowServicesCopy.splice(index, index + 1);
      }
    });
    setServiceOne({
      serviceOneId: shallowServicesCopy[0].id,
      serviceOneName: shallowServicesCopy[0].name,
      serviceOneIcon: shallowServicesCopy[0].icon,
    });
    setServiceTwo({
      serviceTwoId: shallowServicesCopy[1].id,
      serviceTwoName: shallowServicesCopy[1].name,
      serviceTwoIcon: shallowServicesCopy[1].icon,
    });
    setServiceThree({
      serviceThreeId: shallowServicesCopy[2].id,
      serviceThreeName: shallowServicesCopy[2].name,
      serviceThreeIcon: shallowServicesCopy[2].icon,
    });
    shallowServicesCopy = [...services];
  }, [id]);
  return (
    <StyledMain>
      <div style={{ maxWidth: `1280px` }}>
        <StyledServiceTitle>{currentService}</StyledServiceTitle>
        <StyledWrapper>
          <div className="left-service-container">
            <StyledOtherServices>
              <p className="service-title1">Other services</p>
              <Link to={`/services/${serviceOne.serviceOneId}`}>
                <Card
                  text={serviceOne.serviceOneName}
                  size="sm"
                  icon={<img src={serviceOne.serviceOneIcon} alt="" />}
                />
              </Link>
              <Link to={`/services/${serviceTwo.serviceTwoId}`}>
                <Card
                  text={serviceTwo.serviceTwoName}
                  size="sm"
                  icon={<img src={serviceTwo.serviceTwoIcon} alt="" />}
                />
              </Link>
              <Link to={`/services/${serviceThree.serviceThreeId}`}>
                <Card
                  text={serviceThree.serviceThreeName}
                  size="sm"
                  icon={<img src={serviceThree.serviceThreeIcon} alt="" />}
                />
              </Link>
            </StyledOtherServices>
            <StyledProsContainer>
              <div className="pros-title">
                <span>
                  <img src={require("./images/Prosicon1.png")} alt="" />
                </span>
                <p className="service-title2">Convenient service</p>
              </div>
              <p className="service-paragraph2">
                Through True Rich Attended does no end it his mother since real
                had half every him.
              </p>
              <div className="pros-title">
                <span>
                  <img src={require("./images/Prosicon2.png")} alt="" />
                </span>
                <p className="service-title2">Expert mechanics</p>
              </div>
              <p className="service-paragraph2">
                Through True Rich Attended does no end it his mother since real
                had half every him.
              </p>
              <div className="pros-title">
                <span>
                  <img src={require("./images/Prosicon3.png")} alt="" />
                </span>
                <p className="service-title2">Transparent pricing</p>
              </div>
              <p className="service-paragraph2">
                Through True Rich Attended does no end it his mother since real
                had half every him.
              </p>
            </StyledProsContainer>
          </div>
          <StyledSingleService>
            <div>
              <img src={require("./images/serviceimage.png")} alt="" />
            </div>
            <h4 className="single-service-sub-title ">
              The warning lights on your dashboard are the most obvious starting
              point.
            </h4>
            <p className="single-service-sub-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
              dui auctor dictum eget a elit. Pellentesque varius diam risus, ut
              condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
              pretium interdum justo tincidunt a. Donec at congue lectus. Nulla
              facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
              placerat. Etiam ornare nibh vel dui egestas, eu posuere metus
              convallis.
            </p>
            <p className="single-service-sub-body">
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
              Maecenas sodales tristique quam. Suspendisse fringilla massa vel
              dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed
              mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit
              nibh eu neque egestas, non condimentum mi bibendum. Sed est eros,
              molestie consectetur auctor non, lobortis quis tortor. Nam cursus
              imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis
              lorem sagittis tincidunt. Etiam pellentesque metus vel enim
              iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
            </p>
            <h4 className="single-service-sub-title ">
              Delaying a diagnosis and repair could lead to even bigger problems
              down the road.
            </h4>
            <p className="single-service-sub-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
              dui auctor dictum eget a elit. Pellentesque varius diam risus, ut
              condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
              pretium interdum justo tincidunt a. Donec at congue lectus. Nulla
              facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
              placerat. Etiam ornare nibh vel dui egestas, eu posuere metus
              convallis.
            </p>
            <div className="container-vline">
              <div className="vertical-line"></div>
              <p className="single-service-sub-body">
                Ut non urna a odio condimentum dictum. Proin egestas erat a orci
                ultrices, vitae bibendum libero posuere. Quisque laoreet
                tincidunt justo. Vestibulum congue dictum libero finibus
                vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis
                mollis ante.
              </p>
            </div>
          </StyledSingleService>
        </StyledWrapper>
      </div>
      <Banner />
    </StyledMain>
  );
};

export default SingleServicePage;
