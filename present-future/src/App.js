import React, { useReducer, useRef, useState, useEffect } from "react";
import "./index.css";
import Web3 from "web3"
import Typewriter from "typewriter-effect"


import twit from "./images/twit.png"
import tel from "./images/tel.png"
import ins from "./images/ins.png"



import question from "./images/3d-question.png"
import main from "./images/3d-main.png"
import ReactGA from 'react-ga';
import klay from "./images/ico-coin-klay.jpeg"
import ssx from "./images/ico-coin-ssx.png"
import xrp from "./images/ico-coin-xrp.png"
import btc from "./images/icon-coin-btc.png"
import eth from "./images/ico-coin-eth.png"

function reducer(state, action) {
  switch (action.type) {
    case '소개':
      return 0;
    case 'Present Now':
      return 1;
    case '자주묻는질문':
      return 2;
    case '선물하기':
      return 3;
    default:
      return state;
  }
}

function App() {

  useEffect(() => {
    ReactGA.initialize("UA-167979880-1")
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  const homeRef = useRef(null)
  const homeScroll = () => homeRef.current.scrollIntoView({ top: -80, behavior: 'smooth' })
  const collectionRef = useRef(null)
  const collectionScroll = () => collectionRef.current.scrollIntoView({ top: -80, behavior: 'smooth' })
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

  function donation() {
    var MY_ADDRESS = '0x8A39eC10AE914CD71DE75A766D7Beb78C1286D0e'
    if (window.ethereum) {
      var web3 = new Web3(window.ethereum);
      try {
        window.ethereum.enable().then(function () {
          web3.eth.getAccounts((error, accounts) => {
            web3.eth.sendTransaction(
              {
                to: MY_ADDRESS,
                from: accounts[0],
                value: Web3.utils.toWei(name, 'ether'),
              },
            )
          })
        });
      } catch (e) {
        
      }
    }
    // Legacy DApp Browsers
    else if (window.web3) {
      var web3 = new Web3(window.web3.currentProvider);
      try {
        window.ethereum.enable().then(function () {
          web3.eth.getAccounts((error, accounts) => {
            web3.eth.sendTransaction(
              {
                to: MY_ADDRESS,
                from: accounts[0],
                value: Web3.utils.toWei(name, 'ether'),
              },
            )
          })
        });
      } catch (e) {
      }
    }
    else {
      alert('You have to install MetaMask !');
    }
    if (typeof web3 === 'undefined') {
      console.log("error")
    }
  }

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset < 1222) {
      dispatch({ type: "소개" })
    } else if (window.pageYOffset < 2293) {
      dispatch({ type: "Present Now" })
    } else if (window.pageYOffset < 2934) {
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
        paddingTop: 16,
        paddingBottom: 16,
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
          alignSelf: "flex-end",
          
        }}>PresentFuture</div>
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
          <div onClick={support} style={{
            fontSize: 18,
            fontFamily:"NotoSansCJKkr-Regular",
            fontWeight: window.pageYOffset > 2293 && window.pageYOffset < 2934 ? "bold" : "normal",
            opacity: window.pageYOffset > 2293 && window.pageYOffset < 2934 ? 1:0.6,
            color: "#000000",
            cursor: "pointer",
            marginRight: 20
          }}>자주묻는질문</div>
          <div onClick={partners} style={{
            fontSize: 18,
            fontFamily:"NotoSansCJKkr-Regular",
            fontWeight: window.pageYOffset >= 2934 ? "bold" : "normal",
            opacity:window.pageYOffset >= 2934 ? 1:0.6,
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
          marginTop: 250,
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
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>이름</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>비트코인(KWBTC)</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>현재가격</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>52,470,426원</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>처음에 샀다면?</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,color:"#32ce75"}}>+32,920%</div>
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
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>이름</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>이더리움(KETH)</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>현재가격</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>3,865,013원</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>처음에 샀다면?</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,color:"#32ce75"}}>+116,212%</div>
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
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>이름</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>클레이튼(KLAY)</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>현재가격</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>1,578.66원</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>처음에 샀다면?</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,color:"#32ce75"}}>+1364%</div>
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
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>이름</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>썸씽(SSX)</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>현재가격</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>83.95원</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>처음에 샀다면?</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,color:"#32ce75"}}>+3219%</div>
                  </div>
                  <div style={{marginRight:20,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                 <div style={{width:85,paddingTop:16,paddingBottom:12,textAlign:"center",fontWeight:"bold",borderRadius:9,backgroundColor:"#3fa2f6",marginTop:35,color:"#ffffff",fontSize:14}}>선물하기</div>
                  </div>
                 
              </div>

            </div>
            <div style={{width:620,height:118,borderRadius:9,boxShadow:" 0 6px 20px 0 rgba(0, 0, 0, 0.12)",marginTop:32}}>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div><img src={xrp} style={{width:48,height:48,marginLeft:20,marginTop:33}}></img></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>이름</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>리플(XRP)</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>현재가격</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8}}>52,470,426원</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div style={{marginTop:31,opacity:0.6,fontSize:14}}>처음에 샀다면?</div>
                  <div style={{fontWeight:"bold",fontSize:16,marginTop:8,color:"#32ce75"}}>+32,920%</div>
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
            justifyContent: "flex-start"
          }}>  <div>hsi</div>
          <div>hfi</div>
          <div>hi</div>
          <div>hi</div></div>
       

        </div>
       
        <div ref={supportRef} style={{
          scrollMarginTop: 90,
          fontSize: 32,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 100,
          marginBottom: 20
        }}>자주묻는질문</div>
        
        
        <div ref={partnersRef} style={{
          scrollMarginTop: 90,
          fontSize: 32,
          fontWeight: "bold",
          color: "#000000",
          marginTop: 100,
          marginBottom: 40
        }}>선물하기</div>
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
        }}>Follow AAPI.NFT</div>
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
          {/* 
          <div style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "#ffffff",
            border: "1px solid #707070",
            marginRight: 10,
            marginLeft: 10
          }} />
          <div style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "#ffffff",
            border: "1px solid #707070",
            marginRight: 10,
            marginLeft: 10
          }} />
          <div style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "#ffffff",
            border: "1px solid #707070",
            marginRight: 10,
            marginLeft: 10
          }} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
