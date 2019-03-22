import { assetsMap } from '../../../assets/assetsMap';

export let adventaleContent = {
    title: "Adventale",
    content: [
        {
            type: "paragraph",
            data: `Adventale is a game project which i am working on with a few friends. 
            We wanted to do something more outside our daily jobs, and we decided to embark on this project together.`
        },
        {
            type: "paragraph",
            data: "The project is still in its early stages of development."
        },
        {
            type: "image",
            src: assetsMap.adventale.image1,
            caption: "Sketch of one of the game's locations"
        },
        {
            type: "image",
            src: assetsMap.adventale.image2,
            caption: "Work in progress!"
        },
        {
            type: "paragraph",
            data: "Check back in soon for more updates on this project!"
        }
    ]
}