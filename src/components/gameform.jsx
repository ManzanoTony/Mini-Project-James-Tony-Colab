import { useState, useEffect } from "react";

function GameForm({ onSubmit, initialValues, buttonText }) {
const [title, setTitle] = useState("");
const [platform, setPlatform] = useState("");
const [genre, setGenre] = useState("");
const [status, setStatus] = useState("Backlog");
const [difficulty, setDifficulty] = useState("");
const [rating, setRating] = useState("");

useEffect(() => {
if (initialValues) {

    setTitle(initialValues.title);

setPlatform(initialValues.platform);
setGenre(initialValues.genre);
setStatus(initialValues.status);
setDifficulty(Number(initialValues.difficulty) ? String(initialValues.difficulty) : "");
setRating(initialValues.rating ? String(initialValues.rating) : "");
}
}, [initialValues]);

function handleSubmit(event) {
event.preventDefault();

const gameData = {
title,
platform,
genre,
status,
difficulty: difficulty ? Number(difficulty) : null,
rating: rating ? Number(rating) : null
};

onSubmit(gameData);

if (!initialValues) {
setTitle("");
setPlatform("");
setGenre("");
setStatus("Backlog");
setDifficulty("");
setRating("");
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

<label>Difficulty</label>
<select
value={difficulty}
onChange={(event) => setDifficulty(event.target.value)}
>
<option value="">Not set</option>
<option value="1">1 - Very easy</option>
<option value="2">2 - Easy</option>
<option value="3">3 - Medium</option>
<option value="4">4 - Hard</option>
<option value="5">5 - Very hard</option>
</select>

<label>Rating</label>
<select
value={rating}
onChange={(event) => setRating(event.target.value)}
>
<option value="">Not rated</option>
<option value="1">★ 1</option>
<option value="2">★★ 2</option>
<option value="3">★★★ 3</option>
<option value="4">★★★★ 4</option>
<option value="5">★★★★★ 5</option>
</select>

<button type="submit">{buttonText}</button>
</form>
);
}

export default GameForm;