import LinkIcon from '@mui/icons-material/Link'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import { Box, Button, Link, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import useBreweryById from '../hooks/useBreweryById'

const Brewery = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { data } = useBreweryById(params.breweryId)

  if (!data) {
    return <div>Loading...</div>
  }

  const {
    name,
    brewery_type,
    street,
    address_2,
    address_3,
    city,
    state,
    country,
    postal_code,
    phone,
    website_url,
  } = data

  const address = [
    street,
    address_2,
    address_3,
    city,
    state,
    postal_code,
    country,
  ]
    .filter(Boolean)
    .join(', ')

  const goBack = () => {
    navigate(-1)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        variant="overline"
        color="grey.500"
        sx={{ lineHeight: 1, fontWeight: 'bold' }}
      >
        {brewery_type}
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        {name}
      </Typography>

      {address ? (
        <Link
          gutterBottom
          target="_blank"
          rel="noopener noreferrer"
          href={`http://maps.google.com/?q=${address}`}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <LocationOnIcon color="action" /> {address}
        </Link>
      ) : null}

      {phone ? (
        <Link
          href={`tel:${phone}`}
          gutterBottom
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <PhoneIcon color="action" /> {phone}
        </Link>
      ) : null}

      {website_url ? (
        <Link
          href={website_url}
          target="_blank"
          rel="noopener noreferrer"
          gutterBottom
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <LinkIcon color="action" /> {website_url}
        </Link>
      ) : null}

      <Box mt={4} textAlign="center">
        <Button variant="contained" onClick={goBack}>
          Go back
        </Button>
      </Box>
    </Box>
  )
}

export default Brewery
