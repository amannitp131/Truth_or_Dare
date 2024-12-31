import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Truth.css';

const Truth = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const truthQuestions = [
        "What is your biggest fear?",
        "What’s the most embarrassing thing you’ve ever done?",
        "Who was your first crush?",
        "What’s a secret you’ve never told anyone?",
        "Would you  like to do camping?",
        "Frequency of lying 😅?",
        "What’s my priority number? it comes here also so u have to answer now",
        "What is the thing u like to do in future but unable to do now?",
        "Frequency of crying?",
        "What’s the most ridiculous thing you’ve cried over?",
        "What’s your favorite childhood memory?",
        "when u will accept my proposal"
    ];

    const handleNewQuestion = async () => {
        if (answer.trim()) {
            await handleSendEmail();
        }
        const randomIndex = Math.floor(Math.random() * truthQuestions.length);
        setQuestion(truthQuestions[randomIndex]);
        setAnswer(""); // Clear previous answer
    };

    const handleBack = async () => {
        if (answer.trim()) {
            await handleSendEmail();
        }
        navigate("/");
    };

    const handleSendEmail = async () => {
        try {
            await axios.post("http://localhost:5000/send-email", {
                question,
                answer,
            });
            
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send the answer.");
        }
    };

    return (
        <div className="truth-page">
            <div className="truth-container">
                <h1 className="truth-title">Truth</h1>
                <div className="question-box">
                    <button className="generate-btn" onClick={handleNewQuestion}>
                        Question puche?
                    </button>
                </div>

                {question && (
                    <div className="answer-section">
                        <p className="question-text">{question}</p>
                        <textarea
                            className="answer-box"
                            placeholder="Write your answer here..."
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                        <button
                            className="send-btn"
                            onClick={handleSendEmail}
                            disabled={!answer.trim()}
                        >
                            Send Answer
                        </button>
                    </div>
                )}
            </div>
            <button className="back-btn" onClick={handleBack}>
                Back
            </button>
        </div>
    );
};

export default Truth;
