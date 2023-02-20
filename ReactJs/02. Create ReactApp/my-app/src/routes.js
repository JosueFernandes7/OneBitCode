import React from 'react';
import { BrowserRouter,Routes as Switch, Route } from 'react-router-dom';
import PlanetsScreen from './screens/planets';
import PlanetScreen from './screens/planet';
import NotFoundScreen from './screens/notFound';

const Routes = () =>{ 
return (
<BrowserRouter>
  <Switch>
    <Route exact path='/' element={ <PlanetsScreen/>}/>
    <Route exact path='/planet/:id' element={ <PlanetScreen/>}/>
    <Route path="*" element={<NotFoundScreen/>}/>
  </Switch>
</BrowserRouter>
)}

export default Routes;