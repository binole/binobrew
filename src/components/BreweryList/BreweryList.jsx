import { Grid } from '@mui/material'

const BreweryList = ({ items, renderItem }) => {
  return (
    <Grid container justifyContent="stretch" spacing={2} mt={4}>
      {items.map((item) => (
        <Grid
          item
          key={item.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ '> *': { height: '100%' } }}
        >
          {renderItem(item)}
        </Grid>
      ))}
    </Grid>
  )
}

export default BreweryList
