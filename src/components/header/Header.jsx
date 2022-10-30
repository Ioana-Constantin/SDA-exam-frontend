import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useLocation } from "react-router";

function Header() {
	// let navigate = useNavigate();
	// const [open, setOpen] = useState(false);
	// const showTaskDetails = () => {
	// 	setOpen(true);

	return (
		<AppBar
			
			position="sticky"
			sx={{ backgroundColor: "#FFD5CC"}}
		>
			{/* <IssueModal open={open} setOpen={setOpen} task={props} /> */}
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1, color: "black" }}
				>
					Project Task List
				</Typography>
				<Tooltip title="Add" arrow>
					<Button >
						<AddCircleIcon></AddCircleIcon>
					</Button>
				</Tooltip>
				<Tooltip title="Edit" arrow>
					<Button >
						<EditIcon></EditIcon>
					</Button>
				</Tooltip>
				<Tooltip title="Delete" arrow>
					<Button >
						<RemoveCircleIcon></RemoveCircleIcon>
					</Button>
				</Tooltip>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
