import { useState, useEffect } from 'react'
import App from './App'
import SpiceworksProject from './pages/SpiceworksProject'

const Router = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.hash)
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', onLocationChange)
    return () => window.removeEventListener('hashchange', onLocationChange)
  }, [])

  if (currentPath === '#/projects/spiceworks') {
    return <SpiceworksProject />
  }

  return <App />
}

export default Router
