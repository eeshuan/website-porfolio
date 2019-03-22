import { assetsMap } from '../../assets/assetsMap';

export let homeContent = {
    carousel: [
        {
            title: "Hi! I am Shuan",
            subtitle: "An aspiring web and games developer",
            image: assetsMap.pages.home.image,
            link: "/about"
        },
        {
            title: "Adventale",
            subtitle: "An idle web game project",
            image: assetsMap.adventale.background,
            link: "/adventale"
        },
        {
            title: "Purgastory",
            subtitle: "A project in UE4",
            image: assetsMap.purgastory.background,
            link: "/purgastory"
        },
        {
            title: "Game Off 2018",
            subtitle: "#gameoff2018 by Github",
            image: assetsMap.angryPig.background,
            link: "/angrypig"
        }
    ],
    intro: "I am Shuan!",
    subintro: "I am an aspiring web and games developer!",
    about: {
        title: "About me",
        content: [
            "I am a game-loving software developer with a passion in web development and games.",
            "Get to know me more!"
        ],
        link: {
            text: "Learn more",
            path: "/about"
        }
    },
    portfolio: {
        title: "My personal works",
        projects: [
            {
                path: `/adventale`,
                title: `Adventale`,
                image: assetsMap.adventale.background
            },
            {
                path: `/purgastory`,
                title: `Purgastory`,
                image: assetsMap.purgastory.background
            },
            {
                path: `/angrypig`,
                title: `Angry Angry Pig`,
                image: assetsMap.angryPig.background
            }
        ],
        link: {
            text: "More projects",
            path: "/portfolio"
        }
    },
    resume: {
        title: "What I can do",
        content: [
            "Take a look deeper to know what I can do"
        ],
        link: {
            text: "View resume",
            path: "/resume"
        }
    },
    contact: {
        title: "Contact me today!",
        content: [
            "I am always interested to learn more."
        ],
        link: {
            text: "Contact Me",
            path: "/contact"
        }
    }
}