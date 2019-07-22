import { assetsMap } from "../../assets/assetsMap";

export let resumeContent = {
    banner: {
        title: "My Resume",
        subtitle: "What I can do",
        image: assetsMap.pages.resume.image
    },
    skills: {
        programming: [
            "ReactJS and React-Native",
            "HTML, Webpack",
            "CSS, SASS/SCSS",
            "GIT, IDE, NodeJS, MongoDB",
            "JavaScript, TypeScript",
            "C, C++, C#, Java"
        ],
        gameDev: [
            "Unreal Engine 4, Unity 2D/3D",
            "Cocos2d-x, Cocos Creator",
            "PixiJS, PhaserJS"
        ],
        others: [
            "Telecommunications Skills",
            "Customer Service",
            "Events Management"
        ]
    },
    work: [
        {
            company: "ST Engineering Electronics, Singapore",
            position: "Software Engineer",
            duration: "June 2019 - PRESENT",
            details: [
                "Helped to maintain the code of a large scale operating system",
                "Contributed in handling client's requests for features",
                "Improved UX and performance of the system"
            ]
        },
        {
            company: "Autumn Interactive Pte Ltd, Singapore",
            position: "Software Developer",
            duration: "May 2018 - June 2019",
            details: [
                "Led the team in the creation of mini games for the company",
                "In charge of maximizing the UI/UX experience for the products",
                "Contributed to the software testing for the company's softwares",
                "Responsible for managing all live products of the project"
            ]
        },
        {
            company: "Autumn Interactive Pte Ltd, Singapore",
            position: "Part-time Developer",
            duration: "December 2017 - April 2018",
            details: [
                "Helped the team to create mini games for the company",
                "Assisted in the company to maximize the UI/UX experience of the company's softwares",
                "Supported in software testing processes of the company"
            ]
        },
        {
            company: "HiVelocity Events Pte Ltd, Singapore ",
            position: "IT Admin Intern",
            duration: "May 2017 - October 2017",
            details: [
                "In charge of all IT-related events of the company",
                "Learnt how to manage business servers and networks",
                "Set up off-site databases for offline data entry for major events such as Spartan Race and NDP Ticket Collections",
                "Assisted in the company’s web and software development"
            ]
        },
        {
            company: "Sushi Tei Pte Ltd, Singapore",
            position: "Part-time Service Staff",
            duration: "July 2016 - January 2017",
            details: [
                "Worked as a service staff which and learnt how to handle difficult customers with professionalism"
            ]
        },
        {
            company: "Singtel, Singapore",
            position: "Part-time Telecom Operator",
            duration: "April 2014 - June 2014",
            details: [
                "Managed incoming call queries from customers",
                "Helped to handle and make sales orders for customers that call in"
            ]
        },
        {
            company: "Constant Wind Pte Ltd, Singapore",
            position: "Part-time Service Staff",
            duration: "January 2012 - March 2012",
            details: [
                "Helped out in the customer service and retail sectors"
            ]
        }
    ],
    education: [
        {
            school: "National University of Singapore, Singapore",
            cert: "Bachelor of Computing (Computer Science)",
            duration: "August 2014 - June 2018",
            details: [
                "Graduated from the School of Computing",
                "Obtained distinctions in all web and game development related subjects",
                "Participated in NUS STePS events in 2018 and won 2nd place",
                "Participated in NUS Orbital Project in 2015"
            ]
        },
        {
            school: "Meridian Junior College, Singapore ",
            cert: "GCE ‘A’ Levels",
            duration: "January 2010 - November 2011",
            details: [
                "Graduated with 85 rank points",
                "Obtained distinctions in all Sciences and Maths subject fields"
            ]
        }
    ]
}