import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import IssueModal from "../modal/IssueModal";
import * as UserService from "../../services/UserService";

export default function Issue(props) {
	// console.log("props in Issue", props);
	// const [status, setStatus] = useState(props.status);
	const [open, setOpen] = useState(false);
	const [users, setUsers] = useState([]);

	const showTaskDetails = async () => {
		let usersRes = await UserService.getAllUsers();
		setUsers(usersRes);
		setOpen(true);
	};

	const getColorDept = (dept) => {
		switch (dept) {
			case "Prod":
				return "#5B7CDE";
			case "Approvals":
				return "#DE5BBD";
			case "QA":
				return "#DEBD5B";
			case "DevOps":
				return "#5BDE7B";
			default:
				return "#BA55D3";
		}
	};
	const selectDept = () => {
		return props.department.map((dept) => (
			<Chip
				sx={{ backgroundColor: getColorDept(dept) }}
				key={props.id + dept}
				label={dept}
				size="small"
			/>
		));
	};

	return (
		<div>
			<IssueModal open={open} setOpen={setOpen} task={props} users={users} />
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
					{selectDept()}

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
