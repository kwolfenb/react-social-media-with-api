import React from 'react'

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch('https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture')
          .then(results => {
              return results.json();
      }).then((data) => {
                let item = data.results.map((item)=>{
                 return (
                 <div>
                    <h1>{item.name}</h1>
                 </div>    
                 )   
                })
              this.setState({
                isLoaded: true,
                items: item
             
              });
              console.log(items)
            },
            (error) => {
              this.setState({
                items: item, 
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {items.map(item => (
                <li key={item.name}>
                </li>
              ))}
            </ul>
          );
        }
    } 
} 


export default News