import { BrowserRouter } from 'react-router-dom'
import { Footer, NavbarMenu } from 'components'
import AppRouter from 'routes/Router'
import AppProvider from 'context/AppProvider'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <NavbarMenu />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
