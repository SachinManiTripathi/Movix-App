import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

import './App.css';
import {fetchApiData} from "./utils/api";
import { getApiConfiguration } from './store/homeSlice';
import header from './components/Header/header';
import Footer from './components/Footer/Footer';
import home from './pages/Home/home';
import details from './pages/Details/details';
import searchResults from './pages/SearchResults/searchResults';
import explore from './pages/Explore/explore';
import pageNotFound from './pages/404/pageNotFound';


 function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);
  useEffect(()=>{
    apiTesting();
  },[ ])
  
  const apiTesting = () => {
    fetchApiData("/movie/popular").then((res)=>{
      console.log(res);
      dispatch(getApiConfiguration(res));
    })
  }
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<home />}></Route>
    <Route path="/:mediaType/:id" element={<details />}></Route>
    <Route path="/" element={<home />}></Route>
    <Route path="/" element={<home />}></Route>
    <Route path="/" element={<home />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
