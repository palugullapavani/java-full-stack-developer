// import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import FaqData from '../../../assets/FAQQuesAndAns.json';

// const Faqs = () => {
//     const [faqData, setFaqData] = useState([]);
//     const [openQuestion, setOpenQuestion] = useState(null);
//     const [activeQuestions, setActiveQuestions] = useState('employee'); // Default to employee questions

//     useEffect(() => {
//         setFaqData(FaqData);
//     }, []);

//     useEffect(() => {
//         const handleClickOutside = () => {
//             if (openQuestion) {
//                 closeAnswer(openQuestion);
//             }
//         };
//         window.addEventListener('click', handleClickOutside);

//         return () => {
//             window.removeEventListener('click', handleClickOutside);
//         };
//     }, [openQuestion]);

//     const toggleAnswer = (questionId, event) => {
//         event.stopPropagation();
//         if (openQuestion === questionId) {
//             closeAnswer(questionId);
//         } else {
//             if (openQuestion) {
//                 closeAnswer(openQuestion);
//             }
//             openAnswer(questionId);
//         }
//     };

//     const openAnswer = (questionId) => {
//         const answerDiv = document.getElementById(answer-${questionId});
//         if (answerDiv) {
//             answerDiv.classList.add('border-t', 'border-black');
//             answerDiv.style.display = 'block';
//         }
//         setOpenQuestion(questionId);
//     };

//     const closeAnswer = (questionId) => {
//         const answerDiv = document.getElementById(answer-${questionId});
//         if (answerDiv) {
//             answerDiv.classList.remove('border-t', 'border-black');
//             answerDiv.style.display = 'none';
//         }
//         setOpenQuestion(null);
//     };

//     const toggleQuestions = () => {
//         setActiveQuestions(activeQuestions === 'employee' ? 'employer' : 'employee');
//         // Close any open questions when switching question sets
//         if (openQuestion) {
//             closeAnswer(openQuestion);
//         }
//     };

//     // Filter questions based on activeQuestions state
//     const filteredQuestions = faqData.filter(item => item.category === activeQuestions);

//     return (
//         <section className="px-8 py-10 bg-gray-100">
//             <h1 className="text-4xl font-semibold mb-10 text-center">Frequently Asked Questions</h1>
//             <div className="flex justify-center mb-10">
//                 <button className={mr-6 px-6 py-3 rounded-full focus:outline-none transition-colors duration-300 ease-in-out ${activeQuestions === 'employee' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white'}} onClick={toggleQuestions}>
//                     Employee
//                 </button>
//                 <button className={px-6 py-3 rounded-full focus:outline-none transition-colors duration-300 ease-in-out ${activeQuestions === 'employer' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white'}} onClick={toggleQuestions}>
//                     Employer
//                 </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
//                 {filteredQuestions.map((item) => (
//                     <div key={item.id} className="bg-white shadow-lg 
// rounded-lg overflow-hidden">
//                         <div className="px-6 py-4 cursor-pointer flex justify-between items-center border-b border-gray-200" onClick={(e) => toggleAnswer(item.id, e)}>
//                             <p className="text-lg font-semibold">{item.question}</p>
//                             <FontAwesomeIcon icon={openQuestion === item.id ? faArrowUp : faArrowDown} className="text-gray-600" />
//                         </div>
//                         <div id={answer-${item.id}} className="px-6 py-4 hidden border-b border-gray-200">
//                             <p className="text-gray-800">{item.answer}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Faqs;

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import FaqData from '../../../assets/FAQQuesAndAns.json';

const Faqs = () => {
    const [faqData, setFaqData] = useState([]);
    const [openQuestion, setOpenQuestion] = useState(null);
    const [activeQuestions, setActiveQuestions] = useState('employee'); // Default to employee questions

    useEffect(() => {
        setFaqData(FaqData);
    }, []);

    useEffect(() => {
        const handleClickOutside = () => {
            if (openQuestion) {
                closeAnswer(openQuestion);
            }
        };
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [openQuestion]);

    const toggleAnswer = (questionId, event) => {
        event.stopPropagation();
        if (openQuestion === questionId) {
            closeAnswer(questionId);
        } else {
            if (openQuestion) {
                closeAnswer(openQuestion);
            }
            openAnswer(questionId);
        }
    };

    const openAnswer = (questionId) => {
        const answerDiv = document.getElementById(`answer-${questionId}`);
        if (answerDiv) {
            answerDiv.classList.add('border-t', 'border-black');
            answerDiv.style.display = 'block';
        }
        setOpenQuestion(questionId);
    };

    const closeAnswer = (questionId) => {
        const answerDiv = document.getElementById(`answer-${questionId}`);
        if (answerDiv) {
            answerDiv.classList.remove('border-t', 'border-black');
            answerDiv.style.display = 'none';
        }
        setOpenQuestion(null);
    };

    const toggleQuestions = () => {
        setActiveQuestions(activeQuestions === 'employee' ? 'employer' : 'employee');
        // Close any open questions when switching question sets
        if (openQuestion) {
            closeAnswer(openQuestion);
        }
    };

    // Filter questions based on activeQuestions state
    const filteredQuestions = faqData.filter(item => item.category === activeQuestions);

    return (
        <section className="px-8 py-10 bg-gray-100">
            <h1 className="text-4xl font-semibold mb-10 text-center">Frequently Asked Questions</h1>
            <div className="flex justify-center mb-10">
                <button className={`mr-6 px-6 py-3 rounded-full focus:outline-none transition-colors duration-300 ease-in-out ${activeQuestions === 'employee' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white'}`} onClick={toggleQuestions}>
                    Employee
                </button>
                <button className={`mr-6 px-6 py-3 rounded-full focus:outline-none transition-colors duration-300 ease-in-out ${activeQuestions === 'employer' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white'}`} onClick={toggleQuestions}>
                    Employer
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {filteredQuestions.map((item) => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="px-6 py-4 cursor-pointer flex justify-between items-center border-b border-gray-200" onClick={(e) => toggleAnswer(item.id, e)}>
                            <p className="text-lg font-semibold">{item.question}</p>
                            <FontAwesomeIcon icon={openQuestion === item.id ? faArrowUp : faArrowDown} className="text-gray-600" />
                        </div>
                        <div id={`answer-${item.id}`} className="px-6 py-4 hidden border-b border-gray-200">
                            <p className="text-black-800">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faqs;




