// import React, { useState, useEffect } from 'react';
// import Axios from "axios";
// import { Link, useParams } from 'react-router-dom';

// export default function ShowPdf() {
// const [content, setContent] = useState(
// JSON.parse(localStorage.getItem("content")) || {}
// );
// const [image, setImage] = useState('');

// const profile1 = useParams();
// const profile = profile1.profile;

// const fetchimage = async () => {
// const { data } = await Axios.get(
// `http://localhost:2610/record/record/${profile}`
// );
// console.log(data);
// setContent(data);
// localStorage.setItem("content", JSON.stringify(data));
// };

// useEffect(() => {
// fetchimage();
// }, []);

// return (
// <div>
// {content.imgCollection.map((key) => (
// <div>
// <img src={require(`./uploads/${key}`)} className="item-image" alt="image1" />
// {/* <h1>{content[key].profile}</h1> */}
// </div>
// ))}
// </div>
// );
// }