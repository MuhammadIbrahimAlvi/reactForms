import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core';
import {styles} from "./../../Containers/FormLayout.style";

const CustomInput=(props)=>{
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
    return(
        <div>
 <TextField type={props.type} className={props.classes.inputWidth} id="standard-basic" label={props.textlabel} onChange={props.onChange} error={props.error} value={props.value} helperText={props.helperText} name={props.name} onBlur={props.onBlur}/>
        </div>
    )
}

export default withStyles(styles)(CustomInput);