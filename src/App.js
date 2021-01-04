import React from 'react';


function Food({fav}) {   //기본형태 (props) props,fav == ({fav}) 
  return <h3>I love {fav}</h3>
}

function App() {
  return (
  <div>
    <h1>Hello!</h1>
    <Food fav="kimchi"/>
    <Food fav="라면"/>
    <Food fav="만두"/>
  </div>
    );
}

export default App;
