import React, { useEffect, useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AlbumCard from "../AlbumCard/AlbumCard";
import Carousel from "../Carousel/Carousel";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const songsRes = await axios.get("https://qtify-backend.labs.crio.do/songs");
        const genresRes = await axios.get("https://qtify-backend.labs.crio.do/genres");
        setSongs(songsRes.data);
        setGenres(["All", ...genresRes.data.map((g) => g.key)]);
      } catch (error) {
        console.error("Error fetching songs/genres:", error);
      }
    };
    fetchData();
  }, []);

  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div style={{ margin: "20px 0" }}>
      <Typography variant="h6" style={{ marginBottom: "13px", textAlign: "left" }}>
        Songs
      </Typography>

      <Tabs
        value={selectedGenre}
        onChange={(e, newValue) => setSelectedGenre(newValue)}
        variant="scrollable"
        scrollButtons="auto"
      >
        {genres.map((genre) => (
          <Tab key={genre} label={genre} value={genre} />
        ))}
      </Tabs>

      <Carousel
        items={filteredSongs}
        renderItem={(song) => <AlbumCard album={song} type="song" />}
      />
    </div>
  );
};

export default SongsSection;
