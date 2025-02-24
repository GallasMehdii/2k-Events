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

    const services = [
        {
            title: "Singapour",
            photos: [
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226077/DSC03568_yvgxx7.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226071/DSC03534_tqnwqw.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226063/DSC03521_exkyyi.jpg",
                "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226516/zz_i7t6bz.jpg"
            ],
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226071/DSC03534_tqnwqw.jpg",
            type: "wedding",
            category: "ceremony"
        },
        {
            title: "Eden",
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
            category: "luxury"
        },
        {
            title: "Jungle",
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
            category: "jungle"
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
            category: "full-service"
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
            category: "reflection"
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
            category: "bvlgari"
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
            category: "ihg-event"
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
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740354115/a_yrejrq.jpg",
            type: "corporate",
            category: "ihg-event"
        },
        {
            title: "Mosaique",
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
            category: "mosaique"
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
            category: "valleyflower"
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
            category: "shade"
        },

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
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-4xl text-gray-800 font-serif">
                            Our Professional Services
                        </h2>
                        <div className="flex justify-center">
                            <div className="w-24 border-b-4 border-gray-400"></div>
                        </div>

                        <div className="flex justify-center mt-8 space-x-4">
                            <button
                                onClick={() => {
                                    setActiveType('wedding');
                                    setActiveCategory('all');
                                }}
                                className={`px-6 py-2 rounded-full font-serif transition-all duration-300 ${activeType === 'wedding'
                                    ? 'bg-gray-800 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                Weddings
                            </button>
                            <button
                                onClick={() => {
                                    setActiveType('corporate');
                                    setActiveCategory('all');
                                }}
                                className={`px-6 py-2 rounded-full font-serif transition-all duration-300 ${activeType === 'corporate'
                                    ? 'bg-gray-800 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                Corporate Events
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            {categories[activeType].map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-4 py-1 rounded-full text-sm transition-all duration-300 ${activeCategory === category.id
                                        ? 'bg-pink-100 text-gray-800'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="px-4 sm:px-8 md:px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl cursor-pointer"
                                    onClick={() => openModal(service)}
                                >
                                    {/* Image Container */}
                                    <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
                                        <img
                                            src={service.thumbnailImage}
                                            srcSet={`${service.thumbnailImage.replace("upload/", "upload/w_400/")} 400w, 
                                                     ${service.thumbnailImage.replace("upload/", "upload/w_800/")} 800w, 
                                                     ${service.thumbnailImage.replace("upload/", "upload/w_1200/")} 1200w`}
                                            sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    </div>
                                    {/* Title Container */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="font-serif text-2xl text-white tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {modalOpen && selectedService && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-95 flex justify-center items-center"
                        onClick={closeModal}
                    >
                        <div
                            className="relative w-full h-full flex flex-col justify-center items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative max-w-7xl max-h-[85vh] p-4 flex justify-center items-center">
                                {/* Loading State */}
                                {loading && <LoadingSpinner />}


                                <img
                                    src={selectedService.photos[currentPhotoIndex]}
                                    alt={`${selectedService.title} - photo ${currentPhotoIndex + 1}`}
                                    className={`max-w-full max-h-[85vh] object-contain transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
                                    onLoad={() => setLoading(false)}
                                />

                                {/* Navigation Buttons */}
                                {!loading && selectedService.photos.length > 1 && (
                                    <>
                                        <button
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setLoading(true);
                                                prevPhoto(e);
                                            }}
                                        >
                                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 19l-7-7 7-7"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setLoading(true);
                                                nextPhoto(e);
                                            }}
                                        >
                                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                                {/* Thumbnails Strip */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 overflow-x-auto py-2">
                                    {selectedService.photos.map((photo, index) => (
                                        <img
                                            key={index}
                                            src={photo}
                                            alt={`Thumbnail ${index + 1}`}
                                            className={`w-16 h-16 object-cover cursor-pointer border-2 ${currentPhotoIndex === index ? 'border-white' : 'border-transparent'}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setLoading(true);
                                                setCurrentPhotoIndex(index);
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 text-white hover:text-gray-300"
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
