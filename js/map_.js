function popup(){
    let d=document.getElementById("popup");
    d.classList.add("dis");
    // const node = document.createElement("div");
    // node.classList.add("node");
    // d.appendChild(node);

    
}
function popup2(){
    let d=document.getElementById("popup2");
    d.classList.add("dis")
}
function popup3(){
    let d=document.getElementById("popup3");
    d.classList.add("dis")
}

function initMap() {
    const neelam = { lat: 30.519050731223228, lng: 76.6584537281669 };
    const gian = { lat: 30.529164792606274, lng: 76.67195353674829 };
    const dhir = { lat: 30.485861742938347, lng:76.59498342910952 };
    
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: neelam,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: neelam,
      map: map,
    });
    const marker2 = new google.maps.Marker({
        position: gian,
        map: map,
      });
      const marker3 = new google.maps.Marker({
        position: dhir,
        map: map,
      }); 

    marker.addListener("click",popup)
    marker2.addListener("click",popup2)
    marker3.addListener("click",popup3)
      
     
  }
  $(document).on('keydown', function(e) {
    let d=document.getElementById("popup");
    let g=document.getElementById("popup2");
    let f=document.getElementById("popup3");

    if (e.keyCode == 27){
        d.classList.remove("dis");
        g.classList.remove("dis");
        f.classList.remove("dis");
    }
      
  });
  window.initMap = initMap;