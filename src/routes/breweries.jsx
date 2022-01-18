import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import BreweryItem from '../components/BreweryItem'
import BreweryList from '../components/BreweryList'
import ErrorFallback from '../components/ErrorFallback'
import Logo from '../components/Logo'
import Search from '../components/Search'
import useBreweries from '../hooks/useBreweries'

const Breweries = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { status, refetch, data: items } = useBreweries({
    query: searchParams.get('query'),
  })

  const handleSearch = useCallback(
    (term) => {
      setSearchParams({ query: term })
    },
    [setSearchParams],
  )

  return (
    <>
      <Logo />

      <Search query={searchParams.get('query')} onSubmit={handleSearch} />

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
