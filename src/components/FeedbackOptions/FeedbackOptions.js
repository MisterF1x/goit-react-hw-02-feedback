import {
  FedbackOptionBtn,
  FedbackOptionWrapper,
} from './FeedbackOptions.styled';
import { Section } from 'components/Section/Section';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <FedbackOptionWrapper>
        {options.map(({ icon, title, color }, index) => (
          <FedbackOptionBtn
            onClick={() => onLeaveFeedback(title)}
            key={index}
            style={{ color: color }}
            title={title}
            type="button"
          >
            {icon}
          </FedbackOptionBtn>
        ))}
      </FedbackOptionWrapper>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};
