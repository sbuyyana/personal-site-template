import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import WovenImageList from "./WovenImageList";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import Places from "./../places.json";

const image = [
  {
    original: "https://i.ibb.co/DCLcPM6/5.png",
    thumbnail: "https://i.ibb.co/DCLcPM6/5.png",
    originalTitle: "abcdf",
  },
];

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

export default function Place() {
  console.log(Places);
  debugger;
  let { placeName } = useParams();

  //const result = Places.find(({ id }) => id === placeName);

  var result = Places.find((e) => e.title === placeName);
  console.log(result);

  placeName = placeName ? placeName : "kozhikode";
  const [isPhotos, setIsPhotos] = useState(true);
  return (
    <>
      <h1>Place {placeName}</h1>
      <ImageGallery
        items={result.courselImage || []}
        autoPlay={false}
        showBullets={false}
        showThumbnails={false}
        showPlayButton={false}
      />
      <Container maxWidth="md">
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: "space-between", overflowX: "auto" }}
        >
          <Stack direction="row" spacing={1} marginTop={4}>
            <Chip
              icon={<PhotoLibraryIcon />}
              label="Photos"
              component="a"
              variant={isPhotos ? "" : "outlined"}
              clickable
              onClick={() => setIsPhotos(true)}
              color={isPhotos ? "primary" : "default"}
            />
            <Chip
              icon={<VideoCameraFrontIcon />}
              label="Videos"
              component="a"
              variant={isPhotos ? "outlined" : ""}
              clickable
              onClick={() => setIsPhotos(false)}
              color={isPhotos ? "default" : "primary"}
            />
          </Stack>
        </Toolbar>

        {isPhotos ? (
          <WovenImageList imgList={result.imageList || []} />
        ) : (
          <h2>
            <text>Videos</text>
          </h2>
        )}
      </Container>
    </>
  );
}
