var mockRealTimeData = [
    {
        "timestamp_mins": "2020-09-10 09:32:00",
        "firefighter_id": 36,
        "device_id": "0007",
        "device_battery_level": "23.23",
        "temperature": 28,
        "humidity": 35,
        "carbon_monoxide": 33,
        "nitrogen_dioxide": 20,
        "formaldehyde": 22,
        "acrolein": 21,
        "benzene": 24,
        "device_timestamp": "2020-09-10 09:32:38"
    },
    {
        "timestamp_mins": "2020-09-10 09:32:00",
        "firefighter_id": 36,
        "device_id": "0008",
        "device_battery_level": "23.23",
        "temperature": 29,
        "humidity": 40,
        "carbon_monoxide": 30,
        "nitrogen_dioxide": 21,
        "formaldehyde": 22,
        "acrolein": 21,
        "benzene": 24,
        "device_timestamp": "2020-09-10 09:32:38"
    },
    {
        "timestamp_mins": "2020-09-10 09:32:00",
        "firefighter_id": 36,
        "device_id": "0009",
        "device_battery_level": "23.23",
        "temperature": 30,
        "humidity": 37,
        "carbon_monoxide": 34,
        "nitrogen_dioxide": 22,
        "formaldehyde": 22,
        "acrolein": 21,
        "benzene": 24,
        "device_timestamp": "2020-09-10 09:32:38"
    },
    {
        "timestamp_mins": "2020-09-10 09:32:00",
        "firefighter_id": 36,
        "device_id": "0010",
        "device_battery_level": "23.23",
        "temperature": 28,
        "humidity": 41,
        "carbon_monoxide": 36,
        "nitrogen_dioxide": 24,
        "formaldehyde": 22,
        "acrolein": 21,
        "benzene": 24,
        "device_timestamp": "2020-09-10 09:32:38"
    },
    {
        "timestamp_mins": "2020-09-10 09:32:00",
        "firefighter_id": 36,
        "device_id": "0011",
        "device_battery_level": "23.23",
        "temperature": 40,
        "humidity": 43,
        "carbon_monoxide": 33,
        "nitrogen_dioxide": 19,
        "formaldehyde": 22,
        "acrolein": 21,
        "benzene": 24,
        "device_timestamp": "2020-09-10 09:32:38"
    },
    {
        "timestamp_mins": "2020-09-10 09:32:00",
        "firefighter_id": 36,
        "device_id": "0012",
        "device_battery_level": "23.23",
        "temperature": 30,
        "humidity": 33,
        "carbon_monoxide": 30,
        "nitrogen_dioxide": 20,
        "formaldehyde": 22,
        "acrolein": 21,
        "benzene": 24,
        "device_timestamp": "2020-09-10 09:32:38"
    },
    {
        "timestamp_mins": "2020-09-10 09:32:00",
        "firefighter_id": 36,
        "device_id": "0013",
        "device_battery_level": "23.23",
        "temperature": 26,
        "humidity": 32,
        "carbon_monoxide": 29,
        "nitrogen_dioxide": 22,
        "formaldehyde": 22,
        "acrolein": 21,
        "benzene": 24,
        "device_timestamp": "2020-09-10 09:32:38"
    },
    {
        "timestamp_mins": "2020-09-10 09:32:00",
        "firefighter_id": 36,
        "device_id": "0014",
        "device_battery_level": "23.23",
        "temperature": 27,
        "humidity": 35,
        "carbon_monoxide": 33,
        "nitrogen_dioxide": 21,
        "formaldehyde": 22,
        "acrolein": 21,
        "benzene": 24,
        "device_timestamp": "2020-09-10 09:32:38"
    },
    {
        "timestamp_mins": "2020-09-10 09:32:00",
        "firefighter_id": 36,
        "device_id": "0015",
        "device_battery_level": "23.23",
        "temperature": 28,
        "humidity": 39,
        "carbon_monoxide": 34,
        "nitrogen_dioxide": 30,
        "formaldehyde": 22,
        "acrolein": 21,
        "benzene": 24,
        "device_timestamp": "2020-09-10 09:32:38"
    }
];

var mockOnceMinuteData = [
    {
        "timestamp_mins": "2000-01-01T10:32:00.000Z",
        "analytics_status_LED": 1,
        "carbon_monoxide": 2.0,
        "carbon_monoxide_gauge_10min": 0.5,
        "carbon_monoxide_gauge_240min": 1.0,
        "carbon_monoxide_gauge_30min": 0.0,
        "carbon_monoxide_gauge_480min": 0.0,
        "carbon_monoxide_gauge_60min": 1.0,
        "carbon_monoxide_twa_10min": 1.2,
        "carbon_monoxide_twa_240min": 0.2,
        "carbon_monoxide_twa_30min": 0.7,
        "carbon_monoxide_twa_480min": 0.1,
        "carbon_monoxide_twa_60min": 0.8,
        "device_id": "0007",
        "device_timestamp": "2000-01-01 10:32:52.243",
        "humidity": 49.0,
        "nitrogen_dioxide": 0.1,
        "nitrogen_dioxide_gauge_10min": 1.0,
        "nitrogen_dioxide_gauge_240min": 2.0,
        "nitrogen_dioxide_gauge_30min": 4.0,
        "nitrogen_dioxide_gauge_480min": 0.0,
        "nitrogen_dioxide_gauge_60min": 4.0,
        "nitrogen_dioxide_twa_10min": 0.06,
        "nitrogen_dioxide_twa_240min": 0.01,
        "nitrogen_dioxide_twa_30min": 0.04,
        "nitrogen_dioxide_twa_480min": 0.0,
        "nitrogen_dioxide_twa_60min": 0.04,
        "temperature": 26.0
    },
    {
        "timestamp_mins": "2000-01-01T10:32:00.000Z",
        "analytics_status_LED": 1,
        "carbon_monoxide": null,
        "carbon_monoxide_gauge_10min": 0.9,
        "carbon_monoxide_gauge_240min": 1.0,
        "carbon_monoxide_gauge_30min": 1.0,
        "carbon_monoxide_gauge_480min": 0.0,
        "carbon_monoxide_gauge_60min": 1.0,
        "carbon_monoxide_twa_10min": 1.3,
        "carbon_monoxide_twa_240min": 0.2,
        "carbon_monoxide_twa_30min": 1.1,
        "carbon_monoxide_twa_480min": 0.1,
        "carbon_monoxide_twa_60min": 0.8,
        "device_id": "0008",
        "device_timestamp": null,
        "humidity": null,
        "nitrogen_dioxide": null,
        "nitrogen_dioxide_gauge_10min": 2.0,
        "nitrogen_dioxide_gauge_240min": 2.0,
        "nitrogen_dioxide_gauge_30min": 6.0,
        "nitrogen_dioxide_gauge_480min": 2.0,
        "nitrogen_dioxide_gauge_60min": 4.0,
        "nitrogen_dioxide_twa_10min": 0.07,
        "nitrogen_dioxide_twa_240min": 0.01,
        "nitrogen_dioxide_twa_30min": 0.06,
        "nitrogen_dioxide_twa_480min": 0.01,
        "nitrogen_dioxide_twa_60min": 0.04,
        "temperature": null
    }
];