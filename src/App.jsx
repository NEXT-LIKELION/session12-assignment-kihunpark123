import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import DustInfo from "./components/DustInfo";
import { getDustInfo } from "./services/api";

function App() {
    const [dustData, setDustData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState("전체");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await getDustInfo();
                setDustData(response);
            } catch (err) {
                setError(
                    "데이터를 불러오는 데 실패했습니다. 잠시 후 다시 시도해 주세요."
                );
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 5 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    const filteredDustData =
        selectedDistrict === "전체"
            ? dustData
            : dustData.filter(
                  (item) =>
                      item.MSRRGN_NM === selectedDistrict ||
                      item.MSRSTE_NM.includes(selectedDistrict)
              );

    if (loading)
        return <div className="loading">데이터를 불러오는 중입니다...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="App">
            <Header />

            <main>
                <div className="district-selector">
                    <label htmlFor="district-select">지역구 선택: </label>
                    <select
                        id="district-select"
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                    >
                        <option value="전체">전체 지역구</option>
                        <option value="강남구">강남구</option>
                        <option value="강동구">강동구</option>
                        <option value="강북구">강북구</option>
                        <option value="강서구">강서구</option>
                        <option value="관악구">관악구</option>
                        <option value="광진구">광진구</option>
                        <option value="구로구">구로구</option>
                        <option value="금천구">금천구</option>
                        <option value="노원구">노원구</option>
                        <option value="도봉구">도봉구</option>
                        <option value="동대문구">동대문구</option>
                        <option value="동작구">동작구</option>
                        <option value="마포구">마포구</option>
                        <option value="서대문구">서대문구</option>
                        <option value="서초구">서초구</option>
                        <option value="성동구">성동구</option>
                        <option value="성북구">성북구</option>
                        <option value="송파구">송파구</option>
                        <option value="양천구">양천구</option>
                        <option value="영등포구">영등포구</option>
                        <option value="용산구">용산구</option>
                        <option value="은평구">은평구</option>
                        <option value="종로구">종로구</option>
                        <option value="중구">중구</option>
                        <option value="중랑구">중랑구</option>
                    </select>
                </div>

                <DustInfo dustData={filteredDustData} />

                <div className="info-section">
                    <h3>미세먼지 단계별 대응 방법</h3>
                    <div className="info-card good">
                        <h4>좋음 (0~30 μg/m³)</h4>
                        <p>- 대기 상태가 좋습니다. 야외 활동을 즐기세요.</p>
                    </div>
                    <div className="info-card moderate">
                        <h4>보통 (31~80 μg/m³)</h4>
                        <p>
                            - 이전에 알레르기나 호흡기 질환을 겪었다면
                            주의하세요.
                        </p>
                    </div>
                    <div className="info-card bad">
                        <h4>나쁨 (81~150 μg/m³)</h4>
                        <p>
                            - 장시간 실외 활동을 피하고, 마스크 착용을
                            권장합니다.
                        </p>
                        <p>- 창문을 닫아 실내 공기를 관리하세요.</p>
                    </div>
                    <div className="info-card very-bad">
                        <h4>매우 나쁨 (151 μg/m³ 이상)</h4>
                        <p>- 가능한 실내에 머무르세요.</p>
                        <p>- 외출 시 반드시 마스크를 착용하세요.</p>
                        <p>- 공기청정기 사용을 권장합니다.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
