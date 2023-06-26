/* eslint-disable */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function HotelItem(props) {
  const {
    name, city, state, hotel_rating, address,
  } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://via.placeholder.com/140"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            address:
            {' '}
            {address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            city:
            {' '}
            {city}
            , state:
            {' '}
            {state}
            , rating:
            {' '}
            {hotel_rating}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
