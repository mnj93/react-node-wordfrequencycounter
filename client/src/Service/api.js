import axios from 'axios';

export const fetchResult = (n)=>
    axios.get('http://localhost:4000/api/getResult?n='+n)
    .then(res => res.data)