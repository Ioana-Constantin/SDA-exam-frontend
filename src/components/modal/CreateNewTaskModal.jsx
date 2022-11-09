import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Divider from "@mui/material/Divider";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./CreateNewTaskModal.css";
import dayjs from "dayjs";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 350,
	bgcolor: "#FBFAFA",
	border: "2px solid #000",
	boxShadow: 25,
	p: 2,
	flex: 1,
	flexDirection: "column",
	borderRadius: 2,
	justifyContent: "space-around",
	aligneItems: "center",
};

const button = {
	position: "absolute",
	top: 0,
	right: 0,
	color: "black",
};

const submitButton = {
	position: "absolute",
	bottom: 8,
	right: 16,
	color: "black",
	backgroundColor: "darkgrey",
};

const CreateNewTaskModal = () => {
	const [open, setOpen] = useState(false);
	const handleModalOpen = () => setOpen(true);
	const handleModalClose = () => setOpen(false);

	const [day, setDay] = useState(dayjs(""));
	const handleDayChange = (newDay) => {
		setDay(newDay);
	};

	const [assignee, setAssignee] = useState("");
	const handleAssigneeChange = (event) => {
		setAssignee(event.target.value);
	};

	return (
		<div>
			<Button onClick={handleModalOpen}> Add New Task
				<AddTaskIcon sx={{ml:1}} />
			</Button>

			<Modal
				open={open}
				onClose={handleModalClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div className="modal-mb" >
						<TextField
							className="allign-items" sx={{mb:2}}
							required
							id="outlined-required"
							label="Enter a task name"
						></TextField>
						<Divider />
						<LocalizationProvider dateAdapter={AdapterDayjs} >
							<DesktopDatePicker
								className="allign-items"
								
								label="Set due date"
								inputFormat="DD/MM/YYYY"
								value={day}
								onChange={handleDayChange}
								renderInput={(params) => <TextField {...params} />}
							/>
						</LocalizationProvider>
							<FormControl className="max-width allign-items" sx={{mt:2}}>
								<InputLabel id="demo-simple-select-label">Assignee</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={assignee}
									label="Assignee"
									onChange={handleAssigneeChange}
								>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem> 
									
								</Select>
							</FormControl>

						<Button onClick={handleModalClose} sx={button}>
							<CancelPresentationIcon />
						</Button>
					</div>
					<Button variant="contained" sx={submitButton}>
						SUBMIT
					</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default CreateNewTaskModal;
