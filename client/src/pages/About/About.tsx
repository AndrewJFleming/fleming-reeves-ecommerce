import { FC } from "react";
import { Link } from "react-router-dom";

import { Container, Typography } from "@mui/material";

interface Props {}

export const About: FC<Props> = () => {
  return (
    <Container>
      <Typography variant="h4" my="1rem">
        About
      </Typography>
      <Typography mb="2rem">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </Typography>
      <Typography>
        Back to <Link to="/">products page</Link>.
      </Typography>
    </Container>
  );
};
