import React from "react";

function DustInfo({ dustData }) {
    const getAverageDust = () => {
        if (!dustData || dustData.length === 0) return { pm10: 0, pm25: 0 };

        const totalPm10 = dustData.reduce(
            (sum, item) => sum + Number(item.PM10),
            0
        );
        const totalPm25 = dustData.reduce(
            (sum, item) => sum + Number(item.PM25),
            0
        );

        return {
            pm10: Math.round(totalPm10 / dustData.length),
            pm25: Math.round(totalPm25 / dustData.length),
        };
    };

    const getDustStatus = (pm10) => {
        if (pm10 <= 30) return { status: "좋음", color: "#4CAF50" };
        if (pm10 <= 80) return { status: "보통", color: "#FFC107" };
        if (pm10 <= 150) return { status: "나쁨", color: "#FF9800" };
        return { status: "매우 나쁨", color: "#F44336" };
    };

    const avgDust = getAverageDust();
    const dustStatus = getDustStatus(avgDust.pm10);

    return (
        <div className="dust-info">
            <h2>현재 미세먼지 정보</h2>

            <div
                className="dust-status"
                style={{ backgroundColor: dustStatus.color }}
            >
                <h3>{dustStatus.status}</h3>
            </div>

            <div className="dust-details">
                <div className="dust-item">
                    <span className="dust-label">미세먼지(PM10)</span>
                    <span className="dust-value">{avgDust.pm10} μg/m³</span>
                </div>
                <div className="dust-item">
                    <span className="dust-label">초미세먼지(PM2.5)</span>
                    <span className="dust-value">{avgDust.pm25} μg/m³</span>
                </div>
            </div>

            <div className="measurement-list">
                <h3>측정소별 정보</h3>
                <div className="measurement-grid">
                    {dustData.map((item, index) => (
                        <div
                            key={index}
                            className="measurement-card"
                            style={{
                                backgroundColor:
                                    getDustStatus(item.PM10).color + "30",
                            }}
                        >
                            <h4>{item.MSRSTE_NM}</h4>
                            <p>PM10: {item.PM10} μg/m³</p>
                            <p>PM2.5: {item.PM25} μg/m³</p>
                            <p className="update-time">
                                측정시간: {item.MSRDT}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DustInfo;
