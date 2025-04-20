import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout, AdminLayout } from './layout'
import { HomePage, AboutPage, LoginPage, RegisterPage, PackagesPage, DestinationsPage, ContactPage, DashboardPage, BookingsPage } from '@zenra/pages'
import { useAppSelector } from '@zenra/store'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated } = useAppSelector(state => state.auth);
  
  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="destinations" element={<DestinationsPage />} />
          <Route path="about" path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="bookings" element={<BookingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App