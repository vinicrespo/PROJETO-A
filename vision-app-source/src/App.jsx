import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import Login from './pages/Login';
import Loading from './pages/Loading';
import Home from './pages/Home';
import PhaseSelection from './pages/PhaseSelection';
import DayList from './pages/DayList';
import DailyContent from './pages/DailyContent';
import GoldenPetalMethod from './pages/GoldenPetalMethod';
import NightVisionSupport from './pages/NightVisionSupport';
import DailyRoutine from './pages/DailyRoutine';
import { useStore } from './store/useStore';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = useStore((state) => state.user);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/app" state={{ from: location }} replace />;
  }

  return children;
};

// Layout Wrapper for authenticated pages
const AuthenticatedLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/app" element={<Login />} />
        <Route path="/app/loading" element={<Loading />} />

        {/* Protected Routes */}
        <Route path="/app/home" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <Home />
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />

        <Route path="/app/phases" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <PhaseSelection />
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />

        <Route path="/app/phase/:phaseId" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <DayList />
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />

        <Route path="/app/day/:dayId" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <DailyContent />
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />

        <Route path="/app/method" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <GoldenPetalMethod />
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />

        <Route path="/app/night-vision" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <NightVisionSupport />
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />

        <Route path="/app/daily-routine" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <DailyRoutine />
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />

        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/app" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
