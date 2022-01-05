import { BrowserRouter } from 'react-router-dom'
import { Footer, NavbarMenu } from 'components'
import AppRouter from 'routes/Router'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarMenu />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
