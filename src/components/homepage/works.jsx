import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="/images/amazon-logo.png"
								alt="amazon"
								className="work-image"
							/>
							<div className="work-title">Amazon Leo</div>
							<div className="work-subtitle">
								Embedded Software Engineer
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>
						<div className="work">
							<img
								src="/images/cantankerous-creations-logo.png"
								alt="cantankerous creations, the greatest game studio in the world!"
								className="work-image"
							/>
							<div className="work-title">Cantankerous Creations</div>
							<div className="work-subtitle">
								CEO
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
						<div className="work">
							<img
								src="/images/riot-games-logo.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Riot Games</div>
							<div className="work-subtitle">
								Senior Software Engineer
							</div>
							<div className="work-duration">2021 - 2024</div>
						</div>

						<div className="work">
							<img
								src="/images/microsoft-logo.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Microsoft Corporation</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - 2021</div>
						</div>
						
						<div className="work">
							<img
								src="/images/microsoft-logo.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Microsoft Corporation</div>
							<div className="work-subtitle">
								Associate Software Engineer
							</div>
							<div className="work-duration">2017 - 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
