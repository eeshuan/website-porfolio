import { assetsMap } from '../../assets/assetsMap';

export let aboutContent = {
    banner: {
        title: "About me",
        subtitle: "Get to know me more!",
        image: assetsMap.pages.about.image
    },
    content: {
        about: {
            title: "Here are some things about me",
            info: [
                "I am a hardcore Magic: The Gathering player. I do sailing and windsurfing. I can't draw, but I love designing. I love listening to music."
            ]
        },
        who: {
            title: "Who I am",
            info: [
                "My path as a developer exposed me to many different areas in both Front-End and Back-End. I enjoy challenging myself to gain more knowledge, and be contantly upgrading myself.",
                "However, my path have not been the kindest to me yet. I faced many challenges in many areas, but had always worked hard to overcome them. Little by little, it changed me for the better for each challenge i cleared.",
                "Bottom line: I love what I am doing now and I am fully prepared to face any challenges that I might face in the future."
            ]
        },
        projects: {
            title: "Developing my own projects",
            info: [
                "My first ever game project was Purgastory. It was a defining moment for me as I grew addicted to developing my own projects. Seeing my ideas come to life always excites me greatly. t has been over a year since, and I continued to work tirelessly on my projects, no matter what the scale is. There was never a moment to waste to produce the things I love."
            ],
            pictures: [
                assetsMap.pages.about.image1,
                assetsMap.pages.about.image2,
                assetsMap.purgastory.image3
            ],
            info2: [
                "You can take a look at my portfolio to see the projects I had worked on before."
            ]
        },
        resume: {
            title: "More about me",
            info: [
                "Take a look deeper at what I have done in my development career and what I can do for you."
            ]
        }
    }
}