import axios from 'axios';



const api = axios.create({
     baseURL:"http://localhost:5000",
     headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
     },
     withCredentials: true

});


export const productFetch=()=>api.get("/");
export const contactAPI=(data)=>api.post("/contact",data);
