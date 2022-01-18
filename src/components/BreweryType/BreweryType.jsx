import { Typography } from '@mui/material'
import {
  blueGrey,
  cyan,
  deepPurple,
  green,
  indigo,
  orange,
  pink,
  purple,
  red,
  teal,
} from '@mui/material/colors'

const colorsMap = new Map([
  ['nano', cyan],
  ['micro', orange],
  ['large', teal],
  ['brewpub', green],
  ['regional', purple],
  ['planning', blueGrey],
  ['bar', indigo],
  ['contract', deepPurple],
  ['proprietor', pink],
  ['closed', red],
])

const BreweryType = ({ children }) => {
  const color = colorsMap.get(children)

  return (
    <Typography
      variant="overline"
      color={color ? color[500] : 'grey.500'}
      sx={{
        lineHeight: 1,
        fontWeight: 'bold',
        background: color ? color[50] : 'grey.50',
        padding: '2px 4px',
        borderRadius: 1,
      }}
    >
      {children}
    </Typography>
  )
}

export default BreweryType
