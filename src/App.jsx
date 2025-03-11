import "./App.css";
import { useState } from "react";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/backCard";
import Button from "./components/Button";

const App = () => {
  // Initial Flashcards
  const initialFlashcards = [
    { id: 1, character: "你好", answer: "Hello", image: "/assets/Hello.jpg" },
    { id: 2, character: "谢谢", answer: "Thank you", image: "/assets/Thanks.png" },
    { id: 3, character: "再见", answer: "Goodbye", image: "/assets/bye.jpg" },
    { id: 4, character: "爱", answer: "Love", image: "/assets/Love.jpg" },
    { id: 5, character: "喜欢", answer: "Like", image: "/assets/Like.jpg" },
    { id: 6, character: "天", answer: "Day", image: "/assets/Day.jpg" },
    { id: 7, character: "漂亮", answer: "Pretty", image: "/assets/Pretty.avif" },
    { id: 8, character: "冷", answer: "Cold", image: "/assets/Cold.webp" },
    { id: 9, character: "汤", answer: "Soup", image: "/assets/Soup.jpg" },
    { id: 10, character: "中文", answer: "Chinese", image: "/assets/Chinese.jpg" }
  ];

  // Shuffles cards
  const [cards, setCards] = useState(initialFlashcards);

  // Track which card is being displayed
  const [cardIndex, setCardIndex] = useState(0);

  // State to switch between front and back of the card
  const [isFront, setIsFront] = useState(true);

  // State for the user's guess input
  const [guess, setGuess] = useState("");

  // Track current streak and longest streak
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  // Helper to flip card
  const flipCard = () => {
    setIsFront((prev) => !prev);
  };

  // Current card object
  const currentFlashcard = cards[cardIndex];

  // Move to previous card
  const goBack = () => {
    setCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setIsFront(true);
  };

  // Move to next card
  const goForward = () => {
    setCardIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
    setIsFront(true);
  };

  // Shuffle the card
  const shuffleCards = () => {
    const newOrder = [...cards];
    for (let i = newOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
    }
    setCards(newOrder);
    setCardIndex(0);
    setIsFront(true);
  };

  // Check user’s guess
  const checkAnswer = (e) => {
    e.preventDefault(); // so form doesn't reload the page
    const correctAnswer = currentFlashcard.answer.trim().toLowerCase();
    const userGuess = guess.trim().toLowerCase();

    if (userGuess === correctAnswer) {
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
      alert("Correct!");
    } else {
      setCurrentStreak(0);
      alert(`Incorrect! The correct answer was "${currentFlashcard.answer}".`);
    }

    // Clear guess input
    setGuess("");
  };

  return (
    <div className="App">
      <h1>Chinese Practice</h1>
      <h3>Test your Chinese Character Recognition!</h3>
      <p>Number of Cards: {cards.length}</p>
      <p>Current Streak: {currentStreak}</p>
      <p>Longest Streak: {longestStreak}</p>

      {isFront ? (
        <FrontCard character={currentFlashcard.character} onClick={flipCard} />
      ) : (
        <BackCard answer={currentFlashcard.answer} image={currentFlashcard.image} onClick={flipCard} />
      )}

      <form onSubmit={checkAnswer}>
        <label htmlFor="guess">
          Guess the answer here:
          <input
            type="text"
            id="guess"
            name="guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Type your guess..."
          />
        </label>
        <Button ButtonName="Submit Guess" OnClick={checkAnswer} />
      </form>

      <Button ButtonName="⭠" OnClick={goBack} />
      <Button ButtonName="⭢" OnClick={goForward} />
      <Button ButtonName="Shuffle Cards" OnClick={shuffleCards} />
    </div>
  );
};

export default App;
