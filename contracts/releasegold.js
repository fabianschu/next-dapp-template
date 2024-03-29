export default {
  address: "0x67E75B60edd1037CF556b2d04871481E4FA00E4C",
  abi: [
    {
      constant: true,
      inputs: [],
      name: "maxDistribution",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "refundAddress",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "initialized",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "canVote",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "beneficiary",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "EXPIRATION_TIME",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalWithdrawn",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "registry",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "releaseOwner",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isOwner",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "revocationInfo",
      outputs: [
        {
          name: "revocable",
          type: "bool",
        },
        {
          name: "canExpire",
          type: "bool",
        },
        {
          name: "releasedBalanceAtRevoke",
          type: "uint256",
        },
        {
          name: "revokeTime",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "registryAddress",
          type: "address",
        },
      ],
      name: "setRegistry",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "liquidityProvisionMet",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "canValidate",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "releaseSchedule",
      outputs: [
        {
          name: "releaseStartTime",
          type: "uint256",
        },
        {
          name: "releaseCliff",
          type: "uint256",
        },
        {
          name: "numReleasePeriods",
          type: "uint256",
        },
        {
          name: "releasePeriod",
          type: "uint256",
        },
        {
          name: "amountReleasedPerPeriod",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      payable: true,
      stateMutability: "payable",
      type: "fallback",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "beneficiary",
          type: "address",
        },
        {
          indexed: true,
          name: "atAddress",
          type: "address",
        },
      ],
      name: "ReleaseGoldInstanceCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "revokeTimestamp",
          type: "uint256",
        },
        {
          indexed: false,
          name: "releasedBalanceAtRevoke",
          type: "uint256",
        },
      ],
      name: "ReleaseScheduleRevoked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "beneficiary",
          type: "address",
        },
        {
          indexed: true,
          name: "atAddress",
          type: "address",
        },
      ],
      name: "ReleaseGoldInstanceDestroyed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "beneficiary",
          type: "address",
        },
        {
          indexed: false,
          name: "maxDistribution",
          type: "uint256",
        },
      ],
      name: "DistributionLimitSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "beneficiary",
          type: "address",
        },
      ],
      name: "LiquidityProvisionSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: "canExpire",
          type: "bool",
        },
      ],
      name: "CanExpireSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "beneficiary",
          type: "address",
        },
      ],
      name: "BeneficiarySet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "registryAddress",
          type: "address",
        },
      ],
      name: "RegistrySet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      constant: false,
      inputs: [
        {
          name: "to",
          type: "address",
        },
        {
          name: "value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "releaseStartTime",
          type: "uint256",
        },
        {
          name: "releaseCliffTime",
          type: "uint256",
        },
        {
          name: "numReleasePeriods",
          type: "uint256",
        },
        {
          name: "releasePeriod",
          type: "uint256",
        },
        {
          name: "amountReleasedPerPeriod",
          type: "uint256",
        },
        {
          name: "revocable",
          type: "bool",
        },
        {
          name: "_beneficiary",
          type: "address",
        },
        {
          name: "_releaseOwner",
          type: "address",
        },
        {
          name: "_refundAddress",
          type: "address",
        },
        {
          name: "subjectToLiquidityProvision",
          type: "bool",
        },
        {
          name: "initialDistributionRatio",
          type: "uint256",
        },
        {
          name: "_canValidate",
          type: "bool",
        },
        {
          name: "_canVote",
          type: "bool",
        },
        {
          name: "registryAddress",
          type: "address",
        },
      ],
      name: "initialize",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isRevoked",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "setLiquidityProvision",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_canExpire",
          type: "bool",
        },
      ],
      name: "setCanExpire",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "distributionRatio",
          type: "uint256",
        },
      ],
      name: "setMaxDistribution",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "newBeneficiary",
          type: "address",
        },
      ],
      name: "setBeneficiary",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "amount",
          type: "uint256",
        },
      ],
      name: "withdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "refundAndFinalize",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "revoke",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "expire",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getTotalBalance",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getRemainingTotalBalance",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getRemainingUnlockedBalance",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getRemainingLockedBalance",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getCurrentReleasedTotalAmount",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "value",
          type: "uint256",
        },
      ],
      name: "lockGold",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "value",
          type: "uint256",
        },
      ],
      name: "unlockGold",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "index",
          type: "uint256",
        },
        {
          name: "value",
          type: "uint256",
        },
      ],
      name: "relockGold",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "index",
          type: "uint256",
        },
      ],
      name: "withdrawLockedGold",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "signer",
          type: "address",
        },
        {
          name: "v",
          type: "uint8",
        },
        {
          name: "r",
          type: "bytes32",
        },
        {
          name: "s",
          type: "bytes32",
        },
      ],
      name: "authorizeVoteSigner",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "signer",
          type: "address",
        },
        {
          name: "v",
          type: "uint8",
        },
        {
          name: "r",
          type: "bytes32",
        },
        {
          name: "s",
          type: "bytes32",
        },
      ],
      name: "authorizeValidatorSigner",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "signer",
          type: "address",
        },
        {
          name: "v",
          type: "uint8",
        },
        {
          name: "r",
          type: "bytes32",
        },
        {
          name: "s",
          type: "bytes32",
        },
        {
          name: "ecdsaPublicKey",
          type: "bytes",
        },
      ],
      name: "authorizeValidatorSignerWithPublicKey",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "signer",
          type: "address",
        },
        {
          name: "v",
          type: "uint8",
        },
        {
          name: "r",
          type: "bytes32",
        },
        {
          name: "s",
          type: "bytes32",
        },
        {
          name: "ecdsaPublicKey",
          type: "bytes",
        },
        {
          name: "blsPublicKey",
          type: "bytes",
        },
        {
          name: "blsPop",
          type: "bytes",
        },
      ],
      name: "authorizeValidatorSignerWithKeys",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "signer",
          type: "address",
        },
        {
          name: "v",
          type: "uint8",
        },
        {
          name: "r",
          type: "bytes32",
        },
        {
          name: "s",
          type: "bytes32",
        },
      ],
      name: "authorizeAttestationSigner",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "dataEncryptionKey",
          type: "bytes",
        },
        {
          name: "walletAddress",
          type: "address",
        },
        {
          name: "v",
          type: "uint8",
        },
        {
          name: "r",
          type: "bytes32",
        },
        {
          name: "s",
          type: "bytes32",
        },
      ],
      name: "setAccount",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "createAccount",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "name",
          type: "string",
        },
      ],
      name: "setAccountName",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "walletAddress",
          type: "address",
        },
        {
          name: "v",
          type: "uint8",
        },
        {
          name: "r",
          type: "bytes32",
        },
        {
          name: "s",
          type: "bytes32",
        },
      ],
      name: "setAccountWalletAddress",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "dataEncryptionKey",
          type: "bytes",
        },
      ],
      name: "setAccountDataEncryptionKey",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "metadataURL",
          type: "string",
        },
      ],
      name: "setAccountMetadataURL",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "group",
          type: "address",
        },
        {
          name: "value",
          type: "uint256",
        },
        {
          name: "lesser",
          type: "address",
        },
        {
          name: "greater",
          type: "address",
        },
        {
          name: "index",
          type: "uint256",
        },
      ],
      name: "revokeActive",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "group",
          type: "address",
        },
        {
          name: "value",
          type: "uint256",
        },
        {
          name: "lesser",
          type: "address",
        },
        {
          name: "greater",
          type: "address",
        },
        {
          name: "index",
          type: "uint256",
        },
      ],
      name: "revokePending",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};
