import React, {Component} from 'react';

class SelectOption extends Component {
  render(){
    const {options, eventHandler} = this.props;
    return(
      <div className={`itemOptions`}>
      {
        options.map((option, i) => {
          return (
            <label>
              <input
                className={`buttonStyle`}
                key={i}
                value={option}
                onClick={eventHandler}
                type={'radio'}
                name={'selectedPrice'}
              />
              <span>
                {`${option}`}
              </span>
            </label>
          )
        })
      }
      </div>
    )
  }
}

export default SelectOption;
