import React, { useEffect, useState } from "react";
import { getAllTasks } from "../../services/TaskService";
import Column from "../column/Column";
import CreateNewTaskModal from "../modal/CreateNewTaskModal";
import Tooltip from "@mui/material/Tooltip";

function AllTasks() {
	const [tasks, setTasks] = useState([]); //hook initializat cu array gol

	useEffect(() => {
		getAllTasks()
			.then((response) => setTasks(response))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div
			className="margin-left"
			style={{
				backgroundImage: "url(http://localhost:3000/background.jpg)",
				backgroundSize: "cover",
				backgroundRepeat: "repeat",
				height: 1500,
			}}
		>
			<div>
				<Tooltip title="Add" arrow>
					<CreateNewTaskModal />
				</Tooltip>
			</div>

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
