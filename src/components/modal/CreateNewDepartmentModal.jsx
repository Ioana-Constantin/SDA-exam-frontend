import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PersonAdd from "@mui/icons-material/PersonAdd";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { TextField } from "@mui/material";
import "./CreateNewTaskModal.css";
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

const CreateNewUserModal = () => {
	const [open, setOpen] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

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
		await UserService.createNewUser(user);
		setOpen(false);
	};

	return (
		<div>
			<Button onClick={handleModalOpen}>
				{" "}
				Add New User
				<PersonAdd sx={{ ml: 1 }} />
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

export default CreateNewUserModal;
