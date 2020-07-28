import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DeleteSweep from "@material-ui/icons/DeleteSweep";
import Public from "@material-ui/icons/Public";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
// import Table from "../../components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
import Card from "../../components/CardDash/Card.js";
import CardHeader from "../../components/CardDash/CardHeader.js";
import CardIcon from "../../components/CardDash/CardIcon.js";
import CardBody from "../../components/CardDash/CardBody.js";
import CardFooter from "../../components/CardDash/CardFooter.js";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import { bugs, website, server } from "variables/general.js";
import {Bar,Line,Doughnut} from 'react-chartjs-2';
import Box from '@material-ui/core/Box';

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart
// } from "../../variables/charts";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height:300,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'AUD',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [8000, 7500, 6500, 6500, 5600, 5600, 5400]
    }
  ]
};

const dataProfit = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'AUD',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [500, 500, 1500, 3000, 4600, 4600, 5400]
    }
  ]
};

const dataWaste = {
	labels: [
    'Hazard',
		'Recyclable',
		'Reusable'
		
	],
	datasets: [{
		data: [50, 300, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default function Dashboard() {
  const classes = useStyles();
  const classes1 = useStyle();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader stats icon>
            <CardIcon color="warning">
                <Public />
              </CardIcon>
              <p className={classes.cardCategory}>Cost Reduced</p>
              <h3 className={classes.cardTitle}>
                $5,000 <small></small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                {/* <Danger>
                  <Warning />
                </Danger> */}
                <DateRange />
                Last Month
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue Gained</p>
              <h3 className={classes.cardTitle}>$4,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last Month
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem> */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <DeleteSweep/>
              </CardIcon>
              <p className={classes.cardCategory}>Waste Processed</p>
              <h3 className={classes.cardTitle}>100 Tons</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <Grid container spacing={3}>
        
        <Grid item xs={6}>
        <Paper className={classes1.paper}>  <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Cost Report 2020'
          },
            scales: {
              xAxes: [{
                gridLines: {
                  display: false
                  
                }
              }],
              yAxes: [{
                gridLines: {
                  display: false
                }
              }]
            }
          }}
        /></Paper>
        
       

        </Grid>
        
        <Grid item xs={6}>
        <Paper className={classes1.paper}> 
        <Line
          data={dataProfit}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Profit Report 2020'
          },
            scales: {
              xAxes: [{
                gridLines: {
                  display: false
                  
                }
              }],
              yAxes: [{
                gridLines: {
                  display: false
                }
              }]
            }
          }}
        /></Paper>
      
        </Grid>
        </Grid>


      <Box m={2}>
        <Paper>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
          {/* <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Cost Down</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowDownward className={classes.upArrowCardCategory} /> 35%
                </span>{" "}
                decreased last monthly.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 days ago
              </div>
            </CardFooter>
          </Card> */}
        </GridItem>
     


        <GridItem xs={12} sm={12} md={4}>
        <Line
          data={dataProfit}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
          {/* <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Revenue</h4>
              <p className={classes.cardCategory}>Monthly Profit</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 days ago
              </div>
            </CardFooter>
          </Card> */}
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
        <Doughnut data={dataWaste} />
          {/* <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Processed Waste</h4>
              <p className={classes.cardCategory}>Last Month</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 days ago
              </div>
            </CardFooter>
          </Card> */}
        </GridItem>
      </GridContainer>
      </Paper>
      </Box>
    </div>
  );
}
