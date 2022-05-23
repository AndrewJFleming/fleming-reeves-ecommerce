import { FC } from "react";

interface Props {
  src: string;
  caption: string;
}

export const AboutFigure: FC<Props> = ({ src, caption }) => {
  return (
    <figure>
      <img style={{ width: "100%" }} src={src} alt={caption} />
      <figcaption>
        <em>Screenshot of Redux state for the various reducers.</em>
      </figcaption>
    </figure>
  );
};
