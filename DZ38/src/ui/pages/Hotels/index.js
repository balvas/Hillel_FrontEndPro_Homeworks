import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import HotelItem from '../../components/HotelItem';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
// Hooks
import { useList } from './useList';
import { useSortedList } from './useSortedList';

function Hotels() {
  const { items } = useList();
  const [sortedItems, sortBy, setSortBy] = useSortedList(items);


  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  if (sortedItems.length === 0) {
    return (
      <Typography gutterBottom component="h5" variant="h5">
        The hotel list is empty.
      </Typography>
    );
  }
  return (
    <>
      <Typography gutterBottom component="h5" variant="h5">
        Hotels
      </Typography>
      <FormControl item xs={3} sx={{ m: 2, mx: 0, width: 100 }}>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem value='name'>Name</MenuItem>
          <MenuItem value='rating'>Rating</MenuItem>
        </Select>
      </FormControl>
      <Grid container>
        {sortedItems.map((hotel) => (
          <Grid xs={2} sm={4} md={4} sx={{ marginBottom: '30px' }} key={hotel.name}>
            <HotelItem
              name={hotel.name}
              city={hotel.city}
              state={hotel.state}
              hotel_rating={hotel.hotel_rating}
              address={hotel.address}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Hotels;
