import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faTimesCircle);
function WorkList({todayList}){
 
    
    return (  
    <div className="main__content">
        <input className="checkbox-wrap" type="checkbox" />
        <h3 className="content">{todayList.work}</h3>
        <FontAwesomeIcon className="faTimesCircle" class="times-circle" icon="times-circle" size="7x"  />
    </div>
    );
}
export default WorkList;