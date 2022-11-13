import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CreateNewDepartmentModal from "../modal/CreateNewDepartmentModal";
import Tooltip from "@mui/material/Tooltip";

import EditDepartmentModal from "../modal/EditDepartmentModal";
import { getAllDepartments } from "../../services/DepartmentService";

const Departments = () => {
	const [departments, setDepartments] = useState([]); //hook initializat cu array gol

	useEffect(() => {
		getAllDepartments()
			.then((response) => setDepartments(response))
			.catch((err) => console.error(err));
	}, []);

	const rows = departments.map((dept) => ({
		id: dept.id,
		description: dept.description,
		color: dept.color,
	}));

	return (
		<div className="margin-left">
			<div>
				<Tooltip title="Add" arrow>
					<CreateNewDepartmentModal />
				</Tooltip>
			</div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Department description</TableCell>
							<TableCell align="center">Background Color</TableCell>
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
									{row.description}
								</TableCell>
								<TableCell align="center">
									<Box bgcolor={row.color} sx={{ height: 20 }}></Box>
								</TableCell>
								<TableCell align="right">
									<EditDepartmentModal department={row} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Departments;
