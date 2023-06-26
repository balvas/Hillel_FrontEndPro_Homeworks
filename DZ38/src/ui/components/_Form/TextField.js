/* eslint-disable */
import TextFieldMUI from '@mui/material/TextField';

function TextField(props) {
  const { meta, input, ...rest } = props;
  return (
    <TextFieldMUI
      error={meta.touched && meta.error}
      helperText={meta.touched && meta.error}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...input}
    />
  );
}

export default TextField;
