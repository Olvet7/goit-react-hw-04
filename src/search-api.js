import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.unsplash.com/search",
    headers: {
        "Content-Type": "application/json",
        "Accept-Version": "v1",
        Authorization: "Client-ID ynuKeDAf-uXV65XdF-MB8V2qUQvjgDcmP_62RHZoV9M"
    }
})

const searchPhotos = async (query, page) => {
    const {
        data: { results, total_pages }
    } = await instance.get("/photos", {
        params: {
            query,
            page,
            per_page: 15,
            order_by: "latest",
        }
    })
    return {results, total_pages}
}

export default searchPhotos;