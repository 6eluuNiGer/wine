import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import classes from '../page/Select.css'
import './Select.css'

const useStyles = makeStyles(theme => ({
  button: {
    display: 'flex',
    marginTop: theme.spacing(2),
  
  
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 10,
/*     backgroundColor: 'red', */
 
    /* top: '200px' */
 /*    left: '1150px' */

  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [lang, setLang] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setLang(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div  className="transleteIcon">
      {/* <Button className={classes.button} onClick={handleOpen}>
        
      </Button> */}
      <FormControl className={classes.formControl}>
       
        <Select
           
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={lang}
          onChange={handleChange}
        >
          <MenuItem value={10}>EN</MenuItem>
          <MenuItem value={20}>RU</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}