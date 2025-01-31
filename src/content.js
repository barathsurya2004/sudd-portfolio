import axios from "axios"
// const url = "https://sudd-backend.vercel.app/api/";
export const url = "https://sudd-backend.vercel.app/api/";
export const googleUrl = "https://lh3.googleusercontent.com/d/"
const id  = "675691b11ba213b1cf3577df";
// useEffect(() => {
//     const afunc = async () => {
//       const response = await axios.get(
//         // "localhost:8003/api/" + "get-all-texts/" + "6794b46916a43d388c9dee95"
//         "http://localhost:8003/api/get-all-texts/6794b46916a43d388c9dee95"
//       );
//       setLastmsg([response.data.texts.text7, response.data.texts.text8]);
//     };
//     afunc();
//   }, []);
//   const [about2, setAbout2] = useState([""]);
// const [scolor,setScolor]=useState([""])
// useEffect(() => {
//     const afunc = async () => {
//       const response = await axios.get(
//         // "localhost:8003/api/" + "get-all-texts/" + "6794b46916a43d388c9dee95"
//         "http://localhost:8003/api/get-all-primary-colors/6794b46916a43d388c9dee95"
//       );
//       setAbout2([response.data.primaryColors.primary5]);
//     };
//     afunc();
//   }, []);
//   useEffect(() => {
//     const afunc = async () => {
//       const response = await axios.get(
//         // "localhost:8003/api/" + "get-all-texts/" + "6794b46916a43d388c9dee95"
//         "http://localhost:8003/api/get-all-secondary-colors/6794b46916a43d388c9dee95"
//       );
//       setScolor([,response.data.secondaryColors.secondary5]);
//     };
//     afunc();
//   }, []);
export const about = [
    "I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have experience in building web applications using React, Node.js, Express, and MongoDB. I am also familiar with Python, Java, and C++.",
    "I am a quick learner and a team player. I am always eager to learn new technologies and improve my skills. I am looking for opportunities to work on challenging projects and grow as a developer.",
]
export const colors =[
    {
        prim:"#495f8c",
        sec:"#ebefff"
    }
]

export const projects = [
    {
        id:"proj3",
        key:0,
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
        key:1,
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
        key:2,
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

