import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core';
import {customRadioStyle} from '../Radios/CustomRadio.style';
const CustomRadio = (props) => {
    return (
        <FormControl component="fieldset" className={props.classes.marginHeight}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup onBlur={props.onBlur} error={props.error} onChange={props.onChange}  name={props.name} className={props.classes.inlineDisplay} helperText={props.helperText}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>

    )
}
export default withStyles(customRadioStyle)(CustomRadio);