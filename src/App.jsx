import "./App.css";
import Axios from "axios";
import Audio from "./components/audio.jsx";
import { Fragment, useState, useEffect } from "react";
import {
	Grommet,
	Button,
	Heading,
	Box,
	Collapsible,
	ResponsiveContext,
} from "grommet";
import { Notification, Favorite, ShareOption } from "grommet-icons";
import AppBox from "./components/Box.jsx";
function App() {
	const [List, setList] = useState([]);
	const [Ave, setAve] = useState({
		name: "",
		images: "",
		size: "",
		audio: { file: "" },
	});
	useEffect(() => {
		Axios({
			url: "https://aves.ninjas.cl/api/birds",
		})
			.then((response) => {
				setList(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [setList]);
	console.log(List["uid"]);
	const [showSidebar, setShowSidebar] = useState(false);
	const theme = {
		global: {
			colors: {
				brand: "#44475a",
			},
			font: {
				family: "Roboto",
				size: "18px",
				height: "20px",
			},
		},
	};
	console.log(Ave);
	const Buscar = () => {
		const ave = Math.floor(Math.random() * List.length);
		console.log(List[ave]);
		Axios.get(`https://aves.ninjas.cl/api/birds/${List[ave]["uid"]}`).then(
			(res) => {
				setAve(res.data);
			}
		);
	};
	return (
		<Fragment>
			<Grommet theme={theme} themeMode="light" full>
				<ResponsiveContext.Consumer>
					{(size) => (
						<Box fill>
							<AppBox background="neutral-3">
								<Heading level="3" margin="none">
									Aves Chilenas
								</Heading>
								<Button
									icon={<Notification />}
									onClick={() => {
										setShowSidebar(!showSidebar);
									}}
								/>
							</AppBox>
							<Box
								direction="row"
								flex
								overflow={{ horizontal: "hidden" }}
							>
								<Box flex align="center" justify="center">
									{Ave.name === "" ? (
										<h2>Info</h2>
									) : (
										<div>
											<div>

												<img
													height="250px"
													width="200px"
													style={{
														float: "left",
														margin: "0 15px 0 10px",
													}}
													src={Ave.images.main}
												/>
												 <p
													style={{
														marginBottom: "1%",
													}}
												>
													<strong>Tamano:</strong>{" "}
													{Ave.size}
												</p>
												<br />
												<p
													style={{
														marginBottom: "1%",
													}}
												>
													<strong>
														Familia:
													</strong>{" "}
													{Ave.order}
												< /p>
												<br />
												<p
													style={{
														marginBottom: "1%",
													}}
												>
													<strong>
														Tipo de especie:
													</strong>{" "}
													{Ave.species}
												</p>
												<br />
												<Audio props={Ave.audio} />
												<div>
													<p
														style={{
															marginBottom: "1%",
														}}
													>
														<strong>Dato:</strong>{" "}
														{Ave.didyouknow}
													</p>
													<br />
													<p
														style={{
															marginBottom: "1%",
														}}
													>
														<strong>
															Habitat:
														</strong>
														{Ave.habitat}
													</p>
												</div>
											</div>
											<Button
												icon={<Favorite color="blue" />}
												hoverIndicator
											/>
											<Button
												icon={
													<ShareOption color="plain" />
												}
												hoverIndicator
											/>
										</div>
									)}
									<Button
										primary
										label="Buscar Ave"
										margin="small"
										size="large"
										onClick={() => {
											Buscar();
										}}
									></Button>
								</Box>
								{size !== "small" && (
									<Collapsible
										direction="horizontal"
										open={showSidebar}
									>
										<Box
											flex
											width="medium"
											background="light-2"
											elevation="small"
											align="center"
											justify="center"
										>
											sidebar
										</Box>
									</Collapsible>
								)}
							</Box>
						</Box>
					)}
				</ResponsiveContext.Consumer>
			</Grommet>
		</Fragment>
	);
}

export default App;
