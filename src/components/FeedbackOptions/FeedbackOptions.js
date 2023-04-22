import {
  FedbackOptionBtn,
  FedbackOptionWrapper,
} from './FeedbackOptions.styled';
import { Section } from 'components/Section/Section';
import { BtnIcon } from 'components/Utils.js/Utils';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <FedbackOptionWrapper>
        {options.map(option => {
          const icon = BtnIcon(option);
          return (
            <FedbackOptionBtn
              onClick={() => onLeaveFeedback(option)}
              key={option}
              iconColor={option}
              title={option}
              type="button"
            >
              {icon}
            </FedbackOptionBtn>
          );
        })}
      </FedbackOptionWrapper>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
