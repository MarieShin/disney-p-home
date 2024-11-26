import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "1f2788d4bcbcb8c670df4df5a5103275",
        language: "ko-KR"
    }
})

export default instance;