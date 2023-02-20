import { useEffect, useState, useContext } from "react";
import { ethers, utils } from "ethers";
import artifact from "../contracts/releasegold";
import { Web3Context } from "../context/Web3Context";

const ReleaseGold = () => {
  const [beneficiary, setBeneficiary] = useState("");
  const [releaseGold, setReleaseGold] = useState();
  const [remainingTotalBalance, setRemainingTotalBalance] = useState(0);
  const [claimableAmount, setClaimableAmount] = useState(0);

  const { state } = useContext(Web3Context);
  const { web3Provider, address } = state;

  useEffect(() => {
    (async () => {
      if (web3Provider) {
        const contractInstance = new ethers.Contract(
          artifact.address,
          artifact.abi,
          web3Provider
        );
  
        setBeneficiary(await contractInstance.beneficiary());
        setRemainingTotalBalance(
          utils.formatEther(await contractInstance.getRemainingTotalBalance())
        );
        setClaimableAmount(
          utils.formatEther(
            await contractInstance.getCurrentReleasedTotalAmount()
          )
        );
        setReleaseGold(contractInstance);
      }
    })();
  }, [web3Provider]);

  const handleClaim = async () => {
    const signer = await web3Provider.getSigner(address);
    const amount = await releaseGold.getCurrentReleasedTotalAmount();
    const withdrawalTx = await releaseGold.connect(signer).withdraw(amount);
    console.log(withdrawalTx);
  };

  if (!releaseGold) {
    return <p>loading..</p>;
  }

  return (
    <div>
      <h1>ReleaseGold</h1>
      <div>
        <span>
          <strong>Beneficiary: </strong>
        </span>
        <span>{beneficiary}</span>
      </div>
      <div>
        <span>
          <strong>Remaining Total Balance: </strong>
        </span>
        <span>{remainingTotalBalance}</span>
      </div>
      <div>
        <span>
          <strong>Claimable Amount: </strong>
        </span>
        <span>{claimableAmount}</span>
      </div>
      <div>
        <br />
        <button onClick={handleClaim} disabled={!releaseGold}>
          Claim
        </button>
      </div>
    </div>
  );
};

export default ReleaseGold;
