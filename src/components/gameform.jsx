import { useState, useEffect } from "react";

function GameForm({ onSubmit, initialValues, buttonText }) {
const [title, setTitle] = useState("");
const [platform, setPlatform] = useState("");
const [genre, setGenre] = useState("");
const [status, setStatus] = useState("Backlog");

useEffect(() => {
if (initialValues) {

    setTitle(initialValues.title);

setPlatform(initialValues.platform);
setGenre(initialValues.genre);
setStatus(initialValues.status);
}
}, [initialValues]);

function handleSubmit(event) {
event.preventDefault();

const gameData = {
title,
platform,
genre,
status
};

onSubmit(gameData);

if (!initialValues) {
setTitle("");
setPlatform("");
setGenre("");
setStatus("Backlog");
}
}

return (
<form onSubmit={handleSubmit}>
<label>Game title</label>
<input
type="text"
value={title}
onChange={(event) => setTitle(event.target.value)}
required
/>

<label>Platform</label>
<input
type="text"
value={platform}
onChange={(event) => setPlatform(event.target.value)}
required
/>

<label>Genre</label>
<input
type="text"
value={genre}
onChange={(event) => setGenre(event.target.value)}
required
/>

<label>Status</label>
<select
value={status}
onChange={(event) => setStatus(event.target.value)}
>
<option value="Backlog">Backlog</option>
<option value="Playing">Playing</option>
<option value="Completed">Completed</option>
<option value="Dropped">Dropped</option>
</select>

<button type="submit">{buttonText}</button>
</form>
);
}

export default GameForm;