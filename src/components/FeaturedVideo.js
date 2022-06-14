import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import ReactPlayer from "react-player/youtube";

function FeaturedVideo(props) {
  const { post } = props;

  return (
    <Grid item xs={12} sm={12} md={6}>
      <Card>
        <ReactPlayer
          url={["https://www.youtube.com/watch?v=jpWljyqnomY"]}
          width="100%"
          height="270px"
          muted={true}
          playing={true}
          loop={true}
        />
      </Card>
    </Grid>
  );
}

FeaturedVideo.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedVideo;
