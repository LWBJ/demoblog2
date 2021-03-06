import React from 'react'
import DrinkUpdate from './DrinkUpdate.js'
import DrinkDelete from './DrinkDelete.js'

function DrinkItem(props) {
    let dayList = props.drink.days_text.map(day=>{
        return <li key={day}>{day}</li>
    })
    
    let updateDeleteRow
    if (props.username) {
        updateDeleteRow = (
            <div className='row mb-4'>
              <DrinkUpdate 
                drink = {props.drink}
                id = {props.drink.name.split(' ').join('-')}
                setLoading = {props.setLoading}
                refreshList = {props.refreshList}
                checkAuth={props.checkAuth}
              />
          
              <DrinkDelete
                drink = {props.drink}
                id = {props.drink.name.split(' ').join('-')}
                setLoading = {props.setLoading}
                refreshList = {props.refreshList}
                checkAuth={props.checkAuth}
              />
            </div>
        )
    }
    
    return(
      <div className='col-12 border rounded border-primary p-4 h-100'>
        <div className='row mb-2'><div className='col'>
          <h4><strong>{props.drink.name}</strong></h4>
        </div></div>
        
        {updateDeleteRow}
        
        <div className='row'><div className='col'>
          <p>Calories: {props.drink.calories}</p>
          <ul>
            {dayList}
          </ul>
        </div></div>
      </div>
    )
}

export default DrinkItem