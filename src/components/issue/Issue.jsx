import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import EditTaskModal from "../modal/EditTaskModal";
import * as UserService from "../../services/UserService";
import * as DepartmentService from "../../services/DepartmentService";

export default function Issue(props) {
	const [open, setOpen] = useState(false);
	const [users, setUsers] = useState([]);

	const [departments, setDepartments] = useState([]); //hook initializat cu array gol

	useEffect(() => {
		DepartmentService.getAllDepartments()
			.then((response) => setDepartments(response))
			.catch((err) => console.error(err));
	}, []);

	const showTaskDetails = async () => {
		let usersRes = await UserService.getAllUsers();
		setUsers(usersRes);
		setOpen(true);
	};

	const selectedDepartments = () => {
		let finalDepartments = [];
		departments.forEach((el) => {
			if (props.department.includes(el.description)) {
				finalDepartments.push(el);
			}
		});
		return finalDepartments.map((dept) => (
			<Chip
				sx={{ backgroundColor: dept.color }}
				key={dept.id + dept.description}
				label={dept.description}
				size="small"
			/>
		));
	};

	return (
		<div>
			<EditTaskModal open={open} setOpen={setOpen} task={props} users={users} />
			<Card
				sx={{
					maxWidth: "350px",
					border: "solid 1px ligth-grey",
					boxShadow: 3,
					marginTop: 1,
					marginBottom: 4,
					columnWidth: 400,
					backgroundColor: "#FBFAFA",
				}}
				onClick={showTaskDetails}
			>
				<CardContent>
					{selectedDepartments()}
					<Typography color="text.secondary">
						<h2>{props.title}</h2>
					</Typography>
					<Typography paragraph>Assigned to: {props.assignee}</Typography>
					<Typography paragraph>Status: {props.status}</Typography>
				</CardContent>
				<CardActions disableSpacing></CardActions>
			</Card>
		</div>
	);
}
