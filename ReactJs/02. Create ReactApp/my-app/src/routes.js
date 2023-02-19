import React from 'react';
import { BrowserRouter,Routes as Switch, Route } from 'react-router-dom';
import PlanetsScreen from './screens/planets';
import PlanetScreen from './screens/planet';

const Routes = () =>{ 
return (
<BrowserRouter>
  <Switch>
    <Route exact path='/' element={ <PlanetsScreen/>}/>
    <Route exact path='/planet/:id' element={ <PlanetScreen/>}/>
  </Switch>
</BrowserRouter>
)}

export default Routes;