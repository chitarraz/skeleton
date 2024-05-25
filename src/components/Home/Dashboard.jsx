import React from 'react';
// @mui/material components
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from '@mui/material/Typography';
// core components
import Table from "../../shared-components/Table/Table";

import styles from "../../assets/css/home/dashboard.module.scss";

export default function Dashboard() {

  const projects = [
    {img: '../../src/assets/img/Regent.png', name: 'Regent Hotel & Resort', project: 'Maintenance', workers: ['Worker 1', 'Worker 2'], assets: '15 Aircon', location: '1 Cuscaden Rd, Singapore 249715', startTime: '8:30am', status: 'Ongoing', id: 1},
    {img: '../../src/assets/img/OCK.jpg', name: 'Old Chang Kee JEM', project: 'Repair', workers: ['Worker 3', 'Worker 4', 'Worker 5'], assets: 'HVAC', location: '50 Jurong Gateway Rd, B1-K5 Jem', startTime: '11:30am', status: 'Not Started', id: 2},
    {img: '../../src/assets/img/Putien.png', name: 'Putien Jurong Point', project: 'Repair', workers: ['Subcon 1'], assets: 'HVAC', location: '1 Jurong West Central 2, #02-34 Jurong Point', startTime: '11:30am', status: 'Not Started', id: 3},
    {img: '../../src/assets/img/BreadTalk.png', name: 'Breadtalk IHQ', project: 'Repair', workers: ['Subcon 3'], assets: 'HVAC', location: '30 Tai Seng St, Singapore 534013', startTime: '1:30pm', status: 'Not Started', id: 4},
    {img: '../../src/assets/img/FatBird.jpg', name: 'Fat Bird', project: 'Repair', workers: ['Subcon 6'], assets: 'Aircon', location: 'Bugis 1 Liang Seah St, #01-15/16, Singapore 189022', startTime: '3:00pm', status: 'Not Started', id: 5},
  ];

  const tableHead = [
    { id: 'name', align: "left", label: 'Client Name' },
    { id: 'project', align: "left", label: 'Project' },
    { id: 'workers', align: "left", label: 'Workers' },
    { id: 'assets', align: "left", label: 'Assets' },
    { id: 'location', align: "left", label: 'Location' },
    { id: 'startTime', align: "left", label: 'Start Time' },
    { id: 'status', align: "right", label: 'Project Status' },
  ];

  return (
    <div className={styles.main}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="card">
            <div className="card-body">
              <h5>On time service compliance</h5>
              <div className="row">
                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                  <div className="d-flex d-sm-block d-md-flex align-items-center">
                    <h2 className="mb-0">72.5%</h2>
                    <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                  </div>
                  <h6 className="text-muted font-weight-normal">11.38% Since last month</h6>
                </div>
                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                  <i className="icon-lg mdi mdi-codepen text-primary ml-auto"></i>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="card">
            <div className="card-body">
              <h5>Service hours</h5>
              <div className="row">
                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                  <div className="d-flex d-sm-block d-md-flex align-items-center">
                    <h2 className="mb-0">453 Hours</h2>
                    <p className="text-success ml-2 mb-0 font-weight-medium">+8.3%</p>
                  </div>
                  <h6 className="text-muted font-weight-normal"> 9.61% Since last month</h6>
                </div>
                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                  <i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto"></i>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="card">
            <div className="card-body">
              <h5>Jobs completed</h5>
              <div className="row">
                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                  <div className="d-flex d-sm-block d-md-flex align-items-center">
                    <h2 className="mb-0">67</h2>
                    <p className="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p>
                  </div>
                  <h6 className="text-muted font-weight-normal">2.27% Since last month</h6>
                </div>
                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                  <i className="icon-lg mdi mdi-monitor text-success ml-auto"></i>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Card className={styles.tableContainer}>
        <CardContent>
          <span className={styles.title}>Today's Project</span>
          <Table
            header={tableHead}
          >
            { projects.map((project) => {
              return (
                <TableRow key={project.id}>
                  <TableCell><img className={styles.image} src={project.img} alt={project.name} />{project.name}</TableCell>
                  <TableCell>{project.project}</TableCell>
                  <TableCell className={styles.list}>
                    {project.workers.map((worker) => {
                      return(<p>{worker}</p>)
                    })}
                  </TableCell>
                  <TableCell>{project.assets}</TableCell>
                  <TableCell>{project.location}</TableCell>
                  <TableCell>{project.startTime}</TableCell>
                  <TableCell>{project.status}</TableCell>
                </TableRow>
              )
            })}
          </Table>
        </CardContent>
      </Card>
    </div> 
  );
}
