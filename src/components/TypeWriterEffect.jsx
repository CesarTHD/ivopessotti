import { useEffect, useState } from "react";

const TypeWriterEffect = ({ text = "", typingDelay = 150, erasingDelay = 100, newLineDelay = 1500 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (isTyping) {
            if (index < text.length) {
                setTimeout(() => {
                    setDisplayedText((prev) => prev + text.charAt(index));
                    setIndex(index + 1);
                }, typingDelay);
            } else {
                setTimeout(() => setIsTyping(false), newLineDelay);
            }
        } else {
            if (index > 0) {
                setTimeout(() => {
                    setDisplayedText((prev) => prev.slice(0, -2));
                    setIndex(index - 1);
                }, erasingDelay);
            } else {
                setTimeout(() => setIsTyping(true), newLineDelay);
            }
        }
    }, [displayedText, isTyping, index, text, typingDelay, erasingDelay, newLineDelay]);

    return <div>{displayedText}</div>;
};


export default TypeWriterEffect