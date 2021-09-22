import React, { useReducer, useRef, useState, useEffect } from "react";

import "./index.css";
import Web3 from "web3"
import Typewriter from "typewriter-effect"
import Faq from "react-faq-component"

import git from "./images/ico-sns-git.png"
import kkt from "./images/ico-sns-kkt.png"
import insta from "./images/ico-sns-insta.png"
import gitbook from "./images/gitbook.png"
import twit from "./images/twit.png"
import telegram from "./images/telegrm.png"


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
import klip from "./images/ico-etc-klip.png"
import xx from "./images/xx.png"

import Caver from "caver-js"

import FadeLoader from "react-spinners/FadeLoader"
function reducer(state, action) {
  switch (action.type) {
    case '소개':
      return 0;
    case 'Present Now':
      return 1;
    case "Team":
      return 2
    case '자주묻는질문':
      return 3;
    case '선물하기':
      return 4;
    default:
      return state;
  }
}

function Main() {
  
  
  const data = {
    
    rows: [
        {
            title: "Q1. 서비스 연령 제한이 있나요? 미성년자에게 선물하기가 가능한가요?",
            content: `만 19세 이상 부터 Present Future에서 기프트 카드를 발급할 수 있습니다. 
            해당 서비스는 카카오톡 Klip 지갑을 활용한 서비스이며, 해당 지갑 또한 만 19세 이상부터 지갑을 만들 수 있습니다.
            그러나 미성년자에게 선물하는 방법은 두가지가 있습니다.
            1. 해당 미성년자의 보호자 또는 발급받은 사람이 보관한 뒤 성인이 되어 보내주는 방법과
            2. 클레이튼 블록체인 지갑을 지원하는 다른 서비스 Kaikas, Metatmask 같은 지갑을 활용해 전달하는 방법이 있습니다.`,
        },
        {
            title: "Q2. NFT는 무엇인가요? 왜 선물을 NFT로 보내야하나요?",
            content:
            `NFT는 Non Fungible Token의 약자로 대체 불가능한 토큰이란 뜻입니다.
            블록체인을 활용해 디지털 콘텐츠에 별도의 고유값을 부여, 세상에 단 하나밖에 없는 ‘무언가’를 만들어내는 방식이며,  각각의 디지털 자산에
           고유의 일련번호를 넣어 복제가 불가능하게 만들었다는 점에서 특별함을 만들어낼 수 있습니다.
           Present Future는 “당신의 소중한 사람에게 미래를 선물하세요!”라는 모토를 가지고 만들었습니다. 
           세상에 단 하나 뿐인 NFT를 통해 디지털 자산을 선물하는 경험을 제공함으로써 특별한 마음을 극대화 할 수 있습니다.
            짧게는 1년뒤 멀게는 10년뒤 당신이 전달한 선물을 열어보면 어떤 기분일까요?`,
        },
        {
            title: "Q3. 디지털 자산을 예치한다고 했는데, 어디에 예치되는건가요? 선물한 돈은 안전하게 보관되는건가요?",
            content: `기프트 카드 발급을 위해 예치된 디지털 자산은 블록체인 상 스마트 컨트랙트에 안전하게 보관됩니다.
            기프트 카드 NFT를 소유한 사람외에 누구도(Present Future 포함) 해당 자산에 접근할 수 없으며, 혹시나 모를 해킹에 대비해 Time lock 기능을 추가했습니다.
            컨트랙트는 프로젝트 깃허브에서 확인할 수 있으며, 변경이나 업데이트 사항은 홈페이지를 통해 투명하게 공개하겠습니다. `,
        },
        {
          title: "Q4. 선물 받은 기프트 카트 NFT를 디지털 자산으로 교환하고 싶습니다. 어떻게 해야하나요? ",
          content: `기프트 카드 발급을 위해 예치된 디지털 자산은 블록체인 상 스마트 컨트랙트에 안전하게 보관됩니다.

          기프트 카드 NFT를 소유한 사람외에 누구도(Present Future 포함) 해당 자산에 접근할 수 없으며, 혹시나 모를 해킹에 대비해 Time lock 기능을 추가했습니다.
          컨트랙트는 프로젝트 깃허브에서 확인할 수 있으며, 변경이나 업데이트 사항은 홈페이지를 통해 투명하게 공개하겠습니다.`,
      },
      {
        title: "Q5. 수수료는 없나요?",
        content: `기프트 카드 발행, 선물 받기 등 모든 트랜잭션 수수료는 Present Future에서 부담합니다.
        지속적인 서비스 운영을 위해 선물을 받는 금액의 1%를 수수료로 수취합니다.`,
    },
    {
      title: "Q6. 환불을 받고싶습니다. 어떻게해야하나요?",
      content: `기프트카드를 환불하는 것은 Q4. 항목과 똑같은 방법으로 환불받을 수 있습니다.  `,
  },
        {
            title: "Q7. 구매대행은 어떻게 이루어지나요?",
            content: `구매대행은 블록체인 서비스에 익숙하지 않거나, 처음 접하시는 분들을 위한 서비스입니다. 
            구매 대행은 다음과 같이 진행됩니다.
            1. 구글 설문지를 통해 신청
            2. 본인 확인
            3. 입금
            4. 기프트 카드 전송
            구매대행 서비스 신청은 여기에서 할 수 있습니다.`,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};
  useEffect(() => {
    ReactGA.initialize("UA-167979880-1")
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
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
  const homeRef = useRef(null)
  const homeScroll = () => homeRef.current.scrollIntoView({ top: -80, behavior: 'smooth' })
  const collectionRef = useRef(null)
  const collectionScroll = () => collectionRef.current.scrollIntoView({ top: -80, behavior: 'smooth' })
  const teamRef = useRef(null)
  const teamScroll = () => teamRef.current.scrollIntoView({ top: -80, behavior: 'smooth' })
  const supportRef = useRef(null)
  const supportScroll = () => supportRef.current.scrollIntoView({ top: -80, behavior: 'smooth' })
  const partnersRef = useRef(null)
  const partnersScroll = () => partnersRef.current.scrollIntoView({ top: -80, behavior: 'smooth' })
  const [category, dispatch] = useReducer(reducer, 0);
  const home = () => {
    dispatch({ type: "소개" })
    homeScroll()
  }
  const collection = () => {
    dispatch({ type: "Present Now" })
    collectionScroll()
  }
  const team = () => {
    dispatch({ type: "Team" })
    teamScroll()
  }
  const support = () => {
    dispatch({ type: "자주묻는질문" })
    supportScroll()
  }
  const partners = () => {
    dispatch({ type: "선물하기" })
    partnersScroll()
  }
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  })
  const { name, nickname } = inputs
  const onChange = (e) => {
    const { name, value } = e.target
    const nextInputs = {
      ...inputs,
      [name]: value,
    }
    setInputs(nextInputs)
  }

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset < 1250) {
      dispatch({ type: "소개" })
    } else if (window.pageYOffset < 2400) {
      dispatch({ type: "Present Now" })
    } else if (window.pageYOffset < 2850) {
      dispatch({ type: "Team" })
    } else if (window.pageYOffset < 3377) {
      dispatch({ type: "자주묻는질문" })
    } else {
      dispatch({ type: "선물하기" })
    }
  }
  let history = useHistory()
  function move(){
    setIsClicked(true)
  }

  const [isClicked,setIsClicked]=useState(false)
  const [kaikasLoading,setKaikasLoading]=useState(true)
 async function kakaoClick(){
  if (typeof window.klaytn !== 'undefined') {
    // Kaikas user detected. You can now use the provider.
    const klaytn = window['klaytn']
    try {
      setKaikasLoading(false)
      const accounts = await klaytn.enable()
      console.log(accounts, "지갑정보")
      if(accounts[0].length>0){
        history.push("/present")
      }
      // You now have an array of accounts!
      // Currently only one:
      // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']
    } catch (error) {
      // Handle error. Likely the user rejected the login
      console.error(error)
    }
  }
  }
  function cancel(){
    setIsClicked(false)
    setKaikasLoading(true)
  }
  return (
    
    <div style={{
      width: 1920,
      backgroundColor: "#ffffff",
      zIndex: 0,
      position: "relative",
    }}>
      {isClicked && kaikasLoading? 
         <StandardChoiceModal
         title="Present Future 시작하기"
         content="내 카카오톡으로 쉽고 안전하게 선물할 수 있습니다."
         onCancelClick={cancel}
         kakaoClick={kakaoClick}
     />
      :
      <></>
      }
      {isClicked&&kaikasLoading===false?
      <WatingModal
      title="Present Future 시작하기"
      onCancelClick={cancel}
      
      ></WatingModal>
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
        justifyContent: "space-between",
      }}>
        <div style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#e5bf78",
          alignSelf: "center",
          width:180,
          height:45
        }}><img style={{width:180,height:45}} style={{width:180,height:45}} src={logo}></img></div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
        }}>
          <div onClick={home} style={{
            fontSize: 18,
            fontFamily:"NotoSansCJKkr-Regular",
            fontWeight: window.pageYOffset < 1250 ? "bold" : "normal",
            opacity:window.pageYOffset < 1250 ? 1:0.6,
            color: "#000000",
            cursor: "pointer",
            marginRight: 20
          }}>소개</div>
          <div onClick={collection} style={{
            fontSize: 18,
            fontFamily:"NotoSansCJKkr-Regular",
            fontWeight: window.pageYOffset > 1250 && window.pageYOffset < 2400 ? "bold" : "normal",
            opacity:window.pageYOffset > 1250 && window.pageYOffset < 2400 ? 1:0.6,
            color: "#000000",
            cursor: "pointer",
            marginRight: 20
          }}>Present Now</div>
          <div onClick={team} style={{
            fontSize: 18,
            fontFamily:"NotoSansCJKkr-Regular",
            fontWeight: window.pageYOffset > 2400 && window.pageYOffset < 2850 ? "bold" : "normal",
            opacity: window.pageYOffset > 2400 && window.pageYOffset < 2850 ? 1:0.6,
            color: "#000000",
            cursor: "pointer",
            marginRight: 20
          }}>Team</div>
          <div onClick={support} style={{
            fontSize: 18,
            fontFamily:"NotoSansCJKkr-Regular",
            fontWeight: window.pageYOffset > 2850 && window.pageYOffset < 3377 ? "bold" : "normal",
            opacity: window.pageYOffset > 2850 && window.pageYOffset < 3377 ? 1:0.6,
            color: "#000000",
            cursor: "pointer",
            marginRight: 20
          }}>자주묻는질문</div>
         <div onClick={move} style={{
              width:110,
              
              paddingTop:16,
              paddingBottom:16,
              color:"#ffffff",
              borderRadius:6,
              backgroundColor:"#3fa2f6",
              
              cursor:  "pointer" ,
              fontSize:18,
              fontWeight:"bold",
              
              textAlign:"center"
            }}>선물하기</div>

         
          
        
        </div>
      </div>
      <div style={{
        width:1920,
        backgroundColor:"#eaf4ff",
        
      }}>
      <div style={{
        width: 1280,
        height:600,
        paddingLeft: 320,
        paddingTop:140,
        
        display: "flex",
        flexDirection: "column",
      }}>
        <div ref={homeRef} style={{
          scrollMarginTop: 90,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 1280,
          marginTop:140
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: 510,
          }}>
            <div style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "#000000",
              marginBottom: 20,
              lineHeight: 1.69
            }}>당신의</div>
            <div style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "#000000",
              marginBottom: 20,
              lineHeight: 1.69
            }}><Typewriter
            options={{
              strings: ['가족에게',"친구에게" ,'소중한 사람에게'],
              autoStart: true,
              loop: true,
            }}
          /></div>
            <div style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "#000000",
              marginBottom: 20,
              lineHeight: 1.69
            }}>미래를 선물하세요.</div>
            <div style={{
              fontSize: 24,
              opacity: 0.6,
              color: "#000000",
              lineHeight: 1.56,
              marginBottom: 40,
            }}>Present Future는 NFT 기프트 카드를 통해 
            <br></br>
            다양한 디지털 자산을 선물할 수 있는 서비스입니다.</div>
            <div onClick={move} style={{
              width:290,
              
              paddingTop:16,
              paddingBottom:16,
              color:"#ffffff",
              borderRadius:6,
              backgroundColor:"#3fa2f6",
              
              cursor:  "pointer" ,
              fontSize:18,
              fontWeight:"bold",
              
              textAlign:"center"
            }}>선물 보내기</div>

         
          </div>
          <div style={{
            display: "flex",
            width: 650,
            flexDirection: "column",
            justifyContent: "flex-start"
          }}>
           <div>
             <img style={{width:480,height:360}} src={main}></img>
           </div>
          </div>
        
        </div>
        
        </div>
         
        </div> 
        <div style={{
          scrollMarginTop: 90,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 1280,
          paddingLeft:320,
          marginTop:40
        }}>
            <div style={{
            display: "flex",
            width: 650,
            flexDirection: "column",
            justifyContent: "flex-start"
          }}><div style={{fontSize:24,fontWeight:"bold"}}>카카오톡 Klip을 활용해 손쉽게 미래를 선물해보세요.</div>
          <div style={{fontWeight:"bold",fontSize:18,marginTop:40}}>👉 선물하고 싶은 디지털 자산 선택하기</div>
          <div style={{fontWeight:"normal",fontSize:16,opacity:0.6,marginTop:8}}>Klaytn 기반의 다양한 디지털 자산을 선물 할 수 있습니다.<br></br>
(최소 10만원 ~ 최대 100만원)</div>
          <div style={{fontWeight:"bold",fontSize:18,marginTop:40}}>💰 디지털 자산 예치하기</div>
          <div style={{fontWeight:"normal",fontSize:16,opacity:0.6,marginTop:8}}>Klaytn 지갑을 통해 정해진 수량의 디지털 자산을 예치합니다.<br></br>
예치된 디지털 자산은 스마트컨트랙트 상에 안전하게 보관되며, 언제든 판매해 <br></br>
예치된 디지털 자산을 출금할 수 있습니다.</div>
          <div style={{fontWeight:"bold",fontSize:18,marginTop:40}}>🥳 선물할 사람에게 전송하기</div>
          <div style={{fontWeight:"normal",fontSize:16,opacity:0.6,marginTop:8}}>예치가 완료되면 기프트카드 형식의 NFT가 발급됩니다.<br></br>
발급받은 NFT를 Klip지갑을 통해 간편하게 전송해보세요.<br></br>
(만 19세 미만의 사용자에게는 전송이 불가능합니다.)</div>
          </div>
          
          <div style={{
            display: "flex",
            width: 650,
            flexDirection: "row",
            justifyContent: "flex-start"
          }}>
           <div>
             <img src={question} style={{width:180,height:180,marginTop:103,marginRight:40}}></img>
           </div>
           <div style={{
            display: "flex",
            width: 650,
            flexDirection: "column",
            justifyContent: "flex-start"
          }}>
           <div style={{marginTop:77,fontSize:21,fontWeight:"bold"}}>
             디지털 자산은 어떻게 구매해야하는지 <br></br>모르겠나요?
           </div>
           <div style={{color:"#3fa2f6",fontSize:16,marginTop:16,fontWeight:"bold"}}>구매대행 신청하기 Click!</div>
           <div style={{marginTop:32,fontSize:21,fontWeight:"bold"}}>
             디지털 자산을 예치하고, 전송하는게 <br></br>어려운가요?
           </div>
           <div style={{color:"#3fa2f6",fontSize:16,marginTop:16,fontWeight:"bold"}}>공식 가이드 문서 확인하기 Click!</div>
          </div>
          </div>
        </div>
        
       
        <div style={{
        width: 1280,
        backgroundColor: "#ffffff",
        paddingLeft: 320,
        marginTop: 200,
        display: "flex",
        flexDirection: "column",
      }}>

        <div ref={collectionRef} style={{
          scrollMarginTop: 90,
          fontSize: 32,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 100,
          marginBottom: 20
        }}>Present Now</div>
       
       <div style={{
          scrollMarginTop: 90,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 1280,
          
          marginTop:40
        }}>
          {/* 여기에 박스 4개 */}
             <div style={{
            display: "flex",
            width: 620,
            flexDirection: "column",
            justifyContent: "flex-start"
          }}>
            <div style={{width:620,height:118,borderRadius:9,boxShadow:" 0 6px 20px 0 rgba(0, 0, 0, 0.12)",marginTop:32}}>
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
                 <div style={{width:85,paddingTop:16,paddingBottom:12,textAlign:"center",fontWeight:"bold",borderRadius:9,backgroundColor:"#3fa2f6",marginTop:35,color:"#ffffff",fontSize:14}}>선물하기</div>
                  </div>
                 
              </div>

            </div>
            <div style={{width:620,height:118,borderRadius:9,boxShadow:" 0 6px 20px 0 rgba(0, 0, 0, 0.12)",marginTop:32}}>
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
                 <div style={{width:85,paddingTop:16,paddingBottom:12,textAlign:"center",fontWeight:"bold",borderRadius:9,backgroundColor:"#3fa2f6",marginTop:35,color:"#ffffff",fontSize:14}}>선물하기</div>
                  </div>
                 
              </div>

            </div>
            <div style={{width:620,height:118,borderRadius:9,boxShadow:" 0 6px 20px 0 rgba(0, 0, 0, 0.12)",marginTop:32}}>
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
                 <div style={{width:85,paddingTop:16,paddingBottom:12,textAlign:"center",fontWeight:"bold",borderRadius:9,backgroundColor:"#3fa2f6",marginTop:35,color:"#ffffff",fontSize:14}}>선물하기</div>
                  </div>
                 
              </div>

            </div>
            <div style={{width:620,height:118,borderRadius:9,boxShadow:" 0 6px 20px 0 rgba(0, 0, 0, 0.12)",marginTop:32}}>
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
                 <div style={{width:85,paddingTop:16,paddingBottom:12,textAlign:"center",fontWeight:"bold",borderRadius:9,backgroundColor:"#3fa2f6",marginTop:35,color:"#ffffff",fontSize:14}}>선물하기</div>
                  </div>
                 
              </div>

            </div>
          
          </div>
          <div style={{
            display: "flex",
            width: 650,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignSelf:"center"
          }}>
               <div style={{width:315,marginLeft:193,fontSize:48,fontWeight:"bold"}}> <CountUp end={2000}duration={3}></CountUp>명</div>
               <div style={{width:315,marginLeft:193,fontSize:18,opacity:0.6,marginTop:16}}>Present Future를 통해 선물한 사람들</div>
          <div style={{width:315,marginLeft:193,fontSize:48,fontWeight:"bold",color:"#32ce75",marginTop:40}}><CountUp end={42830}duration={3}></CountUp>억원</div>
          <div style={{width:315,marginLeft:193,fontSize:18,opacity:0.6,marginTop:16}}>지금까지 선물한 가상화폐</div>
          <div style={{width:315,marginLeft:193,fontSize:48,fontWeight:"bold",color:"#ff6263",marginTop:40}}><CountUp end={20}duration={3}></CountUp>억원</div>
          <div style={{width:315,marginLeft:193,fontSize:18,opacity:0.6,marginTop:16}}>선물한 가상화폐의 현재 가치</div>
           </div>
       
          
        </div>
        <div style={{
            display: "flex",
            width: 620,
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop:32
          }}>
<div style={{opacity:0.6,fontSize:14}}>* https://www.coingecko.com/ 표시 가격 기준으로 계산된 수치입니다.<br></br>
* 해당 정보는 공유를 목적으로 하는것이며, 투자를 권유하는 것이 아닙니다.<br></br>
* 실제 선물하기 결제 금액과 차이가 있을 수 있습니다.<br></br>
* Klaytn기반의 Wrapped 자산으로 NFT가 발행됩니다.</div>

          </div>
          <div style={{
          scrollMarginTop: 90,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 1280,
          
          marginTop:40
        }}>

          <div style={{width:336,padding:32,backgroundColor:"#f2f3f8",borderRadius:6}}>
            <div style={{fontSize:16}}>“항상 어떤 선물을 줘야하나 고민했는데, 다양한 가상자산으로  미래를 선물하는 기분이 들어서 색달랐어요!”</div>
            <div style={{fontSize:14,opacity:0.67,marginTop:8}}>20대 대학생 김ㅇㅇ님</div>
          </div>
          <div style={{width:336,padding:32,backgroundColor:"#f2f3f8",borderRadius:6}}>
          <div style={{fontSize:16}}>“조카들에게 추석 용돈 대신 비트코인을 선물해줬어요. 적은 돈이지만 성인이되었을때 기분좋게 열어볼 수 있길 기원합니다 ㅎㅎ”</div>
            <div style={{fontSize:14,opacity:0.67,marginTop:8}}>30대 직장인 김ㅇㅇ님</div>
          </div>
          <div style={{width:336,padding:32,backgroundColor:"#f2f3f8",borderRadius:6}}>
          <div style={{fontSize:16}}>“단순히 코인을 보내는게 아니라, NFT로 특별한 선물같은 느낌을 줄 수 있어서 좋았어요.”</div>
            <div style={{fontSize:14,opacity:0.67,marginTop:8}}>30대 직장인 박ㅇㅇ님</div>
          </div>
        </div>

        <div ref={teamRef} style={{
          scrollMarginTop: 90,
          fontSize: 32,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 100,
          marginBottom: 20
        }}>Team</div>
          <div style={{
          scrollMarginTop: 90,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 1280,
          
          marginTop:40
        }}>
<div style={{width:510}}>
  <div><img style={{width:180,marginTop:40}} src={wise}></img></div>
  <div style={{marginTop:24,fontSize:21,fontWeight:"bold"}}>Wise</div>
  <div style={{marginTop:8,opacity:0.6}}>기획자</div>
  <div style={{opacity:0.8,marginTop:8,fontSize:14}}>성균관대학교 경영학과 <br></br>
  성균관대학교 블록체인 네트워크 Skkrypto 회장 <br></br>2020 제주 블록체인 해커톤 최우수상</div>

</div>
<div style={{width:510}}>
  <div><img style={{width:180,marginTop:40}} src={woong}></img></div>
  <div style={{marginTop:24,fontSize:21,fontWeight:"bold"}}>Woong</div>
  <div style={{marginTop:8,opacity:0.6}}>개발자</div>
  <div style={{opacity:0.8,marginTop:8,fontSize:14}}>성균관대학교 컴퓨터공학과 <br></br>
  성균관대학교 블록체인 네트워크 Skkrypto 개발팀장 <br></br>2020 제주 블록체인 해커톤 최우수상</div>

</div>
        </div>
        <div ref={supportRef} style={{
          scrollMarginTop: 90,
          fontSize: 32,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 100,
          marginBottom: 20
        }}>자주묻는질문</div>
        <div style={{fontSize:16,opacity:0.6}}>사용자님들이 궁금해하는 것들을 정리해놨어요!</div>
          <div style={{marginTop:40}}>
          <Faq 
                data={data}
                styles={styles}
                config={config}
            />
        </div>
        </div>
        <div ref={partnersRef} style={{
          scrollMarginTop: 90,
          fontSize: 32,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 100,
          marginBottom: 40
        }}></div>
      <div style={{backgroundColor:"#3fa2f6",width:1920,height:450}}>
<div style={{paddingLeft:320,display:"flex",flexDirection:"row",justifyContent:"left"}}>
<img src={rocket} style={{width:290,height:290,marginTop:80}}></img>
<div style={{display:"flex",flexDirection:"column",alignSelf:"center",marginLeft:40}}>
  <div style={{color:"#ffffff",fontSize:24,fontWeight:"bold"}}>주식을 선물하는것처럼 <br></br>
디지털 자산을 선물해보세요!</div>
<div style={{fontSize:18,color:"#ffffff",marginTop:16}}>아직도 봉투에 용돈을 담아서 주시나요?</div>
<div onClick={()=>setIsClicked(true)} style={{
              width:290,
              
              paddingTop:16,
              paddingBottom:16,
              color:"#3fa2f6",
              borderRadius:6,
              backgroundColor:"#ffffff",
              marginTop:32,
              cursor:  "pointer" ,
              fontSize:18,
              fontWeight:"bold",
              
              textAlign:"center"
            }}>선물 보내기</div>
</div>
</div>
      </div>
      <div style={{paddingLeft:320,paddingRight:320,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <img style={{marginTop:50,width:180,
          height:45}} src={logo}></img>
        <div style={{marginTop:50, display:"flex",flexDirection:"row",justifyContent:"flex-start"}}>
          
          <a href={"https://open.kakao.com/o/gAsz47zd"} target="_blank"><div><img src={kkt} style={{width:48}}></img></div></a>
          <a href={""} target="_blank"><div><img src={git} style={{width:48,marginLeft:16}}></img></div></a>
          <a href={"https://www.instagram.com/presentfuture_nft/"} target="_blank"><div><img src={insta} style={{width:48,marginLeft:16}}></img></div></a>
          <a href={"https://t.me/presentfuture_nft"} target="_blank"><div><img src={telegram} style={{width:48,marginLeft:16}}></img></div></a>
          <a href={"https://app.gitbook.com/@presentfuture-1/s/present-future/"} target="_blank"><div><img src={gitbook} style={{width:48,marginLeft:16}}></img></div></a>

        </div>
      </div>
      <div style={{marginTop:26,marginBottom:32,paddingLeft:320,display:"flex",flexDirection:"row",justifyContent:"flex-start"}}>
        <div style={{opacity:0.6,fontSize:16,marginRight:32}}>개인정보처리약관 </div>
        <div style={{opacity:0.6,fontSize:16,marginRight:32}}>서비스이용약관 </div>
        <div style={{fontWeight:"bold",fontSize:16,marginRight:32}}>공식 가이드 문서 </div>
      </div>
      <div style={{
        width: "100%",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        paddingLeft:320,
        paddingTop: 20,
        paddingBottom: 20,
      }}>
       
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          
        }}>
<div style={{fontSize:14,color:"#ffffff",marginRight:15}}>주식회사 라텔</div>
<div style={{fontSize:14,color:"#ffffff",marginRight:15}}>대표자 : 김현명, 이지행</div>
<div style={{fontSize:14,color:"#ffffff",marginRight:15}}>서울특별시 성동구 왕십리로 10길 6 1204호</div>
<div style={{fontSize:14,color:"#ffffff",marginRight:15}}>사업자 등록번호 : 278-88-02031</div>
         
        </div>
        <div style={{fontSize:14,opacity:0.9, fontWeight:"bold",color:"#ffffff",marginTop:8}}>© Ratel Co., Ltd. All Rights Reserved</div>
      </div>
    </div>
  );
}
function StandardChoiceModal({ title, content,onCancelClick,kakaoClick}) {
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
              height:464,
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
              }}>{title}</div>
              <div style={{
                  fontFamily: "NotoSansCJKkr",
                  fontSize: 16,
                  marginTop:44,
                  marginLeft:32
              }}>{content}</div>
              
              <div style={{backgroundColor:"#fbe54d",width:336,marginLeft:32,borderRadius:9,marginTop:32}}>
                  <div onClick={kakaoClick} style={{display:"flex",flexDirection:"row",justifyContent:"center",padding:18}}>
                      <div><img style={{width:32,marginRight:5}}src={klip}></img></div>
                      <div>카카오톡 Klip 지갑 연결</div>
                  </div>
              </div>
          
              <div style={{textAlign:"center",opacity:0.8,fontSize:12,textDecoration:"underline",marginTop:16}}>내 손안의 디지털 지갑, Klip 안내</div>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:32}}>

                  <div style={{width:148,marginTop:8.5,height:0,border:"solid 1px #dbdbdb"}}></div>
                  <div style={{opacity:0.6,marginLeft:9,marginRight:9}}>또는</div>
                  <div style={{width:148,marginTop:8.5,height:0,border:"solid 1px #dbdbdb"}}></div>
              </div>
              <div style={{width:336,borderRadius:9,border:"solid 1px #3fa2f6",marginLeft:32,marginTop:32,marginBottom:64}}>
                  <div style={{color:"#3fa2f6",textAlign:"center",padding:18}}>구매대행 신청하기</div>
              </div>
          </div>
      </div>
  )
}
function WatingModal({ title, content,onCancelClick,kakaoClick}) {
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
              height:230,
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
              }}>{title}</div>
             <div style={{marginTop:70,marginLeft:170}}>
             <FadeLoader color={"#3fa2f6"}  size={150}></FadeLoader></div>
          </div>
      </div>
  )
}

export default Main;
