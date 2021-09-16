import React, { useReducer, useRef, useState, useEffect } from "react";
import "./index.css";

import logo from "./images/logo.png"
import question from "./images/3d-question.png"
import main from "./images/3d-main.png"
import ReactGA from 'react-ga';
import klay from "./images/ico-coin-klay.jpeg"
import ssx from "./images/ico-coin-ssx.png"
import xrp from "./images/ico-coin-xrp.png"
import btc from "./images/wbit.png"
import eth from "./images/ico-coin-eth.png"
import wise from "./images/wise.png"
import woong from "./images/woong.png"
import rocket from "./images/3d-rocket.png"
import back from "./images/back.png"

import coingecko from "coingecko-api"
import CountUp from "react-countup"

import { useHistory } from "react-router";

function reducerA(state, action) {
    switch (action.type) {
        case 'HUND':
            return 2;
        case 'THOU':
            return 3;
        default:
            return state;
    }
}

function reducerB(state, action) {
    switch (action.type) {
        case 'ONE':
            return 1;
        case 'TWO':
            return 2;
        case 'THREE':
            return 3;
        default:
            return state;
    }
}

function Bit() {
  


    const [number, dispatch] = useReducer(reducerA, 0);
    const onHUND = () => {
        dispatch({ type: 'HUND' });
    };
    const onTHOU = () => {
        dispatch({ type: 'THOU' });
    };

    const [numberB, dispatchB] = useReducer(reducerB, 0);
    const onONE = () => {
        dispatchB({ type: 'ONE' });
    };
    const onTWO = () => {
        dispatchB({ type: 'TWO' });
    };
    const onTHREE = () => {
        dispatchB({ type: 'THREE' });
    };
    


    const Button = ({ onClick, state, number, content }) => {
        return (
            <div onClick={onClick} style={{
                width: 560,
                marginRight: 20,
                borderRadius: 6,
                border: state === number ? "1px solid #010608" : "1px solid #dfdfdf",
                backgroundColor: state === number ? "#010608" : "#ffffff",
                paddingTop: 10,
                paddingBottom: 10,
                cursor: "pointer",
                fontSize: 16,
                fontWeight: state === number ? "bold" : "normal",
                color: state === number ? "#ffffff" : "#010608",
                opacity: state === number ? 1 : 0.6,
                textAlign: "center",
                marginLeft:30,
                marginTop:24
            }}>{content}</div>
        )
    }


    const ButtonTwo = ({ onClick, state, number, content }) => {
        return (
            <div onClick={onClick} style={{
                width: 150,
                marginRight: 20,
                borderRadius: 6,
                border: state === number ? "1px solid #010608" : "1px solid #dfdfdf",
                backgroundColor: state === number ? "#010608" : "#ffffff",
                paddingTop: 10,
                paddingBottom: 10,
                cursor: "pointer",
                fontSize: 16,
                fontWeight: state === number ? "bold" : "normal",
                color: state === number ? "#ffffff" : "#010608",
                opacity: state === number ? 1 : 0.6,
                textAlign: "center",
                marginLeft:30,
                marginTop:24
            }}>{content}</div>
        )
    }

  const [ethPrice,setEthPrice]=useState("")
  const [bitPrice,setBitPrice]=useState("")
  const [klayPrice,setKlayPrice]=useState("")
  const [ssxPrice,setSsxPrice]=useState("")
  const [ethPerct,setEthPerct]=useState("")
  const [bitPerct,setBitPerct]=useState("")
  const [klayPerct,setKlayPerct]=useState("")
  const [ssxPerct,setSsxPerct]=useState("")

  const [bitHund,setBitHund]=useState("")
  const [bitThou,setBitThou]=useState("")

  const CoinGeckoClient=new coingecko()
  async function hi(){
    let ssxdata=await CoinGeckoClient.coins.fetch("somesing",{})
    let bitdata=await CoinGeckoClient.coins.fetch("bitcoin",{})
    let klaydata=await CoinGeckoClient.coins.fetch("klay-token",{})
    let ethdata=await CoinGeckoClient.coins.fetch("ethereum",{})
    setEthPrice(ethdata.data.market_data.current_price.krw)
    setBitPrice(bitdata.data.market_data.current_price.krw)
    setKlayPrice(klaydata.data.market_data.current_price.krw)
    setSsxPrice(ssxdata.data.market_data.current_price.krw)

    setEthPerct(Math.floor(ethdata.data.market_data.current_price.krw/489)*100)
    setBitPerct(Math.floor(bitdata.data.market_data.current_price.krw/75594)*100)
    setKlayPerct(Math.floor(klaydata.data.market_data.current_price.krw/74)*100)
    setSsxPerct(Math.floor(ssxdata.data.market_data.current_price.krw/1)*100)
    
    setBitHund(Math.floor(bitdata.data.market_data.current_price.krw/100))
    setBitThou(Math.floor(bitdata.data.market_data.current_price.krw/1000))
  }
  useEffect(()=>{
    hi()
  },[])
  
  
  const [totalCoin,setTotalCoin]=useState("0.00")
  const [totalMoney,setTotalMoney]=useState("0")
  const [gift,setGift]=useState(false)
  useEffect(()=>{
      if(number>0 && numberB>0){
        if(number==2){
            setTotalCoin(0.01*numberB)
            setTotalMoney(bitHund*numberB)
            setGift(true)
        }else if (number==3){
            setTotalCoin(0.001*numberB)
            setTotalMoney(bitThou*numberB)
            setGift(true)
        }
      }
  },[number,numberB])

  function next(){
      console.log("h")
  }
  let history = useHistory()
function home(){
    history.replace("/")
}
  function home(){
    history.replace("/")
}
  return (
    <div style={{
      width: 1920,
      backgroundColor: "#ffffff",
      zIndex: 0,
      position: "relative",
    }}>
        <div style={{
        position: "fixed",
        top: 0,
        zIndex: 1,
        width: 1280,
        paddingRight:320,
        paddingLeft:320,
        height: 100,
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 5px 0 rgba(38, 37, 37, 0.12)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}>
        <div onClick={home} style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#e5bf78",
          alignSelf: "center",
          
        }}><img src={logo}></img></div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
        }}>
         
         <div style={{fontSize:18,fontWeight:"bold",marginLeft:40}}>선물하기</div>
         <div style={{fontSize:18,marginLeft:40,opacity:0.6}}>내 선물</div>

          
        
        </div>
      </div>
      <div style={{backgroundColor:"#eaf4ff",width:1920}}>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",paddingTop:140,paddingLeft:350}}><img src={back}></img>
     <div style={{fontSize:32,fontWeight:"bold"}}> 💰 랩트 비트코인 기프트 카드 만들기</div>
     </div>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",paddingLeft:350,marginTop:32,paddingBottom:122}}>
         <div style={{width:620,height:754,marginRight:40,borderRadius:9,boxShadow:"0 6px 20px 0 rgba(0, 0, 0, 0.12)",backgroundColor:"#ffffff"}}>
         <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div><img src={btc} style={{width:48,height:48,marginLeft:20,marginTop:33}}></img></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144,marginLeft:24}}>이름</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,marginLeft:24}}>랩트비트코인(KWBTC)</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144}}>현재가격</div>
        <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>{bitPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144}}>처음에 샀다면?</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,color:"#32ce75"}}>+{bitPerct.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}%</div>
                  </div>
                  <div style={{marginRight:20,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                 <div style={{width:85,paddingTop:16,paddingBottom:12,textAlign:"center",fontWeight:"bold",borderRadius:9,backgroundColor:"#ffffff",marginTop:35,color:"#ffffff",fontSize:14}}></div>
                  </div>
                 
              </div>
              <div style={{border:"solid 1px #dbdbdb",marginTop:32,width:580,marginLeft:20}}></div>
              <div style={{marginTop:32,fontSize:16,fontWeight:"bold",marginLeft:30}}>얼마를 선물할까요?</div>
                            <Button
                                onClick={onHUND}
                                state={number}
                                number={2}
                                content={"0.01 KWBTC (≈"+bitHund.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원)"}
                            />
                              <Button
                                onClick={onTHOU}
                                state={number}
                                number={3}
                                content={"0.001 KWBTC (≈"+bitThou.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원)"}
                            />
                            
                            <div style={{marginTop:32,fontSize:16,fontWeight:"bold",marginLeft:30}}>몇개의 카드를 만들까요?</div>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start"}}>

<ButtonTwo
    onClick={onONE}
    state={numberB}
    number={1}
    content="1 개"
></ButtonTwo>
<ButtonTwo
    onClick={onTWO}
    state={numberB}
    number={2}
    content="2 개"
></ButtonTwo>
<ButtonTwo
    onClick={onTHREE}
    state={numberB}
    number={3}
    content="3 개"
></ButtonTwo>
                            </div>
                            <div style={{border:"solid 1px #dbdbdb",marginTop:32,width:580,marginLeft:20}}></div>
                            <div style={{marginTop:32,fontSize:16,fontWeight:"bold",marginLeft:30}}>총 선물 금액</div>
    <div style={{marginTop:16,marginLeft:30,color:"#3fa2f6",fontSize:24,fontWeight:"bold"}}>{totalCoin}KWBTC</div>
    <div style={{marginTop:4,opacity:0.6,marginLeft:30,fontSize:14}}>(≈{totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원)</div>
    <div style={{marginLeft:30,color:"#ff6263",fontSize:12,marginTop:16}}>지갑에 KWBTC를 보유하고 있어야 기프트 카드를 만들 수 있습니다. </div>
{gift? 
    <div onClick={next} style={{
        width: 560,
        marginRight: 20,
        borderRadius: 6,
        border: "1px solid #010608" ,
        backgroundColor: "#202426",
        paddingTop: 18,
        paddingBottom: 18,
        cursor: "pointer",
        fontSize: 16,
        fontWeight: "bold" ,
        color: "#ffffff" ,
        textAlign: "center",
        marginLeft:30,
        marginTop:24
    }}>기프트 카드 만들기</div>

:
<div onClick={next} style={{
    width: 560,
    marginRight: 20,
    borderRadius: 6,
    border:  "1px solid #dfdfdf",
    backgroundColor:  "#dbdbdb",
    paddingTop: 18,
    paddingBottom: 18,
    cursor: "pointer",
    fontSize: 16,
    fontWeight:"normal",
    color: "#ffffff",
    textAlign: "center",
    marginLeft:30,
    marginTop:24
}}>기프트 카드 만들기</div>

}

         </div>
         <div style={{width:620,height:754,marginRight:40,borderRadius:9,boxShadow:"0 6px 20px 0 rgba(0, 0, 0, 0.12)",backgroundColor:"#ffffff"}}>

         <div style={{marginTop:32,fontSize:16,fontWeight:"bold",marginLeft:30}}>디지털 금을 선물하세요!</div>
         <div style={{marginTop:16,marginRight:32,marginLeft:30,fontSize:14,opacity:0.8}}>비트코인은 2009년 사토시 나카모토라는 익명의 누군가가 만들어낸 분산형 P2P 네트워크 입니다. 비트코인의 개수는 2,100 만개로 한정되어 있고, 전세계 디지털 자산중 가장 큰 시가총액을 형성하고  있습니다. 디지털 금이라는 별명을 가지고 있는 비트코인을 선물해 특별함을 전달해보세요!</div>
         <div style={{marginTop:32,fontSize:16,fontWeight:"bold",marginRight:32,marginLeft:30}}>랩트비트코인은 무엇인가요? <br></br>비트코인과 무엇이 다른가요?</div>
         <div style={{marginTop:16,marginRight:32,marginLeft:30,fontSize:14,opacity:0.8}}>1 랩트 비트코인은 1 비트코인과 동일한 가치를 가지고 있습니다.  <br></br>
랩트비트코인(Wrapped Bitcoin)은 송금 기능밖에 하지 못하는 비트코인 네트워크 상에 존재하는
비트코인을 스마트 컨트랙트를 활용해 이더리움 블록체인 상에서 사용할 수 있게 만든 디지털 자산입니다.</div>
         <div style={{marginTop:32,fontSize:16,fontWeight:"bold",marginRight:32,marginLeft:30}}>랩트비트인은 어떻게 구매할 수 있나요?</div>
         <div style={{marginTop:16,marginRight:32,marginLeft:30,fontSize:14,opacity:0.8}}>Klayswap을 통해 KWBTC를 구매할 수 있습니다. <br></br>
https://klayswap.com/exchange/swap  <br></br>
Klayswap 이용관련 정보는 다음 사이트에서 확인할 수 있습니다. <br></br>
https://docs.klayswap.com/ <br></br>
KWBTC 컨트랙트 주소 <br></br>
https://scope.klaytn.com/account/0x16d0e1fbd024c600ca0380a4c5d57ee7a2ecbf9c?tabId=txList</div>
         </div>
     </div>
   
    </div>
    </div>
  );
}

export default Bit;
