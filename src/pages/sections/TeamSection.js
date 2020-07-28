import Link from "@material-ui/core/Link";
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
// import CardBody from "../../components/Card/CardBody.js";
// import CardFooter from "../../components/Card/CardFooter.js";

import styles from "./teamStyle.js";

import lusi from "../../assets/img/faces/lusi.jfif";
import cheah from "../../assets/img/faces/cheah.jfif";
import renee from "../../assets/img/faces/renee.jfif";
import james from "../../assets/img/faces/james.png";
import xin from "../../assets/img/faces/XIN.jpeg";
import silvie from "../../assets/img/faces/silvie.jfif";
import candice from "../../assets/img/faces/candice.png";
import JASON from "../../assets/img/faces/JASON.jfif";
import CAMERON from "../../assets/img/faces/CAMERON.jfif";
import LACEY from "../../assets/img/faces/LACEY.jfif";
import RICK from "../../assets/img/faces/RICK.jfif";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
        <div className={classes.section}>
            <h2 className={classes.title} style={{fontSize: '2.4rem'}}>THE TEAM</h2>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                    <Link href={"https://www.linkedin.com/in/lusi-ou-the-university-of-queensland/"} style={{color: "#3C4858"}} target="_blank">
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={lusi} alt="..." className={imageClasses} />
                            </GridItem>
                            <h2 className={classes.cardTitle} style={{fontSize: '1.5rem'}}>
                                Lusi Ou
                                <br />
                                <small className={classes.smallTitle}>CFO</small>
                            </h2>
                        </Card>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    <Link href={"https://www.linkedin.com/in/cheah-zhong-xiang/"} style={{color: "#3C4858"}} target="_blank">
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={cheah} alt="..." className={imageClasses} />
                            </GridItem>
                            <h2 className={classes.cardTitle} style={{fontSize: '1.5rem'}}>
                               Cheah Xiang
                                <br />
                                <small className={classes.smallTitle}>CEO</small>
                            </h2>
                        </Card>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    <Link href={"https://www.linkedin.com/in/xin-3105731b1/"} style={{color: "#3C4858"}} target="_blank">
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={xin} alt="..." className={imageClasses} />
                            </GridItem>
                            <h2 className={classes.cardTitle} style={{fontSize: '1.5rem'}}>
                                Xin Gao
                                <br />
                                <small className={classes.smallTitle}>COO</small>
                            </h2>
                        </Card>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                    <Link href={"https://www.linkedin.com/in/jamesnguyen868/"} style={{color: "#3C4858"}} target="_blank">
                        <Card plain>
                            <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                                <img src={james} alt="..." className={imageClasses} style={{width: "11em"}}/>
                            </GridItem>
                            <h2 className={classes.cardTitle} style={{fontSize: '1.5rem'}}>
                                James Nguyen
                                <br />
                                <small className={classes.smallTitle}>CTO</small>
                            </h2>
                        </Card>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                    <Link href={"https://www.linkedin.com/in/renee-lin-5852a0189/"} style={{color: "#3C4858"}} target="_blank">
                        <Card plain>
                            <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                                <img src={renee} alt="..." className={imageClasses} style={{width: "11em"}}/>
                            </GridItem>
                            <h2 className={classes.cardTitle} style={{fontSize: '1.5rem'}}>
                                Renee Lin
                                <br />
                                <small className={classes.smallTitle}>CIO</small>
                            </h2>
                        </Card>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                    <Link href={"https://www.linkedin.com/in/silvieketelaars/"} style={{color: "#3C4858"}} target="_blank">
                        <Card plain>
                            <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                                <img src={silvie} alt="..." className={imageClasses} style={{width: "11em"}}/>
                            </GridItem>
                            <h2 className={classes.cardTitle} style={{fontSize: '1.5rem'}}>
                                Silvie Ketelaars
                                <br />
                                <small className={classes.smallTitle}>CMO</small>
                            </h2>
                        </Card>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                    <Link href={"https://www.linkedin.com/in/candice-c-895634187/"} style={{color: "#3C4858"}} target="_blank">
                        <Card plain>
                            <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                                <img src={candice} alt="..." className={imageClasses} style={{width: "11em"}}/>
                            </GridItem>
                            <h2 className={classes.cardTitle} style={{fontSize: '1.5rem'}}>
                               Candice Chang
                                <br />
                                <small className={classes.smallTitle}>CRO</small>
                            </h2>
                        </Card>
                        </Link>
                    </GridItem>
                </GridContainer>
            </div>
        </div>

        <div className={classes.section}>
            <h2 className={classes.title} style={{fontSize: '2.4rem'}}>ADVISORY BOARD</h2>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                    <Link href={"https://www.linkedin.com/in/jasontitman/"} style={{color: "#3C4858"}} target="_blank">
                        <Card plain>
                            <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                                <img src={JASON} alt="..." className={imageClasses} />
                            </GridItem>
                            <h2 className={classes.cardTitle} style={{fontSize: '1.5rem'}}>
                                JASON TITMAN
                                <br />
                                <small className={classes.smallTitle}>INTEGR8 GROUP</small>
                            </h2>
                        </Card>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                    <Link href={"https://www.linkedin.com/in/lacey-webb/"} style={{color: "#3C4858"}} target="_blank">
                        <Card plain>
                            <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                                <img src={LACEY} alt="..." className={imageClasses} />
                            </GridItem>
                            <h2 className={classes.cardTitle} style={{fontSize: '1.5rem'}}>
                               LACEY WEBB
                                <br />
                                <small className={classes.smallTitle}>RESOURCE HUB</small>
                            </h2>
                        </Card>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                    <Link href={"https://www.linkedin.com/in/cameron-mckenzie-99197271/"} style={{color: "#3C4858"}} target="_blank">
                        <Card plain>
                            <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                                <img src={CAMERON} alt="..." className={imageClasses} />
                            </GridItem>
                            <h2 className={classes.cardTitle} style={{fontSize: '1.5rem'}}>
                                CAMERON MCKENZIE
                                <br />
                                <small className={classes.smallTitle}>ASPIRE</small>
                            </h2>
                        </Card>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={3} md={3}>
                    <Link href={"https://www.linkedin.com/in/savvy-rick-brown/"} style={{color: "#3C4858"}} target="_blank">
                        <Card plain>
                            <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                                <img src={RICK} alt="..." className={imageClasses} style={{width: "11em"}}/>
                            </GridItem>
                            <h2 className={classes.cardTitle} style={{fontSize: '1.5rem'}}>
                               RICK BROWN
                                <br />
                                <small className={classes.smallTitle}>JENKINS & BROWN</small>
                            </h2>
                        </Card>
                        </Link>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    </div>
  );
}

// export default function TeamSection() {
//   const classes = useStyles();
//   const imageClasses = classNames(
//     classes.imgRaised,
//     classes.imgRoundedCircle,
//     classes.imgFluid
//   );
//   return (
//     <div className={classes.section}>
//       <h2 className={classes.title}>Here is our team</h2>
//       <div>
//         <GridContainer>
//           <GridItem xs={12} sm={12} md={4}>
//             <Card plain>
//               <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
//                 <img src={team1} alt="..." className={imageClasses} />
//               </GridItem>
//               <h4 className={classes.cardTitle}>
//                 Gigi Hadid
//                 <br />
//                 <small className={classes.smallTitle}>Model</small>
//               </h4>
//               <CardBody>
//                 <p className={classes.description}>
//                   You can write here details about one of your team members. You
//                   can give more details about what they do. Feel free to add
//                   some <a href="#pablo">links</a> for people to be able to
//                   follow them outside the site.
//                 </p>
//               </CardBody>
//               <CardFooter className={classes.justifyCenter}>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-twitter"} />
//                 </Button>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-instagram"} />
//                 </Button>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-facebook"} />
//                 </Button>
//               </CardFooter>
//             </Card>
//           </GridItem>
//           <GridItem xs={12} sm={12} md={4}>
//             <Card plain>
//               <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
//                 <img src={team2} alt="..." className={imageClasses} />
//               </GridItem>
//               <h4 className={classes.cardTitle}>
//                 Christian Louboutin
//                 <br />
//                 <small className={classes.smallTitle}>Designer</small>
//               </h4>
//               <CardBody>
//                 <p className={classes.description}>
//                   You can write here details about one of your team members. You
//                   can give more details about what they do. Feel free to add
//                   some <a href="#pablo">links</a> for people to be able to
//                   follow them outside the site.
//                 </p>
//               </CardBody>
//               <CardFooter className={classes.justifyCenter}>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-twitter"} />
//                 </Button>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-linkedin"} />
//                 </Button>
//               </CardFooter>
//             </Card>
//           </GridItem>
//           <GridItem xs={12} sm={12} md={4}>
//             <Card plain>
//               <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
//                 <img src={team3} alt="..." className={imageClasses} />
//               </GridItem>
//               <h4 className={classes.cardTitle}>
//                 Kendall Jenner
//                 <br />
//                 <small className={classes.smallTitle}>Model</small>
//               </h4>
//               <CardBody>
//                 <p className={classes.description}>
//                   You can write here details about one of your team members. You
//                   can give more details about what they do. Feel free to add
//                   some <a href="#pablo">links</a> for people to be able to
//                   follow them outside the site.
//                 </p>
//               </CardBody>
//               <CardFooter className={classes.justifyCenter}>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-twitter"} />
//                 </Button>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-instagram"} />
//                 </Button>
//                 <Button
//                   justIcon
//                   color="transparent"
//                   className={classes.margin5}
//                 >
//                   <i className={classes.socials + " fab fa-facebook"} />
//                 </Button>
//               </CardFooter>
//             </Card>
//           </GridItem>
//         </GridContainer>
//       </div>
//     </div>
//   );
// }
