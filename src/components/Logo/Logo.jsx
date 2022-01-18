import { Box, Typography } from '@mui/material'

const Logo = () => {
  return (
    <Box textAlign="center">
      <lottie-player
        src="https://assets3.lottiefiles.com/packages/lf20_1KXVr1/beer.json"
        background="transparent"
        speed="1"
        style={{ width: 200, height: 200 }}
        loop
        autoplay
      ></lottie-player>
      <Typography
        variant="h4"
        component="h1"
        fontWeight="bold"
        color="primary"
        sx={{
          background:
            '-webkit-linear-gradient(90deg, rgb(255, 166, 82) 30%, #FF8E53 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Bino Brew
      </Typography>
    </Box>
  )
}

export default Logo
