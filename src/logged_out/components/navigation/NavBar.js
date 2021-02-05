import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Hidden,
  IconButton,
  withStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
// import HowToRegIcon from "@material-ui/icons/HowToReg";
// import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f5a301"
  },
  logoImg: {
    height: "55px",
    marginTop: "12px"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function NavBar(props) {
  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
  } = props;

  const onOrderNowClick = () => {
    window.open(
      "https://dinein.inresto.com/wla/wla-welcome?cgId=5fa26edf42903d80ba197997",
      "_blank"
    );
  };

  const menuItems = [
    {
      name: "Order Now",
      onClick: onOrderNowClick,
      icon: <LocalShippingIcon className="text-white" />,
    },
    {
      link: "/fitness-program",
      name: "Fitness Programs",
      icon: <FitnessCenter className="text-white" />,
    },
    {
      link: "/blog",
      name: "Blog",
      icon: <BookIcon className="text-white" />
    }
    // {
    //   name: "Register",
    //   onClick: openRegisterDialog,
    //   icon: <HowToRegIcon className="text-white" />,
    // },
    // {
    //   name: "Login",
    //   onClick: openLoginDialog,
    //   icon: <LockOpenIcon className="text-white" />,
    // },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Link
              to={"/"}
              className={classes.noDecoration}
              onClick={handleMobileDrawerClose}
            >
              <div item md={7}>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/logo1.png`}
                        className={props.classes.logoImg}
                        alt="header example"
                      />
              </div>
            </Link>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map((element) => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
