import SearchIcon from '@mui/icons-material/Search'
import { Box, IconButton, InputBase } from '@mui/material'

const Search = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        boxShadow: (theme) => `0 0 0 1px ${theme.palette.grey[500]}`,
        borderRadius: 50,
        pl: 1,
        width: 480,
        mt: 4,
        maxWidth: '100%',
        ':focus-within': {
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.main}`,
        },
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Brewery"
        inputProps={{ 'aria-label': 'Search Brewery' }}
      />
      <IconButton type="submit" aria-label="search" size="large">
        <SearchIcon />
      </IconButton>
    </Box>
  )
}

export default Search
