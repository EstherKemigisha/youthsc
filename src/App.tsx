import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/Layout/SiteLayout'
import { DonatePage } from './pages/DonatePage'
import { EventRegistrationPage } from './pages/EventRegistrationPage'
import { HomePage } from './pages/HomePage'
import { JoinUsPage } from './pages/JoinUsPage'
import { YouthCollectionPage } from './pages/YouthCollectionPage'

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
      <Route
        path="/donate"
        element={
          <SiteLayout>
            <DonatePage />
          </SiteLayout>
        }
      />
      <Route
        path="/youth-collection"
        element={
          <SiteLayout>
            <YouthCollectionPage />
          </SiteLayout>
        }
      />
      <Route
        path="/join"
        element={
          <SiteLayout>
            <JoinUsPage />
          </SiteLayout>
        }
      />
    </Routes>
  )
}

export default App
