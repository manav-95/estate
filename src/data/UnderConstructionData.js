
import Pearl_Palace from '../assets/featured-projects/pearl-palace.jpg'

import Vir_Enclave_Day from '../assets/featured-projects/under-construction/vir-enclave-day.jpg'
import QR from '../assets/qr.jpg'

import Barbeque_Area from '../assets/project-details/indoor-and-outdoor-aminities/Barbeque-area.png'
import Kids_Play_Area from '../assets/project-details/indoor-and-outdoor-aminities/KIDS-PLAY-AREA.png'
import Senior_Citizen_Seating_Area from '../assets/project-details/indoor-and-outdoor-aminities/SENIOR-CITIZEN-SEATING-AREA.png'
import Walking_Pathway from '../assets/project-details/indoor-and-outdoor-aminities/WALKING-PATHWAY.png'

import Floor1 from '../assets/project-details/floor-plans/1.jpg'
import Floor2 from '../assets/project-details/floor-plans/2.jpg'
import Floor3 from '../assets/project-details/floor-plans/3.jpg'
import Floor4 from '../assets/project-details/floor-plans/4.jpg'
import Floor5 from '../assets/project-details/floor-plans/5.jpg'

import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const underConstruction = [
    {
        id: "1",
        buttonText: 'View Details',
        name: 'Vir Enclave',
        image: Vir_Enclave_Day,
        flats: '2 & 3 BHK Flats',
        arrflats: ['2 BHK', '3 BHK',],
        location: 'Malad (W)',
        city: 'Mumbai',
        status: 'Ongoing Project',
        locatedAt: 'Situated at xyz Colony Lane, xyz, Location Here , City Name Here - 000 000',
        plotArea: '0000.00 sq.mts.',
        apartmentOptions: [
            '1 BHK - 000 sq.ft, 000 sq.ft',
            '2 BHK - 000 sq.ft, 000 sq.ft',
        ],
        contactDetails: [
            { icon: FaPhoneAlt, detail: '+91 93262 87741', },
            { icon: IoMdMail, detail: 'virparadisesales@gmail.com', },
        ],
        mahareraNo: 'P00000000000',
        qrcode: QR,
        amenities: [
            { image: Senior_Citizen_Seating_Area, text: 'Senier Citizen Sitting Area', },
            { image: Barbeque_Area, text: 'Barbeque Area', },
            { image: Kids_Play_Area, text: 'Kids Play Area', },
            { image: Walking_Pathway, text: 'Walking Pathway', },
        ],
        floorPlans: [
            Floor1,
            Floor2,
            Floor3,
            Floor4,
            Floor5,
        ],
        gallary: [
            "",
            "",
            "",
        ],
        map: '',
        proximities: [
            // First Railway Station 
            { icon: '', distanceAway: '0.0Km', name: 'Name Railway Station' },
            // Second Railway Station 
            { icon: '', distanceAway: '0.0Km', name: 'Name Railway Station' },
            // Hospital
            { icon: '', distanceAway: '000m', name: 'Hospital Name' },
            // School & Colleges
            { icon: '', distanceAway: '000m', name: 'College Name' },
            // Garden
            { icon: '', distanceAway: '000m', name: 'Garden Name' },
            // Temples
            { icon: '', distanceAway: '000m', name: 'Hospital Name' },
            // Hospital
            { icon: '', distanceAway: '000m', name: 'Temple Name' },
            // Mall
            { icon: '', distanceAway: '000m', name: 'Mall Name' },
        ],
    },
    { id: "2", buttonText: 'View Details', name: 'Samarth C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'Borivali (W)', },
    { id: "3", buttonText: 'View Details', name: 'Jamuna Mahal C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'Malad (W)', },
    { id: "4", buttonText: 'View Details', name: 'Union Bank of India C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'SantaCruz (E)', },
    { id: "5", buttonText: 'View Details', name: 'Lakshman Tower C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'SantaCruz (E)', },
    { id: "6", buttonText: 'View Details', name: 'Tiara C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'Borivali (W)', },
]

export default underConstruction;