import React, { useState } from "react";
// Routers
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

// Header and Footer
import Navbar from './Base/Navbar'
import Footer from './Base/Footer'

import LandingPage from './pages/LandingPage'

// Login and Signup
import Signup from './Login/Signup'
import Signin from './Login/Signin'
import Auth from './Login/Auth'

// Goals
import Goals from './Login/Goals'

// Dashboards
import Dashboard from './pages/Dashboards/Dashboard'
import MDashboard from './pages/Dashboards/MDashboard'

// Chat
import DietChatBot from './DietChatBot/Chat'
import HealthChatBot from './HealthChatBot/Chat'
import ExerciseChatBot from './ExerciseChatBot/Chat'

// Trackers
import CaloriesIntake from './pages/Trackers/CaloriesIntake'
import CaloriesBurnt from './pages/Trackers/CaloriesBurnt'
import WeightTracker from './pages/Trackers/WeightTracker'
import StepsCounter from './pages/Trackers/StepsCounter'

// Profile
import Profile from './pages/Profile/Profile'
import FriendProfile from './pages/Profile/FriendProfile'

// Store
import Store from './pages/Store/Store';
import Product from './pages/Store/Product';

export default function App() {
  
  return (
  <Router>
    <Routes>
      <Route exact path="/auth/getToken" element={<Auth/>}/>
      
      <Route exact path="/" element={<div>
          
					
					<LandingPage/>
          <Footer/>

				</div>} />
      <Route exact path="/signin" element={<div>

					
					<Signin/>
          

				</div>} />
      <Route exact path="/signup" element={<div>

					
					<Signup/>
          

				</div>} />
      <Route exact path="/goals" element={<div>

					
					<Goals/>
          

				</div>} />

      <Route exact path="/chat/diet" element={<div>

					<Navbar/>
					<DietChatBot/>
          <Footer/>

				</div>} />

      <Route exact path="/chat/health" element={<div>

					<Navbar/>
					<HealthChatBot/>
          <Footer/>

				</div>} />

      <Route exact path="/chat/exercise" element={<div>

					<Navbar/>
					<ExerciseChatBot/>
          <Footer/>

				</div>} />
      
<Route exact path="/profile" element={<div>

					<Navbar/>
					<Profile/>
          <Footer/>

				</div>} />
      
      <Route exact path="/dashboard" element={<div>
          
					<Navbar/>
          <Dashboard />
          <Footer/>

				</div>} />

      <Route exact path="/m/dashboard" element={<div>

					<Navbar/>
          <MDashboard />
          <Footer/>

				</div>} />

      <Route exact path="/trackers/steps" element={<div>

					<Navbar/>
          <StepsCounter/>
          <Footer/>

				</div>} />

      <Route exact path="/trackers/weight" element={<div>

					<Navbar/>
          <WeightTracker />
          <Footer/>

				</div>} />

      <Route exact path="/trackers/calories-intake" element={<div>
          
					<Navbar/>
          <CaloriesIntake />
          <Footer/>

				</div>} />

      <Route exact path="/trackers/calories-burnt" element={<div>
          
					<Navbar/>
          <CaloriesBurnt />
          <Footer/>

				</div>} />

      <Route exact path="/store" element={<div>
          
					<Navbar/>
          <Store />
          <Footer/>

				</div>} />

      <Route exact path="/store/:id" element={<div>
          
					<Navbar/>
          <Product />
          <Footer/>

				</div>} />

      <Route exact path="/users/:id" element={<div>
          
					<Navbar/>
          <FriendProfile />
          <Footer/>

				</div>} />

      
      
    </Routes>
  </Router>
  )
}
