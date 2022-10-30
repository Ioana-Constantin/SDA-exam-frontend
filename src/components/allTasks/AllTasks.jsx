import React, { useEffect, useState } from "react";
import { getAllTasks } from "../../services/TaskService";
import Column from "../column/Column";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { Tooltip } from "@mui/material";

function AllTasks(props) {
	const [tasks, setTasks] = useState([]); //hook initializat cu array gol

	useEffect(() => {
		getAllTasks()
			.then((response) => setTasks(response))
			.catch((err) => console.error(err));
	}, []);

	console.log("tasks", tasks);
	return (
		<div>
			<AppBar position="sticky" sx={{ backgroundColor: "#FFD5CC" }}>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, color: "black" }}
					>
						Project Task List
					</Typography>
					<Tooltip title="Add new task" arrow>
						<Button>
							<AddTaskIcon></AddTaskIcon>
						</Button>
					</Tooltip>
				</Toolbar>
			</AppBar>

			<div className="status-tasks">
				<Column filter="Not Started" tasks={tasks} labelColor="#C70039" />
				<Column filter="In Progress" tasks={tasks} labelColor="#FF5733" />
				<Column filter="In Testing" tasks={tasks} labelColor="#FFC300" />
				<Column filter="Done" tasks={tasks} labelColor="#DAF7A6" />
			</div>
		</div>
	);
}

export default AllTasks;
