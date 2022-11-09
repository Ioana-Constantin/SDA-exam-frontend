import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Divider from "@mui/material/Divider";

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

const button = {
	position: "absolute",
	top: 0,
	right: 0,
	color: "black",
};

const IssueModal = (props) => {
	// console.log("props in issueModal", props);
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
					<h3>Title: {props.task.title}</h3>
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					Assignee: {props.task.assignee}
				</Typography>
				<Divider />
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
