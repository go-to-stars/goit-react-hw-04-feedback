import React from 'react';
import { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics.jsx';
import { Section } from '../Section/Section.jsx';
import { Notification } from '../Notification/Notification.jsx';
import { Container } from './App.stiled.jsx'; // імпорт стилів тегу div (Container),

export const App = () => {
  const [good, setGood] = useState(0); // виклик хука useState створює стан good (з значенням по замовчуванню 0) і метод setGood, який змінює його значення
  const [neutral, setNeutral] = useState(0); // виклик хука useState створює стан neutral (з значенням по замовчуванню 0) і метод setNeutral, який змінює його значення
  const [bad, setBad] = useState(0); // виклик хука useState створює стан bad (з значенням по замовчуванню 0) і метод setBad, який змінює його значення

  const buttonClick = e => {
    const nameButton = e.target.name;

    switch (nameButton) {
      case 'good':
        setGood(prevState => prevState + 1); // виклик методу стану setGood оновлює стан good через інкремент на 1 значення попереднього стану good
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1); // виклик методу стану setNeutral оновлює стан neutral через інкремент на 1 значення попереднього стану neutral
        break;

      case 'bad':
        setBad(prevState => prevState + 1); // виклик методу setBad стану оновлює стан bad через інкремент на 1 значення попереднього стану bad
        break;

      default:
        throw new Error('An unexpected error occurred');
    }
  }; // виклик функції buttonClick призводить до оновлення стану good або neutral, або bad через відповідний метод (setGood, setNeutral, setBad) в залежності від кнопки, яка була натиснута

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }; // виклик функції countTotalFeedback повертає суму числових значень станів good, neutral та bad

  const countPositiveFeedbackPercentage = () => {
    const countTotal = countTotalFeedback();
    return Math.round((good * 100) / countTotal);
  }; // виклик функції countPositiveFeedbackPercentage повертає виражену у % частку від ділення числового значеня стану good на суму числових значень станів good, neutral та bad

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={buttonClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification textMassage="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  ); // повернення для рендеру розмітки додатку для збору статистики "Віджет відгуків"
}; // функція App(), повертає компоненти з даними для рендеру сторінки
