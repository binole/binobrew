import { Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import BreweryItem from '../components/BreweryItem'
import BreweryList from '../components/BreweryList'
import ErrorFallback from '../components/ErrorFallback'
import Search from '../components/Search'
import useBreweries from '../hooks/useBreweries'

const Breweries = () => {
  const [query, setQuery] = useState('')
  const { status, refetch, data: items } = useBreweries({ query })

  const handleSearch = useCallback((term) => {
    setQuery(term)
  }, [])

  return (
    <>
      <Typography variant="h1">Brewery</Typography>
      <Search onSubmit={handleSearch} />

      {status === 'error' ? (
        <ErrorFallback retry={refetch} />
      ) : (
        <BreweryList
          loading={status !== 'success'}
          items={items}
          renderItem={({ id, name, brewery_type, country }) => (
            <BreweryItem
              id={id}
              name={name}
              type={brewery_type}
              country={country}
            />
          )}
        />
      )}
    </>
  )
}

export default Breweries
