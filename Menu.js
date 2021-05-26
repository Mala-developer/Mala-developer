import React, { useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
    /*drawer list */
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

let drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
     display: 'flex'
     
  },
  appBar: {
      transition: theme.transitions.create(['margin','width'],{
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
  },
  appBarShift:{
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin','width'],{
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen
  }),
},
menuButton: {
marginRight: theme.spacing(2),
},
title: {
  flexGrow: 1,
},
hide: {
  display: 'none'
},
drawer: {
  width: drawerWidth,
  flexShrink: 0
},
 drawerPaper: {
 width: drawerWidth
},
 drawerHeader: {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-end',
   padding: theme.spacing(0,1),
   ...theme.mixins.toolbar// pre return code in material library
 },
 content: {
   flexGrow: 1,
   padding: theme.spacing(3),
   transition: theme.transitions.create('margin',{
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.leavingScreen
   }),
   marginLeft: -drawerWidth,
 },
  contentShift: {
    transition: theme.transitions.create('margin',{
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0,
    container: {
      width: '100% auto'
    },
  }
}));


export default function Menu(props){
    const classes = useStyles();
    const theme = useTheme();
    const [open,setOpen] = useState(false); //react hook to declare state in functional component
         //[statename, function] = intialvalue
    const drawerOpen = () => {
      setOpen(true);
    }
    const drawerClose = () => {
      setOpen(false);
    }


    return(
            <React.Fragment>
              <div className={classes.root}>
                      <AppBar position="static" className = {clsx(classes.appBar,{[classes.appBarShift]:open})}>
                        <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                          onClick={drawerOpen}>
                        <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                         React Ref Router
                         </Typography>
                         <Button color="inherit">Login</Button>
                         </Toolbar>
                      </AppBar>
              <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open}
                  classes={{paper: classes.drawerPaper}}>
                  <div className={classes.drawerHeader}>
                   <IconButton onclick={drawerClose}>
                    { theme.direction ==='ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                  </IconButton>
                   </div>
                   <Divider/>

                  <List>
                    <ListItem button>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText><Link to="/">Home</Link></ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText><Link to="/about">About</Link></ListItemText>
                    </ListItem>
                  </List>
                  <Divider/>
                  <List>
                    <ListItem button>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText><Link to="/profile">Profile</Link></ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText><Link to="/contact">Contact</Link></ListItemText>
                    </ListItem>
                  </List>
              </Drawer>
              <main className={clsx(classes.contact,{
                [classes.contentShift]:open
              })}>
                       
              </main>
            </div>
              <div>
              { props.children }
              </div>
                  
            </React.Fragment>
          )
}