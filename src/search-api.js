import axios from "axios";

const KEY = 'ynuKeDAf-uXV65XdF-MB8V2qUQvjgDcmP_62RHZoV9M' 
axios.defaults.baseURL = "https://api.unsplash.com";

const searchPhotos = async (search) => {
    const response = await axios.get("/search/photos", {
        params: {
            query: search,
            client_id: KEY,
        }
    })
    return response;
} 

export default searchPhotos;