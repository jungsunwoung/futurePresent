import React, { useReducer, useRef, useState, useEffect } from "react";
import "./index.css";
import Web3 from "web3"
import Typewriter from "typewriter-effect"
import Faq from "react-faq-component"

import twit from "./images/twit.png"
import tel from "./images/tel.png"
import ins from "./images/ins.png"


import logo from "./images/logo.png"
import question from "./images/3d-question.png"
import main from "./images/3d-main.png"
import ReactGA from 'react-ga';
import klay from "./images/ico-coin-klay.jpeg"
import ssx from "./images/ico-coin-ssx.png"
import xrp from "./images/ico-coin-xrp.png"
import btc from "./images/icon-coin-btc.png"
import eth from "./images/ico-coin-eth.png"
import wise from "./images/wise.png"
import woong from "./images/woong.png"
import rocket from "./images/3d-rocket.png"

import coingecko from "coingecko-api"
import CountUp from "react-countup"
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

function App() {

  const data = {
    
    rows: [
        {
            title: "Q1. 서비스 연령 제한이 있나요? 미성년자에게 선물하기가 가능한가요?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Q2. NFT는 무엇인가요? 왜 선물을 NFT로 보내야하나요?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Q3. 디지털 자산을 예치한다고 했는데, 어디에 예치되는건가요? 선물한 돈은 안전하게 보관되는건가요?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
          title: "Q4. 선물 받은 기프트 카트 NFT를 디지털 자산으로 교환하고 싶습니다. 어떻게 해야하나요? ",
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: "Q5. 수수료는 없나요?",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
        Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
        Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
        Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "Q6. 환불을 받고싶습니다. 어떻게해야하나요?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
      Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
      Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
      Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
  },
        {
            title: "Q7. 구매대행은 어떻게 이루어지나요?",
            content: <p>current version is 1.2.1</p>,
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
    if (window.pageYOffset < 1222) {
      dispatch({ type: "소개" })
    } else if (window.pageYOffset < 2293) {
      dispatch({ type: "Present Now" })
    } else if (window.pageYOffset < 2806) {
      dispatch({ type: "Team" })
    } else if (window.pageYOffset < 3377) {
      dispatch({ type: "자주묻는질문" })
    } else {
      dispatch({ type: "선물하기" })
    }
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
        justifyContent: "space-between",
      }}>
        <div style={{
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
          <div onClick={home} style={{
            fontSize: 18,
            fontFamily:"NotoSansCJKkr-Regular",
            fontWeight: window.pageYOffset < 1222 ? "bold" : "normal",
            opacity:window.pageYOffset < 1222 ? 1:0.6,
            color: "#000000",
            cursor: "pointer",
            marginRight: 20
          }}>소개</div>
          <div onClick={collection} style={{
            fontSize: 18,
            fontFamily:"NotoSansCJKkr-Regular",
            fontWeight: window.pageYOffset > 1222 && window.pageYOffset < 2293 ? "bold" : "normal",
            opacity:window.pageYOffset > 1222 && window.pageYOffset < 2293 ? 1:0.6,
            color: "#000000",
            cursor: "pointer",
            marginRight: 20
          }}>Present Now</div>
          <div onClick={team} style={{
            fontSize: 18,
            fontFamily:"NotoSansCJKkr-Regular",
            fontWeight: window.pageYOffset > 2293 && window.pageYOffset < 2806 ? "bold" : "normal",
            opacity: window.pageYOffset > 2293 && window.pageYOffset < 2806 ? 1:0.6,
            color: "#000000",
            cursor: "pointer",
            marginRight: 20
          }}>Team</div>
          <div onClick={support} style={{
            fontSize: 18,
            fontFamily:"NotoSansCJKkr-Regular",
            fontWeight: window.pageYOffset > 2806 && window.pageYOffset < 3377 ? "bold" : "normal",
            opacity: window.pageYOffset > 2806 && window.pageYOffset < 3377 ? 1:0.6,
            color: "#000000",
            cursor: "pointer",
            marginRight: 20
          }}>자주묻는질문</div>
          <div onClick={partners} style={{
            fontSize: 18,
            fontFamily:"NotoSansCJKkr-Regular",
            fontWeight: window.pageYOffset >= 3377 ? "bold" : "normal",
            opacity:window.pageYOffset >= 3377 ? 1:0.6,
            color: "#000000",
            cursor: "pointer",
            marginRight: 40
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
            <div style={{
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
             <img src={main}></img>
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
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,marginLeft:24}}>비트코인(KWBTC)</div>
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
<div style={{display:"flex",flexDirection:"column",alignSelf:"center"}}>
  <div style={{color:"#ffffff",fontSize:24,fontWeight:"bold"}}>주식을 선물하는것처럼 <br></br>
디지털 자산을 선물해보세요!</div>
<div style={{fontSize:18,color:"#ffffff",marginTop:16}}>아직도 봉투에 용돈을 담아서 주시나요?</div>
<div style={{
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
      
      <div style={{
        width: "100%",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 20,
      }}>
        <div style={{
          fontSize: 18,
          color: "#ffffff",
          marginBottom: 20,
        }}><img src={logo}></img></div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}>

          <a href={"https://twitter.com/AapiNft"} target="_blank">
            <div >
              <img style={{
                width: 48,
                height: 48,
                backgroundColor: "#ffffff",
                marginRight: 20,
                borderRadius: 24
              }} src={twit}></img></div>
          </a>
          <a href={"https://www.instagram.com/aapi.nft/"} target="_blank">
            <div >
              <img style={{
                width: 48,
                height: 48,
                backgroundColor: "#ffffff",
                marginRight: 20,
                borderRadius: 24
              }} src={ins}></img>
            </div>
          </a>
          <a href={"https://t.me/aapinft"} target="_blank">
            <div >
              <img style={{
                width: 48,
                height: 48,
                backgroundColor: "#ffffff",
                marginRight: 20,
                borderRadius: 24
              }} src={tel}></img>
            </div>
          </a>
         
        </div>
      </div>
    </div>
  );
}

export default App;
