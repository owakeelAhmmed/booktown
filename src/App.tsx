import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { Auth } from './lib/firebase';
import { useAppDispatch } from './redux/hook';
import { setLoading, setUser } from './redux/feature/user/userSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(Auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
