import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PartyPopper, WandSparkles, Diamond, Star } from 'lucide-react'; // Assuming you're using Lucide icons


const Services = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeType, setActiveType] = useState('wedding');
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
            video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740692085/singapore_1_rdvr8u.mp4", // Add this line
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226071/DSC03534_tqnwqw.jpg",
            type: "wedding",
            category: "ceremony",
            description: "Urban elegance meets timeless luxury in our iconic Singapore-inspired celebration settings."

        },
        {
            id: "luxury-jungle", // Already provided
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


    return (
        <div id="services" className="my-3 py-0">
            {/* Services Header */}
            <h2 className="my-4 text-center text-5xl text-gray-900 font-serif tracking-tight">
                Our Prestigious Services
            </h2>
            <div className="flex justify-center">
                <div className="w-36 border-b-8 border-gray-500 transform transition-all duration-700 hover:scale-110"></div>
            </div>

            {/* Luxury Event Type Filter */}
            <div className="flex justify-center mt-16">
                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-6 max-w-2xl w-full mx-4 transform transition-all duration-700 hover:scale-105">
                    <div className="flex flex-col sm:flex-row sm:space-x-6 w-full space-y-4 sm:space-y-0">
                        <button
                            onClick={() => {
                                setActiveType('wedding');
                                setActiveCategory('all');
                            }}
                            className={`flex-1 px-8 py-5 rounded-lg font-serif text-xl tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 ${activeType === 'wedding'
                                ? 'bg-gray-800 text-white shadow-2xl scale-105'
                                : 'bg-white text-gray-800 hover:bg-[#F1F1F1]'}`}
                        >
                            Weddings
                        </button>
                        <button
                            onClick={() => {
                                setActiveType('corporate');
                                setActiveCategory('all');
                            }}
                            className={`flex-1 px-8 py-5 rounded-lg font-serif text-xl tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 ${activeType === 'corporate'
                                ? 'bg-gray-800 text-white shadow-2xl scale-105'
                                : 'bg-white text-gray-800 hover:bg-[#F1F1F1]'}`}
                        >
                            Corporate Events
                        </button>
                    </div>
                </div>
            </div>


            {/* Services Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {services
                    .filter(service => activeType === 'all' || service.type === activeType)
                    .map((service, index) => (
                        <Link
                            to={`/service/${service.id}`}
                            key={index}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
                        >
                            {/* Display only the thumbnailImage */}
                            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
                                {service.thumbnailImage && (
                                    <img
                                        src={service.thumbnailImage}
                                        alt={`${service.title} thumbnail`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 text-center"
                                        loading="lazy"
                                    />
                                )}

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                            </div>

                            {/* Title and description */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                <h3 className="font-serif italic text-xl sm:text-2xl text-white tracking-wider text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {service.title}
                                </h3>

                                <div className="w-12 h-1 bg-pink-200 mt-2 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                <p className="text-gray-200 mt-2 sm:mt-3 text-xs sm:text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 line-clamp-2 sm:line-clamp-3">
                                    {service.description || "Elevate your experience with our meticulously crafted service."}
                                </p>

                                {/* Video indicator at the end of the card */}
                                {service.video && (
                                    <div className="flex items-center mt-3 space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="text-xs text-white font-medium">Watch video</span>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};


export default Services;