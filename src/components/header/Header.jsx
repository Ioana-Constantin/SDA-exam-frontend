import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header() {
	return (
		<AppBar position="sticky" sx={{ backgroundColor: "#FFD5CC" }}>
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1, color: "black" }}
				>
					Project Task List
				</Typography>
				{/* <Tooltip title="Add" arrow>
					<CreateNewTaskModal />
				</Tooltip> */}
				{/* <Tooltip title="Edit" arrow>
					<Button>
						<EditIcon></EditIcon>
					</Button>
				</Tooltip>
				<Tooltip title="Delete" arrow>
					<Button>
						<RemoveCircleIcon></RemoveCircleIcon>
					</Button>
				</Tooltip> */}
			</Toolbar>
		</AppBar>
	);
}

export default Header;
