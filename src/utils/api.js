import axios from 'axios';

const Base_Url = "https://api.themoviedb.org/3";

const Tmdb_Token = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers ={
    Authorization: "bearer "+ Tmdb_Token,
};

export const fetchApiData = async ( url, params) => {
    try {
         const {data} = await axios.get(Base_Url+ url,{
            headers,
            params
         });
         return data;
        
    } catch (err) {
        console.log(err);
        return err;
        
    }
}