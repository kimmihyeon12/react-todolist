import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from "./component/modal";
import { useState } from 'react';
import WorkList from './component/workList';
import moment from  'moment';

library.add(faPlus);

function App() {

   
    let [id, setId] = useState(3);
    const [viewmodal, setViewmodal] = useState(false);
    const [todayLists, setTodayList] = useState([]);
    let nowDate =  moment().format("YYYY년 MM월 DD일")
    let day = moment().day();
    let dayName =["일","월","화","수","목","금","토"];
 
    function modalToggle(){
        setViewmodal(!viewmodal);
    }
    function addList( text ){
        const temp = {id: id, work: text};
        console.log(temp);
        setTodayList([...todayLists, temp]);
        const newId = id+1;
        setId(newId);
    }

    //select
    const renderWork = todayLists.length? todayLists.map( todayList =>{
        return  <WorkList todayList={todayList} key={todayList.id}/>
    }) : <h3 >오늘 일정이 없습니다</h3>
    return (
    <div className="App">
        <div className="main">
            <div className="main-inner">
                <div className="main__header">
                    <h1>{nowDate}</h1>
                    <h5>{dayName[day]}요일</h5>
                    <p>할일 2개 남음</p>
                </div>
                <hr/>
                {renderWork}
                <FontAwesomeIcon className="plus" icon="plus" size="7x" onClick={modalToggle}/>
            </div>
        </div>
        <Modal 
            visible={viewmodal} 
            addList={addList}
            modalToggle = {modalToggle}
        />
    </div>
    );
}
export default App;
