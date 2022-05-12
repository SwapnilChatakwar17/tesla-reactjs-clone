import React from "react";
import styled from "styled-components";
import Section from "./Section";

const infoData = [
  {
    id: 0,
    title: "Model S",
    description: "Order Online for Touchless Delivery",
    image: "model-s.jpg",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    range: "390",
    time: "1.99",
    topSpeed: "200",
    peakPower: "1,020",
  },
  {
    id: 1,
    title: "Model Y",
    description: "Order Online for Touchless Delivery",
    image: "model-y.jpg",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    range: "410",
    time: "2.05",
    topSpeed: "190",
    peakPower: "1,040",
  },
  {
    id: 2,
    title: "Model 3",
    description: "Order Online for Touchless Delivery",
    image: "model-3.jpg",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    range: "400",
    time: "2.99",
    topSpeed: "180",
    peakPower: "900",
  },
  {
    id: 3,
    title: "Model X",
    description: "Order Online for Touchless Delivery",
    image: "model-x.jpg",
    leftBtnText: "Custom Order",
    rightBtnText: "Existing Inventory",
    range: "350",
    time: "1.55",
    topSpeed: "150",
    peakPower: "1,130",
  },
  {
    id: 4,
    title: "Lowest Cost Solar Panels in America",
    description: "Money-back guarantee",
    image: "solar-panel.jpg",
    leftBtnText: "Order now",
    rightBtnText: "Learn More",
  },
  {
    id: 5,
    title: "Solar for New Roofs",
    description: "Solar roof costs less than a new roof plus solar panels",
    image: "solar-roof.jpg",
    leftBtnText: "Order now",
    rightBtnText: "Learn More",
  },
  {
    id: 6,
    title: "Accessory",
    description: "",
    image: "accessories.jpg",
    leftBtnText: "Shop now",
  },
];

const Home = () => {
  return (
    <Container>
      {infoData.map((car) => (
        <Section key={car.id} {...car} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default Home;
