// Создать React приложение - викторина. Приложение должно содержать компонент Quiz,
// в котором есть вопрос и 4 варианта ответа. Вопрос и варианты ответа передать через props.
// При нажатии на правильный ответ, под вопросом должна появляться подсказка ПРАВИЛЬНО!
import Quiz from './components/Quiz/Quiz';
import quiz from './data/quiz.json';
export default function App({ question, options, answer }) {
  return (
    <div>
      <Quiz
        question={quiz.question}
        options={quiz.options}
        answer={quiz.answer}
      />
    </div>
  );
}
