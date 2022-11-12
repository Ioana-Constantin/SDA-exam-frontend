import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Divider from "@mui/material/Divider";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import InputLabel from "@mui/material/InputLabel";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import * as TaskService from "../../services/TaskService";
import * as DepartmentService from "../../services/DepartmentService";

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

const submitButton = {
	position: "absolute",
	bottom: 8,
	right: 128,
	color: "black",
	backgroundColor: "darkgrey",
};

const deleteButton = {
	position: "absolute",
	bottom: 8,
	right: 24,
	color: "black",
	backgroundColor: "red",
};

const button = {
	position: "absolute",
	top: 0,
	right: 0,
	color: "black",
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

function getStyles(name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

const IssueModal = (props) => {
	console.log("PROOOOOOOOOOOOOps", props);
	const theme = useTheme();
	const populateUsersList = () => {
		return props.users.map((user) => (
			<MenuItem value={user.id}>
				{user.first_name} {user.last_name}
			</MenuItem>
		));
	};

	const handleClose = () => {
		props.setOpen(false);
	};
	const [assignee, setAssignee] = useState(props.task.userId);
	const [status, setStatus] = useState(props.task.status);
	const [taskDetails, setTaskDetails] = useState(props.task.details);
	const [updatedTask, setUpdatedTask] = useState({});
	const [day, setDay] = useState(dayjs(""));
	const [departmentIds, setdepartmentIds] = useState(props.task.department);

	const handleDayChange = (newDay) => {
		let dueDate = { dueDate: dayjs(newDay).format("DD/MM/YYYY") };
		console.log("---------------duedate", dueDate);
		setUpdatedTask((updatedTask) => ({ ...updatedTask, ...dueDate }));
		setDay(dayjs(newDay).format("DD/MM/YYYY"));
	};

	const handleAssigneeChange = (event) => {
		let userId = { userId: event.target.value };
		setUpdatedTask((updatedTask) => ({ ...updatedTask, ...userId }));
		setAssignee(event.target.value);
	};

	const handleStatusChange = (event) => {
		let statusId = { statusId: event.target.value };
		setUpdatedTask((updatedTask) => ({ ...updatedTask, ...statusId }));
		setStatus(event.target.value);
	};

	const handleDepartmentsChange = (event) => {
		setdepartmentIds(event.target.value);
	};

	const handleTaskDetailsChange = (event) => {
		let details = { details: event.target.value };
		setUpdatedTask((updatedTask) => ({ ...updatedTask, ...details }));
		setTaskDetails(event.target.value);
	};

	const handleEditTask = async () => {
		if (departmentIds.length) {
			await DepartmentService.assignDepartmentsToTask(
				departmentIds,
				props.task.id
			);
		}
		if (Object.keys(updatedTask).length) {
			await TaskService.updateTask(updatedTask, props.task.id);
		}
		props.setOpen(false);
	};

	const handleDeleteTask = async () => {
		await TaskService.deleteTask(props.task.id);
		props.setOpen(false);
	};

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
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DesktopDatePicker
						className="allign-items max-width"
						sx={{ pb: 20 }}
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
						labelId="assignee-simple-select-label"
						id="assignee-simple-select"
						value={assignee}
						label="Assignee"
						onChange={handleAssigneeChange}
					>
						{populateUsersList()}
					</Select>
				</FormControl>
				<div></div>
				<FormControl className="max-width allign-items" sx={{ mt: 2 }}>
					<InputLabel id="demo-simple-select-label">Status</InputLabel>
					<Select
						labelId="status-simple-select-label"
						id="status-simple-select"
						value={status}
						label="Status"
						onChange={handleStatusChange}
					>
						<MenuItem value={1}>Not Started</MenuItem>
						<MenuItem value={2}>In Progress</MenuItem>
						<MenuItem value={3}>In Testing</MenuItem>
						<MenuItem value={4}>Done</MenuItem>
					</Select>
				</FormControl>
				<div></div>
				<FormControl className="max-width allign-items" sx={{ mt: 2 }}>
					<InputLabel id="demo-multiple-chip-label">Departments</InputLabel>
					<Select
						labelId="demo-multiple-chip-label"
						id="demo-multiple-chip"
						multiple
						value={departmentIds}
						onChange={handleDepartmentsChange}
						input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
						renderValue={(selected) => (
							<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
								{selected.map((value) => (
									<Chip key={value} label={value} />
								))}
							</Box>
						)}
						MenuProps={MenuProps}
					>
						{props.departments.map((department) => (
							<MenuItem
								key={department.id}
								value={department.description}
								style={getStyles(props.departments, departmentIds, theme)}
							>
								{department.description}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<TextField
					className="max-width allign-items"
					sx={{ mt: 2, pb: 6 }}
					required
					id="outlined-required"
					label="Enter the details of the task"
					multiline
					maxRows={4}
					value={taskDetails}
					onChange={handleTaskDetailsChange}
				></TextField>{" "}
				<Button
					onClick={handleDeleteTask}
					variant="contained"
					sx={deleteButton}
				>
					DELETE
				</Button>
				<Button onClick={handleEditTask} variant="contained" sx={submitButton}>
					SUBMIT
				</Button>
				<Button onClick={handleClose} sx={button}>
					<CancelPresentationIcon />
				</Button>
			</Box>
		</Modal>
	);
};

export default IssueModal;
