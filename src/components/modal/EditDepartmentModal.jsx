import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import TextField from "@mui/material/TextField";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Colorful from "@uiw/react-color-colorful";
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
	right: 24,
	color: "black",
	backgroundColor: "darkgrey",
};

const button = {
	position: "absolute",
	top: 0,
	right: 0,
	color: "black",
};

const EditUserModal = (props) => {
	const [open, setOpen] = useState(false);
	const [description, setDescription] = useState(props.department.description);
	const [hex, setHex] = useState(props.department.color);

	const handleDescription = (event) => {
		setDescription(event.target.value);
	};


	const handleModalOpen = async () => {
		setOpen(true);
	};
	const handleModalClose = () => setOpen(false);

	const handleSubmitDepartment = async () => {
		let department = {
			description,
			color: hex,
		};
		await DepartmentService.editDepartment(department, props.department.id);
		setDescription("");
		setOpen(false);
	};

	const handleDeleteDepartment = async () => {
		await DepartmentService.deleteDepartment(props.department.id);
	};

	return (
		<div>
			<Button onClick={handleModalOpen}>
				<BorderColorIcon />
			</Button>
			<Button>
				<DeleteIcon onClick={() => handleDeleteDepartment()} />
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
							label="Enter department's description"
							value={description}
							onChange={handleDescription}
						></TextField>
						<div className="allign-items max-width" align="center">
							<label>Enter department's color</label>
							<Colorful
								color={hex}
								disableAlpha={true}
								onChange={(color) => {
									setHex(color.hexa);
								}}
							/>
							<div style={{ background: hex, marginTop: 30, padding: 10 }}>
								{hex}
							</div>
						</div>
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

export default EditUserModal;
