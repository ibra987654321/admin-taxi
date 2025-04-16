import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';

import { useSetSettings } from '~entities/shared/settings';
import { useSetUser, useUser } from '~entities/shared/user';

interface RequireAuthProps {
  loginPath: string;
}

export const RequireAuth: React.FunctionComponent<RequireAuthProps> = ({ loginPath }) => {
  const setUser = useSetUser();
  const location = useLocation();
  const setSettings = useSetSettings();

  const [isUserReady, setUserReady] = useState(false);
  const [token, setToken] = useState(() => localStorage.getItem('taxi-token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('taxi-token');

    if (storedToken) {
      setToken(storedToken);
      setUserReady(true);
    } else {
      setUser({ authState: null });
      setUserReady(true);
    }
  }, []);

  const isAuth = () => {
    if (!isUserReady) {
      return false;
    }

    if (token) {
      setSettings();

      return true;
    }

    return false;
  };

  if (!token) {
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  return <Outlet />;
};
