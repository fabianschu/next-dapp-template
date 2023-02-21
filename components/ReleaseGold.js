import { useEffect, useState, useContext } from "react";
import { ethers, utils } from "ethers";
import artifact from "../contracts/releasegold";
import { Web3Context } from "../context/Web3Context";

const ReleaseGold = () => {
  const [beneficiary, setBeneficiary] = useState("");
  const [releaseGold, setReleaseGold] = useState();
  const [maxDistribution, setMaxDistribution] = useState();
  const [totalWithdrawn, setTotalWithdrawn] = useState();
  const [remainingTotalBalance, setRemainingTotalBalance] = useState(0);
  const [currentReleasedAmount, setCurrentReleasedAmount] = useState(0);
  const [txHash, setTxHash] = useState("");

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
        setMaxDistribution(
          utils.formatEther(await contractInstance.maxDistribution())
        );
        setTotalWithdrawn(
          utils.formatEther(await contractInstance.totalWithdrawn())
        );
        setRemainingTotalBalance(
          utils.formatEther(await contractInstance.getRemainingTotalBalance())
        );
        setCurrentReleasedAmount(
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
    const total = await releaseGold.getCurrentReleasedTotalAmount();
    const withdrawn = await releaseGold.totalWithdrawn();
    const withdrawalTx = await releaseGold
      .connect(signer)
      .withdraw(total.sub(withdrawn));
    setTxHash(withdrawalTx.txHash);
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
          <strong>Remaining allocation (vested & unvested): </strong>
        </span>
        <span>{remainingTotalBalance}</span>
      </div>
      <div>
        <span>
          <strong>totalWithdrawn: </strong>
        </span>
        <span>{totalWithdrawn}</span>
      </div>
      <div>
        <span>
          <strong>claimable amount: </strong>
        </span>
        <span>{currentReleasedAmount - totalWithdrawn}</span>
      </div>
      <div>
        <br />
        <button onClick={handleClaim} disabled={!releaseGold}>
          Claim
        </button>
      </div>
      {txHash && <div>{txHash}</div>}
    </div>
  );
};

export default ReleaseGold;
