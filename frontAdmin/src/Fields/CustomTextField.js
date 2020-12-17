import * as React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

const CustomTextField = ({ source, record = {} }) => {
    
    const useStyles = makeStyles({
        ancho: {
            width: '400px',
    
        }
    });

    const classes = useStyles();
    return(
        <div>
            <p>Mensaje</p>
            <TextField className={classes.ancho} multiline={true} value= {record[source]} />
        </div>

    )
}

CustomTextField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

export default CustomTextField;