import { useState, useEffect } from 'react'
import App from './App'
import SpiceworksProject from './pages/SpiceworksProject'
import DataCleaningProject from './pages/DataCleaningProject'
import AIWorkflowProject from './pages/AIWorkflowProject'
import AIResumeProject from './pages/AIResumeProject'

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

  if (currentPath === '#/projects/data-cleaning') {
    return <DataCleaningProject />
  }

  if (currentPath === '#/projects/ai-workflow') {
    return <AIWorkflowProject />
  }

  if (currentPath === '#/projects/ai-resume') {
    return <AIResumeProject />
  }

  return <App />
}

export default Router
