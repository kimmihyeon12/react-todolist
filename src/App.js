import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from "./component/modal";
import { useEffect, useState } from 'react';
import Work from './component/work';
import moment from  'moment';

library.add(faPlus);

function App() {
    let [id, setId] = useState(1);
    const [viewmodal, setViewmodal] = useState(false);
    const [todays, setTodays] = useState([]);
    const [todayTotal , setTodayTotal] = useState(0);


    let nowDate =  moment().format("YYYY년 MM월 DD일")
    let day = moment().day();
    let dayName =["일","월","화","수","목","금","토"];
 
    function modalToggle(){
        setViewmodal(!viewmodal);
    }
    function selectTotal(total){
        setTodays(total);
    }
    function insertList( text ){
        const temp = {id: id, work: text, isChecked: false};
        setTodays([...todays, temp]);
        setTodayTotal(todayTotal+1);
        const newId = id+1;
        setId(newId);
    }
    function deleteList(id){
        console.log(id);
        setTodays( todays.filter(( today )=>{
            return today.id !== id
        }));
    }
    function changeCheckEvent( _today ){
        console.log(todays.length);
        const newArray = [];
        for(let today of todays){
            if(today.id === _today.id){
                today.isChecked = !today.isChecked;
                today.isChecked ?
                setTodayTotal(todayTotal - 1):setTodayTotal(todayTotal + 1);
            }
            newArray.push(today);
        }
        setTodays(newArray);


        console.debug(todays);
    }
    //select
    const workList = todays.length ? todays.map( today =>{
        return  <Work today={today} changeCheckEvent={changeCheckEvent} deleteList={deleteList} key={today.id}/>
    }) : <h3 >오늘 일정이 없습니다</h3>

    return (
    <div className="App">
        <div className="main">
            <div className="main-inner">
                <div className="main__header">
                    <h1>{nowDate}</h1>
                    <h5>{dayName[day]}요일</h5>
                    <p>할일 {todayTotal}개 남음</p>
                </div>
                <hr/>
                {workList}
                <FontAwesomeIcon className="plus" icon="plus" size="7x" onClick={modalToggle}/>
            </div>
        </div>
        <Modal 
            visible={viewmodal} 
            insertList={insertList}
            modalToggle = {modalToggle}
        />
    </div>
    );
}
export default App;
