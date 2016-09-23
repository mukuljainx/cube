//ES6
import React from 'react';
import ReactDom from 'react-dom';

class Search extends React.Component{
  render(){
    return(
      <form>
        <input type = "text" />
        <input type = "submit" />
      </form>
    );
  }
}

ReactDom.render(<Search />, document.getElementsById('content'));
