import React, { useState, useEffect } from 'react';
export const objectOptions = [
  {
    value: 'person',
    label: 'person'
  },
  {
    value: 'bicycle',
    label: 'bicycle'
  },
  {
    value: 'car',
    label: 'car'
  },
  {
    value: 'motorcycle',
    label: 'motorcycle'
  },
  {
    value: 'airplane',
    label: 'airplane'
  },
  {
    value: 'bus',
    label: 'bus'
  },
  {
    value: 'train',
    label: 'train'
  },
  {
    value: 'truck',
    label: 'truck'
  },
  {
    value: 'boat',
    label: 'boat'
  },
  {
    value: 'traffic_light',
    label: 'traffic light'
  },
  {
    value: 'fire_hydrant',
    label: 'fire hydrant'
  },
  {
    value: 'street_sign',
    label: 'street sign'
  },
  {
    value: 'stop_sign',
    label: 'stop sign'
  },
  {
    value: 'parking_meter',
    label: 'parking meter'
  },
  {
    value: 'bench',
    label: 'bench'
  },
  {
    value: 'bird',
    label: 'bird'
  },
  {
    value: 'cat',
    label: 'cat'
  },
  {
    value: 'dog',
    label: 'dog'
  },
  {
    value: 'horse',
    label: 'horse'
  },
  {
    value: 'sheep',
    label: 'sheep'
  },
  {
    value: 'cow',
    label: 'cow'
  },
  {
    value: 'elephant',
    label: 'elephant'
  },
  {
    value: 'bear',
    label: 'bear'
  },
  {
    value: 'zebra',
    label: 'zebra'
  },
  {
    value: 'giraffe',
    label: 'giraffe'
  },
  {
    value: 'hat',
    label: 'hat'
  },
  {
    value: 'backpack',
    label: 'backpack'
  },
  {
    value: 'umbrella',
    label: 'umbrella'
  },
  {
    value: 'shoe',
    label: 'shoe'
  },
  {
    value: 'eye_glasses',
    label: 'eye glasses'
  },
  {
    value: 'handbag',
    label: 'handbag'
  },
  {
    value: 'tie',
    label: 'tie'
  },
  {
    value: 'suitcase',
    label: 'suitcase'
  },
  {
    value: 'frisbee',
    label: 'frisbee'
  },
  {
    value: 'skis',
    label: 'skis'
  },
  {
    value: 'snowboard',
    label: 'snowboard'
  },
  {
    value: 'sports_ball',
    label: 'sports ball'
  },
  {
    value: 'kite',
    label: 'kite'
  },
  {
    value: 'baseball_bat',
    label: 'baseball bat'
  },
  {
    value: 'baseball_glove',
    label: 'baseball glove'
  },
  {
    value: 'skateboard',
    label: 'skateboard'
  },
  {
    value: 'surfboard',
    label: 'surfboard'
  },
  {
    value: 'tennis_racket',
    label: 'tennis racket'
  },
  {
    value: 'bottle',
    label: 'bottle'
  },
  {
    value: 'plate',
    label: 'plate'
  },
  {
    value: 'wine_glass',
    label: 'wine glass'
  },
  {
    value: 'cup',
    label: 'cup'
  },
  {
    value: 'fork',
    label: 'fork'
  },
  {
    value: 'knife',
    label: 'knife'
  },
  {
    value: 'spoon',
    label: 'spoon'
  },
  {
    value: 'bowl',
    label: 'bowl'
  },
  {
    value: 'banana',
    label: 'banana'
  },
  {
    value: 'apple',
    label: 'apple'
  },
  {
    value: 'sandwich',
    label: 'sandwich'
  },
  {
    value: 'orange',
    label: 'orange'
  },
  {
    value: 'broccoli',
    label: 'broccoli'
  },
  {
    value: 'carrot',
    label: 'carrot'
  },
  {
    value: 'hot_dog',
    label: 'hot dog'
  },
  {
    value: 'pizza',
    label: 'pizza'
  },
  {
    value: 'donut',
    label: 'donut'
  },
  {
    value: 'cake',
    label: 'cake'
  },
  {
    value: 'chair',
    label: 'chair'
  },
  {
    value: 'couch',
    label: 'couch'
  },
  {
    value: 'potted_plant',
    label: 'potted plant'
  },
  {
    value: 'bed',
    label: 'bed'
  },
  {
    value: 'mirror',
    label: 'mirror'
  },
  {
    value: 'dining_table',
    label: 'dining table'
  },
  {
    value: 'window',
    label: 'window'
  },
  {
    value: 'desk',
    label: 'desk'
  },
  {
    value: 'toilet',
    label: 'toilet'
  },
  {
    value: 'door',
    label: 'door'
  },
  {
    value: 'tv',
    label: 'tv'
  },
  {
    value: 'laptop',
    label: 'laptop'
  },
  {
    value: 'mouse',
    label: 'mouse'
  },
  {
    value: 'remote',
    label: 'remote'
  },
  {
    value: 'keyboard',
    label: 'keyboard'
  },
  {
    value: 'cell_phone',
    label: 'cell phone'
  },
  {
    value: 'microwave',
    label: 'microwave'
  },
  {
    value: 'oven',
    label: 'oven'
  },
  {
    value: 'toaster',
    label: 'toaster'
  },
  {
    value: 'sink',
    label: 'sink'
  },
  {
    value: 'refrigerator',
    label: 'refrigerator'
  },
  {
    value: 'blender',
    label: 'blender'
  },
  {
    value: 'book',
    label: 'book'
  },
  {
    value: 'clock',
    label: 'clock'
  },
  {
    value: 'vase',
    label: 'vase'
  },
  {
    value: 'scissors',
    label: 'scissors'
  },
  {
    value: 'teddy_bear',
    label: 'teddy bear'
  },
  {
    value: 'hair_drier',
    label: 'hair drier'
  },
  {
    value: 'toothbrush',
    label: 'toothbrush'
  },
  {
    value: 'hair_brush',
    label: 'hair brush'
  },
]
let familiar_color = {'aqua': '#00ffff', 'black': '#000000', 'blue': '#0000ff', 'fuchsia': '#ff00ff',
                 'green': '#008000', 'gray': '#808080', 'lime': '#00ff00', 'maroon': '#800000',
                 'navy': '#000080', 'olive': '#808000', 'purple': '#800080', 'red': '#ff0000',
                 'silver': '#c0c0c0', 'teal': '#008080', 'white': '#ffffff', 'yellow': '#ffff00',
                 'orange': '#ffa500'}

let color_url = process.env.PUBLIC_URL + '/color/'
export const colorOptions = [
  {
    value: 'aqua', label: <div><img src={color_url + '00ffff.png'} width={10}/>{' '}aqua</div>, color: '#00ffff'
  },
  {
    value: 'black', label: <div><img src={color_url + '000000.png'} width={10}/>{' '}black</div>, color: '#000000'
  },
  {
    value: 'blue', label: <div><img src={color_url + '0000ff.png'} width={10}/>{' '}blue</div>, color: '#0000ff'
  },
  {
    value: 'fuchsia', label: <div><img src={color_url + 'ff00ff.png'} width={10}/>{' '}fuchsia</div>, color: '#ff00ff'
  },
  {
    value: 'green', label: <div><img src={color_url + '008000.png'} width={10}/>{' '}green</div>, color: '#008000'
  },
  {
    value: 'gray', label: <div><img src={color_url + '808080.png'} width={10}/>{' '}gray</div>, color: '#808080'
  },
  {
    value: 'lime', label: <div><img src={color_url + '00ff00.png'} width={10}/>{' '}lime</div>, color: '#00ff00'
  },
  {
    value: 'maroon', label: <div><img src={color_url + '800000.png'} width={10}/>{' '}maroon</div>, color: '#800000'
  },
  {
    value: 'navy', label: <div><img src={color_url + '000080.png'} width={10}/>{' '}navy</div>, color: '#000080'
  },
  {
    value: 'olive', label: <div><img src={color_url + '808000.png'} width={10}/>{' '}olive</div>, color: '#808000'
  },
  {
    value: 'purple', label: <div><img src={color_url + '800080.png'} width={10}/>{' '}purple</div>, color: '#800080'
  },
  {
    value: 'red', label: <div><img src={color_url + 'ff0000.png'} width={10}/>{' '}red</div>, color: '#ff0000'
  },
  {
    value: 'silver', label: <div><img src={color_url + 'c0c0c0.png'} width={10}/>{' '}silver</div>, color: '#c0c0c0'
  },
  {
    value: 'teal', label: <div><img src={color_url + '008080.png'} width={10}/>{' '}teal</div>, color: '#008080'
  },
  {
    value: 'white', label: <div><img src={color_url + 'ffffff.png'} width={10}/>{' '}white</div>, color: '#ffffff'
  },
  {
    value: 'yellow', label: <div><img src={color_url + 'ffff00.png'} width={10}/>{' '}yellow</div>, color: '#ffff00'
  },
  {
    value: 'orange', label: <div><img src={color_url + 'ffa500.png'} width={10}/>{' '}orange</div>, color: '#ffa500'
  }
]

// export const options = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496"
//       }
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets"
//     }
//   },
//   {
//     id: 2,
//     disabled: true,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618"
//       }
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains"
//     }
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: {
//       street: "Douglas Extension",
//       suite: "Suite 847",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//       geo: {
//         lat: "-68.6102",
//         lng: "-47.0653"
//       }
//     },
//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//     company: {
//       name: "Romaguera-Jacobson",
//       catchPhrase: "Face to face bifurcated interface",
//       bs: "e-enable strategic applications"
//     }
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//       street: "Hoeger Mall",
//       suite: "Apt. 692",
//       city: "South Elvis",
//       zipcode: "53919-4257",
//       geo: {
//         lat: "29.4572",
//         lng: "-164.2990"
//       }
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//       catchPhrase: "Multi-tiered zero tolerance productivity",
//       bs: "transition cutting-edge web services"
//     }
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     address: {
//       street: "Skiles Walks",
//       suite: "Suite 351",
//       city: "Roscoeview",
//       zipcode: "33263",
//       geo: {
//         lat: "-31.8129",
//         lng: "62.5342"
//       }
//     },
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//       name: "Keebler LLC",
//       catchPhrase: "User-centric fault-tolerant solution",
//       bs: "revolutionize end-to-end systems"
//     }
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     address: {
//       street: "Norberto Crossing",
//       suite: "Apt. 950",
//       city: "South Christy",
//       zipcode: "23505-1337",
//       geo: {
//         lat: "-71.4197",
//         lng: "71.7478"
//       }
//     },
//     phone: "1-477-935-8478 x6430",
//     website: "ola.org",
//     company: {
//       name: "Considine-Lockman",
//       catchPhrase: "Synchronised bottom-line interface",
//       bs: "e-enable innovative applications"
//     }
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
//     address: {
//       street: "Rex Trail",
//       suite: "Suite 280",
//       city: "Howemouth",
//       zipcode: "58804-1099",
//       geo: {
//         lat: "24.8918",
//         lng: "21.8984"
//       }
//     },
//     phone: "210.067.6132",
//     website: "elvis.io",
//     company: {
//       name: "Johns Group",
//       catchPhrase: "Configurable multimedia task-force",
//       bs: "generate enterprise e-tailers"
//     }
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
//     address: {
//       street: "Ellsworth Summit",
//       suite: "Suite 729",
//       city: "Aliyaview",
//       zipcode: "45169",
//       geo: {
//         lat: "-14.3990",
//         lng: "-120.7677"
//       }
//     },
//     phone: "586.493.6943 x140",
//     website: "jacynthe.com",
//     company: {
//       name: "Abernathy Group",
//       catchPhrase: "Implemented secondary concept",
//       bs: "e-enable extensible e-tailers"
//     }
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
//     address: {
//       street: "Dayna Park",
//       suite: "Suite 449",
//       city: "Bartholomebury",
//       zipcode: "76495-3109",
//       geo: {
//         lat: "24.6463",
//         lng: "-168.8889"
//       }
//     },
//     phone: "(775)976-6794 x41206",
//     website: "conrad.com",
//     company: {
//       name: "Yost and Sons",
//       catchPhrase: "Switchable contextually-based project",
//       bs: "aggregate real-time technologies"
//     }
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: {
//         lat: "-38.2386",
//         lng: "57.2232"
//       }
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models"
//     }
//   }
// ];
