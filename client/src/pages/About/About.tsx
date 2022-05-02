import { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

interface Props {}

export const About: FC<Props> = () => {
  return (
    <Container>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
      <p>
        Back to <Link to="/">products page</Link>.
      </p>
    </Container>
  );
};
