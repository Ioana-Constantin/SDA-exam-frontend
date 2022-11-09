import React, { useState } from "react";
import CreateNewTaskModal from "../modal/CreateNewTaskModal";


const CreateTask = (props) => {
	const [open, setOpen] = useState(false);
	
	return (
		<div>
			<CreateNewTaskModal open={open} setOpen={setOpen} task={props} />
		</div>
	);
}

export default CreateTask;
