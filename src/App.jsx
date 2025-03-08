import './App.css';
import { useState } from 'react';
import FrontCard from './components/FrontCard';
import BackCard from './components/backCard';
import Button from './components/Button';

const App = () => {
  // Set of Flashcards
  const Flashcards = [
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
  ]
  // State for card index
  const [cardIndex, setCardIndex] = useState(0)

  // State to switch between front and back card
  const [isFront, setIsFront] = useState(true)

  const Flip = () => {
    setIsFront(!isFront);
  }

  // Current card index
  const currentFlashcard = Flashcards[cardIndex]

  // State to go back or forward in the Cards set
  // Limit range between 0 - Flashcards.length
  const Back = () => {
    setCardIndex((prevIndex) => Math.max(prevIndex - 1, 0))
    setIsFront(true)
  }

  const Forward = () => {
    setCardIndex((prevIndex) => Math.min(prevIndex + 1, Flashcards.length - 1))
    setIsFront(true)
  }

  return (
  <div className = "App">
    <h1>Chinese Practice</h1>
    <h3>Test your Chinese Character Recognition!</h3>
    <p>Number of Cards: {Flashcards.length}</p>
    { isFront ? (
      <FrontCard character={currentFlashcard.character} onClick={Flip} />
    ) : (
      <BackCard answer={currentFlashcard.answer} image={currentFlashcard.image} onClick={Flip} />
    )}

    <Button ButtonName="⭠" OnClick={Back} />
    <Button ButtonName="⭢" OnClick={Forward} />
   
  </div>


  );
};

export default App;