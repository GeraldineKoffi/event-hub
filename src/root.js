import './style.css'

import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Inscription from './inscription'
import Home from './home'
import Login from './login'
import LoginAdmin from './loginAdmin'
import InscriptionOrg from './inscriptionOrg'
import EventList from './eventList'
import Events from './events'
import ForgetPass from './forgetPass'
import Dashboard from './dashboard'
import DashboardAd from './dashboardAd'
import DashboardOrg from './dashboardOrg'
import InscritEvent from './inscritEvent'
import InscriptionAdmin from './InscriptionAdmin'
import Role from './role'
import RoleConnect from './roleConnect'
import LoginOrg from './loginOrg'
import Ticket from './ticket'


function All() {
	return (
		<Router>

			<Header />

			<Switch>

				<Route exact path={"/"}>
					<Home />
				</Route>

				<Route path={"/inscription"}>
	           <Inscription />
                </Route>

				<Route path={"/inscriptionOrg"}>
                <InscriptionOrg />
                </Route>

				<Route path={"/inscriptionAdmin"}>
                  <InscriptionAdmin />
                </Route>

				<Route path={"/login"}>
					<Login />
				</Route>

				<Route path={"/loginOrg"}>
                 <LoginOrg />
                </Route>

            	<Route path={"/loginAdmin"}>
                <LoginAdmin />
                </Route>
                
				<Route path={"/forgetPass"}>
                 <ForgetPass />
                </Route>

				<Route path={"/role"}>
                  <Role />
                </Route>

                <Route path={"/roleConnect"}>
                 <RoleConnect />
                </Route>

				<Route path={"/dashboard"}>
                   <Dashboard />
                </Route>

                <Route path={"/dashboardOrg"}>
                <DashboardOrg />
                </Route>

                <Route path={"/dashboardAd"}>
                   <DashboardAd />
                </Route>		

				<Route path={"/eventList"}>
                   <EventList />
				</Route>

				<Route path={"/events"}>
                <Events />
                </Route>
                
			<Route path={"/inscritEvent"}>
              <InscritEvent />
            </Route>

			<Route path={"/ticket"}>
             <Ticket />
           </Route>
             
			</Switch>

			<Footer />
			
		</Router> 
	)
}

function Root() {
	return (
		<div className='EventHub'>
			<All/>
		</div>
	)
}

export default Root