/* eslint-disable */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';
// Parts
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '../Button';
import Select from '../_Form/Select';
import TextField from '../_Form/TextField';
import DataPicker from '../_Form/DataPicker';
// Helpers
import form from '../../../_helpers/form';
// Engine
import { getDestinationAsync } from '../../../engine/core/destination/saga/asyncActions';
import destinationSelectors from '../../../engine/core/destination/selectors';
import hotelsSelectors from '../../../engine/core/hotels/selectors';
import { getHotelsAsync } from '../../../engine/core/hotels/saga/asyncActions';

function DestinationForm() {
  const dispatch = useDispatch();
  const destinationItems = useSelector(destinationSelectors.items);
  const destinationLoading = useSelector(destinationSelectors.loading);
  const hotelsLoading = useSelector(hotelsSelectors.loading);
  const onSubmit = (value) => {
    // const city = destinationItems.find(obj => obj.value === value.destination);
    value['destinationItems'] = destinationItems;
    dispatch(getHotelsAsync(value));
  };
  const pending = destinationLoading || hotelsLoading;

  useEffect(() => {
    dispatch(getDestinationAsync());
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <Box
          sx={{
            display: 'flex',
            background: '#fff',
            margin: '30px 0',
          }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Field
                name="destination"
                validate={form.validate.required}
                label="Destination"
                disabled={pending}
                options={destinationItems}
                component={Select}
              />
            </Grid>
            <Grid item xs={3}>
              <Field
                name="check_in"
                label="Check in"
                disabled={pending}
                validate={form.validate.required}
                component={DataPicker}
              />
            </Grid>
            <Grid item xs={3}>
              <Field
                name="check_out"
                label="Check out"
                disabled={pending}
                validate={form.validate.required}
                component={DataPicker}
              />
            </Grid>
            <Grid item xs={1}>
              <Field
                name="adults"
                label="Adults"
                disabled={pending}
                validate={form.validate.onlyNumber}
                onKeyPress={form.onKeyPress.onlyNumber}
                component={TextField}
              />
            </Grid>
            <Grid item xs={1}>
              <Field
                name="children"
                label="Children"
                disabled={pending}
                validate={form.validate.onlyNumber}
                onKeyPress={form.onKeyPress.onlyNumber}
                component={TextField}
              />
            </Grid>
            <Grid item xs={1}>
              <Button loading={pending} type="submit" sx={{ height: '55px' }}>Submit</Button>
            </Grid>
          </Grid>
        </Box>
      )}
    />
  );
}

export default DestinationForm;
