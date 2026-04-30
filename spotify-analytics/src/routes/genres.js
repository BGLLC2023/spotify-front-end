import axios from "axios";

async function fetchData(url){
  let response = '';
  try {
    let response = await axios.get(url)
    console.log(response.data);
    return response.data;
  }catch (error) {
    console.error(error);
    return null;
  }
}





// const fetchGenre = () =>  fetchData('http://127.0.0.1:8000/top-genres/2');
// const fetchSubscriptionType = () =>  fetchData('http://127.0.0.1:8000/subscription-type/3');
// const fetchAdConversions = () => fetchData('http://127.0.0.1:8000/ad-conversions/2');
// const fetchDesiredFeatures = () =>  fetchData('http://127.0.0.1:8000/desired-features/2');





export const fetchGenre = (id) => fetchData(`http://127.0.0.1:8000/top-genres/${id}`);
export const fetchSubscriptionType = (id) => fetchData(`http://127.0.0.1:8000/subscription-type/${id}`);
export const fetchAdConversions = (id) => fetchData(`http://127.0.0.1:8000/ad-conversion/${id}`);
export const fetchDesiredFeatures = (id) => fetchData(`http://127.0.0.1:8000/desired-features/${id}`);



