import { Route, Routes } from 'react-router-dom'
import PrimaryLayout from './layouts/PrimaryLayout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import InstructorRegisterPage from './pages/InstructorRegisterPage'
import FeedPage from './pages/FeedPage'
import ProfilePage from './pages/ProfilePage'
import SearchPage from './pages/SearchPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminAnalyticsPage from './pages/AdminAnalyticsPage'

function App () {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/instructors/register" element={<InstructorRegisterPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
      </Route>
    </Routes>
  )
}

export default App
