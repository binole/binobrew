import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NoMatch = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justityContent: 'center',
      }}
    >
      <Typography variant="h3" component="h1">
        Page Not Found
      </Typography>
      <Typography variant="h6">
        This page you requested could not be found
      </Typography>
      <Box mt={4} textAlign="center">
        <Button
          variant="contained"
          onClick={() => {
            navigate(-1)
          }}
        >
          Go back
        </Button>
      </Box>
    </Box>
  )
}

export default NoMatch
