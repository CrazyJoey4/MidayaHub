const axios = require('axios');

// Spotify API credentials
const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';

// Authenticate and obtain access token
async function getAccessToken() {
  const response = await axios.post('https://accounts.spotify.com/api/token', {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret
  });

  return response.data.access_token;
}

// Search for tracks
async function searchTracks(query) {
  try {
    const accessToken = await getAccessToken();
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      params: {
        q: query,
        type: 'track',
        limit: 10
      }
    });

    const tracks = response.data.tracks.items;
    console.log('Search Results:');
    tracks.forEach(track => {
      console.log('Track:', track.name);
      console.log('Artist:', track.artists[0].name);
      console.log('Preview URL:', track.preview_url);
      console.log('------------------------');
    });
  } catch (error) {
    console.error('Error:', error.response.data.error);
  }
}

// Usage: Call the searchTracks function with your desired search query
searchTracks('your_search_query');