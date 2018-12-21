var kine = [-1.016126, 44.682886]
var bassin = [-1.1409, 44.6965]


mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb2xhc2R1cXVlc25lIiwiYSI6ImNqaTMyejI3ejE2dnUzdmxrdXBpMW5tM3MifQ.qeLFoY_OigVRg_GY5mul7A';
		var map = new mapboxgl.Map({
		container: 'map',
		center: kine,
		zoom: 13,
		style: 'mapbox://styles/mapbox/streets-v10'

		});

var marker = new mapboxgl.Marker()
  .setLngLat(kine)
  .addTo(map);
