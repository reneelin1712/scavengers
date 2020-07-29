import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "../components/Parallax/Parallax.js";

import styles from "../assets/jss/landingPage.js";

// Sections for this page
import ProductSection from "./sections/ProductSection";
import TeamSection from "./sections/TeamSection.js";
import WorkSection from "./sections/WorkSection.js";
import logo from '../assets/img/logo.png';
import styled from 'styled-components';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const Div = styled.div`
  max-width: 100%;
  width: 100px;
`;
const Image = styled.img`
  width: 100px;
`;
const Logo = () => {
    return (
        <Div>
            <Image src={logo} alt="brand"/>
        </Div>
        )

}
const LandingPage= (props) =>{
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        leftLinks={<Logo />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("../assets/img/landing-img.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title} style={{fontSize: '4.1em'}}>SCAVENGERS</h1>
              <h3>Seeing treasure in trash, turning waste to wealth.</h3>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://youtu.be/1rR-XTfmFYY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} >
          <ProductSection />
        <TeamSection />
            <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default LandingPage
