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
import eth from "./images/wEth.png"
import wise from "./images/wise.png"
import woong from "./images/woong.png"
import rocket from "./images/3d-rocket.png"

import coingecko from "coingecko-api"
import CountUp from "react-countup"
import { useHistory } from "react-router";

function Present() {
  
  const [ethPrice,setEthPrice]=useState("")
  const [bitPrice,setBitPrice]=useState("")
  const [klayPrice,setKlayPrice]=useState("")
  const [ssxPrice,setSsxPrice]=useState("")
  const [ethPerct,setEthPerct]=useState("")
  const [bitPerct,setBitPerct]=useState("")
  const [klayPerct,setKlayPerct]=useState("")
  const [ssxPerct,setSsxPerct]=useState("")
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
    
  }
  useEffect(()=>{
    hi()
  },[])
  let history = useHistory()
  function moveBit(){
      history.push("/Bit")
  }
  function moveEth(){
      history.push("/Eth")
  }
  function moveKlay(){
    history.push("/Klay")
}
function moveSsx(){
    history.push("/Ssx")
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
          <div style={{paddingTop:174}}></div>
          <div style={{fontWeight:"bold",fontSize:21,paddingLeft:650}}>👉 선물할 디지털 자산을 선택해주세요.</div>
          <div style={{
            display: "flex",
            width: 620,
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingLeft:650,
            
          }}>
            <div style={{width:620,height:118,borderRadius:9,boxShadow:" 0 6px 20px 0 rgba(0, 0, 0, 0.12)",marginTop:32,backgroundColor:"#ffffff"}}>
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
                 <div onClick={moveBit} style={{width:85,paddingTop:16,paddingBottom:12,textAlign:"center",fontWeight:"bold",borderRadius:9,backgroundColor:"#3fa2f6",marginTop:35,color:"#ffffff",fontSize:14}}>선물하기</div>
                  </div>
                 
              </div>

            </div>
            <div style={{width:620,height:118,borderRadius:9,boxShadow:" 0 6px 20px 0 rgba(0, 0, 0, 0.12)",marginTop:32,backgroundColor:"#ffffff"}}>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div><img src={eth} style={{width:48,height:48,marginLeft:20,marginTop:33}}></img></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144,marginLeft:24}}>이름</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,marginLeft:24}}>이더리움(KETH)</div>
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
                 <div onClick={moveEth} style={{width:85,paddingTop:16,paddingBottom:12,textAlign:"center",fontWeight:"bold",borderRadius:9,backgroundColor:"#3fa2f6",marginTop:35,color:"#ffffff",fontSize:14}}>선물하기</div>
                  </div>
                 
              </div>

            </div>
            <div style={{width:620,height:118,borderRadius:9,boxShadow:" 0 6px 20px 0 rgba(0, 0, 0, 0.12)",marginTop:32,backgroundColor:"#ffffff"}}>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div><img src={klay} style={{width:48,height:48,marginLeft:20,marginTop:33}}></img></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144,marginLeft:24}}>이름</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,marginLeft:24}}>클레이튼(KLAY)</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144}}>현재가격</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>{klayPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144}}>처음에 샀다면?</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,color:"#32ce75"}}>+{klayPerct.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}%</div>
                  </div>
                  <div style={{marginRight:20,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                 <div onClick={moveKlay} style={{width:85,paddingTop:16,paddingBottom:12,textAlign:"center",fontWeight:"bold",borderRadius:9,backgroundColor:"#3fa2f6",marginTop:35,color:"#ffffff",fontSize:14}}>선물하기</div>
                  </div>
                 
              </div>

            </div>
            <div style={{width:620,height:118,borderRadius:9,boxShadow:" 0 6px 20px 0 rgba(0, 0, 0, 0.12)",marginTop:32,backgroundColor:"#ffffff"}}>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div><img src={ssx} style={{width:48,height:48,marginLeft:20,marginTop:33}}></img></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14,width:144,marginLeft:24}}>이름</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,marginLeft:24}}>썸씽(SSX)</div>
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
                 <div onClick={moveSsx} style={{width:85,paddingTop:16,paddingBottom:12,textAlign:"center",fontWeight:"bold",borderRadius:9,backgroundColor:"#3fa2f6",marginTop:35,color:"#ffffff",fontSize:14}}>선물하기</div>
                  </div>
                 
              </div>

            </div>
          
          </div>
          <div style={{paddingLeft:650,opacity:0.6,fontSize:12,width:620,marginTop:34}}>선물하기 목록에서 확인되는 모든 자산은 클레이튼 블록체인 상에서 자율적으로 등록된 토큰이며, 안정성을 보장하지 않습니다. 
사용자는 자산 교환, 예치 전 반드시 토큰 관련 정보를  확인하고 거래해주세요.</div>
<div style={{paddingLeft:650,opacity:0.6,fontSize:12,width:620,marginTop:8}}>특히 비트코인, 이더리움 같은 자산은 이종 블록체인 네트워크에서 클레이튼 블록체인 네트워크로 전송된 자산으로, 유동성에 따라 실제 거래되는 가격과 크게 차이가 날 수 있습니다. </div>
<div style={{paddingBottom:119,marginTop:8,paddingLeft:650,opacity:0.6,fontSize:12,width:620}}>현재가격과 수익률 관련 정보는 Coingecko.com 을 통해 표시되는 정보이며, 표시되는 정보는 정확성 적합성 적시성을 보증하지 않습니다.</div>
      </div>
    </div>
    
  );
}

export default Present;
