import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import ExplorePage from "./Pages/ExplorePage";
import LikesPage from "./Pages/LikesPage";
import SlideBar from './components/SlideBar';
import Footer from './components/Footer';
import Login from './components/Login'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { useSelector } from 'react-redux';
const App = () => {

  const {status} = useSelector((state) => state.cards);
  console.log(status);

  if(status ==false)
  {
   // useNavigate
  }
  return (
    
    <div
      className='flex text-white'>

      <SlideBar />

      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
        <Routes>
          {/* <Route path='/' element={<HomePage />} />
					<Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
					<Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
					<Route path='/explore' element={authUser ? <ExplorePage /> : <Navigate to={"/login"} />} />
					<Route path='/likes' element={authUser ? <LikesPage /> : <Navigate to={"/login"} />} /> */}

          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/explore' element={<ExplorePage />} />
          <Route path='/likes' element={<LikesPage />} />
          <Route path='/logi' element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </div>

   
  )
}

export default App

// Sachin 