import { Route, Switch } from 'react-router-dom'
import Formalities from 'views/Formalities'
import Home from 'views/Home'
import NotFound from 'views/NotFound'
import Offices from 'views/Offices'
import Payment from 'views/Payment'
import ServicesOnline from 'views/ServicesOnline'

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/nuestras-oficinas' component={Offices} />
            <Route exact path='/tramites' component={Formalities} />
            <Route exact path='/servicios-de-linea' component={ServicesOnline} />
            <Route exact path='/pagos' component={ Payment } />
            <Route component={NotFound} />
        </Switch>
    )
}

export default AppRouter
