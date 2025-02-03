import Pearl_Palace from '../assets/featured-projects/pearl-palace.jpg'

// All Icons
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaBookOpen, FaBuilding, FaTree } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdLocalHospital } from "react-icons/md";

// Vir Enclave image
import Vir_Enclave_Day from '../assets/featured-projects/under-construction/vir-enclave-day.jpg'

// Vir Enclave QR Code Image
import Vir_Enclave_QR from '../assets/project-details/vir-enclave/qr-code/qr.jpg'

// Vir Enclave Amenities Images
import Vir_Enclave_Barbeque_Area_Ameniti from '../assets/project-details/vir-enclave/indoor-and-outdoor-aminities/Barbeque-area.png'
import Vir_Enclave_Play_Area_Ameniti from '../assets/project-details/vir-enclave/indoor-and-outdoor-aminities/KIDS-PLAY-AREA.png'
import Vir_Enclave_Seating_Area_Ameniti from '../assets/project-details/vir-enclave/indoor-and-outdoor-aminities/SENIOR-CITIZEN-SEATING-AREA.png'
import Vir_Enclave_Walking_Pathway_Ameniti from '../assets/project-details/vir-enclave/indoor-and-outdoor-aminities/WALKING-PATHWAY.png'

// Vir Enclave Floor Plans Images
import Vir_Enclave_Floor_1 from '../assets/project-details/vir-enclave/floor-plans/1.jpg'
import Vir_Enclave_Floor_2 from '../assets/project-details/vir-enclave/floor-plans/2.jpg'
import Vir_Enclave_Floor_3 from '../assets/project-details/vir-enclave/floor-plans/3.jpg'
import Vir_Enclave_Floor_4 from '../assets/project-details/vir-enclave/floor-plans/4.jpg'
import Vir_Enclave_Floor_5 from '../assets/project-details/vir-enclave/floor-plans/5.jpg'

// Vir Enclave Gallary Images
import Vir_Enclave_Barbeque_Area from '../assets/project-details/vir-enclave/gallary/barbeque-area.jpg'
import Vir_Enclave_Play_Area from '../assets/project-details/vir-enclave/gallary/play-area.jpg'
import Vir_Enclave_Seating_Area from '../assets/project-details/vir-enclave/gallary/sitting-area.jpg'
import Vir_Enclave_Walking_Pathway from '../assets/project-details/vir-enclave/gallary/walking-pathway.jpg'


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
        qrcode: Vir_Enclave_QR,
        amenities: [
            { image: Vir_Enclave_Seating_Area_Ameniti, text: 'Senier Citizen Sitting Area', },
            { image: Vir_Enclave_Barbeque_Area_Ameniti, text: 'Barbeque Area', },
            { image: Vir_Enclave_Play_Area_Ameniti, text: 'Kids Play Area', },
            { image: Vir_Enclave_Walking_Pathway_Ameniti, text: 'Walking Pathway', },
        ],
        floorPlans: [
            Vir_Enclave_Floor_1,
            Vir_Enclave_Floor_2,
            Vir_Enclave_Floor_3,
            Vir_Enclave_Floor_4,
            Vir_Enclave_Floor_5,
        ],
        gallary: [
            Vir_Enclave_Day,
            Vir_Enclave_Barbeque_Area,
            Vir_Enclave_Play_Area,
            Vir_Enclave_Seating_Area,
            Vir_Enclave_Walking_Pathway,
        ],
        iframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1389.3595431175952!2d72.85653688247163!3d19.280426076305336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b14b85471899%3A0xafed9628453dbe6!2sA9business!5e1!3m2!1sen!2sin!4v1738559944605!5m2!1sen!2sin"
                 height="100%"
                 width="100%" 
                 allowfullscreen=""
                 loading="lazy"
                 referrerpolicy="no-referrer-when-downgrade">
                 </iframe>`,
        proximities: [
            // First Railway Station 
            { icon: FaTrainSubway, distanceAway: '0.0Km', name: 'Name Railway Station' },
            // Second Railway Station 
            { icon: FaTrainSubway, distanceAway: '0.0Km', name: 'Name Railway Station' },
            // Hospital
            { icon: MdLocalHospital, distanceAway: '000m', name: 'Hospital Name' },
            // School & Colleges
            { icon: FaBookOpen, distanceAway: '000m', name: 'College Name' },
            // Garden
            { icon: FaTree, distanceAway: '000m', name: 'Garden Name' },
            // Temple
            { icon: MdLocalHospital, distanceAway: '000m', name: 'Temple Name' },
            // Mall
            { icon: FaBuilding, distanceAway: '000m', name: 'Mall Name' },
        ],
    },
    { id: "2", buttonText: 'View Details', name: 'Samarth C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'Borivali (W)', },
    { id: "3", buttonText: 'View Details', name: 'Jamuna Mahal C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'Malad (W)', },
    { id: "4", buttonText: 'View Details', name: 'Union Bank of India C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'SantaCruz (E)', },
    { id: "5", buttonText: 'View Details', name: 'Lakshman Tower C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'SantaCruz (E)', },
    { id: "6", buttonText: 'View Details', name: 'Tiara C.H.S.L', image: Pearl_Palace, flats: '2 & 3 BHK Flats', location: 'Borivali (W)', },
]

export default underConstruction;