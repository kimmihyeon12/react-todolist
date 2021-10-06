import React, { useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faTimesCircle);
function Work({today, deleteList, changeCheckEvent}){
    function deleteItem(id){
        deleteList(id);
    }
    
    return (  
    <div className="main__content">
        <input className="checkbox-wrap" type="checkbox" 
            defaultChecked={today.isChecked}
            onChange={() => changeCheckEvent(today)}
        />
        <h3 className="content">{today.work}</h3>
        <FontAwesomeIcon id={`checkbox${today.id}`} onClick={() => deleteItem(today.id)} className="faTimesCircle"   icon="times-circle" size="7x"  /> 
    </div>
    );
}
export default Work;