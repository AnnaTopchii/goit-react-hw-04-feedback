import PropTypes from 'prop-types';
import { Container, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <Container>
    {title && <Title>{title}</Title>}
    {children}
  </Container>
);

Section.propTypes = {
  good: PropTypes.string,
  children: PropTypes.node,
};
