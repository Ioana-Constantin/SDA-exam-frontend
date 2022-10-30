import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate, useLocation } from "react-router";

function Header() {
	let navigate = useNavigate();
	return (
		<AppBar
			
			position="sticky"
			sx={{ backgroundColor: "#FFD5CC"}}
		>
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1, color: "black" }}
				>
					Project Task List
				</Typography>
				<Tooltip title="Add new task" arrow>
					<Button>
						<AddTaskIcon></AddTaskIcon>
					</Button>
				</Tooltip>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
