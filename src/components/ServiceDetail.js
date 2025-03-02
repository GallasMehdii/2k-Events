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


    useEffect(() => {
        const services = [
            {
                id: "singapore",
                title: "Singapour",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484900/DSC03495_e8qbuw.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484904/DSC03536_yjfi4x.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484901/DSC03506_mcroc7.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484900/DSC03510_q8110i.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484917/DSC03547_e5toei.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484899/IMG_5789_m32okx.jpg",
                ],
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740692085/singapore_1_rdvr8u.mp4",
                description: "Urban elegance meets timeless luxury in our iconic Singapore-inspired celebration settings."
            },
            {
                id: "luxury-jungle",
                title: "Luxury Jungle",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350711/6U2A6506_vjbtve.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350708/6U2A6331_mwnj4t.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800//v1740485067/6U2A6336_jnttus.jpg",
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
                id: "camellia-flower",
                title: "Camellia  Flower",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239961/096A5602_chdi7e.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239954/096A5577_j4x39o.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239953/096A5622_zsrg84.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239902/096A7580_u0rrbt.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239854/096A5586_wurt3g.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483899/096A5784_hjchor.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483899/096A5722_xnwe1m.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483899/096A5762_zpbska.jpg"

                ],
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740578059/decoration_tamer_hosni_fgwofx.mp4",
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239854/096A5586_wurt3g.jpg",
                type: "wedding",
                category: "full-service",
                description: "Delicate blooms arranged with exquisite artistry to create an atmosphere of subtle, refined romance."

            },
            {
                id: "reflection",
                title: "Reflection",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350918/DSC01682_kw1vf7.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350915/DSC01545_znanob.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350903/DSC01713_t49xsp.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350983/DSC01581_u00pwf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350915/_86A7357_gyin82.jpg",
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350918/DSC01682_kw1vf7.jpg",
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740763125/burjelarab_f10smw.mp4",
                type: "wedding",
                category: "reflection",
                description: "Mirrored elements create an illusion of endless elegance, amplifying the magic of your celebration."

            },
            {
                id: "bvlgari",
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
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740762992/bvlgari_qgfej2.mp4",
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
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740692225/JARDIN_D_EDEN_omnefq.mp4",
                type: "wedding",
                category: "mosaique",
                description: "Classical Roman aesthetics reimagined with contemporary sensibilities for a timeless celebration."

            },
            {
                id: "valley-flower",

                title: "Valley Flower",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352397/--3_ysa7yi.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352395/DSC09415_krsd2e.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352364/--42_rkvyxa.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352350/--6_igndgp.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352344/--13_pslwnf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352343/--27_yhbqht.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352292/--10_ndru9g.jpg"
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352399/--11_oll416.jpg",
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740763886/1reel_meddeb_2k_lgbbhg.mp4",
                type: "wedding",
                category: "valleyflower",
                description: "Sweeping floral landscapes creating a captivating valley of blooms for your extraordinary day."

            },

            {
                id: "shade",
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
                id: "eden-garden",
                title: "Eden Garden",
                photos: [
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
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740759881/image00012_lao4kf.jpg"

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
                id: "white-rose",
                title: "White Rose",
                photos: [
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
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490590/IMG-20250225-WA0012_xlf08o.jpg",
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740762495/Morroco_zwhm2u.mp4",
                type: "wedding",
                category: "White Rose",
                description: "Sweeping floral landscapes creating a captivating valley of blooms for your extraordinary day."


            },
            {
                id: "butterfly",

                title: "Butterfly",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740840670/dolce_hkhhuo.png"
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740840670/dolce_hkhhuo.png",
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740693664/makrem_four_sesons_kydexo.mp4",
                type: "wedding",
                category: "Butterfly",
                description: "Sweeping floral landscapes creating a captivating valley of blooms for your extraordinary day."

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
            setService(foundService);
            setLoading(false);
        } else {
            // Handle not found
            navigate('/');
        }
    }, [id, navigate]);

    const openFullScreen = (photo) => {
        setSelectedPhoto(photo);
    };
    const toggleVideoPlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsVideoPlaying(true);
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
          } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
            videoRef.current.webkitRequestFullscreen();
          } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
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
                    <div className="text-center mb-12">
                        <h1 className="font-serif text-4xl md:text-5xl text-gray-800 font-bold mb-6">{service.title}</h1>
                        <p className="text-xl max-w-3xl mx-auto text-gray-600 font-medium">{service.description}</p>
                        <div className="h-px w-28 bg-gray-400 mx-auto mt-8"></div>
                    </div>

                    {/* Video Section - Redesigned for better appearance */}
                    {service.video && (
                        <div className="mb-12">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="p-6 pb-3">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title} Video</h3>
                                    <p className="text-gray-600">Experience the elegance and detail of our {service.title} theme in motion.</p>
                                </div>
                                <div className="px-6 pb-6">
                                    <div className="rounded-lg overflow-hidden shadow-inner relative" style={{ maxHeight: "500px" }}>
                                        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                                            <video
                                                ref={videoRef}
                                                className="w-full h-auto max-h-[500px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain"
                                                poster={service.thumbnailImage || service.photos[0]}
                                                onPlay={() => setIsVideoPlaying(true)}
                                                onPause={() => setIsVideoPlaying(false)}
                                                onClick={toggleVideoPlay}
                                                playsInline
                                            >
                                                <source src={service.video} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>

                                            {/* Custom play button overlay */}
                                            {!isVideoPlaying && (
                                                <div
                                                    className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer"
                                                    onClick={toggleVideoPlay}
                                                >
                                                    <div className="w-16 h-16 bg-white bg-opacity-80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Custom video controls */}
                                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                                                <div className="flex items-center justify-between">
                                                    <button
                                                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                                        onClick={toggleVideoPlay}
                                                    >
                                                        {isVideoPlaying ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                            </svg>
                                                        ) : (
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                            </svg>
                                                        )}
                                                    </button>

                                                    <div className="text-white text-sm ml-3">
                                                        {service.title} showcase
                                                    </div>

                                                    <button
                                                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors ml-auto"
                                                        onClick={enterFullScreen} // Use enterFullScreen instead of the inline fullscreen request
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Main Content Area - Photo Gallery */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="border-b border-gray-200 p-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Photo Gallery</h2>
                            <p className="text-gray-600 mt-2">Browse our collection of stunning photos from this service.</p>
                        </div>

                        {/* Masonry Photo Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                            {service.photos.map((photo, index) => (
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