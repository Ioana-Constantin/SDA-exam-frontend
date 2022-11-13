import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { TextField } from "@mui/material";
import "./CreateNewTaskModal.css";
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

const CreateNewDepartmentModal = () => {
	const [open, setOpen] = useState(false);
	const [description, setDescription] = useState("");
	const [color, setColor] = useState("");

	const handleDescription = (event) => {
		setDescription(event.target.value);
	};

	const handleColor = (event) => {
		setColor(event.target.value);
	};

	const handleModalOpen = async () => {
		setOpen(true);
	};
	const handleModalClose = () => setOpen(false);

	const handleSubmitDepartment = async () => {
		let department = {
			description,
			color,
		};
		await DepartmentService.createNewDepartment(department);
		setOpen(false);
	};

	return (
		<div>
			<Button onClick={handleModalOpen}>
				{" "}
				Add New Department
				<ApartmentIcon sx={{ ml: 1 }} />
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
							sx={{ mt: 5, mb: 2 }}
							required
							id="outlined-required"
							label="Enter new department's description"
							value={description}
							onChange={handleDescription}
						></TextField>
						<TextField
							className="allign-items max-width "
							sx={{ mb: 2 }}
							required
							id="outlined-required"
							label="Pick department's color"
							value={color}
							onChange={handleColor}
						></TextField>

						<Button onClick={handleModalClose} sx={button}>
							<CancelPresentationIcon />
						</Button>
					</div>
					<Button
						onClick={handleSubmitDepartment}
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

export default CreateNewDepartmentModal;
