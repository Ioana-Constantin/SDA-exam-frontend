import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header() {
	return (
		<AppBar position="sticky" sx={{ backgroundColor: "#fdc7c1ff" }}>
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1, color: "black" }}
				>
					Project Task List
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
