const teamMembers = [
  {
    name: "Jimmy",
    role: "Student developer",
    github: "https://github.com/jamesflamingo",
  },
  {
    name: "Tony",
    role: "Student developer",
    github: "https://github.com/ManzanoTony",
  },
];

function About() {
  return (
    <main className="content about-page">
      <header className="about-heading">
        <p className="about-eyebrow">ABOUT THE PROJECT</p>
        <h1>One place for every game.</h1>
        <p>
          Game Tracker is a student project for keeping your video game
          collection organized. Track what you want to play, what you are
          playing, and what you have completed, with a personal difficulty and
          enjoyment rating for every game.
        </p>
      </header>

      <section className="about-team" aria-labelledby="team-heading">
        <div className="about-section-heading">
          <p className="about-eyebrow">THE PEOPLE BEHIND IT</p>
          <h2 id="team-heading">Meet the team</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.name}>
              <span className="team-avatar" aria-hidden="true">
                {member.name.charAt(0)}
              </span>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a href={member.github} target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
