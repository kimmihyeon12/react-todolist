import React, { useState } from 'react'


function Modal({visible,insertList,modalToggle}){
    const [text, setText] = useState('');
    console.log(modalToggle);
    function onsubmit(){
        modalToggle();
        insertList(text);
        setText('');
    }
    function cancel(){
        modalToggle();
    }
    function changeEvent(e){
        const value = e.target.value;
        setText(value);
    }
    
    return (  
    visible &&
    <div className = "pop-up-wrap">
        <div className="pop-up" >
            <div className="pop-up__header">
                <h1>오늘의 할일</h1>
                <input
                    value={text}  
                    onChange={changeEvent}
                />
                <div className="btn-wrap">
                    <button onClick={onsubmit}>확인</button>
                    <button onClick={cancel}>취소</button>
                </div>
            </div>
        </div>
    </div>
   
    );
}
export default Modal;