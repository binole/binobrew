import { useParams } from 'react-router-dom'

const Brewery = () => {
  const params = useParams()

  console.log({ params })

  return (
    <div>
      <h1>Brewery {params.breweryId}</h1>
    </div>
  )
}

export default Brewery
