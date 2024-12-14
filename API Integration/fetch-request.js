//MOVIE API FETCHING 

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzczMzFiNzQ1NTk2NDhiN2U1ZDUwYWEzNGRlYTE0OCIsIm5iZiI6MTczMzU1NTg1Ni4yMywic3ViIjoiNjc1M2Y2OTA2NzhiMTgzNGQ5N2I5NDQ4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.j5-Rj_cpIZsJhwtRCcoGh0xJysphQGZWH0Hxum2C0Fg'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));