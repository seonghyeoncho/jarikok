import { styled } from "styled-components";

interface NotificationPresentationProps {
  notices: string[];
  helpMessages: string[];
}

const NotificationPresentation = ({ notices, helpMessages }: NotificationPresentationProps) => (
  <NotificationPresentationContainer>
    <Section>
      <Title>공지</Title> 
      <List>
        {notices.map((notice, index) => (
          <ListItem key={`notice-${index}`}>{notice}</ListItem>
        ))}
      </List>
    </Section>

    <Section>
      <Title>도움말</Title>
      <List>
        {helpMessages.map((message, index) => (
          <ListItem key={`help-${index}`}>{message}</ListItem>
        ))}
      </List>
    </Section>
  </NotificationPresentationContainer>
);

const NotificationPresentationContainer = styled.div``;

const Section = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
  
  &:before {
    content: "";
    position: absolute;
    left: 8px;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #000;
  }
`;

export default NotificationPresentation;
