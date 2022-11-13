import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/UserService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CreateNewUserModal from "../modal/CreateNewUserModal";
import Tooltip from "@mui/material/Tooltip";

import EditUserModal from "../modal/EditUserModal";

const Users = () => {
	const [users, setUsers] = useState([]); //hook initializat cu array gol

	useEffect(() => {
		getAllUsers()
			.then((response) => setUsers(response))
			.catch((err) => console.error(err));
	}, []);

	const rows = users.map((user) => ({
		id: user.id,
		firstName: user.first_name,
		lastName: user.last_name,
	}));

	return (
		<div
			className="margin-left"
			style={{
				backgroundImage: "url(http://localhost:3000/background.jpg)",
				backgroundSize: "cover",
				height: "100vh",
			}}
		>
			<div>
				<Tooltip title="Add" arrow>
					<CreateNewUserModal />
				</Tooltip>
			</div>
			<TableContainer component={Paper} sx={{maxWidth: 1000}}>
				<Table sx={{ minWidth: 650}} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>First Name</TableCell>
							<TableCell align="right">Last Name</TableCell>
							<TableCell align="right">
								Actions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.id}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.firstName}
								</TableCell>
								<TableCell align="right">{row.lastName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TableCell>
								<TableCell align="right">
									<EditUserModal user={row} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Users;
