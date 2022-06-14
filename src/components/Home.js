import React from "react";
import ImageGallery from "react-image-gallery";
import FeaturedVideo from "./FeaturedVideo";
import FeaturedPost from "./FeaturedPost";
import Grid from "@mui/material/Grid";
import Places from "./../places.json";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const images = [
  {
    original: "https://i.ibb.co/zN3C6gb/kozhikode-Th.jpg",
    thumbnail: "https://i.ibb.co/zN3C6gb/kozhikode-Th.jpg",
    originalTitle: "Kozhikode Beach",
  },
  {
    original: "https://i.ibb.co/KV3CpSP/Kottakkal-Th.jpg",
    thumbnail: "https://i.ibb.co/KV3CpSP/Kottakkal-Th.jpg",
    originalTitle: "Kottakkal Arya Vaidya Sala",
  },
  {
    original: "https://i.ibb.co/YXjY69R/Tirur-Th.jpg",
    thumbnail: "https://i.ibb.co/YXjY69R/Tirur-Th.jpg",
    originalTitle: "Tirur",
  },
  {
    original: "https://i.ibb.co/wrTJvSL/Guruvayur-Th.jpg",
    thumbnail: "https://i.ibb.co/wrTJvSL/Guruvayur-Th.jpg",
    originalTitle: "Guruvayur Temple",
  },
  {
    original: "https://i.ibb.co/LNCV1TB/Thrissur-Th.jpg",
    thumbnail: "https://i.ibb.co/LNCV1TB/Thrissur-Th.jpg",
    originalTitle: "Thrissur SnehaTheeram Beach",
  },
  {
    original: "https://i.ibb.co/nfV9bfm/Kochi-Th.jpg",
    thumbnail: "https://i.ibb.co/nfV9bfm/Kochi-Th.jpg",
    originalTitle: "Kochi/Cochin",
  },
];

export default function Home() {
  return (
    <>
      <ImageGallery items={images} autoPlay="true" showBullets="true" />
      <Grid container spacing={4} marginTop={4}>
        <FeaturedVideo />

        <Grid item md={6} display={{ xs: "none", md: "block" }}>
          <Card variant="outlined" sx={{ height: 270 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                About
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                My Recent travel collection
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              alt="Kottakkal"
              height="140"
              margin="8"
              image="https://i.ibb.co/KV3CpSP/Kottakkal-Th.jpg"
            />
            <CardActions></CardActions>
          </Card>
        </Grid>
      </Grid>
      <h2>
        <text>Places</text>
      </h2>
      <Grid container spacing={4}>
        {Places.map((post) => (
          <FeaturedPost key={post.id} post={post} />
        ))}
      </Grid>
    </>
  );
}
