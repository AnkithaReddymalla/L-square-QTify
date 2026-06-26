import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const AlbumCard = ({ album, type = "album" }) => {
  return (
    <Card sx={{ width: 200, borderRadius: "8px", overflow: "hidden" }}>
      <CardMedia
        component="img"
        height="160"
        image={album.image}
        alt={album.title}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="subtitle1" noWrap>
          {album.title}
        </Typography>
        <Chip
          label={
            type === "song"
              ? `${album.likes} Likes`
              : `${album.follows} Follows`
          }
          size="small"
          sx={{ fontSize: "12px", height: "24px", alignSelf: "flex-start" }}
        />
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
