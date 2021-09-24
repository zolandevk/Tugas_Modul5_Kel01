import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import CardMedia from "@material-ui/core/CardMedia";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';


export default class masker extends Component {
    constructor(props) {
		super(props);
		this.state = {
			recipe: [],
			visible: false,
		};
	}

	handleButton = (steps) => {
		alert("REVIEW : " + steps);
	};
	
	componentDidMount() {
		axios({
			method: "get",
			url: "http://localhost:8000/data",
			headers: {
				accept: "*/*",
			},
		})
		.then((data) => {
			console.log(data.data);
			this.setState({
				recipe: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
	}
	
	render() {
		return (
			<div style={{ backgroundColor: "#ffffff" }}>
        <div style={{ fontWeight: "bold" }} bgcolor="#ffffff" align ="center" direction ="left" scrollamount="10"> Tugas Modul 5 Praktikum RPLBK Kelompok 01 </div>
        <div style={{ marginTop: 20 }}>
      <center>
      
  
            </center>
        <div className="marquee" >
            <center>
              <h2> Face Mask and Scrub</h2>
        </center>
        </div>
				<Grid container
                    md={11}
                    spacing={4}
                    style={{ margin:"auto", backgroundColor: "#ffffff" }}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="strech"
					
                >
					{this.state.recipe.map((results, index) => {
						return (
							<Grid item key={results.name} md={3}>
								<Card>
									<CardActionArea onClick={() => this.handleButton(results.steps)}>
                                                                                            <CardMedia
                                                    style={{
														height: "150px",
														margin: "auto",
														paddingTop: "5%",
                                                        // margin: "1px",
                                                        // padding: "auto",
                                                        borderRadius: "8px",
                                                        // height: "80px",
                                                        // width: "80px"
                                                    }}
                                                    component="img"
                                                    image={results.image}
                                                />
                                            
											<Typography style={{ fontWeight: "bold" }}>
												<br/>{results.name}
											</Typography>
											<Typography>
												 : {results.ingredients}
											</Typography>
									</CardActionArea>
								</Card>
							</Grid>
						);
					})}
				</Grid>                
                <br/><br/><br/><br/>
			</div>
      </div>
            
		)
	}
}