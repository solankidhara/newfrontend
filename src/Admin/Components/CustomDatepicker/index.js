import { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import InputIcon from 'react-multi-date-picker/components/input_icon';
import classes from './customdatepicker.module.css';

const CustomDatepicker = (props) => {
      const [values, setValues] = useState([
            new DateObject().subtract(4, 'days'),
            new DateObject().add(4, 'days'),
      ]);

      return (
            <>
                  <div className={classes.custom_datepicker + " " + props.className}>
                        <DatePicker
                              value={values}
                              render={
                                    <InputIcon />
                              }
                              inputClass={classes.datepicker_input}
                              onChange={setValues}
                              range
                        />
                  </div>
            </>
      );
};

export default CustomDatepicker;
