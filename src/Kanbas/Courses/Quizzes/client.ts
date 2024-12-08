import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const fetchAllQuizzes = async () => {
    try {
        const { data } = await axios.get(QUIZZES_API);
        return data || [];
    } catch (error) {
        console.error("Error fetching quizzes:", error);
        return [];
    }
};


export const deleteQuiz = async (id: string) => {
    const { data } = await axios.delete(`${QUIZZES_API}/${id}`);
    return data;
};

export const updateQuiz = async (quiz: any) => {
    const { data } = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
    return data;
};

export const createQuiz = async (quiz: any) => {
    const { data } = await axios.post(QUIZZES_API, quiz);
    return data;
};
