import React from "react";
import { Helmet } from "react-helmet";

const OpenGraphMeta = (props) => {
    const { title, description, url, image, siteName } = props;
    return (
        <React.Fragment>
        <Helmet>
            {/* OpenGraph metadata */}
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:url" content={url}/>
            <meta property="og:image" content={image}/>
            {props.siteName && <meta property="og:site_name" content={siteName}/>}

            {/* Twitter metadata */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image}/>
        </Helmet>
        </React.Fragment>
    );
};

export default OpenGraphMeta;