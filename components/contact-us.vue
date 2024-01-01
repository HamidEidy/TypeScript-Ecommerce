<template>
  <div class="client d-flex justify-content-center mt-5 ">
    <div id="maps" class="map col-9 row align-items-center  shadow-lg rounded">

    </div>
  </div>
  <div class="client d-flex justify-content-center mt-5 mb-5">
    <div class="contact col-9 row align-items-center  shadow-lg rounded">

    </div>
  </div>
</template>

<style lang="scss" scoped>
.map{
  height: 30vh;
}
.contact{
  height: 60vh;
}
</style>

<script setup>
const { $leaflet } = useNuxtApp();

onMounted(() => {
    let map = $leaflet.map('maps').setView([35.700105, 51.400394], 14)
    
    // let tiles = $leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    //     maxZoom: 18,
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    //         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     id: 'mapbox/streets-v11',
    //     tileSize: 512,
    //     zoomOffset: -1
    // }).addTo(map);

    let tiles = $leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(map);

    let marker = $leaflet.marker([35.700105, 51.400394], {
        icon: $leaflet.icon({
            popupAnchor: [12, 6],
            iconUrl: '/map/marker-icon.png',
            shadowUrl: '/map/marker-shadow.png'
        })
    }).addTo(map)
   })
   
</script>

<style lang="scss" scoped>

.leaflet-bar{
  box-shadow: none;
}
.leaflet-control-zoom a{
  box-shadow: 0 1px 5px rgba(0,0,0,0.65); 
}
.leaflet-bar a{
  border-radius: 4px;
  background-color: #002244;
  border: 1px solid rgba(0,0,0,.15);
  color: #FB4F14;
}
.leaflet-bar a:last-child{
  border: 1px solid rgba(0,0,0,.15);
}
.leaflet-bar a:hover{
  background-color: #FB4F14;
  border: 1px solid rgba(0,0,0,.15);
  color: #002244;
}
.leaflet-control-zoom-in{
  margin-top: 10px;
}
.leaflet-control-zoom-out{
  margin-top: 15px;
}
.leaflet-control-zoom-in{
  color: black;
  background-color: aqua;
  size: 10px;
}
span{
  font-size: 10px !important; 
}
#map{

  a{
    font-size: 10px;
  }
}
.leaflet-control-zoom-in{
  font-size: 10px !important;
}
.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
  font: bold 10px 'Lucida Console', Monaco, monospace;
  text-indent: 1px;
  }
.leaflet-control-zoom-out {
  font-size: 10px;
  }

.leaflet-touch .leaflet-control-zoom-in {
  font-size: 12px;
  }
.leaflet-touch .leaflet-control-zoom-out {
  font-size: 14px;
  }
</style>