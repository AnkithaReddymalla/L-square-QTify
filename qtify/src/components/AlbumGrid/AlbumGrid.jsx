import React, { useEffect, useState } from "react";
import axios from "axios";
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
        <Button
       variant="text"
       onClick={() => setCollapsed(!collapsed)}
       sx={{ textTransform: "none", color: "green" }}
         >
         <Typography sx={{ textTransform: "none" }}>
         {collapsed ? "Collapse" : "Show All"}
        </Typography>
        </Button>
      </div>

      {collapsed ? (
  <Carousel
    items={albums}
    renderItem={(album) => <AlbumCard album={album} />}
  />
) : (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", // force 7 columns
      gap: "16px",
    }}
  >
    {albums.map((album) => (
      <AlbumCard key={album.id} album={album} />
    ))}
  </div>
)}

    </div>
  );
};

export default AlbumGrid;
