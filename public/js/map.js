mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: 'mapbox://styles/mapbox/streets-v11',
  center:listing.geometry.coordinates,
  zoom: 9
});

// console.log("coordinates = ", coordinates);

// map.on('load', () => {
//   new mapboxgl.Marker({ color: 'red' })
//     .setLngLat(listing.geometry.coordinates) // your [lng, lat] array
//     .setPopup(new mapboxgl.Popup({offset:25})
//     .setHTML(`<h4>${listing.location}</h4><p>Exact location provided after booking</p>`))
    
//     .addTo(map);
// });

map.on('load', () => {
  const el = document.createElement('div');

  el.innerHTML = '<i class="fa-solid fa-house"></i>';

  el.style.width = '36px';
  el.style.height = '36px';
  el.style.display = 'flex';
  el.style.alignItems = 'center';
  el.style.justifyContent = 'center';

  el.style.backgroundColor = 'black';
  el.style.borderRadius = '50%';
  el.style.cursor = 'pointer';

  el.style.color = 'white';
  el.style.fontSize = '18px';

  new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'   
    })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h4>${listing.location}</h4><p>Exact location provided after booking</p>`)
    )
    .addTo(map);
});
