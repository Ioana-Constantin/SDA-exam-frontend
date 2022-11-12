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
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./CreateNewTaskModal.css";
import dayjs from "dayjs";
import * as UserService from "../../services/UserService";
import * as TaskService from "../../services/TaskService";

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
	const [taskTitle, setTaskTitle] = useState("");
	const [users, setUsers] = useState([]);
	const [day, setDay] = useState(dayjs(""));

	const handleTaskTitle = (event) => {
		setTaskTitle(event.target.value);
	};

	const handleModalOpen = async () => {
		let usersRes = await UserService.getAllUsers();
		setUsers(usersRes);
		setOpen(true);
	};
	const handleModalClose = () => setOpen(false);

	const handleSubmitTask = async () => {
		let task = {
			statusId: 1,
			dueDate: day,
			title: taskTitle,
			userId: assignee,
		};
		await TaskService.createNewTask(task);
		setOpen(false);
	};

	const handleDayChange = (newDay) => {
		setDay(dayjs(newDay).format("DD/MM/YYYY"));
	};

	const [assignee, setAssignee] = useState("");
	const handleAssigneeChange = (event) => {
		setAssignee(event.target.value);
	};

	const populateUsersList = () => {
		return users.map((user) => (
			<MenuItem value={user.id}>
				{user.first_name} {user.last_name}
			</MenuItem>
		));
	};
	return (
		<div>
			<Button onClick={handleModalOpen}>
				{" "}
				Add New Task
				<AddTaskIcon sx={{ ml: 1 }} />
			</Button>

			<Modal
				open={open}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div className="modal-mb">
						<TextField
							className="allign-items max-width "
							sx={{ mt:5, mb: 2 }}
							required
							id="outlined-required"
							label="Enter a task name"
							value={taskTitle}
							onChange={handleTaskTitle}
						></TextField>
						{/* <Divider /> */}
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DesktopDatePicker
								className="allign-items max-width"
								label="Set due date"
								inputFormat="DD/MM/YYYY"
								value={day}
								onChange={handleDayChange}
								renderInput={(params) => <TextField {...params} />}
							/>
						</LocalizationProvider>
						<FormControl className="max-width allign-items" sx={{ mt: 2 }}>
							<InputLabel id="demo-simple-select-label">Assignee</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={assignee}
								label="Assignee"
								onChange={handleAssigneeChange}
							>
								{populateUsersList()}
							</Select>
						</FormControl>

						<Button onClick={handleModalClose} sx={button}>
							<CancelPresentationIcon />
						</Button>
					</div>
					<Button
						onClick={handleSubmitTask}
						variant="contained"
						sx={submitButton}
					>
						SUBMIT
					</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default CreateNewTaskModal;
