import { Box, Typography } from '@mui/material'

const Empty = () => {
  return (
    <Box>
      <Typography variant="h5" component="h2" textAlign="center">
        No Brewery Found
      </Typography>
      <Typography component="div">
        <p>Suggestions:</p>
        <ul>
          <li>Make sure that all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords.</li>
          <li>Try fewer keywords.</li>
        </ul>
      </Typography>
    </Box>
  )
}

export default Empty
