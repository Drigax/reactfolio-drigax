import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";
import OpenGraphMeta from "../components/openGraph/openGraphMeta";

import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<OpenGraphMeta
				title={`404 | ${INFO.main.title}`}
				description={`Page Not Found | ${INFO.main.title}`}
				url={`${INFO.main.url}/404`}
				image={`${INFO.main.logo}`}
				siteName={`${INFO.main.sitename}`}
			/>
			<div className="not-found page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="notfound-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								Oops! <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="not-found-message">
								Huh, I can't seem to find that page.
								<br />
								Your requested URL "{window.location.href}" was
								not found on this server.
							</div>
							<a href="/" className="not-found-link">
								Get me out of here!
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
