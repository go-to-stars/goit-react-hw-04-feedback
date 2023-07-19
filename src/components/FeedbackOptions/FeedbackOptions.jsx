import PropTypes from 'prop-types'; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import { ButtonsList, ButtonsListItem, Button } from './FeedbackOptions.styled'; // імпорт стилів тегів ul(ButtonsList), li(ButtonsListItem), button (Button)

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(value => (
        <ButtonsListItem key={value}>
          <Button type="button" name={value} onClick={onLeaveFeedback}>
            {value}
          </Button>
        </ButtonsListItem>
      ))}
    </ButtonsList>
  ); // при настанні події onClick викликається функція onLeaveFeedback
}; // повернення для рендеру розмітки списку кнопок секції "Please leave feedback";

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}; // типізація (опис типів) пропсів фукції FeedbackOptions
