import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import LoadingSpinner from './LoadingSpinner';
import Footer from './Footer';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState(null); // Track the selected photo for full-screen view
    const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Track video play state
    const videoRef = useRef(null);
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);



    useEffect(() => {
        const services = [
            {
                id: "singapore",
                title: "Singapour",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828934/BEFORE-SINGAPOUR_v8clvw.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484900/DSC03495_e8qbuw.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484904/DSC03536_yjfi4x.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484901/DSC03506_mcroc7.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484900/DSC03510_q8110i.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484917/DSC03547_e5toei.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484899/IMG_5789_m32okx.jpg",
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484900/DSC03495_e8qbuw.jpg",
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740692085/singapore_1_rdvr8u.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741562250/singapore_2_scnowd.mp4"
                ],
                description: "Urban elegance meets timeless luxury in our iconic Singapore-inspired celebration settings."
            },
            {
                id: "luxury-jungle",
                title: "Luxury Jungle",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828940/BEFORE-JUNGLE_tljfx9.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350711/6U2A6506_vjbtve.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350708/6U2A6331_mwnj4t.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800//v1740485067/6U2A6336_jnttus.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350669/6U2A6349_p4yvjg.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350562/6U2A6389_du7zcd.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350616/6U2A6499_wo7l8f.jpg"
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350711/6U2A6506_vjbtve.jpg",
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741829693/jungle_vofikn.mp4",
                type: "wedding",
                category: "jungle",
                description: "Bold tropical elegance merges with refined sophistication in our captivating jungle-inspired designs."
            },
            {
                id: "Butterfly",
                title: "Butterfly",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828933/BEFORE-BUTTERFLY_hfcck3.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741781012/Butterfly_makrem_four_sesonss0_lciiua.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741781013/Butterfly_makrem_four_sesons2_olmw0b.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741781013/Butterfly_makrem_four_sesonsi0_zj8v3s.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741781015/Butterfly_makrem_four_sesonsz1_uytafn.jpg",

                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741781012/Butterfly_makrem_four_sesonss0_lciiua.jpg",
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741781023/Butterfly_makrem_four_seasons_vtmax8.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741781033/Butterfly_makrem_four_sesons_lic6r7.mp4"
                ],
                type: "wedding",
                category: "Butterfly",
                description: "Bold tropical elegance merges with refined sophistication in our captivating jungle-inspired designs."
            },
            {
                id: "GrassLand",
                title: "GrassLand",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562397/pict_13_p4beg3.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562378/pict_218_n2t8ze.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562400/pict_245_xlgvf6.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741611440/pic5_inxg94.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741611439/pic4_uq7vvg.jpg",
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741611440/pic5_inxg94.jpg",
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741611305/decor_2_xezkyj.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741562494/reeel_couple_gj7eam.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741783813/reception_msa5vo.mp4"
                ],

                type: "wedding",
                category: "GrassLand",
                description: "Sophisticated interplay of light and shadow creating dramatic ambiance and unforgettable moments."

            },
            {
                id: "Blue-Dream",
                title: "Blue-Dream",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828938/BEFORE-BLUE-DREAM_x9sfrh.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739539/096A6636_sq1ajs.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739538/096A6545_qm7iol.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739533/096A5200_nffknf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739532/096A4430_upjaqb.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739532/096A4461_ivl1zs.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739532/096A5214_aogbib.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739534/096A3961_mtxcmx.jpg",
                ],
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741783565/Blue_Dream_khawla_1_fhmoio.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741783610/Blue_Dream_wedding_khawla_2_fkpogn.mp4"
                ],

                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739534/096A3961_mtxcmx.jpg",
                type: "wedding",
                category: "Blue Dream",
                description: "A timeless celebration of tradition and grandeur, where heritage and romance shine in perfect harmony."
            },

            {
                id: "Sol & Luna",
                title: "Sol & Luna",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828936/BEFORE-SOL-AND-LUNA_qqonwh.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565155/sol_edmu3w.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565144/sol3_ya8lat.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565144/sol5_jh0cfh.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565144/sol6_n8d84m.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741611856/sol4_pt56bm.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741611877/sol2_sfaop9.jpg",
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565144/sol3_ya8lat.jpg",
                type: "wedding",
                category: "Sol & Luna",
                description: "Sophisticated interplay of light and shadow creating dramatic ambiance and unforgettable moments."

            },
            {
                id: "camellia-flower",
                title: "Camellia  Flower",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828933/BEFORE-CAMELIA-FLOWER_yourd4.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239961/096A5602_chdi7e.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239954/096A5577_j4x39o.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239953/096A5622_zsrg84.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239902/096A7580_u0rrbt.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239854/096A5586_wurt3g.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483899/096A5784_hjchor.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483899/096A5722_xnwe1m.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483899/096A5762_zpbska.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741783875/Shakouch_Image_Camelia_flower13_scywlx.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741783873/Tamer_Image_Camelia_flower136_wh67bh.jpg",


                ],
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740578059/decoration_tamer_hosni_fgwofx.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784046/Camelia_flower_tamerhosni_iznccd.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784028/Camellia_TAMER_xxq9d4.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741783995/Camelia_flower_Shakouch_t4nzoh.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741783813/reception_msa5vo.mp4",

                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239854/096A5586_wurt3g.jpg",
                type: "wedding",
                category: "full-service",
                description: "Delicate blooms arranged with exquisite artistry to create an atmosphere of subtle, refined romance."

            },
            {
                id: "reflection",
                title: "Reflection",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828933/BEFORE-REFLECTION_vjaje2.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350918/DSC01682_kw1vf7.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350915/DSC01545_znanob.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350903/DSC01713_t49xsp.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350983/DSC01581_u00pwf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350915/_86A7357_gyin82.jpg",
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350918/DSC01682_kw1vf7.jpg",
                video: [
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740351005/burjelarab_dtwiai.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784789/burj_elarabb_1_jd6gzv.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784772/burj_el_arab_2_fh7vsd.mov",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784699/burj_el_arab_3_kdzvyb.mp4"

                ],
                type: "wedding",
                category: "reflection",
                description: "Mirrored elements create an illusion of endless elegance, amplifying the magic of your celebration."

            },
            {
                id: "bvlgari",
                title: "Bvlgari",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828933/BEFORE-BVLGARY_yuprxc.jpg",
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
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740762992/bvlgari_qgfej2.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740691205/bvlgari_2_apukn9.mp4"
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348769/DSC08033_rmj5wk.jpg",
                type: "wedding",
                category: "bvlgari",
                description: "Opulent materials and precision craftsmanship create a sensory experience of uncompromising luxury."

            },


            {
                id: "ihg-event-arabie-saoudite",
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
                id: "ihg-event-doha",
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
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740757317/IHG_Event-Retif_mrzzj8.mp4",
                type: "corporate",
                category: "ihg-event",
                description: "Qatari-inspired elegance with innovative design elements elevating the corporate experience."

            },
            {
                id: "les-jardins-romains",
                title: "Les Jardins Romains",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828937/BEFORE-JARDIN-ROMAIN_qgokm0.jpg",
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
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740692225/JARDIN_D_EDEN_omnefq.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741785066/Jardin_Romain_ox9shj.mp4"
                ],
                type: "wedding",
                category: "mosaique",
                description: "Classical Roman aesthetics reimagined with contemporary sensibilities for a timeless celebration."

            },
            {
                id: "valley-flower",

                title: "Valley Flower",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828937/BEFORE-VALLEY-FOWER_ou4cjp.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352397/--3_ysa7yi.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352395/DSC09415_krsd2e.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352364/--42_rkvyxa.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352350/--6_igndgp.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352344/--13_pslwnf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352343/--27_yhbqht.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352292/--10_ndru9g.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565150/5_rnvwqn.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741563100/4_oardf6.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741563100/3_pnacbt.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741563100/5_ojns9f.jpg",

                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352399/--11_oll416.jpg",
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741610957/Vid_3_mjwx2i.mov",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741610922/Vid_2_ewyage.mov",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741785131/Valley_flower_deco_222_meddeb_reel_zgxtbw.mov"
                ],
                type: "wedding",
                category: "valleyflower",
                description: "Sweeping floral landscapes creating a captivating valley of blooms for your extraordinary day."

            },


            {
                id: "shade",
                title: "Shade",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828936/BEFORE-SHADE_kc976u.jpg",
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
                id: "eden-garden",
                title: "Eden Garden",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828937/BEFORE-EDEN-GARDEN_bcufdq.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483928/-103__i3cc5e.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483928/-114__amu7uf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483926/-107__aut7jy.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483926/-104__eqa8td.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483925/-100__ikfasm.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483922/-105__hf3giu.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483922/-112__dnpw4p.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483922/-99__aogrbz.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740759870/image00011_dfkiqf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740759881/image00010_lrefgz.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740759881/image00012_lao4kf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562101/545461_xm6css.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562103/545464_o1dshk.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562104/1-756_uockpu.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562109/545467_u3wzgl.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/v1741784279/Jardin_d_eden_2_xvh3ch.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/v1741784277/Jardin_d_eden1_giapnn.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/v1741784275/Jardin_d_eden_3_el4wsw.jpg"

                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483922/-112__dnpw4p.jpg",
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740764169/videeooo_ez8gb1.mp4",
                type: "wedding",
                category: "eden",
                description: "Sophisticated interplay of light and shadow creating dramatic ambiance and unforgettable moments."

            },
            {
                id: "porsche-event",
                title: "Porshe Event",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779867/184-sur-355_bqysac.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779867/290-sur-355_l5fk2q.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779867/11-sur-355_-_1_cxkczv.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779868/201-sur-355_q4pad4.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779869/4-sur-355_ypzyer.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779871/323-sur-355_-_2_oykjij.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779871/134-sur-355_etciph.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779872/20-sur-355_mo4pwa.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779875/28-sur-355_cjon9m.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779872/325-sur-355_pdk3td.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779875/225-sur-355_m59gxl.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779876/94-sur-355_bwbarv.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779876/26-sur-355_-_1_f3n9br.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779876/30-sur-355_rdc1ob.jpg",

                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435837/34-sur-355_zmstii.jpg",
                type: "corporate",
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741780060/Porsche_2_uszo3r.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741780836/Porsche_1_h07j71.mp4"
                ],
                category: "porsche-event",
                description: "Precision engineering meets exceptional design in our automotive-inspired corporate experiences."

            },
            {
                id: "porsche-event",
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

            },
            {
                id: "Golden Minaret",
                title: "Golden Minaret",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828938/BEFORE-MOROCCO_dogago.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490589/IMG-20250225-WA0010_m0jqtr.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490588/IMG-20250225-WA0018_eyjt4p.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490588/IMG-20250225-WA0019_ozaika.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490589/IMG-20250225-WA0007_s79i8t.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490589/IMG-20250225-WA0020_lg2otd.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490589/IMG-20250225-WA0009_ybkrw1.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490589/IMG-20250225-WA0005_llvs7x.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490590/IMG-20250225-WA0012_xlf08o.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490594/IMG-20250225-WA0013_yumikp.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490594/IMG-20250225-WA0011_aacq76.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565156/7_epagsi.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565156/2_umnrgf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565155/9_ucvmjt.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565155/8_eont8i.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565154/14_jhu8aa.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565154/6_gadjfj.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565153/5_syl0z6.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565153/13_f3s6ci.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565153/10_mxwmfr.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565152/12_ecotbz.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565151/11_piirrm.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741784335/Morrocco3_rbtdcv.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741784338/Morrocooo_hb0tcr.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741784345/Morroco1_wnm5ba.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741784342/Morrocoo0_nnl7to.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741784346/Morrocoo40_nmiovw.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741784348/Morrocoo0240_mwcxjh.jpg"

                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490590/IMG-20250225-WA0012_xlf08o.jpg",
                video: [
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740762495/Morroco_zwhm2u.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784449/Morocco_gopro_1_sg12ht.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784387/Drone_jbesy3.mp4",
                ],
                type: "wedding",
                category: "White Rose",
                description: "A timeless celebration of tradition and grandeur, where heritage and romance shine in perfect harmony."


            },
            {
                id: "Jullana",
                title: "Jullana",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741736136/j2_e5j1cv.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741736136/j_f1m8ow.jpg"
                ],
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741562354/jullanar_qo7mmu.mp4",
                type: "corporate",
                category: "Jullana",
                description: "Precision engineering meets exceptional design in our automotive-inspired corporate experiences."

            },
            {
                id: "ihg-kuwait",
                title: "IHG Kuwait",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765431/7X7A4989_lyjxo9.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765466/7X7A4746_hyohld.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765551/7X7A4843_eracgq.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765620/7X7A4741_u5gysl.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765858/7X7A4735_i8z7hh.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765881/7X7A4744_gvssrr.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765892/7X7A5070_bwmtzq.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765945/7X7A4590_hkdxc5.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766002/7X7A4441_qoqs9o.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766017/7X7A4452_kmfprn.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766073/7X7A4514_skygki.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766091/7X7A4454_lgziy7.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766095/7X7A4465_vxambp.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766101/7X7A4723_jvdsgm.jpg",
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766101/7X7A4723_jvdsgm.jpg",
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740839983/KD_2_1_oion50.mp4",
                type: "corporate",
                category: "kuwait",
                description: "Innovative floral designs and advanced event styling, crafted to transform corporate gatherings at IHG Kuwait into sophisticated, visually stunning experiences."

            }

        ];

        const foundService = services.find(service => service.id === id);

        if (foundService) {
            // Process the service data before setting it in state
            const processedService = processServiceData(foundService);
            setService(processedService);
            setLoading(false);
        } else {
            // Handle not found
            navigate('/');
        }
    }, [id, navigate]);

    useEffect(() => {
        if (videoRef.current && service.videos && service.videos.length > 0) {
            // Reset video when selected video changes
            videoRef.current.load();
            setIsVideoPlaying(false);
        }
    }, [selectedVideoIndex, service]);

    const openFullScreen = (photo) => {
        // Pause video if it's playing when opening a photo
        if (videoRef.current && isVideoPlaying) {
            // Small delay to prevent interruption errors
            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.pause();
                    setIsVideoPlaying(false);
                }
            }, 50);
        }
        setSelectedPhoto(photo);
    };

    const processServiceData = (serviceData) => {
        const processed = { ...serviceData };

        // Initialize videos array if it doesn't exist
        if (!processed.videos) {
            processed.videos = [];
        }

        // Handle case where video is a string
        if (typeof processed.video === 'string' && processed.videos.length === 0) {
            processed.videos = [processed.video];
        }

        // Handle case where video is already an array
        if (Array.isArray(processed.video) && processed.videos.length === 0) {
            processed.videos = [...processed.video];
        }

        return processed;
    };

    const toggleVideoPlay = () => {
        if (videoRef.current && service.videos && service.videos.length > 0) {
            // Use a flag to prevent rapid play/pause calls
            if (!isVideoPlaying) {
                // Add a small delay to prevent interruption errors
                setTimeout(() => {
                    if (videoRef.current) {
                        videoRef.current.play()
                            .then(() => {
                                setIsVideoPlaying(true);
                            })
                            .catch(err => {
                                console.error("Video play error:", err);
                                setIsVideoPlaying(false);
                            });
                    }
                }, 50);
            } else {
                videoRef.current.pause();
                setIsVideoPlaying(false);
            }
        }
    };

    const closeFullScreen = () => {
        setSelectedPhoto(null);
    };
    const enterFullScreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.mozRequestFullScreen) { // Firefox
                videoRef.current.mozRequestFullScreen();
            } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari, and Opera
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
                videoRef.current.msRequestFullscreen();
            }
        }
    };

    if (loading || !service) {
        return (
            <>
                <NavBar />
                <div className="flex justify-center items-center min-h-screen">
                    <LoadingSpinner />
                </div>
            </>
        );
    }

    return (
        <>
            <NavBar />
            <div className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Service Header */}
                    <div className="text-center mb-12 pt-12 md:pt-20"> {/* Responsive padding */}
                        <h1 className="text-4xl md:text-5xl text-gray-800 font-serif italic mb-6">{service.title}</h1>
                        <p className="text-xl max-w-3xl mx-auto text-gray-600 font-medium">{service.description}</p>
                        <div className="h-px w-28 bg-gray-400 mx-auto mt-8"></div>
                    </div>


                    {service.videos && service.videos.length > 0 ? (
                        <div className="mb-12">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="p-6 pb-3">
                                    <h3 className="text-2xl font-serif italic text-gray-800 mb-2">{service.title} Videos</h3>
                                    <p className="text-gray-600">
                                        Experience the elegance and detail of our {service.title} theme in motion.
                                        {service.videos.length > 1 && (
                                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {service.videos.length} Videos Available
                                            </span>
                                        )}
                                    </p>
                                </div>

                                {/* Video Player with indicators */}
                                <div className="px-6 pb-6">
                                    <div className="rounded-lg overflow-hidden shadow-inner relative" style={{ maxHeight: "500px" }}>
                                        {/* Video counter indicator - Only show if multiple videos */}
                                        {service.videos.length > 1 && (
                                            <div className="absolute top-4 right-4 z-10 bg-black bg-opacity-70 text-white text-xs font-medium px-2 py-1 rounded-full">
                                                Video {selectedVideoIndex + 1} of {service.videos.length}
                                            </div>
                                        )}

                                        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                                            <video
                                                ref={videoRef}
                                                className="w-full h-auto max-h-[500px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain"
                                                poster={service.thumbnailImage || service.photos[0]}
                                                onPlay={() => {
                                                    setIsVideoPlaying(true);
                                                    if (window.innerWidth <= 768) {
                                                        enterFullScreen();
                                                    }
                                                }}
                                                onPause={() => setIsVideoPlaying(false)}
                                                onClick={toggleVideoPlay}
                                                playsInline
                                                loading="lazy"  // Lazy load the video

                                            >
                                                <source src={service.videos[selectedVideoIndex]} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>

                                            {/* Enhanced play button overlay */}
                                            {!isVideoPlaying && (
                                                <div
                                                    className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer"
                                                    onClick={toggleVideoPlay}
                                                >
                                                    <div className="relative">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white opacity-80" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                        </svg>

                                                        {/* Video number indicator inside play button */}
                                                        {service.videos.length > 1 && (
                                                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-black text-xs font-bold px-3 py-1 rounded-full">
                                                                {selectedVideoIndex + 1}/{service.videos.length}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Improved Video Selector - Visual indicator of multiple videos */}
                                    {service.videos.length > 1 && (
                                        <>
                                            <div className="mt-4 flex items-center justify-between">
                                                <h4 className="text-sm font-medium text-gray-700">Select Video</h4>
                                                <span className="text-xs text-gray-500">{service.videos.length} videos available</span>
                                            </div>
                                            <div className="mt-2 flex items-center space-x-3 overflow-x-auto py-2">
                                                {service?.videos?.map((video, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => {
                                                            // Pause current video if playing
                                                            if (videoRef.current && isVideoPlaying) {
                                                                videoRef.current.pause();
                                                                setIsVideoPlaying(false);
                                                            }
                                                            setSelectedVideoIndex(index);
                                                        }}
                                                        className={`relative min-w-[120px] h-16 rounded-lg overflow-hidden border-2 transition-all ${selectedVideoIndex === index
                                                            ? 'border-blue-500 shadow-md'
                                                            : 'border-gray-200 hover:border-gray-300'
                                                            }`}
                                                    >
                                                        <div className="flex flex-col items-center bg-gray-900 bg-opacity-40 backdrop-blur-md shadow-md rounded-lg p-2 border border-gray-600 w-auto max-w-[120px] sm:max-w-[140px]">
                                                            <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
                                                                Video {index + 1}
                                                            </span>
                                                            {selectedVideoIndex === index && (
                                                                <span className="text-white text-[10px] sm:text-xs mt-1 bg-gray-700 px-2 py-0.5 rounded-full shadow-md animate-pulse">
                                                                    🎬 Playing
                                                                </span>
                                                            )}
                                                        </div>


                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : null}


                    {/* Main Content Area - Photo Gallery */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="border-b border-gray-200 p-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Photo Gallery</h2>
                            <p className="text-gray-600 mt-2">Browse our collection of stunning photos from this service.</p>
                        </div>

                        {/* Masonry Photo Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                            {service?.photos?.map((photo, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
                                    onClick={() => openFullScreen(photo)}
                                >
                                    {/* Main image with parallax effect */}
                                    <div className="overflow-hidden h-72 md:h-80">
                                        <img
                                            src={photo}
                                            alt={`${service.title} - Photo ${index + 1}`}
                                            className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out transform group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Card caption */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                        <div className="flex items-center justify-between">
                                            <span className="text-white font-medium truncate">{service.title} - {index + 1}</span>
                                            <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">View</span>
                                        </div>
                                    </div>

                                    {/* Top info bar with subtle background */}
                                    <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex items-center space-x-1">
                                            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                            <span className="text-xs text-white font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                                                {service.category || 'Photo'}
                                            </span>
                                        </div>
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Focus ring on click */}
                                    <div className="absolute inset-0 ring-0 group-active:ring-4 ring-white/30 rounded-xl transition-all duration-150"></div>
                                </div>
                            ))}
                        </div>

                        {/* Enhanced Full-Screen Photo Modal */}
                        {selectedPhoto && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-95 flex justify-center items-center z-50"
                                onClick={closeFullScreen}
                            >
                                <div className="relative max-w-7xl max-h-[90vh] p-4">
                                    <div className="overflow-hidden rounded-xl">
                                        <img
                                            src={selectedPhoto}
                                            alt="Full Screen"
                                            className="max-w-full max-h-[85vh] object-contain"
                                        />
                                    </div>


                                    {/* Navigation controls */}
                                    <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
                                        <button
                                            className="w-12 h-12 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                const currentIndex = service.photos.indexOf(selectedPhoto);
                                                const prevIndex = (currentIndex - 1 + service.photos.length) % service.photos.length;
                                                setSelectedPhoto(service.photos[prevIndex]);
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            className="w-12 h-12 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                const currentIndex = service.photos.indexOf(selectedPhoto);
                                                const nextIndex = (currentIndex + 1) % service.photos.length;
                                                setSelectedPhoto(service.photos[nextIndex]);
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Close button */}
                                    <button
                                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                                        onClick={closeFullScreen}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    {/* Photo info */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-sm rounded-full py-2 px-4 text-white text-sm">
                                        {service.photos.indexOf(selectedPhoto) + 1} / {service.photos.length}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <Footer />

        </>
    );
};

export default ServiceDetail;