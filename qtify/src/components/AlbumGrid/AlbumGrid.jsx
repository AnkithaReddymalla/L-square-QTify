import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AlbumCard from "../AlbumCard/AlbumCard";
import Carousel from "../Carousel/Carousel";

const AlbumGrid = ({ title, apiUrl }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(apiUrl);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchAlbums();
  }, [apiUrl]);

  return (
    <div style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <Typography variant="h6">{title}</Typography>
        <Button variant="text" onClick={() => setCollapsed(!collapsed)} sx={{ textTransform: "none", color: "green" }}>
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      </div>

      {collapsed ? (
        <Carousel items={albums} renderItem={(album) => <AlbumCard album={album} />} />
      ) : (
        <Grid container spacing={2}>
          {albums.map((album) => (
            <Grid item key={album.id} md={2}>
              <AlbumCard album={album} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default AlbumGrid;
