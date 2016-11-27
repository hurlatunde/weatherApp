function formatDate(date) {
    return date.toLocaleDateString();
}

function mathRound(data) {
    return Math.round(data);
}

function UpdateForecastCard(props) {
    return (
        <main className="main">
            <div className="card cardTemplate weather-forecast">
                <div className="location">{props.label}</div>
                <div className="date">{formatDate(new Date(props.date * 1000))}</div>
                <div className="description">{props.description}</div>
                <div className="current">
                    <div className="visual">
                        <div className="icon">
                            <img className="weather_icon"
                                 src={'../images/'+props.icon+'.png'}
                                 alt={props.icon} />
                        </div>
                        <div className="temperature">
                            <span className="value">{mathRound(props.temperature)}</span><span
                            className="scale">°F</span>
                        </div>
                    </div>
                    <div className="description">
                        <div className="feels-like">
                            <span className="value">{mathRound(props.apparentTemperature)}</span><span
                            className="scale">°F</span>
                        </div>
                        <div className="precip"> {Math.round(props.precipProbability * 100) + '%'}</div>
                        <div className="humidity">{Math.round(props.humidity * 100) + '%'}</div>
                        <div className="wind">
                            <span className="value">{mathRound(props.windSpeed)} </span>
                            <span className="scale">mph</span>
                            <span className="direction"> {mathRound(props.windBearing)}</span>°
                        </div>
                    </div>
                </div>
                <div className="future">
                    <div className="oneday">
                        <div className="date">Mon</div>
                        <div className="icon">
                            <img className="weather_icon"
                                 src={'../images/'+props.mon.icon+'.png'}
                                 alt={props.mon.icon} />
                        </div>
                        <div className="temp-high">
                            <span className="value">{mathRound(props.mon.temperatureMax)}</span>°
                        </div>
                        <div className="temp-low">
                            <span className="value">{mathRound(props.mon.temperatureMin)}</span>°
                        </div>
                    </div>
                    <div className="oneday">
                        <div className="date">Tue</div>
                        <div className="icon">
                            <img className="weather_icon"
                                 src={'../images/'+props.tue.icon+'.png'}
                                 alt={props.tue.icon} />
                        </div>
                        <div className="temp-high">
                            <span className="value">{mathRound(props.tue.temperatureMax)}</span>°
                        </div>
                        <div className="temp-low">
                            <span className="value">{mathRound(props.tue.temperatureMin)}</span>°
                        </div>
                    </div>
                    <div className="oneday">
                        <div className="date">Web</div>
                        <div className="icon">
                            <img className="weather_icon"
                                 src={'../images/'+props.wed.icon+'.png'}
                                 alt={props.wed.icon} />
                        </div>
                        <div className="temp-high">
                            <span className="value">{mathRound(props.wed.temperatureMax)}</span>°
                        </div>
                        <div className="temp-low">
                            <span className="value">{mathRound(props.wed.temperatureMin)}</span>°
                        </div>
                    </div>
                    <div className="oneday">
                        <div className="date">Thu</div>
                        <div className="icon">
                            <img className="weather_icon"
                                 src={'../images/'+props.thu.icon+'.png'}
                                 alt={props.thu.icon} />
                        </div>
                        <div className="temp-high">
                            <span className="value">{mathRound(props.thu.temperatureMax)}</span>°
                        </div>
                        <div className="temp-low">
                            <span className="value">{mathRound(props.thu.temperatureMin)}</span>°
                        </div>
                    </div>
                    <div className="oneday">
                        <div className="date">Fri</div>
                        <div className="icon">
                            <img className="weather_icon"
                                 src={'../images/'+props.fri.icon+'.png'}
                                 alt={props.fri.icon} />
                        </div>
                        <div className="temp-high">
                            <span className="value">{mathRound(props.fri.temperatureMax)}</span>°
                        </div>
                        <div className="temp-low">
                            <span className="value">{mathRound(props.fri.temperatureMin)}</span>°
                        </div>
                    </div>
                    <div className="oneday">
                        <div className="date">Sat</div>
                        <div className="icon">
                            <img className="weather_icon"
                                 src={'../images/'+props.sat.icon+'.png'}
                                 alt={props.sat.icon} />
                        </div>
                        <div className="temp-high">
                            <span className="value">{mathRound(props.sat.temperatureMax)}</span>°
                        </div>
                        <div className="temp-low">
                            <span className="value">{mathRound(props.sat.temperatureMin)}</span>°
                        </div>
                    </div>
                    <div className="oneday">
                        <div className="date">Sun</div>
                        <div className="icon">
                            <img className="weather_icon"
                                 src={'../images/'+props.sun.icon+'.png'}
                                 alt={props.sun.icon} />
                        </div>
                        <div className="temp-high">
                            <span className="value">{mathRound(props.sun.temperatureMax)}</span>°
                        </div>
                        <div className="temp-low">
                            <span className="value">{mathRound(props.sun.temperatureMin)}</span>°
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

const forecastCard = {
    key: 'newyork',
    label: 'New York, NY',
    currently: {
        time: 1453489481,
        summary: 'Clear',
        icon: 'partly-cloudy-day',
        temperature: 52.74,
        apparentTemperature: 74.34,
        precipProbability: 0.20,
        humidity: 0.77,
        windBearing: 125,
        windSpeed: 1.52
    },
    daily: {
        data: [
            {icon: 'clear-day', temperatureMax: 55, temperatureMin: 34},
            {icon: 'rain', temperatureMax: 55, temperatureMin: 34},
            {icon: 'snow', temperatureMax: 55, temperatureMin: 34},
            {icon: 'sleet', temperatureMax: 55, temperatureMin: 34},
            {icon: 'fog', temperatureMax: 55, temperatureMin: 34},
            {icon: 'wind', temperatureMax: 55, temperatureMin: 34},
            {icon: 'partly-cloudy-day', temperatureMax: 55, temperatureMin: 34}
        ]
    }
};

const element =
    <UpdateForecastCard
        icon={forecastCard.currently.icon}
        description={forecastCard.currently.summary}
        temperature={forecastCard.currently.temperature}
        apparentTemperature={forecastCard.currently.apparentTemperature}
        precipProbability={forecastCard.currently.precipProbability}
        humidity={forecastCard.currently.humidity}
        windBearing={forecastCard.currently.windBearing}
        windSpeed={forecastCard.currently.windSpeed}
        label={forecastCard.label}
        date={forecastCard.currently.time}
        mon={forecastCard.daily.data[0]}
        tue={forecastCard.daily.data[1]}
        wed={forecastCard.daily.data[2]}
        thu={forecastCard.daily.data[3]}
        fri={forecastCard.daily.data[4]}
        sat={forecastCard.daily.data[5]}
        sun={forecastCard.daily.data[6]}
    />;

ReactDOM.render(
    element,
    document.getElementById('root')
);