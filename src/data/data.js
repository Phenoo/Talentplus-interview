import { MdOutlineStickyNote2,  MdOutlineSettingsInputAntenna, MdOutlineAutoMode, MdOutlineSchedule  } from 'react-icons/md'

import {FaChromecast, FaMoneyCheckAlt} from 'react-icons/fa'

import { HiOutlineUserGroup} from 'react-icons/hi'

import Img from '../assets/Frame 165.png'
import Img1 from '../assets/Frame 165 (1).png'
import Img2 from '../assets/Frame 165 (2).png'
import Img3 from '../assets/Frame 165 (3).png'
import Img4 from '../assets/Frame 165 (4).png'
import Img5 from '../assets/Frame 165 (5).png'

export const courseItems = [
{
    id: 1,
    name: 'Audio Classes',
    class: 'green',
    image: <MdOutlineAutoMode />
  },
  {
    id: 2,
    name: 'Live Classes',
    class: 'orange',
    image: <MdOutlineSettingsInputAntenna /> 
  },
  {
    id: 3,
    name: 'Recorded Classes ',
    class: 'purple',
    image: <MdOutlineAutoMode />
  },
  {
    id: 4,
    name: '50+ Notes',
    class: 'blue',
    image: <MdOutlineStickyNote2 />
  },
]

export const offerItems = [
    {
        id: 0.1,
        name: 'experienced mentors',
        classx: 'blue',
        image: <FaChromecast />
      },
      {
        id: 0.2,
        name: 'one-on-one meetings',
        classx: 'lime',
        image: <MdOutlineSchedule /> 
      },
      {
        id: 0.3,
        name: 'one-on-one meetings',
        class: 'pink',
        image: <HiOutlineUserGroup />
      },
      {
        id: 0.4,
        name: 'Affordable Price',
        classx: 'orange',
        image: <FaMoneyCheckAlt />
      },
    ]

export  const popularItems = [{
        id: 1,
        name: 'introduction to user research in ux design',
        image: 'Oalh2MojUuk',
        tag: "design",
        tutor: "leonard victor",
        price: 15,
        imagex: Img
      },
      {
        id: 2,
        name: 'introduction to  new marketing audience ',
        image: 'U33fHryBYBU',
        tag: "marketing",
        tutor: "Jeffrey williams",
        price: 32,
        imagex: Img1
      },
      {
        id: 3,
        name: 'introduction to html, css & bootstrap',
        image: 'Lks7vei-eAg',
        tag: 'development',
        tutor: 'claretta mason',
        price: 35,
        imagex: Img2
      },
      {
        id: 4,
        name: 'introduction to javascript, git & GitHub',
        image: 'pjAH2Ax4uWk',
        tag: 'development',
        tutor: 'Jessica duke',
        price: 45,
        imagex: Img3
      },
      {
        id: 5,
        name: 'introduction to outroom  marketing analysis',
        image: 'gMsnXqILjp4',
        tag: 'marketing',
        tutor: 'Samuel jacobs',
        price: 25,
        imagex: Img4
      },
      {
        id: 6,
        name: 'introduction to live  marketing analysis',
        image: 'pypeCEaJeZY',
        tag: 'marketing',
        tutor: 'adam smith',
        price: 25,
        imagex: Img5
      },
    ]
    

    export  const swiperItems = [{
        id: 1,
        tutor: "leonard victor",
        imagex: Img
      },
      {
        id: 2,
        tutor: "Jeffrey williams",
        imagex: Img1
      },
      {
        id: 3,
        tutor: 'claretta mason',
        imagex: Img2
      },
      {
        id: 4,
        tutor: 'Jessica duke',
        imagex: Img3
      },
      {
        id: 5,
        tutor: 'Samuel jacobs',
        imagex: Img4
      },
      {
        id: 6,
        tutor: 'adam smith',
        imagex: Img5
      },
    ]


export const faqItems = [
    {
        question: 'is there a free trial available?'
    },
    {
        question: 'can i change my plan later?'
    },
    {
        question: 'are the courses lifetime??'
    },
    {
        question: 'do i get certified after taking courses?'
    },
    {
        question: 'how do i reach out to mentors?'
    },
    {
        question: 'do we get job ready after taking courses?'
    },
    
]
    