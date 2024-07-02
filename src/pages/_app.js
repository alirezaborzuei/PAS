import "@/styles/globals.css";

import { Provider } from 'react-redux';
import store from '@/lib/store';
import 'tailwindcss/tailwind.css'
import '../styles/globals.css' // your global CSS file

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;