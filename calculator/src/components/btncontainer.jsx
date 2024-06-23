import styles from "./btncontainer.module.css";

const Btncontainer =({onButtonClick})=> {
  const buttonNames = [
    'c',
   '1',
    '2', 
    '+',
    '3',
    '4',
    '-',
    '5',
    '6',
    '*',
    '7',
    '8',
    '/',
    '=',
    '9',
    '0',
    '.',
  ];

  return (
    <div className={styles.btncontainer}>

      {buttonNames.map(item=>{
         return <button onClick={()=>onButtonClick(item)}  className={styles.btn}>{item}</button>})}

    </div>
  );
}

export default Btncontainer;