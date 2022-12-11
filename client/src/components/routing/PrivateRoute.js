import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthState';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // use authState
  const [authState] = useAuth();
  const { isAuthenticated, loading } = authState;

  // check state and return appropriate component
  if (loading) return 'Loading...';
  if (isAuthenticated) return <Component />;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
