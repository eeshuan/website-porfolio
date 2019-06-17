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
                `I am a hardcore Magic: The Gathering player. I do sailing and windsurfing. I can't draw, but I love designing. I love listening to music.`
            ]
        },
        who: {
            title: "Who am I",
            profilePic: assetsMap.pages.about.profile,
            info: [
                `My path as a developer had exposed me to many different areas in both Front-End and Back-End programming. 
                I enjoyed challenging myself and have been always contantly upgrading myself with new knowledge.`,
                `However, this path have not been the kindest to me, and I had faced many obstacles during my learning phases. 
                However, I persisted on to face these challenges. Little by little, it made me a more knowledgeable person with every obstacle i overcame.`,
                `But to keep it simple, I love what I am doing now and I am committed to face any challenges that I might encounter in the future.`
            ]
        },
        projects: {
            title: "Developing my own projects",
            info: [
                `The first game project I developed was Purgastory. It was a defining project for me as it made me realize the joy in developing my own projects. 
                Watching my ideas and designs come to life really excites me and it keeps me motivated to do even more.`,
                `Since then, I continued to work tirelessly on my projects, no matter what the project scale is. 
                There was never a moment to waste to create the things I love.`
            ],
            pictures: [
                assetsMap.purgastory.image3,
                assetsMap.pages.about.image1,
                assetsMap.pages.about.image2
            ],
            info2: [
                "Take a look at my portfolio to see all my projects."
            ],
            link: {
                text: "View Portfolio",
                path: "/portfolio"
            }
        },
        resume: {
            title: "What I can do",
            info: [
                `I have picked up many relevant skills and experiences from my jobs and studies.`,
                "Take a look deeper at what I have done in my development career and what I can do for you."
            ],
            link: {
                text: "View Resume",
                path: "/resume"
            }
        }
    }
}