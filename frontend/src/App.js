import './App.css';

function App() {

  let PROJECTID = '0jx3nh83'
  let DATASET = 'production'
  let QUERY = encodeURIComponent('*[_type == "products"]')
  let URL = `https://${PROJECTID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

  fetch(URL)
  .then((results) => results.json())
  .then(({result}) => {console.log(result)})

  return (
    <h1>Innhold fra Sanity</h1>
  );
}

export default App;
