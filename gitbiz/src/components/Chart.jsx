import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class Chart extends React.Component {
  state = {
    labels: [],
    datasets: [
      {
        label: 'Common languages in public repos',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: []
      }
    ]
  };

  componentDidMount() {
    fetch(this.props.repos_url)
      .then((res) => {
        return res.json();
      })
      .then((tmp) => {
        const lang = tmp
          .filter((repo) => repo.language !== null)
          .map((repo) => {
            return repo.language;
          });
        const languages = lang.reduce((totalLanguages, language) => {
          if (language in totalLanguages) {
            totalLanguages[language]++;
          } else {
            totalLanguages[language] = 1;
          }
          return totalLanguages;
        }, {});
        const values = [];
        for (const lang in languages) {
          values.push(languages[lang]);
        }
        const keys = Object.keys(languages);
        return { languages: keys, indexes: values };
      })
      .then(({ languages, indexes }) => {
        this.setState((currentState) => {
          const tmpState = { ...currentState };
          console.log(tmpState);
          tmpState.labels = languages;
          tmpState.datasets[0].data = indexes;
          return tmpState;
        });
      });
  }

  render() {
    const data = this.state;
    data.options = {
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };

    return (
      <div id="chart">
        <h4>
          Used <span>LANGUAGES</span>{' '}
        </h4>
        <HorizontalBar
          data={data}
          height={150}
          width={300}
          options={{ maintainAspectRatio: true }}
        />
      </div>
    );
  }
}

export default Chart;
