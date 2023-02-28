export const getGif = async(category) =>{
    const apiKey = 'frCxPcJc0vc6Nd6L168VVNGUoK93gMbm';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const {data}  = await resp.json();
    const gifs = data.map( gifData => ({
        id: gifData.id,
        title: gifData.title,
        url: gifData.images.downsized_medium.url
    }))
    return gifs;
}