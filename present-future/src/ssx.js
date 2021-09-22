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
import { useHistory ,useLocation} from "react-router";

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

function Ssx() {
  


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

  const [ssxHund,setssxHund]=useState("")
  const [ssxThou,setssxThou]=useState("")

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
    
    setssxHund(Math.floor(ssxdata.data.market_data.current_price.krw*1000))
    setssxThou(Math.floor(ssxdata.data.market_data.current_price.krw*100))
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
            setTotalCoin(100*numberB)
            setTotalMoney(ssxHund*numberB)
            setGift(true)
        }else if (number==3){
            setTotalCoin(10*numberB)
            setTotalMoney(ssxThou*numberB)
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
     <div style={{fontSize:32,fontWeight:"bold"}}> 💰 썸씽 기프트 카드 만들기</div>
     </div>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",paddingLeft:350,marginTop:32,paddingBottom:122}}>
         <div style={{width:620,height:754,marginRight:40,borderRadius:9,boxShadow:"0 6px 20px 0 rgba(0, 0, 0, 0.12)",backgroundColor:"#ffffff"}}>
         <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div><img src={ssx} style={{width:48,height:48,marginLeft:20,marginTop:33}}></img></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144,marginLeft:24}}>이름</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,marginLeft:24}}>썸씽 (SSX)</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144}}>현재가격</div>
        <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>{ssxPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144}}>처음에 샀다면?</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,color:"#32ce75"}}>+{ssxPerct.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}%</div>
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
                                content={"1,000 SSX (≈"+ssxHund.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원)"}
                            />
                              <Button
                                onClick={onTHOU}
                                state={number}
                                number={3}
                                content={"100 SSX (≈"+ssxThou.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원)"}
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
    <div style={{marginTop:16,marginLeft:30,color:"#3fa2f6",fontSize:24,fontWeight:"bold"}}>{totalCoin}SSX</div>
    <div style={{marginTop:4,opacity:0.6,marginLeft:30,fontSize:14}}>(≈{totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원)</div>
    <div style={{marginLeft:30,color:"#ff6263",fontSize:12,marginTop:16}}>지갑에 SSX를 보유하고 있어야 기프트 카드를 만들 수 있습니다. </div>
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

         <div style={{marginTop:32,fontSize:16,fontWeight:"bold",marginLeft:30}}>미래의 가수를 위한 최고의 선물!</div>
         <div style={{marginTop:16,marginRight:32,marginLeft:30,fontSize:14,opacity:0.8}}>블록체인 기술을 접목한 모바일 기반 소셜 노래방앱 서비스로, 크리에이터들은 좋아하는 노래를 즐기면서, 콘텐츠 창작활동을 할 수가 있으며  노래를 좋아하는 누구나 하루 24시간, 1년 365일 앱내에서 제공되는 모든 노래를 무료로 부를 수 있고 플랫폼에 게시되는 콘텐츠에 대해 후원, 선물, 이벤트 등을 통해 적립된 썸씽의 유틸리티토큰(SSX)을 획득할 수 있는 서비스입니다.<br></br>
많은 대중들이 쉽고 간편하게 이용하여 최대한 많은 사람들을 끌어 들이는 것이 목표로 생태계를 빠르게 확장하고 있는 대한민국 1등 블록체인 플랫폼의 디지털 자산을 선물해보세요.</div>
         <div style={{marginTop:32,fontSize:16,fontWeight:"bold",marginRight:32,marginLeft:30}}>방구석 노래방을 만들어보세요!</div>
         <div style={{marginTop:16,marginRight:32,marginLeft:30,fontSize:14,opacity:0.8}}>썸씽 앱을 통해 스튜디오급의 음질/실시간 싱크조절/다양한 음향효과 별도의 특수장비 없이 Bundle 이어폰을 이용하여 스튜디오급의 레코딩 기술에 대한 경험이 가능하며, 유튜브 및 외부채널로의 콘텐츠 공유하기 기능을 통해 전세계 누구에게나 노래 실력을 뽑낼 수 있습니다!</div>
         <div style={{marginTop:32,fontSize:16,fontWeight:"bold",marginRight:32,marginLeft:30}}>썸씽은 어떻게 구매할 수 있나요?</div>
         <div style={{marginTop:16,marginRight:32,marginLeft:30,fontSize:14,opacity:0.8}}>Klayswap, 업비트, 빗썸을 통해 썸씽을 구매할 수 있습니다.<br></br>
https://klayswap.com/exchange/swap<br></br>
https://upbit.com/exchange?code=CRIX.UPBIT.KRW-SSX<br></br>
https://www.bithumb.com/trade/order/SSX_KRW<br></br>
KWBTC 컨트랙트 주소<br></br>
https://scope.klaytn.com/account/0xdcd62c57182e780e23d2313c4782709da85b9d6c?tabId=txList</div>
         </div>
     </div>
   
    </div>
    </div>
  );
}

export default Ssx;
