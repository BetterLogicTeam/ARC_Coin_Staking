import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Web3 from "web3";
import {
  TokenAddress,
  Token_Abi,
  tokenStaking,
  tokenStaking_Abi,
} from "../../utilies/constant";
import Connent from "../Connent/Connent";
import "./Lockestake.css";
import Countdown from "react-countdown";
import moment from "moment/moment";
import { Button, Popover } from "antd";
import { Modal, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";

function Lockestake({ setShoww, check }) {
  let { provider, acc, providerType, web3 } = useSelector(
    (state) => state.connectWallet
  );
  const [selectDays, setselectDays] = useState(0);
  const [getValue, setgetValue] = useState(0);
  const [Active, setActive] = useState(0);
  const [spinner, setspinner] = useState(false);
  const [balance, setbalance] = useState(0);
  const [selectedCard, setselectedCard] = useState(null);
  const [cradShow, setcradShow] = useState([]);
  const [stakeddata, setstakeddata] = useState();
  const [cardIndex, setcardIndex] = useState([]);
  const [slectedAllnfton, setslectedAllnfton] = useState({
    condition: false,
    walletOfOwneron: [],
  });
  const [noSelectedAll, setnoSelectedAll] = useState([]);

  const staking_Amount = async () => {
    try {
      if (acc == null) {
        toast.error("Please Connect Metamaske First!");
        setShoww(true);
      } else {
        if (getValue == null) {
          toast.error("Please Enter Amount First!");
          setspinner(false);
        } else {
          if (getValue < 100000) {
            toast.error("Minimum Staking Amount 100000!");
            setspinner(false);
          } else {
            if (selectDays == 0) {
              toast.error("Please Select Days");
              setspinner(false);
            } else {
              if(Number(balance)>=Number(getValue)){

              
              setspinner(true);
              let stakingContractOf;
              let tokenContractOf;

              stakingContractOf = new web3.eth.Contract(
                tokenStaking_Abi,
                tokenStaking
              );
              tokenContractOf = new web3.eth.Contract(Token_Abi, TokenAddress);

              let stakingValue = web3.utils.toWei(getValue);
              console.log(selectDays,"selectDays");

              // console.log("stakingValue", stakingValue);

              // await tokenContractOf.methods
              //   .approve(tokenStaking, stakingValue)
              //   .send({
              //     from: acc,
              //   });
              // toast.success("Approve Confirmed");
              await stakingContractOf.methods.farm(selectDays).send({
                from: acc,
                value: stakingValue,
              });
              toast.success("Transaction Confirmed");
              setspinner(false);
            }else{
              toast.error("Insufficient Balance")
            }
            }
          }
        }
      }
    } catch (e) {
      console.log("Error", e);
      setspinner(false);
    }
  };
  const checkBalance = async () => {
    const webSupply = new Web3("https://bsc-testnet.public.blastapi.io");

    let tokenContractOf = new webSupply.eth.Contract(Token_Abi, TokenAddress);
    let stakingContractOf = new webSupply.eth.Contract(
      tokenStaking_Abi,
      tokenStaking
    );

    if (acc != null) {
      web3.eth.getBalance(acc.toString(), function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log("data", web3.utils.fromWei(result, "ether"));

          let balanceOf = web3.utils.fromWei(result, "ether");
          setbalance(parseFloat(balanceOf).toFixed(3));
        }
      });
    }
  };

  useEffect(() => {
    checkBalance();
  });

  return (
    <>
      <>
        <div className="container-fluid p-0  ">
          <div className="row justify-content-center">
            <div className="col-lg-5 all_main p-0">
              <h3 class="staking__selector__heading">Stake ARC</h3>

              <div className="first_box mt-4  px-2">
                <div className="munt_box d-flex justify-content-between">
                  <span className="">Amount</span>
                  <p className="my_balnc ">
                    <span> ~My balance:</span> <span>{balance} </span>
                  </p>
                </div>
                <div className="typ_area border ">
                  <div className="mx_buttn str_tp_dollar text-cenetr ">
                    ARC
                  </div>
                  <input
                    className="ariia"
                    type="number"
                    inputMode="decimal"
                    placeholder="0"
                    autoComplete="off"
                    autoCorrect="off"
                    aria-aria-valuemin="0"
                    aria-valuemax="9007199254740991"
                    onChange={(e) => setgetValue(e.target.value)}
                    value={getValue}
                  />

                  <button
                    type="button"
                    className="mx_buttn text-white "
                    onClick={() => setgetValue(balance)}
                  >
                    Max
                  </button>
                </div>
              </div>

              <div className="second_box mt-3 px-2">
                <p className="text-start">Locking Time</p>
                <div className="time_table">
                  <div className="dan_gtr text-white">
                    <div
                      className=" border des_tw p-0 "
                      style={{
                        background: Active == 1 ? "#b311f3" : "transparent",
                      }}
                      onClick={() => (setselectDays(30), setActive(1))}
                    >
                      <button className="btn btn-md dates">30 Days</button>
                      <div className="arp border-top">18% ARP</div>
                    </div>
                    <div
                      className=" border des_tw p-0"
                      style={{
                        background: Active == 2 ? "#b311f3" : "transparent",
                      }}
                      onClick={() => (setselectDays(90), setActive(2))}
                    >
                      <button className="btn btn-md dates">90 Days</button>
                      <div className="arp border-top">24% ARP</div>
                    </div>
                    <div
                      className=" border des_tw p-0"
                      style={{
                        background: Active == 3 ? "#b311f3" : "transparent",
                      }}
                      onClick={() => (setselectDays(180), setActive(3))}
                    >
                      <button className="btn btn-md dates">180 Days</button>
                      <div className="arp border-top">30% ARP</div>
                    </div>
                    <div
                      className=" border des_tw p-0"
                      style={{
                        background: Active == 4 ? "#b311f3" : "transparent",
                      }}
                      onClick={() => (setselectDays(360), setActive(4))}
                    >
                      <button className="btn btn-md dates">360 Days</button>
                      <div className="arp border-top">36% ARP</div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-md lst_btnn mt-3 text-white"
                onClick={() => staking_Amount()}
              >
                {spinner == true ? (
                  <>
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </>
                ) : (
                  " Enable Staking"
                )}
              </button>

              <div className="last mt-4">
                <p className="fon m-0 py-2">
                  Locking {getValue} ARC for {selectDays} Days
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Lockestake;
