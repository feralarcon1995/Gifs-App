export const getGif = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category) }&api_key=FV12GJDthfgwLCyrNqD41M8fZNHhs7CQ&Limit=6`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;    
}