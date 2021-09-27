import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import moment from 'moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function DatePicker({fecha , setFecha}) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(moment().format());

  const handleDateChange = (date) => {
    setSelectedDate(moment(date).format("YYYY-MM-DD"));
    setFecha(moment(date).format("YYYY-MM-DD"))
    console.log(moment(date).format("YYYY-MM-DD"));
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-inline"
          label="Fecha GAP"
          value={fecha ? moment(fecha).format() :  moment().subtract(1,'days').format() }
          // defaultValue={selectedDate}
          minDate={moment().subtract(14,'days').format('YYYY-MM-DD')}
          maxDate={moment().add(0,'days').format('YYYY-MM-DD')}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}