import axios from "axios"
// const url = "http://sudd-backend.vercel.app/api/";
export const url = "http://sudd-backend.vercel.app/api/";
export const googleUrl = "https://lh3.googleusercontent.com/d/"
const id  = "675691b11ba213b1cf3577df";
export const about = [
    "I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have experience in building web applications using React, Node.js, Express, and MongoDB. I am also familiar with Python, Java, and C++.",
    "I am a quick learner and a team player. I am always eager to learn new technologies and improve my skills. I am looking for opportunities to work on challenging projects and grow as a developer.",
]
const texts = await axios.get(
    url + "get-all-texts/" + id
).then((response) => {
    const temp = response.data.texts;
    about[0] = temp.text1;
    about[1] = temp.text2;
    console.log(temp); 
    return response.data;
})



export const projects = [
    {
        id:"proj3",
        title: "proj_3",
        project: [
            {
                image: "https://picsum.photos/200/300",
                text: null
            }
            ,{
                image: "https://picsum.photos/200/300",
                text:" helloo"
            }
            ,{
                image: "https://picsum.photos/200/300",
                text: "helloo"
            }
        ]
    },
    {
        id:"stainedglass",
        title: "Stained Glass",
        project: [
            {
                image: "https://picsum.photos/200/300",
                text: null
            }
            ,{
                image: "https://picsum.photos/200/300",
                text:" helloo"
            }
            ,{
                image: "https://picsum.photos/200/300",
                text: "helloo"
            }
        ]
    },
    {
        id:"insights",
        title: "insights",
        project: [
            {
                image: "https://picsum.photos/200/300",
                text: null
            }
            ,{
                image: "https://picsum.photos/200/300",
                text:" helloo"
            }
            ,{
                image: "https://picsum.photos/200/300",
                text: "helloo"
            }
        ]
    }
]

