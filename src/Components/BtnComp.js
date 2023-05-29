import React, { Component } from 'react';

export default class BtnComp extends Component {
  state = {
    counters: [
      {
        count: 0
      },
  
    ]
  }

  

  btnpilus = (index) => {
    this.setState(prevState => {
      const counters = [...prevState.counters];
      counters[index].count++;
      return { counters };
    });
  }

  btnminus = (index) => {
    this.setState(prevState => {
      const counters = [...prevState.counters];
      counters[index].count--;
      return { counters };
    });
  }
  AddCounter = () => {
    this.setState(prevState => {
      const counters = [...prevState.counters];
      counters.push({ count: 0 });
      return { counters };
    });
  }

  render() {
    return (
      <div style={{marginLeft:'10%'}}>
        <button onClick={this.AddCounter}style={{marginTop:'3%', padding:'10px 15px'}}>Add Counter</button>
        {
          this.state.counters.map((item, index) => (
            <div key={index} style={{ display: 'flex', gap: '1vw', width: '250px', height: '25px', alignItems: 'center' ,marginTop:'2%', marginLeft:'.2%'}}>
              <button style={{backgroundColor:'red', color:'#fff', fontSize:'15px', fontWeight:'600'}} className='btn' onClick={() => this.btnminus(index)}>-</button>
              <h3>{item.count}</h3>
              <button style={{backgroundColor:'green', color:'#fff', fontSize:'15px', fontWeight:'600'}}  className='btn' onClick={() => this.btnpilus(index)}>+</button>
            </div>
          ))
        }
      </div>
    )
  }
}
