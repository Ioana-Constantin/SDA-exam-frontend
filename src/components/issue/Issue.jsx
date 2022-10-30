import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";


export default function Issue(props) {
	// const [status, setStatus] = React.useState(props.status);

	// const handleStatusChange = (event) => {
	// 	setStatus(event.target.value);
	// };
	const getColorDept = (dept) => {
		switch (dept) {
			case "Prod":
				return "#5B7CDE";
			case "Approvals":
				return "#DE5BBD";
			case "QA":
				return "#DEBD5B";
			case "DevOps":
				return "#5BDE7B";
			default:
				return "#BA55D3";
		}
	};
	const selectDept = () => {
		return props.department.map((dept) => (
			<Chip
      sx={{backgroundColor: getColorDept(dept)}}
				key={props.id + dept}
				label={dept}size="small"

			/>
		));
	};

	return (
		<div>
			<Card
				sx={{
					// maxWidth: "250px",
					border: "solid 1px ligth-grey",
					boxShadow: 3,
          marginTop: 1,
          marginBottom: 4
				}}
			>
				<CardContent>
					{selectDept()}

					<Typography variant="body2" color="text.secondary">
						{props.title}
					</Typography>
					<Typography paragraph>Assigned to: {props.assignee}</Typography>
					<Typography paragraph>Status: {props.status}</Typography>
				</CardContent>
				<CardActions disableSpacing></CardActions>
			</Card>
		</div>
	);
}
