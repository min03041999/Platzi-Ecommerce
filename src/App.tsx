
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {loginAsync, showAuth} from "./app/features/loginSlice"
function App() {
  const dispatch = useDispatch();
  interface Ilogin {
    email: string;
    password: string;
  }

  const login: Ilogin = {
    email: "admin@mail.com",
    password: "admin123"
  }

// type each dispatch as any (not good if you need to use 'abort', etc)
  dispatch(loginAsync( login  ) as any );

  const auth = useSelector(showAuth);
  console.log(auth);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
