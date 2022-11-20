import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import TextField from "@mui/material/TextField";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";
import * as UserService from "../../services/UserService";

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
	const [firstName, setFirstName] = useState(props.user.firstName);
	const [lastName, setLastName] = useState(props.user.lastName);

	const handleFirstName = (event) => {
		setFirstName(event.target.value);
	};

	const handleLastName = (event) => {
		setLastName(event.target.value);
	};

	const handleModalOpen = async () => {
		setOpen(true);
	};
	const handleModalClose = () => setOpen(false);

	const handleSubmitUser = async () => {
		let user = {
			firstName,
			lastName,
		};
		await UserService.editUser(user, props.user.id);
		setFirstName("");
		setLastName("");
		setOpen(false);
	};

	const handleDeleteUser = async () => {
		await UserService.deleteUser(props.user.id);
		};

	return (
		<div>
			<Button onClick={handleModalOpen}>
				<BorderColorIcon />
			</Button>
			<Button>
				<DeleteIcon onClick={() => handleDeleteUser()} />
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
							label="Enter user's first name"
							value={firstName}
							onChange={handleFirstName}
						></TextField>
						<TextField
							className="allign-items max-width "
							sx={{ mb: 2 }}
							required
							id="outlined-required"
							label="Enter user's last name"
							value={lastName}
							onChange={handleLastName}
						></TextField>

						<Button onClick={handleModalClose} sx={button}>
							<CancelPresentationIcon />
						</Button>
					</div>
					<Button
						onClick={handleSubmitUser}
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
