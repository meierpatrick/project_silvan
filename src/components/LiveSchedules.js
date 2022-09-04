/** @format */

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import erc20abi from "../erc20VestingABI.json";
import TxList from "../Txlist";
import { Button, Input } from "@chakra-ui/react";

export default function LiveSchedules() {
  // const [txs, setTxs] = useState([]);
  const holder = "0xf0BfB75B67be13c62A86ad9cE71C4Dd81652Cf1E";
  const [contractListened, setContractListened] = useState();
  const [contractInfo, setContractInfo] = useState({
    address: "-",
    getVestingSchedulesTotalAmount: "-",
    getLastVestingScheduleForHolder: "-",
  });
  /* const [balanceInfo, setBalanceInfo] = useState({
    address: "-",
    balance: "-",
  }); */

  /*  useEffect(() => {
    if (contractInfo.address !== "-") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const erc20 = new ethers.Contract(
        contractInfo.address,
        erc20abi,
        provider
      );

      erc20.on("Transfer", (from, to, amount, event) => {
        console.log({ from, to, amount, event });

        setTxs((currentTxs) => [
          ...currentTxs,
          {
            txHash: event.transactionHash,
            from,
            to,
            amount: String(amount),
          },
        ]);
      });
      setContractListened(erc20);

      return () => {
        contractListened.removeAllListeners();
      };
    }
  }, [contractInfo.address]); */

  const handleSubmit = async (e) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const erc20 = new ethers.Contract(
      "0x5459cf8cbe455a83323a2483a09414ACb8d80BEc",
      erc20abi,
      provider
    );

    const getVestingSchedulesTotalAmount = await erc20.getVestingSchedulesTotalAmount();
    const getLastVestingScheduleForHolder = await erc20.getLastVestingScheduleForHolder(
      holder
    );

    setContractInfo({
      address: "0x5459cf8cbe455a83323a2483a09414ACb8d80BEc",
      getVestingSchedulesTotalAmount,
      getLastVestingScheduleForHolder,
      holder: "0xf0BfB75B67be13c62A86ad9cE71C4Dd81652Cf1E",
    });
  };

  handleSubmit();

  /*   const getMyBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, provider);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const balance = await erc20.balanceOf(signerAddress);

    setBalanceInfo({
      address: signerAddress,
      balance: String(balance),
    });
  }; */

  /*   const handleTransfer = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer);
    await erc20.transfer(data.get("recipient"), data.get("amount"));
  }; */

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      <div>
        <form className="m-4">
          <div className="credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
            <div className="px-4">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Vesting Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {String(contractInfo.getVestingSchedulesTotalAmount)}
                        {String(contractInfo.getLastVestingScheduleForHolder)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <></>
            </div>
            {/*  <div className="p-4">
              <Button
                onClick={getMyBalance}
                type="submit"
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
              >
                Get my balance
              </Button>
            </div> */}
            {/*  <div className="px-4">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Address</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{balanceInfo.address}</th>
                      <td>{balanceInfo.balance}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}
          </div>
        </form>
        {/*   <div className="m-4 credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
          <div className="mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Write to contract
            </h1>

            <form onSubmit={handleTransfer}>
              <div className="my-3">
                <Input
                  type="text"
                  name="recipient"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Recipient address"
                />
              </div>
              <div className="my-3">
                <Input
                  type="text"
                  name="amount"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Amount to transfer"
                />
              </div>
              <footer className="p-4">
                <Button
                  type="submit"
                  className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                >
                  Transfer
                </Button>
              </footer>
            </form>
          </div>
        </div> */}
        {/*     </div>
      <div>
        <div className="m-4 credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
          <div className="mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Recent transactions
            </h1>
            <p>
              <TxList txs={txs} />
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
