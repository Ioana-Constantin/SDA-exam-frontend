import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const button = {
	position: "absolute",
	top: 0,
	right: 0,
};

const IssueModal = (props) => {
	console.log("props in issueModal", props);
	const handleClose = () => {
		props.setOpen(false); //functional component, useEffect
		// props.closeModal(); //class component
	};
	return (
		<Modal
			open={props.open}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title">
					Title: {props.task.title}
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					Assignee: {props.task.assignee}
				</Typography>
				<Typography id="modal-modal-description">
					Details: {props.task.details}
				</Typography>
				<Button onClick={handleClose} sx={button}>
					<CancelPresentationIcon />
				</Button>
			</Box>
		</Modal>
	);
};

export default IssueModal;
