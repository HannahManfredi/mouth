import '../../assets/styles/style.css';
const axios = require('axios');

class Mouth extends React.Component {

  constructor() {
    super()
    this.state = {};
  }

  componentDidMount() {
    axios.get('/mycroft')
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div>
        <h1>merde</h1>
      </div>
    );
  }

}

export default Mouth;