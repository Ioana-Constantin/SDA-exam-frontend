import React from "react";
import Issue from "../issue/Issue";
import Status from "../../Status";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Column(props) {
	let listTasks = [];
	if (props.tasks.length) {
		let filteredTasks = [];
		switch (props.filter) {
			case "Not Started":
				filteredTasks = props.tasks.filter(
					(task) => task.status === Status.NotStarted
				);
				break;
			case "In Progress":
				filteredTasks = props.tasks.filter(
					(task) => task.status === Status.InProgress
				);
				break;
			case "In Testing":
				filteredTasks = props.tasks.filter(
					(task) => task.status === Status.InTesting
				);
				break;
			case "Done":
				filteredTasks = props.tasks.filter(
					(task) => task.status === Status.Done
				);
				break;
			default:
				filteredTasks = props.tasks;
		}
		listTasks = filteredTasks.map((d) => (
			<Issue
				key={d.id}
				id={d.id}
				title={d.title}
				assignee={d.assignee}
				status={d.status}
				details={d.details}
				department={d.department}
			/>
		));

		return (
			<div>
				<Box sx={{ backgroundColor: props.labelColor, borderRadius: "10px" }}>
					<Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
						{props.filter}
					</Typography>
				</Box>
				{listTasks}
			</div>
		);
	}
}

export default Column;
