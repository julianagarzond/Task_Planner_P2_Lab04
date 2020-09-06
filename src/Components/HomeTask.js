import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import EventAvailableSharpIcon from '@material-ui/icons/EventAvailableSharp';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FormDialog from './FormDialog';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HomeTask() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
           
            <Typography variant="h6" className={classes.title}>
              Task Planner
            </Typography>
            Add New Task
            <FormDialog />

          </Toolbar>
        </AppBar>
        <Card className= "root">
        <CardContent>
          <Typography align="center" className="title" color="primary" gutterBottom>
            Juliana Garzon Duque
          </Typography>
          <Typography align="center" variant="h5" component="h2">
            Implement Login Controller
          </Typography>
          <Typography  align="center" variant="body2" component="p">
          
          <EventAvailableSharpIcon></EventAvailableSharpIcon>
           
          </Typography>
        </CardContent>
        </Card>
        
      </Dialog>
    </div>
  );
}