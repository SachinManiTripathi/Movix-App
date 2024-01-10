import { useEffect } from 'react';
import './App.css';
import {fetchApiData} from "./utils/api";
import { useDispatch, useSelector} from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';



 function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);
  console.log(url);

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
   <div>
    <h1>{url?.total_pages}</h1>
   </div>
  )
}

export default App
