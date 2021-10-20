const services = [
    {
        id: 1,
        thumb: "https://image.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_53876-14933.jpg",
        serviceName: "General Health Checkup",
        price: 5000,
        tests: {
            test1: "CBC ( Complete Blood Count)",
            test2: "RBS ( Random Blood Sugar)",
            test3: "Lipid Profile",
            test4: "SGPT",
            test5: "Serum Creatinine",
            test6: "HbsAg",
            test7: "TSH",
            test8: "Urine R/M/E",
            test9: "ECG",
            test10: "Chest X-ray P/A view",
            test11: "USG of Whole Abdomen",
            test12: "General Physical Examination"
        },
        about: {
            drname: "Prof. Dr. A.K Khan",
            position: "Laboratory Director",
            qualification: "MBBS, FCPS, M. PHIL (PATH),WHO FELLOW IMMUNOLOGY (UK)",
            img: "https://www.shareicon.net/data/128x128/2016/08/18/813844_people_512x512.png" 
        },
        blog:{
            title: "Should You Get a Microbiome Test?",
            pic: "https://image.freepik.com/free-photo/scientist-putting-blood-sample-from-test-tube-with-micropipette-petri-dish-analysing-chemical-reaction_482257-487.jpg",
            article: "A growing number of companies offer tests that provide a glimpse into our gut microbiome...",
            writter: "Anahad O’Connor",
            source: "The New York Times",
            link:"https://www.nytimes.com/2021/10/13/well/live/microbiome-test.html"
        },
        contact: {
            location: "Uttara: sector 2",
            City: "Dhaka",
            cell: "+880-1xxxxxxx2",
            map: "https://cdn.risingbd.com/media/imgAll/2020August/en/uttara-risingbd-2011201158-2011201603.jpg"
        }

    },
    {
        id: 2,
        thumb: "https://image.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17877.jpg",
        serviceName: "Standard Health Screening Package",
        price: 7500,
        tests: {
            test1: "Height & Weight",
            test2: "Body Mass Index (BMI)",
            test3: "Physical Examination by Doctor",
            test4: "Complete Blood Count (CBC)",
            test5: "Blood Sugar + CUS (Fasting & 2 Hours ABF)",
            test6: "Serum Lipid Profile (Fasting)",
            test7: "SGPT, HBsAg",
            test8: "Serum Uric Acid",
            test9: "Serum Creatinine",
            test10: "Urine R/M/E, ECG",
            test11: "X-Ray Chest P/A View",
            test12: "USG of whole abdomen",
            test13: "Echocardiogram"
        },
        about: {
            drname: "P.C Mallik",
            position: "Technical Supervisor",
            qualification: "B.S.C in Medical Technology",
            img: "https://www.shareicon.net/data/128x128/2016/08/18/813844_people_512x512.png" 
        },
        blog:{
            title: "Thinking about COVID booster shots? Here’s what to know",
            pic: "https://image.freepik.com/free-photo/arrangement-with-coronavirus-vaccine-bottle_23-2148920163.jpg",
            article: "Vaccination against the virus that causes COVID-19 is the most important lifesaving tool we have in this pandemic...",
            writter: "Robert H. Shmerling",
            source: "Harvard Health Publishing",
            link:"https://www.health.harvard.edu/blog/thinking-about-covid-booster-shots-heres-what-to-know-202110072610"
        },
        contact: {
            location: "Dhanmondi 16",
            City: "Dhaka",
            cell: "+880-1xxxxxxx3",
            map: "https://d30fl32nd2baj9.cloudfront.net/bangla-media/2014/01/30/dhanmondi-map.jpg/ALTERNATES/w640/Dhanmondi-Map.jpg"
        }

    },
    {
        id: 3,
        thumb: "https://image.freepik.com/free-photo/medical-physician-doctor-man_1150-15053.jpg",
        serviceName: "Premier Health Screening Package",
        price: 10000,
        tests: {
            test1: "Height & Weight",
            test2: "Body Mass Index (BMI)",
            test3: "Physical Examination by Doctor",
            test4: "Complete Blood Count (CBC)",
            test5: "Blood Sugar + CUS (Fasting & 2 Hours ABF)",
            test6: "Serum Lipid Profile (Fasting)",
            test7: "SGPT, HBsAg",
            test8: "Serum Uric Acid",
            test9: "Serum Creatinine",
            test10: "Urine R/M/E, ECG",
            test11: "X-Ray Chest P/A View",
            test12: "USG of whole abdomen",
            test13: "Echocardiogram",
            test14: "HBsAg, TSH, Serum Uric Acid",
            test15: "Serum Creatinine, Blood Urea",
            test16: "Serum Electrolytes, Syrum Bilirubin"
        },
        about: {
            drname: "P.C Mallik",
            position: "General Supervisor",
            qualification: "B.S.C in Medical Technology",
            img: "https://www.shareicon.net/data/128x128/2016/08/18/813844_people_512x512.png" 
        },
        blog:{
            title: "POTS: Diagnosing and treating this dizzying syndrome",
            pic: "http://content.health.harvard.edu/wp-content/uploads/2021/10/790b0909-1e86-4ee0-b7cd-571d9bc34a64.jpg",
            article: "Most of us don’t think twice about standing up. Yet for people affected by a disorder called postural orthostatic tachycardia syndrome...",
            writter: "Dara K. Lee Lewis",
            source: "Harvard Health Publishing",
            link:"https://www.health.harvard.edu/blog/pots-diagnosing-and-treating-this-dizzying-syndrome-202110062611"
        },
        contact: {
            location: "Mirpur 1",
            City: "Dhaka",
            cell: "+880-1xxxxxxx4",
            map: "https://d30fl32nd2baj9.cloudfront.net/media/2013/12/25/mirpur-map.jpg1/BINARY/w940/Mirpur-map.jpg"
        }

    },
    {
        id: 4,
        thumb: "https://image.freepik.com/free-photo/brunette-smiling-doctor-uniform-looking-x-ray-image_171337-5821.jpg",
        serviceName: "Junior Executive Health Screening(JEH)",
        price: 6800,
        tests: {
            test1: "BMI( Body Composition Analysis)",
            test2: "Physical Examination By Doctor",
            test3: "Complete Blood Count (CBC)",
            test4: "Serum Lipid Profile ( Fasting)",
            test5: "Serum Uric Acid",
            test6: "TSH",
            test7: "HBA1c",
            test8: "Blood Grouping & RH factor",
            test9: "Blood Urea",
            test10: "Serum Creatinine",
            test11: "Serum Electrolytes",
            test12: "Urine R/M/E",
            test13: "Electrocardiogram(ECG)",
            test14: "X-Ray Chest P/A View",
            test15: "Nutritionist Advice",
            test16: "Complimentry Breakfast"
        },
        about: {
            drname: "k. Jahan",
            position: "Medical Laboratory Scientist (MLS)",
            qualification: "B.S.C in Medical Technology",
            img: "https://www.shareicon.net/data/128x128/2016/08/18/813849_people_512x512.png" 
        },
        blog:{
            title: "Did we really gain weight during the pandemic?",
            pic: "http://content.health.harvard.edu/wp-content/uploads/2021/10/d5dec8d2-48f4-42e9-a29a-597967ebc775.jpg",
            article: "Many people have been talking about the COVID 15, referring to gaining 15 pounds during quarantine. But did people really gain weight?...",
            writter: "Elizabeth Pegg Frates",
            source: "Harvard Health Publishing",
            link:"https://www.health.harvard.edu/blog/did-we-really-gain-weight-during-the-pandemic-202110052606"
        },
        contact: {
            location: "Kakrail",
            City: "Dhaka",
            cell: "+880-1xxxxxxx5",
            map: "https://ecdn.banglatribune.com/contents/cache/images/800x0x1/uploads/media/2018/10/14/13015d651132cea6eb8f1a39c89a9079-5bc2f999dbc7c.jpg"
        }

    },
    {
        id: 5,
        thumb: "https://image.freepik.com/free-photo/nurse-taking-notes-x-ray-room_107420-64796.jpg",
        serviceName: "Executive Health Screening (EHS)",
        price: 7900,
        tests: {
            test1: "BMI( Body Composition Analysis)",
            test2: "Physical Examination By Doctor",
            test3: "Complete Blood Count (CBC)",
            test4: "Serum Lipid Profile ( Fasting)",
            test5: "Serum Uric Acid",
            test6: "TSH",
            test7: "HBA1c",
            test8: "HBsAg",
            test9: "Blood Urea",
            test10: "Serum Creatinine",
            test11: "Serum Electrolytes",
            test12: "Urine R/M/E",
            test13: "Electrocardiogram(ECG)",
            test14: "X-Ray Chest P/A View",
            test15: "Nutritionist Advice",
            test16: "Complimentry Breakfast",
            test17: "Serum Bilirubin",
            test18: "SGPT",
            test19: "Alkaline Phosphate",
            test20: "Serum Bilirubin"
        },
        about: {
            drname: "T. Enam",
            position: "Medical Laboratory Technician(MLT)",
            qualification: "B.S.C in Medical Technology",
            img: "https://www.shareicon.net/data/128x128/2016/08/18/813844_people_512x512.png" 
        },
        blog:{
            title: "POTS: Lightheadedness and a racing heart",
            pic: "https://domf5oio6qrcr.cloudfront.net/medialibrary/11762/217ba476-b737-401b-b57d-c8585005c231.jpg",
            article: "This past February, a 57-year-old firefighter came to my cardiology clinic after experiencing a strange set of symptoms...",
            writter: "Dara K. Lee Lewis",
            source: "Harvard Health Publishing",
            link:"https://www.health.harvard.edu/blog/pots-lightheadedness-and-a-racing-heart-202110012608"
        },
        contact: {
            location: "Foy's Lake Approach Rd, Chittagong 4505",
            City: "Chittagong",
            cell: "+880-1xxxxxxx7",
            map: "https://portalsbd.com/wp-content/uploads/2019/01/Foys-Lake-Map.jpg"
        }

    },
    {
        id: 6,
        thumb: "https://image.freepik.com/free-photo/female-doctor-hospital_23-2148827808.jpg",
        serviceName: "Senior Executive Health Screening (SEH)",
        price: 14500,
        tests: {
            test1: "BMI( Body Composition Analysis)",
            test2: "Physical Examination By Doctor",
            test3: "Complete Blood Count (CBC)",
            test4: "Serum Lipid Profile ( Fasting)",
            test5: "Serum Uric Acid",
            test6: "TSH",
            test7: "HBA1c",
            test8: "PSA",
            test9: "Blood Urea",
            test10: "Serum Creatinine",
            test11: "Serum Electrolytes",
            test12: "Urine R/M/E",
            test13: "Electrocardiogram(ECG)",
            test14: "X-Ray Chest P/A View",
            test15: "Nutritionist Advice",
            test16: "Complimentry Breakfast",
            test17: "Serum Bilirubin",
            test18: "SGPT",
            test19: "Alkaline Phosphate",
            test20: "Total Protein",
            test21: "AFP",
            tset22: "A:G Ratio"
        },
        about: {
            drname: "E.K Begum",
            position: "Consultant, Pathology",
            qualification: "MBBS (DMC), M PHIL PATH (BSMMU), MIAC (GERMANY)",
            img: "https://www.shareicon.net/data/128x128/2016/08/18/813849_people_512x512.png" 
        },
        blog:{
            title: "Why try for a vaginal birth after a cesarean?",
            pic: "https://domf5oio6qrcr.cloudfront.net/medialibrary/11761/7985f025-d6d0-4b20-ac8a-f2e7a7930328.jpg",
            article: "Birthing a child is one of the most memorable moments of one’s life. And the way a birth occurs — vaginally, or surgically by cesarean section...",
            writter: "Rachel A. Blake",
            source: "Harvard Health Publishing",
            link:"https://www.health.harvard.edu/blog/why-try-for-a-vaginal-birth-after-a-cesarean-202109302607"
        },
        contact: {
            location: "Mira Bazar",
            City: "Sylhet",
            cell: "+880-1xxxxxxx8",
            map: "https://media-eng.dhakatribune.com/uploads/2018/09/sylhet-1536506201423.jpg"
        }

    },
    {
        id: 7,
        thumb: "https://image.freepik.com/free-photo/high-angle-covid-recovery-center-female-doctor-checking-elder-patient-s-blood-pressure_23-2148847842.jpg",
        serviceName: "Master Gastro Liver Screening (MGL)",
        price: 10000,
        tests: {
            test1: "BMI( Body Composition Analysis)",
            test2: "Physical Examination By Doctor",
            test3: "Complete Blood Count (CBC)",
            test4: "Serum Lipid Profile ( Fasting)",
            test5: "HbsAg",
            test6: "HBA1c",
            test7: "Serum Bilirubin",
            test8: "SGPT",
            test9: "SGOT",
            test10: "Alkaline Phosphate",
            test11: "Total Protein",
            test12: "A:G Ratio",
            test13: "Urine R/M/E",
            test14: "USG of Whole Abdomen",
            test15: "Video Endoscopy of Upper GIT",
            test16: "X-ray Chest P/A view",
            test17: "Nutritionist Advice",
            test18: "Complementry Breakfast"
        },
        about: {
            drname: "A. Talukdar",
            position: "Consultant, Laboratory Medicine",
            qualification: "MBBS, MPHIL (MEDICAL BIOCHEMISTRY)",
            img: "https://www.shareicon.net/data/128x128/2016/08/18/813849_people_512x512.png" 
        },
        blog:{
            title: "Sugar: How sweet it is... or is it?",
            pic: "https://domf5oio6qrcr.cloudfront.net/medialibrary/11754/ea225ba4-11b6-47b4-9b7b-a297001da48f.jpg",
            article: "Research studies over the past 30 years have shown that high consumption of added sugar, especially from sugar-sweetened beverages...",
            writter: "Katherine D. McManus",
            source: "Harvard Health Publishing",
            link:"https://www.health.harvard.edu/blog/sugar-how-sweet-it-is-or-is-it-202109272604"
        },
        contact: {
            location: "Daulatpur",
            City: "Daulatpur",
            cell: "+880-1xxxxxx45",
            map: "https://media-eng.dhakatribune.com/uploads/2018/05/khulna-google-maps-1526629726407.jpg"
        }

    },
    {
        id: 8,
        thumb: "https://image.freepik.com/free-photo/examining-sample-with-microscope_1098-18424.jpg",
        serviceName: "Liver Screening (Male/ Female): Adults",
        price: 5300,
        tests: {
            test1: "S. Bilirubin",
            test2: "Total Protein",
            test3: "Albumin",
            test4: "SGPT",
            test5: "SGOT",
            test6: "Alkaline Phosphatase",
            test7: "HBsAg",
            test8: "Anti HCV",
            test9: "USG of Hepatobiliary System",
            test10: "Consultation with physician"
        },
        about: {
            drname: "M. Nahar",
            position: "Associate Professor, Hematology",
            qualification: "MBBS, FCPS (HEMATOLOGY)",
            img: "https://www.shareicon.net/data/128x128/2016/08/18/813849_people_512x512.png" 
        },
        blog:{
            title: "Cardiovascular safety from prostate cancer drugs remains uncertain",
            pic: "https://domf5oio6qrcr.cloudfront.net/medialibrary/11753/df7957f6-88ac-4f97-8a2e-ed022cf8169e.jpg",
            article: "Androgen deprivation therapy (ADT) is a mainstay of prostate cancer treatment, used when a man’s tumor is spreading...",
            writter: "Charlie Schmidt",
            source: "Harvard Health Publishing",
            link:"https://www.health.harvard.edu/blog/cardiovascular-safety-from-prostate-cancer-drugs-remains-uncertain-202109242603"
        },
        contact: {
            location: "Maijdi",
            City: "Noakhali",
            cell: "+880-1xxxxxx55",
            map: "https://www.tide-forecast.com/tidelocationmaps/Noakhali.10.gif"
        }

    }
]

export default services;