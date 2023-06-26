/* eslint-disable */
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DatePickerMUI } from '@mui/x-date-pickers/DatePicker';

function DatePicker(props) {
  const { input: { onChange, value }, label, disabled } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerMUI
        label={label}
        value={value || null}
        onChange={onChange}
        disabled={disabled}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;
