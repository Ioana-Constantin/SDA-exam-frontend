import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AllTasks from "../allTasks/AllTasks";
import Users from "../users/Users";
import Departments from "../departments/Departments";
import Header from "../header/Header";
import { useNavigate, useLocation } from "react-router";

const drawerWidth = 240;

function SideBar() {
	let navigate = useNavigate();
	return (
		<Box sx={{ display: "flex" }}>
			

			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					marginTop:9,	
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<List>
					<List>
						{["Tasks", "Users", "Departments"].map((text, index) => (
							<ListItem key={text} disablePadding onClick={() => {
								navigate("/"+text);
							}}>
								<ListItemButton>
									<ListItemIcon>
										{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</List>
			</Drawer>
		</Box>
	);
}
export default SideBar;
