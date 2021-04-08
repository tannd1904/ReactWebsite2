import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles({
  footer: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
})

function Footer() {
  const classes = useStyles();
  
  return (
        <BottomNavigation className={classes.footer}>
          <BottomNavigationAction label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#3b5998"}}/>} />
          <BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
          <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #C13584"}}/>} />
          <BottomNavigationAction label="YouTube" value="folder" icon={<YouTubeIcon  style={{fill: "#c4302b"}}/>} />
        </BottomNavigation>
)
}

export default Footer
