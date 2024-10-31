const socket = io();

if(navigator.geolocation){
    navigator.geolocation.watchPosition(
        (position)=>{
        const {latitude,longitude} = position.coords;
        socket.emit("send-Location",{latitude,longitude});
    },
    (error)=>{
        console.error(error);
    },
    {    // options or we can say it is the settings for the geolocation 
        enableHighAccuracy:true,   // it will try to get the accurate location
        timeout:5000,      // 5 seconds - in every 5 seconds it will try to get the location
        maximumAge:0,      // 0 means it will not use the cache location 
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const map = L.map("map").setView([0, 0], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution : "Aman Agrawal's Map",
        }
    ).addTo(map);

    const markers = {};
    socket.on("receive-Location", (location) => {
        const {latitude, longitude, id} = location;
        map.setView([latitude, longitude]);
        if(markers[id]){
            markers[id].setLatLng([latitude,longitude]);
        }else{
            markers[id]= L.marker([latitude,longitude],{color :'red'}).addTo(map).bindPopup("User is here");
        }
    });

    socket.on("user-disconnect",(id)=>{
        map.removeLayer(markers[id]);
        delete markers[id];
    });


});