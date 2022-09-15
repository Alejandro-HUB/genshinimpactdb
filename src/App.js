import './App.css';
import Records from './records.json'

function App() {
  return (
    <div className='App'>
      <br />
      <div><strong>GenshinImpactDB</strong></div>
      <br /><br />
      <div>
        {
          Records && Records.map(record => {
            return (

              <div key={record.id}>

                {record.isVisible ? (
                  <div className='main'>
                    {/* Left Side */}
                    <div className='left'>
                      {record.id} - <strong>{record.name}</strong>
                      <br />
                      <img src={record.icon} alt=""></img>
                      <br />
                      <strong>{record.color}</strong>
                    </div>
                    {/* Right Side */}
                    <div className='right'>
                      <strong>Voice Actors:</strong>
                      <br />
                      <ul>
                        <li>English: {record.cv.english}</li>
                        <li>Chinese: {record.cv.chinese}</li>
                        <li>Japanese: {record.cv.japanese}</li>
                        <li>Korean: {record.cv.korean}</li>
                      </ul>
                      <br />
                      <strong>Birthday:</strong>
                      {
                        record.birthday && record.birthday.map((birthday, index) => {
                          return (
                            <div key={record.id + index}> {index ? 'Month: ' : 'Day: '}{birthday}</div>
                          )
                        })
                      }
                    </div>
                  </div>

                ) : null}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
