import {
  Box,
  Container,
  Grid,
  IconButton,
  Link as MuiLink,
  Typography,
  isWidthUp,
  withStyles,
  withWidth,
} from '@material-ui/core';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MailIcon from '@material-ui/icons/Mail';
import PropTypes from 'prop-types';
import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import transitions from '@material-ui/core/styles/transitions';

const styles = (theme) => ({
  footerInner: {
    backgroundColor: theme.palette.common.darkBlack,
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
    color: theme.palette.common.white,
  },
  footerLinks: {
    marginTop: theme.spacing(2.5),
    marginBot: theme.spacing(1.5),
    color: theme.palette.common.white,
  },
  infoIcon: {
    color: `${theme.palette.common.white} !important`,
    // backgroundColor: "#33383b !important",
  },
  socialIcon: {
    fill: theme.palette.common.white,
    backgroundColor: '#33383b',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  link: {
    cursor: 'Pointer',
    color: theme.palette.common.white,
    transition: transitions.create(['color'], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeIn,
    }),
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  whiteBg: {
    backgroundColor: theme.palette.common.white,
  },
});

const infos = [
  {
    icon: <WhatsAppIcon />,
    description: '+91-8793580502',
    href: 'https://wa.me/8793580502',
  },
  {
    icon: <MailIcon />,
    description: 'healthybee.fit@gmail.com',
    href: 'mailto:healthybee.fit@gmail.com',
  },
];

const socialIcons = [
  {
    icon: (
      <svg
        role="img"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Facebook</title>
        <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
      </svg>
    ),
    label: 'Facebook',
    href: 'https://www.facebook.com/healthybee.fit',
  },
  {
    icon: (
      <svg
        role="img"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Instagram</title>
        <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z" />
      </svg>
    ),
    label: 'Instagram',
    href: 'https://www.instagram.com/healthybee.fit/',
  },
];

function Footer(props) {
  const { classes, width } = props;
  return (
    <footer>
      <div className={classes.footerInner}>
        <Grid container spacing={isWidthUp('md', width) ? 10 : 5}>
          <Grid item xs={12} md={6} lg={4}>
            <Box display="flex" mb={1} style={{ alignItems: 'baseline' }}>
              <Box mr={2}>
                <IconButton className={classes.infoIcon} tabIndex={-1}>
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography variant="h6" className="text-white">
                  10,000+ Happy Customers
                </Typography>
              </Box>
            </Box>
            <Box display="flex" mb={1} style={{ alignItems: 'baseline' }}>
              <Box mr={2}>
                <IconButton className={classes.infoIcon} tabIndex={-1}>
                  <ListAltIcon />
                </IconButton>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography variant="h6" className="text-white">
                  5,000+ Yearly Subscriptions
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box display="flex">
              <div>
                {infos.map((info, index) => (
                  <MuiLink href={info.href} color="inherit">
                    <Box
                      display="flex"
                      mb={1}
                      key={index}
                      style={{ alignItems: 'baseline' }}
                    >
                      <Box mr={2}>
                        <IconButton className={classes.infoIcon} tabIndex={-1}>
                          {info.icon}
                        </IconButton>
                      </Box>
                      <Box display="flex" flexDirection="column">
                        <Typography variant="h6" className="text-white">
                          {info.description}
                        </Typography>
                      </Box>
                    </Box>
                  </MuiLink>
                ))}
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" paragraph className="text-white">
              Follow us on
            </Typography>
            <Box display="flex">
              {socialIcons.map((socialIcon, index) => (
                <Box key={index} mr={index !== socialIcons.length - 1 ? 1 : 0}>
                  <IconButton
                    aria-label={socialIcon.label}
                    className={classes.socialIcon}
                    href={socialIcon.href}
                  >
                    {socialIcon.icon}
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box display="flex" mb={1} style={{ alignItems: 'baseline' }}>
              {/* <Box mr={2}>
                <IconButton className={classes.infoIcon} tabIndex={-1}>
                  <FavoriteBorderIcon />
                </IconButton>
              </Box> */}
              <Box display="flex" flexDirection="column">
                <Typography variant="h6" className="text-white">
                  Address
                </Typography>
              </Box>
            </Box>
            <Box display="flex" mb={1} style={{ alignItems: 'baseline' }}>
              <Box display="flex" flexDirection="column">
                <Typography variant="h7" className="text-white">
                  Inside Silver Sports Club, Near by Mumbai-Bangalore Highway,
                  Behind Vedanta Society, Shankar Kalat Nagar, Wakad, Pune,
                  Maharashtra 411057
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div
        maxWidth="sm"
        style={{ padding: '15px', backgroundColor: '#24282c', color: 'white' }}
      >
        <Container>
          <Box display="flex">
            <Box flexGrow={1}>2023 @ HealthyBee. All rights reserved</Box>
            <Box>
              <MuiLink component={Link} to="/terms" color="inherit">
                Terms & conditions
              </MuiLink>
              {' | '}
              <MuiLink component={Link} to="/privacy" color="inherit">
                Privacy Policy
              </MuiLink>
              {' | '}
              <MuiLink component={Link} to="/refund" color="inherit">
                Refund Policy
              </MuiLink>
            </Box>
          </Box>
        </Container>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(withStyles(styles, { withTheme: true })(Footer));
