/* eslint-disable */
import SelectMUI from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function Select(props) {
  const {
    options, label, input: { onChange, value }, disabled,
  } = props;
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <SelectMUI
        value={value}
        label={label}
        disabled={disabled}
        onChange={onChange}
      >
        {options.map((item) => <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>)}
      </SelectMUI>
    </FormControl>
  );
}

export default Select;
