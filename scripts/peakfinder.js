const peaks = [
    {
    name: 'Agiocochook Crag',
    point: [44.27919, -71.29133],
    altitude: 1746,
  },
  {
    name: 'Mount Clay',
    point: [44.2858978, -71.3159091],
    altitude: 1684,
  },
  {
    name: 'Mount Jefferson',
    point: [44.3041935, -71.31687873],
    altitude: 1740,
  },
  {
    name: 'Mount Adams',
    point: [44.32060218, -71.29163866],
    altitude: 1765,
  },
    {
    name: 'Mount Sam Adams',
    point: [44.3217301, -71.3003537],
    altitude: 1682,
  },
  {
    name: 'Adams Five',
    point: [44.3158968, -71.3064648],
    altitude: 1590,
  },
  {
    name: 'Mount Abigail Adams',
    point: [44.325341, -71.3006315],
    altitude: 1626,
  },
  {
    name: 'Mount Quincy Adams',
    point: [44.3245077, -71.2881313],
    altitude: 1633,
  },
    {
    name: 'Mount Madison',
    point: [44.3283965, -71.2778533],
    altitude: 1620,
  },
  {
    name: 'Lows Bald Spot',
    point: [44.2833983, -71.2511854],
    altitude: 853,
  },
  {
    name: 'Wildcat Mountain, D Peak',
    point: [44.249433, -71.223766],
    altitude: 1238,
  },
  {
    name: 'Wildcat Mountain, C Peak',
    point: [44.25087368, -71.20766028],
    altitude: 1302,
  },
  {
    name: 'Wildcat Mountain, B Peak',
    point: [44.25485181, -71.20206795],
    altitude: 1317,
  },
  {
    name: 'Wildcat Mountain, A Peak',
    point: [44.259231, -71.201739],
    altitude: 1348,
  },
  {
    name: 'Wildcat E',
    point: [44.24761266, -71.22716583],
    altitude: 1233,
  },
  {
    name: 'Boott Spur',
    point: [44.252288, -71.2950749],
    altitude: 1664,
  },
  {
    name: 'Mount Monroe',
    point: [44.2556211, -71.3220199],
    altitude: 1617,
  },
  {
    name: 'Mount Franklin',
    point: [44.24951, -71.3306312],
    altitude: 1517,
  },
  {
    name: 'Mount Eisenhower',
    point: [44.2403434, -71.3503537],
    altitude: 1450,
  },
  {
    name: 'Mount Pierce',
    point: [44.2264547, -71.3659096],
    altitude: 1308,
  },
  {
    name: 'Mount Jackson',
    point: [44.20323808, -71.3754456],
    altitude: 1232,
  },
  {
    name: 'Mount Webster',
    point: [44.1945105, -71.3886875],
    altitude: 1162,
  },
  {
    name: 'Mount Isolation',
    point: [44.2147886, -71.3092414],
    altitude: 1220,
  },
  {
    name: 'Mount Davis',
    point: [44.20177854, -71.31289042],
    altitude: 1160,
  },
]
const currentAltitude = 1916;

const scale = 500;

AFRAME.registerComponent('peakfinder', {
    init: function() {
      peaks.forEach ( peak => {
        const entity = document.createElement('a-text');
        // entity.setAttribute('look-at', '[gps-projected-camera]');
        entity.setAttribute('value', peak.name);
        entity.setAttribute('text', peak.name);
        entity.setAttribute('color', 'black');
        entity.setAttribute('scale', '500 500 500')
        //     x: scale,
        //     y: scale,
        //     z: scale
        // });
        entity.setAttribute('position', '0 0 0')
        //     x: 0,
        //     y: 0,
        //     z: currentAltitude - peak.altitude
        // });
        // entity.setAttribute('gps-projected-entity-place', {
        //     latitude: peak.point[0],
        //     longitude: peak.point[1]
        // });
        this.el.appendChild(entity);
    });
    },
});
