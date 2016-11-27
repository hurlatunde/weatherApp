function formatDate(date) {
    return date.toLocaleDateString();
}

function mathRound(data) {
    return Math.round(data);
}

function UpdateForecastCard(props) {
    return React.createElement(
        "main",
        { className: "main" },
        React.createElement(
            "div",
            { className: "card cardTemplate weather-forecast" },
            React.createElement(
                "div",
                { className: "location" },
                props.label
            ),
            React.createElement(
                "div",
                { className: "date" },
                formatDate(new Date(props.date * 1000))
            ),
            React.createElement(
                "div",
                { className: "description" },
                props.description
            ),
            React.createElement(
                "div",
                { className: "current" },
                React.createElement(
                    "div",
                    { className: "visual" },
                    React.createElement(
                        "div",
                        { className: "icon" },
                        React.createElement("img", { className: "weather_icon",
                            src: '../images/' + props.icon + '.png',
                            alt: props.icon })
                    ),
                    React.createElement(
                        "div",
                        { className: "temperature" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.temperature)
                        ),
                        React.createElement(
                            "span",
                            {
                                className: "scale" },
                            "\xB0F"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "description" },
                    React.createElement(
                        "div",
                        { className: "feels-like" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.apparentTemperature)
                        ),
                        React.createElement(
                            "span",
                            {
                                className: "scale" },
                            "\xB0F"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "precip" },
                        " ",
                        Math.round(props.precipProbability * 100) + '%'
                    ),
                    React.createElement(
                        "div",
                        { className: "humidity" },
                        Math.round(props.humidity * 100) + '%'
                    ),
                    React.createElement(
                        "div",
                        { className: "wind" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.windSpeed),
                            " "
                        ),
                        React.createElement(
                            "span",
                            { className: "scale" },
                            "mph"
                        ),
                        React.createElement(
                            "span",
                            { className: "direction" },
                            " ",
                            mathRound(props.windBearing)
                        ),
                        "\xB0"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "future" },
                React.createElement(
                    "div",
                    { className: "oneday" },
                    React.createElement(
                        "div",
                        { className: "date" },
                        "Mon"
                    ),
                    React.createElement(
                        "div",
                        { className: "icon" },
                        React.createElement("img", { className: "weather_icon",
                            src: '../images/' + props.mon.icon + '.png',
                            alt: props.mon.icon })
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-high" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.mon.temperatureMax)
                        ),
                        "\xB0"
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-low" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.mon.temperatureMin)
                        ),
                        "\xB0"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "oneday" },
                    React.createElement(
                        "div",
                        { className: "date" },
                        "Tue"
                    ),
                    React.createElement(
                        "div",
                        { className: "icon" },
                        React.createElement("img", { className: "weather_icon",
                            src: '../images/' + props.tue.icon + '.png',
                            alt: props.tue.icon })
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-high" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.tue.temperatureMax)
                        ),
                        "\xB0"
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-low" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.tue.temperatureMin)
                        ),
                        "\xB0"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "oneday" },
                    React.createElement(
                        "div",
                        { className: "date" },
                        "Web"
                    ),
                    React.createElement(
                        "div",
                        { className: "icon" },
                        React.createElement("img", { className: "weather_icon",
                            src: '../images/' + props.wed.icon + '.png',
                            alt: props.wed.icon })
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-high" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.wed.temperatureMax)
                        ),
                        "\xB0"
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-low" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.wed.temperatureMin)
                        ),
                        "\xB0"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "oneday" },
                    React.createElement(
                        "div",
                        { className: "date" },
                        "Thu"
                    ),
                    React.createElement(
                        "div",
                        { className: "icon" },
                        React.createElement("img", { className: "weather_icon",
                            src: '../images/' + props.thu.icon + '.png',
                            alt: props.thu.icon })
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-high" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.thu.temperatureMax)
                        ),
                        "\xB0"
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-low" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.thu.temperatureMin)
                        ),
                        "\xB0"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "oneday" },
                    React.createElement(
                        "div",
                        { className: "date" },
                        "Fri"
                    ),
                    React.createElement(
                        "div",
                        { className: "icon" },
                        React.createElement("img", { className: "weather_icon",
                            src: '../images/' + props.fri.icon + '.png',
                            alt: props.fri.icon })
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-high" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.fri.temperatureMax)
                        ),
                        "\xB0"
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-low" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.fri.temperatureMin)
                        ),
                        "\xB0"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "oneday" },
                    React.createElement(
                        "div",
                        { className: "date" },
                        "Sat"
                    ),
                    React.createElement(
                        "div",
                        { className: "icon" },
                        React.createElement("img", { className: "weather_icon",
                            src: '../images/' + props.sat.icon + '.png',
                            alt: props.sat.icon })
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-high" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.sat.temperatureMax)
                        ),
                        "\xB0"
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-low" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.sat.temperatureMin)
                        ),
                        "\xB0"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "oneday" },
                    React.createElement(
                        "div",
                        { className: "date" },
                        "Sun"
                    ),
                    React.createElement(
                        "div",
                        { className: "icon" },
                        React.createElement("img", { className: "weather_icon",
                            src: '../images/' + props.sun.icon + '.png',
                            alt: props.sun.icon })
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-high" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.sun.temperatureMax)
                        ),
                        "\xB0"
                    ),
                    React.createElement(
                        "div",
                        { className: "temp-low" },
                        React.createElement(
                            "span",
                            { className: "value" },
                            mathRound(props.sun.temperatureMin)
                        ),
                        "\xB0"
                    )
                )
            )
        )
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
        data: [{ icon: 'clear-day', temperatureMax: 55, temperatureMin: 34 }, { icon: 'rain', temperatureMax: 55, temperatureMin: 34 }, { icon: 'snow', temperatureMax: 55, temperatureMin: 34 }, { icon: 'sleet', temperatureMax: 55, temperatureMin: 34 }, { icon: 'fog', temperatureMax: 55, temperatureMin: 34 }, { icon: 'wind', temperatureMax: 55, temperatureMin: 34 }, { icon: 'partly-cloudy-day', temperatureMax: 55, temperatureMin: 34 }]
    }
};

const element = React.createElement(UpdateForecastCard, {
    icon: forecastCard.currently.icon,
    description: forecastCard.currently.summary,
    temperature: forecastCard.currently.temperature,
    apparentTemperature: forecastCard.currently.apparentTemperature,
    precipProbability: forecastCard.currently.precipProbability,
    humidity: forecastCard.currently.humidity,
    windBearing: forecastCard.currently.windBearing,
    windSpeed: forecastCard.currently.windSpeed,
    label: forecastCard.label,
    date: forecastCard.currently.time,
    mon: forecastCard.daily.data[0],
    tue: forecastCard.daily.data[1],
    wed: forecastCard.daily.data[2],
    thu: forecastCard.daily.data[3],
    fri: forecastCard.daily.data[4],
    sat: forecastCard.daily.data[5],
    sun: forecastCard.daily.data[6]
});

ReactDOM.render(element, document.getElementById('root'));
//# sourceMappingURL=weather_app.js.map
