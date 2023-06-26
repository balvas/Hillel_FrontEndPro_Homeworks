/* eslint-disable */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from './TextField';
import Select from './Select';
// Engine
import { destinationsAsyncActions } from '../../engine/core/destinations/saga/asyncActions';
import { selectors } from '../../engine/core/destinations/slice';
import Button from './Button';
import { hotelsAsyncActions } from '../../engine/core/hotels/saga/asyncActions';

export default function DestinationForm() {
  const destinationsItems = useSelector(selectors.items);
  const destinationsLoading = useSelector(selectors.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(destinationsAsyncActions.getDestinationsAsync());
  }, []);
  const onSubmit = (value) => {
    dispatch(hotelsAsyncActions.getHotelsAsync(value));
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            background: '#fff',
            margin: '30px 0',
          }}

        >
          <Grid container>
            <Grid item xs={3}>
              <Field
                name="desctination"
                label="Desctination"
                component={Select}
                disabled={destinationsLoading}
                options={destinationsItems}
              />
            </Grid>
            <Grid item xs={1}>
              <Field
                name="adults"
                label="Adults"
                component={TextField}
              />
            </Grid>
            <Grid item xs={1}>
              <Button type="submit">SEND</Button>
            </Grid>
          </Grid>
        </Box>
      )}
    />
  );
}
