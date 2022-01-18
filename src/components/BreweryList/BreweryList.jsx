import { Grid, Skeleton } from '@mui/material'

const BreweryList = ({ loading, renderItem, items = [] }) => {
  return (
    <Grid container justifyContent="stretch" spacing={2} mt={4}>
      {(loading ? Array.from(new Array(4)) : items).map((item, index) => {
        return (
          <Grid
            item
            key={item ? item?.id : index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ '> *': { minHeight: '100%' } }}
          >
            {item ? (
              renderItem(item)
            ) : (
              <Skeleton variant="rectangular" height={164} />
            )}
          </Grid>
        )
      })}
    </Grid>
  )
}

export default BreweryList
