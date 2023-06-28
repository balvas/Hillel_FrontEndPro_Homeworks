import React from 'react';

import TextFieldMUI from '@mui/material/TextField';

export default function TextField(props) {
   const { meta, input, ...rest } = props;
   const error = meta.touched && meta.error;
   return (
      <TextFieldMUI
         error={error}
         helperText={error}
         // eslint-disable-next-line react/jsx-props-no-spreading
         {...input}
         // eslint-disable-next-line react/jsx-props-no-spreading
         {...rest}
      />
   );
}
