import axios from "axios";

const API_KEY = import.meta.env.VITE_SEOUL_API_KEY || "your_default_api_key";

export const getDustInfo = async () => {
    try {
        const response = await axios.get(
            `http://openapi.seoul.go.kr:8088/${API_KEY}/json/RealtimeCityAir/1/25/`
        );
        return response.data.RealtimeCityAir.row;
    } catch (error) {
        console.error("미세먼지 정보를 가져오는 데 실패했습니다:", error);
        throw error;
    }
};
