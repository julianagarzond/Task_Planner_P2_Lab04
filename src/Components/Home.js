
  import React from 'react';
  import clsx from 'clsx';
  import { makeStyles } from '@material-ui/core/styles';
  import Drawer from '@material-ui/core/Drawer';
  import Button from '@material-ui/core/Button';
  import List from '@material-ui/core/List';
  import Divider from '@material-ui/core/Divider';
  import ListItem from '@material-ui/core/ListItem';
  import ListItemIcon from '@material-ui/core/ListItemIcon';
  import ListItemText from '@material-ui/core/ListItemText';
  import InboxIcon from '@material-ui/icons/MoveToInbox';
  import MailIcon from '@material-ui/icons/Mail';
  import Card from '@material-ui/core/Card';
  import CardContent from '@material-ui/core/CardContent';
  import Typography from '@material-ui/core/Typography';
  import './Home.css';
  import EventNoteSharpIcon from '@material-ui/icons/EventNoteSharp';
  import EventAvailableSharpIcon from '@material-ui/icons/EventAvailableSharp';
  import FlipCameraAndroidSharpIcon from '@material-ui/icons/FlipCameraAndroidSharp';
  import FaceIcon from '@material-ui/icons/Face';
  import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';

 
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
  
  export default function Home(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false

    });
   
    const bull = <span className="bullet">•</span>;
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState({state, [anchor]: open });
     };

     const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Juliana Garzón Duque', 'juligardu@gmail.com', 'Send email'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index === 0 ? <FaceIcon />:<KeyboardTabIcon/>}</ListItemIcon>
              <ListItemText primary={text} />
              <br></br>
              <br></br>
              <br></br>
            </ListItem>
          ))}
        </List>
        <Divider />
        
      </div>

      
    );

 
    return (

      <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button  variant="outlined" size="large" onClick={toggleDrawer(anchor, true)} > VIEW MY PROFILE</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
            
          </Drawer>
          <div className="root">
      <Card className= "root">
        <CardContent>
          <Typography className="title" color="primary" gutterBottom>
            Juliana Garzon Duque
          </Typography>
          <Typography variant="h5" component="h2">
                 {bull}Implement Login View
          </Typography>
          <Typography className="pos" color="error" variant="overline">
            In progress
          </Typography>

          <Typography variant="body2" component="p">
          <EventNoteSharpIcon></EventNoteSharpIcon>
           
          </Typography>
        </CardContent>
      </Card>
      <br>
      </br>
      <Card className= "root">
        <CardContent>
          <Typography className="title" color="primary" gutterBottom>
            Juliana Garzon Duque
          </Typography>
          <Typography variant="h5" component="h2">
          {bull}Implement Login Controller
          </Typography>
          <Typography className="pos" color="error" variant="overline">
            Finished
          </Typography>
          <Typography variant="body2" component="p">
          
          <EventAvailableSharpIcon></EventAvailableSharpIcon>
           
          </Typography>
        </CardContent>
        
      </Card>
      <br>
      </br>

      <Card className= "root">
        <CardContent>
          <Typography className="title" color="primary" gutterBottom>
            Juliana Garzon Duque
          </Typography>
          <Typography variant="h5" component="h2">
          {bull} Implement Tool Bar 
          </Typography>
          <Typography className="pos" color="secondary" variant="overline">
            In progress
          </Typography>
          <Typography variant="body2" component="p">
          
          <EventNoteSharpIcon></EventNoteSharpIcon>
           
          </Typography>
        </CardContent>
        
      </Card>
      <br>
      </br>

      <Card className= "root">
        <CardContent>
          <Typography className="title" color="primary" gutterBottom>
            Juliana Garzon Duque
          </Typography>
          <Typography variant="h5" component="h2">
          {bull}Implement Register View
          </Typography>
          <Typography className="pos" color="initial" variant="overline">
            To do
          </Typography>
          <Typography variant="body2" component="p">
          
            <FlipCameraAndroidSharpIcon></FlipCameraAndroidSharpIcon>
           
          </Typography>
        </CardContent>
        
      </Card>
      <br>
      </br>
      
      <Card className= "root">
        <CardContent>
          <Typography className="title" color="primary" gutterBottom>
            Juliana Garzon Duque
          </Typography>
          <Typography variant="h5" component="h2">
          {bull}  Implement Dashboard View
          </Typography>
          <Typography className="pos" color="error" variant="overline">
           Finished
          </Typography>
         
          <Typography variant="body2" component="p">
          
          <EventAvailableSharpIcon></EventAvailableSharpIcon>
           
          </Typography>
        </CardContent>
        
      </Card>
      </div>
        </React.Fragment>
      ))}
    </div>
    
      
    );
  }