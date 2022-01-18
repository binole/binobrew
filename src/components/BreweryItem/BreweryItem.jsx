import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Card, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import BreweryType from '../BreweryType'

const BreweryItem = ({ id, type, name, country, ...props }) => {
  return (
    <Card {...props}>
      <CardContent>
        <BreweryType>{type}</BreweryType>

        <Typography
          variant="h6"
          component={Link}
          to={`/breweries/${id}`}
          gutterBottom
          sx={{
            display: 'block',
            color: 'info.main',
            textDecoration: 'none',
            ':hover': {
              textDecoration: 'underline',
            },
          }}
        >
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
