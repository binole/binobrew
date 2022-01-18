import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Card, CardContent, Typography } from '@mui/material'

const BreweryItem = ({ type, name, country, ...props }) => {
  return (
    <Card {...props}>
      <CardContent>
        <Typography
          variant="overline"
          color="grey.500"
          sx={{ lineHeight: 1, fontWeight: 'bold' }}
        >
          {type}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {name}
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <LocationOnIcon color="action" /> {country}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BreweryItem
