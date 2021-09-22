import React, { useReducer, useRef, useState, useEffect } from "react";
import "./index.css";

import logo from "./images/logo.png"
import question from "./images/3d-question.png"
import main from "./images/3d-main.png"
import ReactGA from 'react-ga';
import klay from "./images/ico-coin-klay.jpeg"
import ssx from "./images/ico-coin-ssx.png"
import xrp from "./images/ico-coin-xrp.png"
import btc from "./images/icon-coin-btc.png"
import eth from "./images/wEth.png"
import wise from "./images/wise.png"
import woong from "./images/woong.png"
import rocket from "./images/3d-rocket.png"
import back from "./images/back.png"

import coingecko from "coingecko-api"
import CountUp from "react-countup"
import { useHistory,useLocation } from "react-router";

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

function Eth() {
  


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
    

    const location = useLocation()
    const myparam = location.state.param
    useState(()=>{
        if(myparam=="small"){
            onTHOU()
        }else{
            onHUND()
        }
    })



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

  const [ethHund,setEthHund]=useState("")
  const [ethThou,setEthThou]=useState("")

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
    
    setEthHund(Math.floor(ethdata.data.market_data.current_price.krw/10))
    setEthThou(Math.floor(ethdata.data.market_data.current_price.krw/100))
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
            setTotalMoney(ethHund*numberB)
            setGift(true)
        }else if (number==3){
            setTotalCoin(0.001*numberB)
            setTotalMoney(ethThou*numberB)
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
          width:180,
          height:45
        }}><img style={{width:180,height:45}} src={logo}></img></div>
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
     <div style={{fontSize:32,fontWeight:"bold"}}> 💰 이더리움 기프트 카드 만들기</div>
     </div>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",paddingLeft:350,marginTop:32,paddingBottom:122}}>
         <div style={{width:620,height:754,marginRight:40,borderRadius:9,boxShadow:"0 6px 20px 0 rgba(0, 0, 0, 0.12)",backgroundColor:"#ffffff"}}>
         <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div><img src={eth} style={{width:48,height:48,marginLeft:20,marginTop:33}}></img></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144,marginLeft:24}}>이름</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,marginLeft:24}}>이더리움(ETH)</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144}}>현재가격</div>
        <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>{ethPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144}}>처음에 샀다면?</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,color:"#32ce75"}}>+{ethPerct.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}%</div>
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
                                content={"0.1 KETH (≈"+ethHund.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원)"}
                            />
                              <Button
                                onClick={onTHOU}
                                state={number}
                                number={3}
                                content={"0.01 KETH (≈"+ethThou.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원)"}
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
    <div style={{marginTop:16,marginLeft:30,color:"#3fa2f6",fontSize:24,fontWeight:"bold"}}>{totalCoin}KETH</div>
    <div style={{marginTop:4,opacity:0.6,marginLeft:30,fontSize:14}}>(≈{totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원)</div>
    <div style={{marginLeft:30,color:"#ff6263",fontSize:12,marginTop:16}}>지갑에 KETH를 보유하고 있어야 기프트 카드를 만들 수 있습니다. </div>
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

         <div style={{marginTop:32,fontSize:16,fontWeight:"bold",marginLeft:30}}>미래의 인터넷을 선물하세요!</div>
         <div style={{marginTop:16,marginRight:32,marginLeft:30,fontSize:14,opacity:0.8}}>이더리움은 2013년,  비탈릭 부테린에 의해 처음으로 언급이 되었습니다. 이더리움의 목표는 탈중앙형 애플리케이션을 위한 글로벌 플랫폼이 되는 것이며, 스마트 컨트랙트를 활용해  다양한 형태의 서비스들이 만들어지고 있는 미래의 인터넷입니다. 두번째로 큰 시가총액을 형성하고 있습니다.</div>
         <div style={{marginTop:32,fontSize:16,fontWeight:"bold",marginRight:32,marginLeft:30}}>이더리움 앞에 K가 붙어있는 이유는 무엇인가요?</div>
         <div style={{marginTop:16,marginRight:32,marginLeft:30,fontSize:14,opacity:0.8}}>KETH는 오르빗 체인을 통해 이더리움 네트워크에서 클레이튼 네트워크로 보내진 자산입니다. <br></br>
1 KETH는 1ETH와 동일한 가치를 지니고 있으며, 느리고, 거래수수료가 비싼 이더리움이 아닌<br></br>
빠르고, 저렴한 클레이튼 블록체인 네트워크 상에서 활용할 수 있는 디지털 자산입니다.
오르빗 체인을 활용해 다시 이더리움으로 교환할 수 있습니다.</div>
         <div style={{marginTop:32,fontSize:16,fontWeight:"bold",marginRight:32,marginLeft:30}}>이더리움은 어떻게 구매할 수 있나요?</div>
         <div style={{marginTop:16,marginRight:32,marginLeft:30,fontSize:14,opacity:0.8}}>Klayswap을 통해 KETH를 구매할 수 있습니다. <br></br>
https://klayswap.com/exchange/swap<br></br>
Klayswap 이용관련 정보는 다음 사이트에서 확인할 수 있습니다.<br></br>
https://docs.klayswap.com/<br></br>
KWBTC 컨트랙트 주소<br></br>
https://scope.klaytn.com/account/0x34d21b1e550d73cee41151c77f3c73359527a396?tabId=txList</div>
         </div>
     </div>
   
    </div>
    </div>
  );
}

export default Eth;
