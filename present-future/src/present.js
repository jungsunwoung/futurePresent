import React, { useReducer, useRef, useState, useEffect } from "react";
import "./index.css";

import logo from "./images/logo.png"

import sbtc from "./images/ico-giftcard-0.001btc.png"
import bbtc from "./images/ico-giftcard-0.01btc.png"
import seth from "./images/ico-giftcard-0.01eth.png"
import beth from "./images/ico-giftcard-0.1eth.png"
import sklay from "./images/ico-giftcard-10klay.png"
import bklay from "./images/ico-giftcard-100klay.png"
import sssx from "./images/ico-giftcard-100ssx.png"
import bssx from "./images/ico-giftcard-1000ssx.png"
import xx from "./images/xx.png"

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
      history.push("/Bit",{param:"small"})
  }
  function moveBits(){
    history.push("/Bit",{param:"big"})
}
  function moveEth(){
      history.push("/Eth",{param:"small"})
  }
  function moveEths(){
    history.push("/Eth",{param:"big"})
}
  function moveKlay(){
    history.push("/Klay",{param:"small"})
}
function moveKlays(){
  history.push("/Klay",{param:"big"})
}
function moveSsx(){
    history.push("/Ssx",{param:"small"})
}
function moveSsxs(){
  history.push("/Ssx",{param:"big"})
}
function home(){
    history.replace("/")
}

  const [isStart,setIsStart]=useState(true)
  return (
    

    <div style={{
      width: 1920,
      backgroundColor: "#ffffff",
      zIndex: 0,
      position: "relative",
    }}>
      {isStart?
      <CheckModal
      onCancelClick={home}
      startClick={()=>setIsStart(false)}
      ></CheckModal>
      :
      <></>
      }
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
      <div style={{width:1920}}>
          <div style={{paddingTop:174}}></div>
          <div style={{fontWeight:"bold",fontSize:21,paddingLeft:320}}>👉 선물할 디지털 자산을 선택해주세요.</div>
          <div style={{paddingLeft:320,display:"flex",flexDirection:"row",justifyContent:"space-between",paddingRight:320}}>
          <div onClick={moveBit}><img src={sbtc} style={{cursor:"pointer",width:180,height:240,marginTop:40}}></img></div>
          <div onClick={moveBits}><img src={bbtc} style={{cursor:"pointer",width:180,height:240,marginTop:40}}></img></div>
          <div onClick={moveEth}><img src={seth} style={{cursor:"pointer",width:180,height:240,marginTop:40}}></img></div>
          <div onClick={moveEths}><img src={beth} style={{cursor:"pointer",width:180,height:240,marginTop:40}}></img></div>
          <div onClick={moveKlay}><img src={sklay} style={{cursor:"pointer",width:180,height:240,marginTop:40}}></img></div>
          <div onClick={moveKlays}><img src={bklay} style={{cursor:"pointer",width:180,height:240,marginTop:40}}></img></div>
          </div>
          <div style={{paddingLeft:320,display:"flex",flexDirection:"row",justifyContent:"flex-start",paddingRight:320}}>
         <div onClick={moveSsx}> <img src={sssx} style={{cursor:"pointer",width:180,height:240,marginTop:40,marginRight:40}}></img></div>
        <div onClick={moveSsxs}>  <img src={bssx} style={{cursor:"pointer",width:180,height:240,marginTop:40}}></img></div>
          </div>
          <div style={{paddingLeft:320,opacity:0.6,fontSize:12,width:620,marginTop:34}}>선물하기 목록에서 확인되는 모든 자산은 클레이튼 블록체인 상에서 자율적으로 등록된 토큰이며, 안정성을 보장하지 않습니다. 
사용자는 자산 교환, 예치 전 반드시 토큰 관련 정보를  확인하고 거래해주세요.</div>
<div style={{paddingLeft:320,opacity:0.6,fontSize:12,width:620,marginTop:8}}>특히 비트코인, 이더리움 같은 자산은 이종 블록체인 네트워크에서 클레이튼 블록체인 네트워크로 전송된 자산으로, 유동성에 따라 실제 거래되는 가격과 크게 차이가 날 수 있습니다. </div>
<div style={{paddingBottom:119,marginTop:8,paddingLeft:320,opacity:0.6,fontSize:12,width:620}}>현재가격과 수익률 관련 정보는 Coingecko.com 을 통해 표시되는 정보이며, 표시되는 정보는 정확성 적합성 적시성을 보증하지 않습니다.</div>
      </div>
    </div>
    
  );
}

function CheckModal({ onCancelClick,startClick}) {
  return (
      <div style={{
          position: "fixed",
          top: 0,
          width: "100vw" ,
          height: "100vh",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 10
      }}>
          <div style={{
              width:  400,
              height:598,
              paddingTop: 16,
              backgroundColor: "#ffffff",
              borderRadius: 6,

              display: "flex",
              flexDirection: "column",
          }}>
              
              <img onClick={onCancelClick} style={{width:20,alignSelf:"flex-end",marginRight:18,cursor:"pointer"}} src={xx}></img>
              <div style={{
                  fontFamily: "NotoSansCJKkr",
                  fontSize: 21,
                  fontWeight: "bold",
                  
                  marginLeft:32
              }}>서비스 이용전 확인해주세요!</div>
             <div style={{marginTop:24,marginLeft:32,fontSize:14}}>유동성 풀에 자산을 예치, 교환하는 경우 <br></br>
다음과 같은 위험요소가 존재합니다.</div>
              <div style={{marginTop:16,marginRight:32,marginLeft:32,fontSize:12,opacity:0.8}}>선물하기 목록에서 확인되는 모든 자산은 클레이튼 블록체인 상에서 자율적으로 등록된 토큰이며, 안정성을 보장하지 않습니다. 사용자는 자산 교환, 예치 전 반드시 토큰 관련 정보를  확인하고 거래해주세요.</div>
              <div style={{marginTop:16,marginRight:32,marginLeft:32,fontSize:12,opacity:0.8}}>특히 비트코인, 이더리움 같은 자산은 이종 블록체인 네트워크에서 클레이튼 블록체인 네트워크로 전송된 자산으로, 유동성에 따라 실제 거래되는 가격과 크게 차이가 날 수 있습니다. </div>
              <div style={{marginTop:16,marginRight:32,marginLeft:32,fontSize:12,opacity:0.8}}>사용자 자산의 개인 키를 중앙에서 관리하지 않는 탈중앙형 인터페이스로서, 사용자가 자산을 오입금할 경우 해당 자산에 대해  어느 누구도 접근할 수 없게 설계되어 있으며, 해당 상황에 대한 책임은 사용자에게 있습니다.</div>
              <div style={{marginTop:16,marginRight:32,marginLeft:32,fontSize:12,opacity:0.8}}>사이트 내에 표시되는 정보는 정확성 적합성 적시성을 보증하지 않습니다.</div>
              <div style={{marginTop:16,marginRight:32,marginLeft:32,fontSize:12,opacity:0.8,color:"ff6263"}}>더 자세한 정보는 Present Future 이용약관을 확인해주세요.</div>
              <div onClick={startClick} style={{marginRight:32,marginLeft:32,marginTop:56,backgroundColor:"#3fa2f6",borderRadius:9,cursor:"pointer"}}>
                <div style={{color:"#ffffff",paddingTop:11,paddingBottom:11,textAlign:"center"}}>시작하기</div>
               
              </div>
              <div style={{fontSize:12,opacity:0.6,textAlign:"center",marginTop:16}}>“시작하기” 버튼을 클릭함으로서 사용자는 위험요소에 대해 충분히 이<br></br>
                해하였으며, 이에 동의하고 서비스를 사용함을 확인합니다.</div>
          </div>
      </div>
  )
}

export default Present;
