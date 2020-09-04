import React,{useState} from 'react';
import logo from './logo.svg';

import Icon from "./Components/Icon";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody,Container,Button,Row,Col} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';



const  itemArray=new Array(9).fill("empty")
function App() {
  const [isCross, setIsCross]=useState(false);
  const [winMsz,setWinMsz]=useState("");


  const reloadGame=()=>{
      setIsCross(false);
      setWinMsz("");
      itemArray.fill("empty",0,9);
  }

  const checkWinner=()=>{
        if(itemArray[0]===itemArray[1] &&
           itemArray[0]===itemArray[2] && 
           itemArray[0]!=="empty"){
          setWinMsz(`${itemArray[0]} won`);
        }
        else if(itemArray[3]===itemArray[4] &&
          itemArray[3]===itemArray[5] && 
          itemArray[3]!=="empty"){
         setWinMsz(`${itemArray[3]} won`);
       }
       else if(itemArray[6]===itemArray[7] &&
        itemArray[6]===itemArray[8] && 
        itemArray[6]!=="empty"){
       setWinMsz(`${itemArray[6]} won`);
     }
     else if(itemArray[0]===itemArray[3] &&
      itemArray[0]===itemArray[6] && 
      itemArray[0]!=="empty"){
     setWinMsz(`${itemArray[0]} won`);
   }

   else if(itemArray[1]===itemArray[4] &&
    itemArray[1]===itemArray[7] && 
    itemArray[1]!=="empty"){
   setWinMsz(`${itemArray[1]} won`);
 }
 else if(itemArray[2]===itemArray[5] &&
  itemArray[2]===itemArray[8] && 
  itemArray[2]!=="empty"){
 setWinMsz(`${itemArray[2]} won`);
}

else if(itemArray[0]===itemArray[4] &&
  itemArray[0]===itemArray[8] && 
  itemArray[0]!=="empty"){
 setWinMsz(`${itemArray[0]} won`);
}
else if(itemArray[2]===itemArray[4] &&
  itemArray[2]===itemArray[6] && 
  itemArray[2]!=="empty"){
 setWinMsz(`${itemArray[2]} won`);
}
else if(itemArray[0]!=="empty" &&
itemArray[1]!=="empty" &&
itemArray[2]!=="empty" &&
itemArray[3]!=="empty" &&
itemArray[4]!=="empty" &&
itemArray[5]!=="empty" &&
itemArray[6]!=="empty" &&
itemArray[7]!=="empty" &&
itemArray[8]!=="empty" ){

setWinMsz("It's a draw");
}
}



  const changeItem=(itemNumber)=>{
      if(winMsz){
       return  toast(winMsz,{type:"success"})
      }
    
      if(itemArray[itemNumber]==="empty"){
        itemArray[itemNumber]=isCross?"cross":"circle";
        setIsCross(!isCross);
      }
      else{
        return toast("Already Filled",{type:"error"})
      }
      checkWinner();
  }

  return (
    
         <Container className="p-5">
           <ToastContainer position="bottom-center"></ToastContainer>
              <Row>
                <Col md={6} className="offset-md-3">
               {
                 winMsz?(
                   <div className="mb-2 mt-2">
                    <h1 className="text-uppercase text-center text-success">
                         {winMsz}
                    </h1>
                    <Button color="success" block onClick={reloadGame}>Reload The Game</Button>
                   </div>
                 ):(
                   <h1 className="text-uppercase text-primary text-warning text-center">
                         {isCross?"cross":"circle"} turn 
                   </h1>
                 )
               }

                <div className="grid">
                  {
                    itemArray.map((item,index)=>(
                       <Card color="warning" onClick={()=>changeItem(index)}>
                         <CardBody className="box">
                             <Icon name={item}/>
                         </CardBody>
                       </Card>
                    ))
                  }
              
                </div>
                </Col>
              </Row>
         </Container>
          
  );
}

export default App;
