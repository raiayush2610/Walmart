import React, { useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import { Row, Input, Button } from 'reactstrap'
import StarPicker from 'react-star-ratings';
import Rating from '@mui/material/Rating';
import Toast from "../pages/Toast/toast"
import ToastContainer from "../pages/Toast/toastContai";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Review = () => {
	// const [rating, setRating] = useState(0);
	const [title, setTitle] = useState('');
	const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const profile = useParams();


	// const onChange = (value) => {
	// 	setRating(value);
	// }

    const [value, setValue] = React.useState(0);
    const putFeedback = async () => {
		try {
			const { data } = axios.post(
				`http://localhost:2610/review/setReview/`,
				{
					name: name,
                    email:email,
					stars: value,
					title: title,
					review: review,
                    profile:profile.profile
				}
			)
            Toast.success("Review Added!");
            setTitle(" ");
            setEmail(" ");
            setName(" ");
            setReview(" ");
            setValue(" ");
			if (data) {
				console.log(data)
			}
		}
		catch (err) {
			console.log(err);
		}
	}

	return (<div>
        <ToastContainer position="bottom-center" limit={1}/>
		<div class="container mt-5 mb-5"
			style={{
				display: 'flex',
				flexFlow: 'column',
				padding: '20px',
				border: "15px solid #03203C ",
				height: "max-content",
				backgroundColor: "#35BDD0",
			}}
		>
			<h4 className="text-center m-3">It will be helpful if you share your Experience</h4>
			<Row style={{ justifyContent: 'center' }}>

			<Rating name="half-rating"  value={value} size="large" precision={0.5} onChange={(event, newValue) => {
          setValue(newValue);
        }} />
			</Row>
            <Row className="m-3">
				<Input
					placeholder="Name"
					onChange={e => setName(e.target.value)}
				/>
			</Row>
            <Row className="m-3">
				<Input
					placeholder="Email"
					onChange={e => setEmail(e.target.value)}
				/>
			</Row>
			<Row className="m-3">
				<Input
					placeholder="Feel Free to Share your Experience"
					onChange={e => setTitle(e.target.value)}
				/>
			</Row>
			<Row className="m-3">
				<Input
					type="textarea"
					placeholder="Provide Short Information"
					style={{ height: "30vh" }}
					onChange={e => setReview(e.target.value)}
				/>
			</Row>

			<Row
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					padding: '20px 0px'
				}}>
				<Button color="warning" onClick={putFeedback}>Sumbit</Button>
			</Row>
		</div>
	</div>)

}

export default Review