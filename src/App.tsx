import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/Layout/SiteLayout'
import { EventRegistrationPage } from './pages/EventRegistrationPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SiteLayout>
            <HomePage />
          </SiteLayout>
        }
      />
      <Route
        path="/register"
        element={
          <SiteLayout>
            <EventRegistrationPage />
          </SiteLayout>
        }
      />
      <Route
        path="/register/:eventSlug"
        element={
          <SiteLayout>
            <EventRegistrationPage />
          </SiteLayout>
        }
      />
    </Routes>
  )
}

export default App
