import React, { useEffect, useState } from 'react';
import NavBar from './Navbar/NavBar';
import LoadingSpinner from './LoadingSpinner';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeType, setActiveType] = useState('wedding');
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [videoModalOpen, setVideoModalOpen] = useState(false);

    const services = [
        {
            title: "Singapour",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226077/DSC03568_yvgxx7.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226071/DSC03534_tqnwqw.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226063/DSC03521_exkyyi.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226516/zz_i7t6bz.jpg"
            ],
            video: "/images/video/singapore.mp4", // Add this line
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226071/DSC03534_tqnwqw.jpg",
            type: "wedding",
            category: "ceremony",
            description: "Urban elegance meets timeless luxury in our iconic Singapore-inspired celebration settings."

        },
        {
            title: "Jardin d'Eden",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350223/-113__rrivnl.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350200/-100__xf3iel.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350196/-112__u3rdme.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350082/-98__pmemdx.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350060/-99__pucegx.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350005/-103__v4gat5.jpg"
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350223/-113__rrivnl.jpg",
            type: "wedding",
            category: "luxury",
            description: "A lush paradise of floral abundance creating an ethereal setting for your treasured moments."

        },
        {
            title: "Luxury Jungle",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350711/6U2A6506_vjbtve.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350708/6U2A6331_mwnj4t.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350692/6U2A6336_kbczno.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350669/6U2A6349_p4yvjg.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350562/6U2A6389_du7zcd.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350616/6U2A6499_wo7l8f.jpg"
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350711/6U2A6506_vjbtve.jpg",
            type: "wedding",
            category: "jungle",
            description: "Bold tropical elegance merges with refined sophistication in our captivating jungle-inspired designs."

        },
        {
            title: "Camellia  Flower",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239961/096A5602_chdi7e.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239954/096A5577_j4x39o.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239953/096A5622_zsrg84.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239902/096A7580_u0rrbt.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239854/096A5586_wurt3g.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740237714/096A5591_l50mrl.jpg"
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239854/096A5586_wurt3g.jpg",
            type: "wedding",
            category: "full-service",
            description: "Delicate blooms arranged with exquisite artistry to create an atmosphere of subtle, refined romance."

        },
        {
            title: "Reflection",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350918/DSC01682_kw1vf7.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350915/DSC01545_znanob.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350903/DSC01713_t49xsp.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350983/DSC01581_u00pwf.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350915/_86A7357_gyin82.jpg",
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350918/DSC01682_kw1vf7.jpg",
            type: "wedding",
            category: "reflection",
            description: "Mirrored elements create an illusion of endless elegance, amplifying the magic of your celebration."

        },
        {
            title: "Bvlgari",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348917/DSC09512_ppodvj.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348887/DSC07995_bfohzx.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348885/DSC07946_tll1uh.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348864/DSC08202_r1d7wf.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348835/DSC07965_shuuwb.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348826/DSC07931_kmknho.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348798/DSC07991_tp5u9i.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348782/DSC09440_e4uxpl.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348769/DSC08033_rmj5wk.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348762/DSC08297_frlcim.jpg"
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348769/DSC08033_rmj5wk.jpg",
            type: "wedding",
            category: "bvlgari",
            description: "Opulent materials and precision craftsmanship create a sensory experience of uncompromising luxury."

        },


        {
            title: "IHG Event - Arabie Saoudite",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740397953/ADY00108_itczh3.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740397956/ADY00251_r07ngh.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740397955/ADY00080_ga4hcf.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740397954/ADY00085_i6i70s.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740397953/ADY00092_zwif0q.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740397952/ADY00111_xwua64.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740398194/ADY00244_dmzzqk.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740398194/ADY00216_ngkaji.jpg"
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740354115/a_yrejrq.jpg",
            type: "corporate",
            category: "ihg-event",
            description: "Modern Arabian grandeur infused with sophisticated hospitality for truly memorable corporate gatherings."

        },
        {
            title: "IHG Event - Doha",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353876/11-48_xqmn0f.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353871/11-135_jr2ret.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353855/11-9_fdjlp1.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353840/11-101_vdontj.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353821/11-69_u3yjme.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353764/11-18_tfjhgi.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353764/11-6_zmlmig.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353759/11-71_brtfof.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353729/11-5_sgzmnr.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353712/11-49_fsouhk.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353673/11-39_adiezk.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353638/11-23_mg9car.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353605/11-127_jbp4ss.jpg"
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353855/11-9_fdjlp1.jpg",
            type: "corporate",
            category: "ihg-event",
            description: "Qatari-inspired elegance with innovative design elements elevating the corporate experience."

        },
        {
            title: "Les Jardins Romains",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155051/1-9_t4rwpc.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155035/1-2_ev59ii.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155020/1-3_brr4gk.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155003/1-8_ldhysv.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740154982/1-4_pe6rov.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740154854/1-6_ejxdnd.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740154827/1-5_s1kklu.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740154766/1-7_w2jdfb.jpg"
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155051/1-9_t4rwpc.jpg",
            type: "wedding",
            category: "mosaique",
            description: "Classical Roman aesthetics reimagined with contemporary sensibilities for a timeless celebration."

        },
        {
            title: "Valley Flower",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352399/--11_oll416.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352397/--3_ysa7yi.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352395/DSC09415_krsd2e.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352364/--42_rkvyxa.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352350/--6_igndgp.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352344/--13_pslwnf.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352343/--27_yhbqht.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352292/--10_ndru9g.jpg"
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352399/--11_oll416.jpg",
            type: "wedding",
            category: "valleyflower",
            description: "Sweeping floral landscapes creating a captivating valley of blooms for your extraordinary day."

        },

        {
            title: "Shade",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740351496/526A1032_afr90p.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740351476/526A1058_lhh4ny.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740351476/526A1067_jg3pep.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740351368/526A2817_f7mkit.jpg"
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740351496/526A1032_afr90p.jpg",

            type: "wedding",
            category: "shade",
            description: "Sophisticated interplay of light and shadow creating dramatic ambiance and unforgettable moments."

        },
        {
            title: "Porshe Event",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435837/34-sur-355_zmstii.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435834/26-sur-355_lrea2r.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435823/60-sur-355_igewoq.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435822/58-sur-355_cjrzcl.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435812/301-sur-355_jsh1qt.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435811/33-sur-355_zwr1e1.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435803/64-sur-355_aj0wff.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435793/15-sur-355_cvahxw.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435786/65-sur-355_do6vrj.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435763/46-sur-355_mphdpm.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435755/7-sur-355_zgvcic.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435753/331-sur-355_zjgehz.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435738/189-sur-355_ynnmng.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435730/213-sur-355_gsippp.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435732/138-sur-355_wgwavf.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435718/68-sur-355_ylex8d.jpg"
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435837/34-sur-355_zmstii.jpg",
            type: "corporate",
            category: "porsche-event",
            description: "Precision engineering meets exceptional design in our automotive-inspired corporate experiences."

        }

    ];

    const categories = {
        wedding: [
            { id: 'all', label: 'All Weddings' },
            { id: 'ceremony', label: 'Singapour' },
            { id: 'luxury', label: 'Eden' },
            { id: 'jungle', label: 'Jungle' },
            { id: 'reflection', label: 'Reflection' },
            { id: 'valleyflower', label: "Valley flower" },
            { id: 'bvlgari', label: 'Bvlgari' },
            { id: 'mosaique', label: 'Mosaique' },
            { id: 'full-service', label: 'Camellia Flower' },
            { id: 'shade', label: 'Shade' }
        ],
        corporate: [
            { id: 'all', label: 'All Corporate' },
            { id: 'porsche-event', label: 'Porsche Event' },
            { id: 'ihg-event', label: 'IHG Event' }
        ]
    };

    // When selectedService or currentPhotoIndex changes, reset loading state and preload image
    useEffect(() => {
        if (selectedService) {
            setLoading(true);
            const img = new Image();
            img.src = selectedService.photos[currentPhotoIndex];
            img.onload = () => setLoading(false);
        }
    }, [currentPhotoIndex, selectedService]);

    const filteredServices = services.filter(service =>
        service.type === activeType &&
        (activeCategory === 'all' || service.category === activeCategory)
    );

    const openModal = (service) => {
        setSelectedService(service);
        setCurrentPhotoIndex(0);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedService(null);
        document.body.style.overflow = 'unset';
    };

    const prevPhoto = (e) => {
        e.stopPropagation();
        if (loading) return; // Prevent navigation while loading
        setCurrentPhotoIndex((prevIndex) =>
            (prevIndex - 1 + selectedService.photos.length) % selectedService.photos.length
        );
    };


    const nextPhoto = (e) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (loading) return; // Prevent navigation while loading
        setCurrentPhotoIndex((prevIndex) =>
            (prevIndex + 1) % selectedService.photos.length
        );
    };

    // const navigateModal = (direction, e) => {
    //     e.stopPropagation();
    //     const currentIndex = filteredServices.findIndex(s => s.title === selectedService.title);
    //     if (direction === 'prev') {
    //         const prevIndex = (currentIndex - 1 + filteredServices.length) % filteredServices.length;
    //         setSelectedService(filteredServices[prevIndex]);
    //         setCurrentPhotoIndex(0);
    //     } else {
    //         const nextIndex = (currentIndex + 1) % filteredServices.length;
    //         setSelectedService(filteredServices[nextIndex]);
    //         setCurrentPhotoIndex(0);
    //     }
    // };

    return (
        <>
            <NavBar />
            <div id="services" className="bg-gradient-to-b from-gray-50 to-white py-12">
                <section data-aos="zoom-in-down">
                    <div className="my-0 py-1 ">
                        {/* Luxury Introduction Section */}
                        <div className="max-w-6xl mx-auto px- sm:px-6 lg:px-1 mt-16 mb-2">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-serif text-gray-800 font-bold mb-6">
                                    Elevating Dreams into Reality
                                </h2>
                                <p className="text-xl md:text-2xl text-gray-700 italic font-serif font-medium">
                                    "Luxury is in every detail, and perfection is our signature."
                                </p>
                                <div className="h-px w-28 bg-gray-400 mx-auto mt-8"></div>
                            </div>

                            <div className="prose prose-xl mx-auto text-center mb-12 max-w-4xl">
                                <p className="text-gray-700 leading-relaxed font-medium">
                                    At <span className="font-bold text-gray-900">2K Events</span>, we redefine elegance by transforming your vision into an unforgettable masterpiece. With an unwavering commitment to excellence, we create exquisite experiences that reflect your unique story.
                                </p>
                                <p className="text-gray-700 leading-relaxed font-medium mt-6">
                                    With over a decade of expertise in luxury event planning, we craft bespoke celebrations worldwide—where every detail is curated to perfection. From intimate gatherings to grand affairs, our specialists orchestrate each event with refined sophistication and precision.
                                </p>
                                <p className="text-gray-700 leading-relaxed font-medium mt-6">
                                    We believe that exceptional events should captivate the senses and leave an everlasting impression. Through visionary creativity and elite craftsmanship, we design immersive experiences that exceed expectations.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:scale-110 text-center">
                                    <div className="flex justify-center mb-6">
                                        <svg class="w-14 h-14 text-[#C19A6B] transition-transform duration-500 ease-in-out transform hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v2M12 19v2M21 12h-2M3 12H1M16.24 7.76l-1.42 1.42M7.76 16.24l-1.42 1.42M16.24 16.24l-1.42-1.42M7.76 7.76l-1.42-1.42"></path>
                                        </svg>

                                    </div>
                                    <h3 className="font-serif text-2xl text-gray-800 font-semibold mb-3">Unmatched Attention to Detail</h3>
                                    <p className="text-gray-700 font-medium leading-relaxed">
                                        Every element is meticulously crafted with precision, ensuring every moment is unforgettable.
                                    </p>
                                    <p className="text-gray-600 text-md mt-3">
                                        Your vision, our attention to detail. Excellence in every step of the journey.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:scale-110 text-center">
                                    <div className="flex justify-center mb-6">
                                    <svg class="w-14 h-14 text-[#C19A6B] transition-transform duration-500 ease-in-out transform hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C10.4 2 9 3.4 9 5C9 6.6 10.4 8 12 8C13.6 8 15 6.6 15 5C15 3.4 13.6 2 12 2ZM7.5 6.3C6.9 5.7 5.9 5.7 5.3 6.3C4.7 6.9 4.7 7.9 5.3 8.5C5.9 9.1 6.9 9.1 7.5 8.5C8.1 7.9 8.1 6.9 7.5 6.3ZM18.7 6.3C18.1 5.7 17.1 5.7 16.5 6.3C15.9 6.9 15.9 7.9 16.5 8.5C17.1 9.1 18.1 9.1 18.7 8.5C19.3 7.9 19.3 6.9 18.7 6.3ZM12 10C10.4 10 9 11.4 9 13C9 14.6 10.4 16 12 16C13.6 16 15 14.6 15 13C15 11.4 13.6 10 12 10Z"></path>
</svg>
                                    </div>
                                    <h3 className="font-serif text-2xl text-gray-800 font-semibold mb-3">Innovative Design</h3>
                                    <p className="text-gray-700 font-medium leading-relaxed">
                                        Our designs blend sophistication with functionality, transforming spaces and experiences.
                                    </p>
                                    <p className="text-gray-600 text-md mt-3">
                                        Innovation is the key to creating an unparalleled experience that speaks volumes.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:scale-110 text-center">
                                    <div className="flex justify-center mb-6">
                                    <svg class="w-14 h-14 text-[#C19A6B] transition-transform duration-500 ease-in-out transform hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a5 5 0 0 0-5 5c0 2.7 2 5 5 5s5-2.3 5-5a5 5 0 0 0-5-5zm0 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path>
</svg>

                                    </div>
                                    <h3 className="font-serif text-2xl text-gray-800 font-semibold mb-3">Timeless Elegance</h3>
                                    <p className="text-gray-700 font-medium leading-relaxed">
                                        Our designs are classic and timeless, offering an experience that feels as luxurious as it is lasting.
                                    </p>
                                    <p className="text-gray-600 text-md mt-3">
                                        Experience the beauty of elegance that stands the test of time.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:scale-110 text-center">
                                    <div className="flex justify-center mb-6">
                                    <svg class="w-14 h-14 text-[#C19A6B] transition-transform duration-500 ease-in-out transform hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM9 20h6M7 8h10v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8z"></path>
</svg>


                                    </div>
                                    <h3 className="font-serif text-2xl text-gray-800 font-semibold mb-3">Unforgettable Memories</h3>
                                    <p className="text-gray-700 font-medium leading-relaxed">
                                        Your event is more than just a celebration; it's a cherished memory in the making.
                                    </p>
                                    <p className="text-gray-600 text-md mt-3">
                                        With every detail carefully crafted, we help you create memories that last a lifetime.
                                    </p>
                                </div>
                            </div>
                        </div>



                        <h2 className="my-5 text-center text-4xl text-gray-800 font-serif">
                            Our Professional Services
                        </h2>
                        <div className="flex justify-center">
                            <div className="w-24 border-b-4 border-gray-400"></div>
                        </div>


                        {/* Luxury Event Type Filter */}
                        <div className="flex justify-center mt-8">
                            <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-4 max-w-2xl w-full mx-4">
                                <div className="flex flex-col sm:flex-row sm:space-x-4 w-full space-y-2 sm:space-y-0">
                                    <button
                                        onClick={() => {
                                            setActiveType('wedding');
                                            setActiveCategory('all');
                                        }}
                                        className={`flex-1 px-6 py-3 rounded-lg font-serif text-md tracking-wide transition-all duration-300 ${activeType === 'wedding'
                                            ? 'bg-black text-white shadow-xl'
                                            : 'bg-white text-black hover:bg-[#F5F5F5] hover:shadow-md'}`}
                                    >
                                        Weddings
                                    </button>
                                    <button
                                        onClick={() => {
                                            setActiveType('corporate');
                                            setActiveCategory('all');
                                        }}
                                        className={`flex-1 px-6 py-3 rounded-lg font-serif text-md tracking-wide transition-all duration-300 ${activeType === 'corporate'
                                            ? 'bg-black text-white shadow-xl'
                                            : 'bg-white text-black hover:bg-[#F5F5F5] hover:shadow-md'}`}
                                    >
                                        Corporate Events
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="px-4 sm:px-8 md:px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {filteredServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
                                    onClick={() => openModal(service)}
                                >
                                    {/* Image Container */}
                                    <div className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
                                        <img
                                            src={service.thumbnailImage}
                                            srcSet={`${service.thumbnailImage.replace("upload/", "upload/w_400/")} 400w, 
                         ${service.thumbnailImage.replace("upload/", "upload/w_800/")} 800w, 
                         ${service.thumbnailImage.replace("upload/", "upload/w_1200/")} 1200w`}
                                            sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        {/* Enhanced Gradient Overlay - Adjusted for better text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                                    </div>
                                    {/* Title and Description Container - Responsive positioning and sizing */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                        <h3 className="font-serif text-xl sm:text-2xl text-white tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            {service.title}
                                        </h3>
                                        <div className="w-12 h-1 bg-pink-200 mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                                        {/* Description - Mobile-optimized with text size adjustment */}
                                        <p className="text-gray-200 mt-2 sm:mt-3 text-xs sm:text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 line-clamp-2 sm:line-clamp-3">
                                            {service.description || "Elevate your experience with our meticulously crafted service, designed with unparalleled attention to detail."}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {modalOpen && selectedService && (
                    <div
                        className="fixed inset-0 z-50 bg-black flex justify-center items-center"
                        onClick={closeModal}
                    >
                        <div
                            className="w-full h-full flex flex-col justify-center items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Loading State */}
                            {loading && (
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <LoadingSpinner />
                                </div>
                            )}

                            <img
                                src={selectedService.photos[currentPhotoIndex]}
                                alt={`${selectedService.title} - photo ${currentPhotoIndex + 1}`}
                                className={`w-full h-full object-contain transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
                                onLoad={() => setLoading(false)}
                            />

                            {/* Navigation Buttons - Made larger and more visible */}
                            {!loading && selectedService.photos.length > 1 && (
                                <>
                                    <button
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 hover:bg-black/70 p-4 rounded-full transition-all duration-300"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setLoading(true);
                                            prevPhoto(e);
                                        }}
                                    >
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 hover:bg-black/70 p-4 rounded-full transition-all duration-300"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setLoading(true);
                                            nextPhoto(e);
                                        }}
                                    >
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </>
                            )}

                            {/* Thumbnails Strip - Now positioned at bottom with semi-transparent background */}
                            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 overflow-x-auto py-4 px-2 bg-black/60 backdrop-blur-sm">
                                {selectedService.photos.map((photo, index) => (
                                    <img
                                        key={index}
                                        src={photo}
                                        alt={`Thumbnail ${index + 1}`}
                                        className={`w-16 h-16 object-cover cursor-pointer transition-all duration-300 ${currentPhotoIndex === index
                                            ? 'border-2 border-white scale-110'
                                            : 'border border-gray-600 opacity-70 hover:opacity-100'
                                            }`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setLoading(true);
                                            setCurrentPhotoIndex(index);
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Close Button - Repositioned and made more prominent */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all duration-300 z-10"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );


};

export default Services;
