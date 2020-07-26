/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "./headerLinkStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="More"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/dashboard" className={classes.dropdownLink}>
              Something
            </Link>,
            <a
              href="https://www.google.com/"
              target="_blank"
              className={classes.dropdownLink}
            >
              others
            </a>
          ]}
        />
      </ListItem> */}
         <ListItem className={classes.listItem}>
         <Link to="/dashboard" style={{textDecoration: 'none',color:'white'}}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> 
         Dashboard
        </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
     
        <Button
          href="https://www.google.com/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> 
         Login
        </Button>
       
      </ListItem>
     
     
    
    </List>
  );
}
