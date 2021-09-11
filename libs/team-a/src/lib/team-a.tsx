import { Button } from "@@orange-solutions/core"
import './team-a.module.scss';

/* eslint-disable-next-line */
export interface TeamAProps {}

export function TeamA(props: TeamAProps) {
  return (
    <div>
      <h1>Welcome to TeamA!</h1>
      <Button />
    </div>
  );
}

export default TeamA;
