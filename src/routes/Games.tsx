import GamePongTitle from "../components/GamePongTitle";
import ProjectGrid from "../components/ProjectGrid";
import { getProjectsByType } from "../data/projects";

export default function Games() {
  const gameProjects = getProjectsByType("game");

  return (
    <section className="section games-page-section">
      <div className="games-title-section">
        <div className="games-title-copy">
          <p className="games-title-kicker">Games</p>
          <h1>Playable systems for public issues, humor, and experiment.</h1>
          <p>
            Game projects include newsgames, Unity web builds, and small
            browser-playable prototypes.
          </p>
        </div>
        <GamePongTitle />
      </div>

      <ProjectGrid projects={gameProjects} />
    </section>
  );
}
