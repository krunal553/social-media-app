import gojo from './resources/images/gojo.jpg';
import pp from './resources/images/honey.jpg';

import bench_drawing from './resources/images/bench_drawing.jpg';
import vinayaka from './resources/images/vinayaka.jpg';
import bhes from './resources/images/bhes.jpg';
import chakli from './resources/images/chakli.jpg';
import cow from './resources/images/cow.jpg';
import firecracker from './resources/images/firecracker.jpg';
import ice_cola from './resources/images/ice_cola.jpg';
import icecream from './resources/images/icecream.jpg';
import icecream_watch from './resources/images/icecream_watch.jpg';
import khetar from './resources/images/khetar.jpg';
import khetar_sunset from './resources/images/khetar_sunset.jpg';
import khetar2 from './resources/images/khetar2.jpg';
import khetar3 from './resources/images/khetar3.jpg';
import mango from './resources/images/mango.jpg';
import me_river from './resources/images/me_river.jpg';
import me_sunset from './resources/images/me_sunset.jpg';
import me_fool from './resources/images/me_fool.jpg';
import night_river from './resources/images/night_river.jpg';
import nowayhome from './resources/images/nowayhome.jpg';
import sky from './resources/images/sky.jpg';
import sunset from './resources/images/sunset.jpg';
import water from './resources/images/water.jpg';
import water_shadow from './resources/images/water_shadow.jpg';
import yellow_fool from './resources/images/yellow_fool.jpg';


const users = [
    {
        "userId": 1,
        "name": "Krunal Makwana",
        "profilePic": pp,
        "bio": "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
        "userId": 2,
        "name": "Vivek Makwana",
        "profilePic": gojo,
        "bio": "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
        "userId": 6,
        "name": "Meet Chauhan",
        "profilePic": sky,
        "bio": "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
        "userId": 4,
        "name": "Yug Makwana",
        "profilePic": gojo,
        "bio": "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
        "userId": 5,
        "name": "Miten",
        "profilePic": gojo,
        "bio": "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
        "userId": 7,
        "name": "Het Patel",
        "profilePic": gojo,
        "bio": "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
        "userId": 3,
        "name": "Digvijay",
        "profilePic": gojo,
        "bio": "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
        "userId": 8,
        "name": "Duttresh",
        "profilePic": gojo,
        "bio": "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
        "userId": 9,
        "name": "Shuv Rohit",
        "profilePic": gojo,
        "bio": "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
        "userId": 10,
        "name": "Yash Raichand",
        "profilePic": gojo,
        "bio": "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
]

const posts = [
    {
        "id": 1,
        "name": "Meet Chauhan",
        "userId": 6,
        "profilePic": sky,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": pp,
    },
    {
        "id": 2,
        "name": "Priyansh Rohit",
        "userId": 8,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": gojo,
    },
    {
        "id": 3,
        "name": "Vivek Makwana",
        "userId": 2,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": bench_drawing,
    },
    {
        "id": 4,
        "name": "Vivek Makwana",
        "userId": 2,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": vinayaka,
    },
    {
        "id": 5,
        "name": "Vivek Makwana",
        "userId": 2,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": bhes,
    },
    {
        "id": 6,
        "name": "Vivek Makwana",
        "userId": 2,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": chakli,
    },
    {
        "id": 7,
        "name": "Digvijay",
        "userId": 3,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": cow,
    },
    {
        "id": 8,
        "name": "Digvijay",
        "userId": 3,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": firecracker,
    },
    {
        "id": 9,
        "name": "Digvijay",
        "userId": 3,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": ice_cola,
    },
    {
        "id": 10,
        "name": "Digvijay",
        "userId": 3,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": icecream,
    },
    {
        "id": 11,
        "name": "Yug Makwana",
        "userId": 4,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": icecream_watch,
    },
    {
        "id": 12,
        "name": "Yug Makwana",
        "userId": 4,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": khetar,
    },
    {
        "id": 13,
        "name": "Yug Makwana",
        "userId": 4,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": khetar_sunset,
    },
    {
        "id": 14,
        "name": "Yug Makwana",
        "userId": 4,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": khetar2,
    },
    {
        "id": 15,
        "name": "Miten",
        "userId": 5,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": khetar3,
    },
    {
        "id": 16,
        "name": "Miten",
        "userId": 5,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": mango,
    },
    {
        "id": 17,
        "name": "Krunal Makwana",
        "userId": 1,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": me_river,
    },
    {
        "id": 18,
        "name": "Krunal Makwana",
        "userId": 1,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": me_sunset,
    },
    {
        "id": 19,
        "name": "Krunal Makwana",
        "userId": 1,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": me_fool,
    },
    {
        "id": 20,
        "name": "Meet Chauhan",
        "userId": 6,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": night_river,
    },
    {
        "id": 21,
        "name": "Meet Chauhan",
        "userId": 6,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": nowayhome,
    },
    {
        "id": 22,
        "name": "Meet Chauhan",
        "userId": 6,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": sky,
    },
    {
        "id": 23,
        "name": "Het Patel",
        "userId": 7,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": sunset,
    },
    {
        "id": 24,
        "name": "Het Patel",
        "userId": 7,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": water,
    },
    {
        "id": 25,
        "name": "Krunal Makwana",
        "userId": 1,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": water_shadow,
    },
    {
        "id": 26,
        "name": "Het Patel",
        "userId": 7,
        "profilePic": gojo,
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing",
        "image": yellow_fool,
    },
    

];

//TEMPORARY 
const stories = [
    {
        id: 1,
        name: "Krunal M",
        image: gojo,
    },
    {
        id: 2,
        name: "Meet C",
        image: gojo,
    },
    {
        id: 3,
        name: "Shiv R",
        image: gojo,
    },
    {
        id: 4,
        name: "Helly C",
        image: gojo,
    },
    {
        id: 5,
        name: "Helly C",
        image: gojo,
    },
    {
        id: 6,
        name: "Helly C",
        image: gojo,
    },

    {
        id: 7,
        name: "Helly C",
        image: gojo,
    }, {
        id: 8,
        name: "Helly C",
        image: gojo,
    }, {
        id: 9,
        name: "Helly C",
        image: gojo,
    },
    {
        id: 10,
        name: "Helly C",
        image: gojo,
    }, {
        id: 11,
        name: "Helly C",
        image: gojo,
    },
];

export { posts, users, stories };

