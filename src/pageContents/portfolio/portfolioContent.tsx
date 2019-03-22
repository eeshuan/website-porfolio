import { assetsMap } from '../../assets/assetsMap';

export let portfolioContent = {
    banner: {
        title: "Portfolio",
        subtitle: "My awesome works",
        image: assetsMap.pages.portfolio.image
    },
    intro: `These are some projects I have done in my development career as of now.
            The list is still expanding, so check back again soon to see more updates.`,
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
    ]
}