import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

import './App.css';
import {fetchApiData} from "./utils/api";
import { getApiConfiguration } from './store/homeSlice';
import { PageNotFound } from './pages/404/pageNotFound';
import {Home} from './pages/Home/Home';
import {Explore} from './pages/Explore/Explore';
import {SearchResults} from './pages/SearchResults/SearchResults';
import {Details} from './pages/Details/Details';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


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
    <Route path="/" element={<Home />}></Route>
    <Route path="/:mediaType/:id" element={<Details />}></Route>
    <Route path="/search/:query" e1lement={<SearchResults />}></Route>
    <Route path="/explore/:mediaType" element={<Explore />}></Route>
    <Route path="/*" element={<PageNotFound/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
