import { FC } from 'react';

import {
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  Container,
  Grid
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactListItem from './ContactListItem/ContactListItem';
import BackButton from '../../components/BackButton/BackButton';

const teamMembers = [
  {
    name: 'Andrew J Fleming',
    profession: 'Freelance Web Developer',
    gitHubUrl: 'https://github.com/AndrewJFleming',
    linkedInUrl:
      'https://www.linkedin.com/in/andrew-j-fleming-web-dev?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNdr0NbHQTa%2B%2B4tstQekk1A%3D%3D',
    portfolioUrl: 'http://andrewjfleming.com/'
  },
  {
    name: 'Cody Reeves',
    profession: 'Freelance Web Developer',
    gitHubUrl: 'https://github.com/TechnoGecko',
    linkedInUrl:
      'https://www.linkedin.com/in/codingreeves?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BU8fra3saSI2UEDAIx7u3rQ%3D%3D',
    portfolioUrl: 'https://codingreeves.com/'
  }
];

interface Props {}

export const Contact: FC<Props> = () => {
  return (
    <div>
      <Container>
        <Typography variant="h4" my="1rem">
          Contact the Developers
        </Typography>
        <Typography mb="2rem">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque
          eu, pretium quis, sem. Nulla consequat massa quis enim.
          Donec.
        </Typography>
        <Grid container spacing={3}>
          {teamMembers.map(teamMember =>
            <Grid item xs={12} sm={6}>
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: 'background.paper'
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 24, paddingLeft: '16px' }}
                    variant="h4"
                    gutterBottom
                  >
                    {teamMember.name}
                  </Typography>
                  <Typography
                    sx={{ paddingLeft: '16px' }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {teamMember.profession}
                  </Typography>
                  <Divider sx={{ marginLeft: '16px' }} />
                  <List>
                    <ContactListItem
                      name={teamMember.name}
                      icon={<GitHubIcon />}
                      externalLinkUrl={teamMember.gitHubUrl}
                      externalLinkDestination="GitHub"
                    />
                    <ContactListItem
                      name={teamMember.name}
                      icon={<LinkedInIcon />}
                      externalLinkUrl={teamMember.linkedInUrl}
                      externalLinkDestination="LinkedIn"
                    />
                    <ContactListItem
                      name={teamMember.name}
                      icon={<CollectionsIcon />}
                      externalLinkUrl={teamMember.portfolioUrl}
                      externalLinkDestination="Portfolio Site"
                    />
                  </List>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
        <BackButton />
      </Container>
    </div>
  );
};
