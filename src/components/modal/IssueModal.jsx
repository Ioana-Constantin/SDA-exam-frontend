import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Divider from "@mui/material/Divider";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "#FBFAFA",
	border: "2px solid #000",
	boxShadow: 25,
	p: 2,
	borderRadius: 2,
};

const button = {
	position: "absolute",
	top: 0,
	right: 0,
	color: "black",
};

const IssueModal = (props) => {
	const handleClose = () => {
		props.setOpen(false); //functional component, useEffect
	};
	const [newAssignee, setNewAssignee] = useState(""); //link the list of users
	const addNewAssignee = (event) => {
		setNewAssignee(event.target.value);
	};
	const [status, setStatus] = useState("props.Status");
	const [progress, setProgress] = useState("props.Status"); //copy the task's status
	const handleStatusChange = (event) => {
		setStatus(event.target.value);
	}
	const handleProgressChange = (event) => {
		setProgress(event.target.value);
	}


	return (
		<Modal
			open={props.open}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title">
					<h3>{props.task.title}</h3>
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					<Button onClick={addNewAssignee}>
						<PersonAddAlt1Icon />
					</Button>
					{props.task.assignee}
				</Typography>
				<Divider />
				<FormControl sx={{mt:2}}>
					<InputLabel id="demo-simple-select-label">Status</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={status}
						label="Status"
						onChange={handleStatusChange}
					>
						<MenuItem value={10}>Not Started</MenuItem>
						<MenuItem value={20}>In Progress</MenuItem>
						<MenuItem value={30}>In Testing</MenuItem>
						<MenuItem value={40}>Done</MenuItem>
					</Select>
				</FormControl>
				<FormControl sx={{mt:2}}>
					<InputLabel id="demo-simple-select-label">Progress</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={progress}
						label="Progress"
						onChange={handleProgressChange}
					>
						<MenuItem value={10}>Not Started</MenuItem>
						<MenuItem value={20}>Started</MenuItem>
						<MenuItem value={30}>Complete</MenuItem>
					</Select>
				</FormControl>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					Details: {props.task.details}
				</Typography>
				<Button onClick={handleClose} sx={button}>
					<CancelPresentationIcon />
				</Button>
			</Box>
		</Modal>
	);
};

export default IssueModal;
