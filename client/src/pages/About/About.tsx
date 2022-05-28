import { FC } from "react";

import { Container, Typography } from "@mui/material";

import PageTitle from "../../components/PageTitle/PageTitle";
import BackButton from "../../components/BackButton/BackButton";

import trelloScreenshot from "../../assets/images/screenshot2.png";
import reduxScreenshot from "../../assets/images/screenshot3.png";
import { AboutFigure } from "./AboutFigure/AboutFigure";

export const About: FC = () => {
  return (
    <Container>
      <BackButton />
      <PageTitle title="About" />
      <Typography>
        This is a collaborative MERN stack project between Andrew Fleming and
        Cody Reeves. Our primary goal was to gain experience working in a team
        environment, using the Trello project management software for
        coordinating tasks for our weekly sprints. The initial release of the
        app was completed over the course of 4 weeklong sprints.
      </Typography>
      <AboutFigure
        src={trelloScreenshot}
        caption="Screenshot of the project Trello board at the end of the 4th Sprint."
      />
      <Typography>
        Though both of us had experience with the Material UI CSS framework, a
        secondary goal for this collaborative project was to improve our skills
        working with the Material UI components; the styled-components feature
        as well as the custom theme feature.
      </Typography>
      <AboutFigure
        src={reduxScreenshot}
        caption="Screenshot of Redux state for the various reducers."
      />
      <Typography>
        Just like with Material UI, both of us had significant experience
        working with Redux prior to the start of this project but were eager to
        gain experience with Redux Toolkit; a more modern way of using Redux
        (see screenshot above for a glimpse of typical project Redux state).
      </Typography>
      <br />
      <Typography mb="2rem">
        Finally, we also wanted to gain experience building a React.js project
        using Typescript; to more easily 'hit the ground running' when
        potentially working with tech firms where TypeScript is typically used.
      </Typography>
      <BackButton />
    </Container>
  );
};
