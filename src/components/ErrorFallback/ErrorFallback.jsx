import { Box, Button, Typography } from '@mui/material'

const ErrorFallback = ({ retry }) => {
  return (
    <Box textAlign="center">
      <Typography variant="h4">Uh oh :(</Typography>
      <Typography>Something went wrong. Please try again!</Typography>
      <Button onClick={retry}>Retry</Button>
    </Box>
  )
}

export default ErrorFallback
