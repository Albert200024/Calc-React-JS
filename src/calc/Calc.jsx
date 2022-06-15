import {useRef, useState,} from 'react';
import {buttons, operation} from './Button'
import style from './calc.module.css'

const Calc = () => {
  let [val,setVal]=useState('')
  const inputVal = useRef();
  let parent=useRef();
  
  const changeVal = (value) => {
      let v=value.value;
      let output=inputVal.current;
      setVal(val = v)

      if(output.value==='0'){
          output.value=''
      }

      output.value+=val;
      let z= output.value.split('')
      
      if(true){
          if(z[z.length-1] === '+' || z[z.length-1] === '-' || z[z.length-1] === '*' || z[z.length-1] === '/' || z[z.length-1] === '.'){
              value.disabled = true
          } else {
                  Array.from(parent.current.children).map((i)=>{
                     if(i.value === '+' || i.value === '-' || i.value === '*' || i.value === '/' || i.value === '.'){
                        i.disabled=false
                     }
                  })
                 }
       }
 }

 const operations=(op)=>{
    let output=inputVal.current;
    if(op ==='C'){
        output.value=output.value.substring(0, output.value.length-1)
    } else if (op === '='){
        output.value = eval(output.value)
    } else if (op === 'DEL'){
        output.value=0
    }
 }

 return ( 
    <div className={style.body}> 
      <div className={style.calkContainer}>
        <input ref={inputVal} defaultValue={val} className={style.input}readOnly />
        <div className="buttons" ref={parent}>
          {buttons.map((item, i) => (
            <button key={i} value={item.val} className={style.buttons}
               onClick={(e) => {
                  changeVal(e.target);
               }}
            > {item.val} </button>
          ))}
          {operation.map((item, i) =>
            item.val === "=" ? (
              <button key={i} className={style.equal}
                onClick={() => operations(item.val)}
              > {item.val} </button>) : (
              <button key={i} className={style.operation} onClick={() => operations(item.val)}>
                {item.val}
              </button>
              )
          )}
        </div>
      </div> 
    </div>
   )
}

export default Calc