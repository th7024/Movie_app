import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => { //async : axios가 끝날 떄 까지 기다려라고 자바스크립트한테 말해줌
    //awiat는 async를 선언해야 사용할 수 있음.
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    //axios : fetch 위에 있는 작은 레이어
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading": "We are ready"}</div>
     
  }

}

export default App;
