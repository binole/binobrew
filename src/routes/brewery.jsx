import LinkIcon from '@mui/icons-material/Link'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import { Box, Button, CircularProgress, Link, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import BreweryType from '../components/BreweryType'
import useBreweryById from '../hooks/useBreweryById'

const Brewery = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { data, error } = useBreweryById(params.breweryId)

  const goBack = () => {
    navigate(-1)
  }

  if (error) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1">
          {error.message}
        </Typography>
        <Box mt={4} textAlign="center">
          <Button variant="contained" onClick={goBack}>
            Go back
          </Button>
        </Box>
      </Box>
    )
  }

  if (!data) {
    return (
      <Box sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    )
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

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box>
        <BreweryType>{brewery_type}</BreweryType>
        <Typography variant="h4" component="h1" gutterBottom>
          {name}
        </Typography>
      </Box>

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
