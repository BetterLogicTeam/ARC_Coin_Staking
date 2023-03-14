// export const tokenStaking = "0x256E1a54e32177Fe026e2e83Ef84E4f9F181269d"; verified on archie chain old one

export const tokenStaking = "0x256E1a54e32177Fe026e2e83Ef84E4f9F181269d";
export const tokenStaking_Abi = [{
	"type": "constructor",
	"inputs": []
}, {
	"type": "function",
	"stateMutability": "view",
	"outputs": [{
		"type": "uint256[]",
		"name": "",
		"internalType": "uint256[]"
	}, {
		"type": "uint256[]",
		"name": "",
		"internalType": "uint256[]"
	}, {
		"type": "uint256[]",
		"name": "",
		"internalType": "uint256[]"
	}],
	"name": "UserInformation",
	"inputs": [{
		"type": "address",
		"name": "_add",
		"internalType": "address"
	}]
}, {
	"type": "function",
	"stateMutability": "view",
	"outputs": [{
		"type": "uint256",
		"name": "DepositeToken",
		"internalType": "uint256"
	}, {
		"type": "uint256",
		"name": "lastUpdated",
		"internalType": "uint256"
	}, {
		"type": "uint256",
		"name": "lockableDays",
		"internalType": "uint256"
	}, {
		"type": "uint256",
		"name": "WithdrawReward",
		"internalType": "uint256"
	}, {
		"type": "uint256",
		"name": "WithdrawAbleReward",
		"internalType": "uint256"
	}, {
		"type": "uint256",
		"name": "depositeTime",
		"internalType": "uint256"
	}, {
		"type": "uint256",
		"name": "WithdrawDepositeAmount",
		"internalType": "uint256"
	}],
	"name": "Users",
	"inputs": [{
		"type": "address",
		"name": "",
		"internalType": "address"
	}]
}, {
	"type": "function",
	"stateMutability": "view",
	"outputs": [{
		"type": "uint256",
		"name": "",
		"internalType": "uint256"
	}],
	"name": "allocation",
	"inputs": [{
		"type": "uint256",
		"name": "",
		"internalType": "uint256"
	}]
}, {
	"type": "function",
	"stateMutability": "nonpayable",
	"outputs": [],
	"name": "changeDeductionPercentage",
	"inputs": [{
		"type": "uint256",
		"name": "amount",
		"internalType": "uint256"
	}]
}, {
	"type": "function",
	"stateMutability": "nonpayable",
	"outputs": [],
	"name": "changeMinimmumAmount",
	"inputs": [{
		"type": "uint256",
		"name": "amount",
		"internalType": "uint256"
	}]
}, {
	"type": "function",
	"stateMutability": "nonpayable",
	"outputs": [],
	"name": "changePercentages",
	"inputs": [{
		"type": "uint256",
		"name": "_30dayspercent",
		"internalType": "uint256"
	}, {
		"type": "uint256",
		"name": "_90dayspercent",
		"internalType": "uint256"
	}, {
		"type": "uint256",
		"name": "_180dayspercent",
		"internalType": "uint256"
	}, {
		"type": "uint256",
		"name": "_360dayspercent",
		"internalType": "uint256"
	}]
}, {
	"type": "function",
	"stateMutability": "nonpayable",
	"outputs": [],
	"name": "changetimeCal",
	"inputs": [{
		"type": "uint256",
		"name": "_time",
		"internalType": "uint256"
	}]
}, {
	"type": "function",
	"stateMutability": "view",
	"outputs": [{
		"type": "uint256",
		"name": "",
		"internalType": "uint256"
	}],
	"name": "depositeToken",
	"inputs": [{
		"type": "address",
		"name": "",
		"internalType": "address"
	}, {
		"type": "uint256",
		"name": "",
		"internalType": "uint256"
	}]
}, {
	"type": "function",
	"stateMutability": "view",
	"outputs": [{
		"type": "uint256",
		"name": "",
		"internalType": "uint256"
	}],
	"name": "depositetime",
	"inputs": [{
		"type": "address",
		"name": "",
		"internalType": "address"
	}, {
		"type": "uint256",
		"name": "",
		"internalType": "uint256"
	}]
}, {
	"type": "function",
	"stateMutability": "nonpayable",
	"outputs": [],
	"name": "emergencyWithdraw",
	"inputs": [{
		"type": "address",
		"name": "_token",
		"internalType": "contract IARC20"
	}, {
		"type": "uint256",
		"name": "_amount",
		"internalType": "uint256"
	}]
}, {
	"type": "function",
	"stateMutability": "nonpayable",
	"outputs": [],
	"name": "emergencyWithdrawARC",
	"inputs": [{
		"type": "uint256",
		"name": "Amount",
		"internalType": "uint256"
	}]
}, {
	"type": "function",
	"stateMutability": "payable",
	"outputs": [],
	"name": "farm",
	"inputs": [{
		"type": "uint256",
		"name": "_lockableDays",
		"internalType": "uint256"
	}]
}, {
	"type": "function",
	"stateMutability": "nonpayable",
	"outputs": [],
	"name": "harvest",
	"inputs": [{
		"type": "uint256[]",
		"name": "_index",
		"internalType": "uint256[]"
	}]
}, {
	"type": "function",
	"stateMutability": "view",
	"outputs": [{
		"type": "uint256",
		"name": "",
		"internalType": "uint256"
	}],
	"name": "lockabledays",
	"inputs": [{
		"type": "address",
		"name": "",
		"internalType": "address"
	}, {
		"type": "uint256",
		"name": "",
		"internalType": "uint256"
	}]
}, {
	"type": "function",
	"stateMutability": "view",
	"outputs": [{
		"type": "address",
		"name": "",
		"internalType": "address"
	}],
	"name": "owner",
	"inputs": []
}, {
	"type": "function",
	"stateMutability": "view",
	"outputs": [{
		"type": "uint256",
		"name": "reward",
		"internalType": "uint256"
	}],
	"name": "pendindRewards",
	"inputs": [{
		"type": "address",
		"name": "_add",
		"internalType": "address"
	}]
}, {
	"type": "function",
	"stateMutability": "nonpayable",
	"outputs": [],
	"name": "transferOwnership",
	"inputs": [{
		"type": "address",
		"name": "newOwner",
		"internalType": "address"
	}]
}, {
	"type": "event",
	"name": "Deposite_",
	"inputs": [{
		"type": "address",
		"name": "to",
		"indexed": true
	}, {
		"type": "address",
		"name": "From",
		"indexed": true
	}, {
		"type": "uint256",
		"name": "amount",
		"indexed": false
	}, {
		"type": "uint256",
		"name": "day",
		"indexed": false
	}, {
		"type": "uint256",
		"name": "time",
		"indexed": false
	}],
	"anonymous": false
}, {
	"type": "event",
	"name": "OwnershipTransferred",
	"inputs": [{
		"type": "address",
		"name": "previousOwner",
		"indexed": true
	}, {
		"type": "address",
		"name": "newOwner",
		"indexed": true
	}],
	"anonymous": false
}, {
	"type": "receive"
}]
export const TokenAddress = "0x208F521710620d417E9f35a37f107e360f4A7c3d"
export const Token_Abi = [{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Approval",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"internalType": "address",
		"name": "from",
		"type": "address"
	}, {
		"indexed": true,
		"internalType": "address",
		"name": "to",
		"type": "address"
	}, {
		"indexed": false,
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "Transfer",
	"type": "event"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "Mint",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "owner",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}],
	"name": "allowance",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "value",
		"type": "uint256"
	}],
	"name": "approve",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "account",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "_value",
		"type": "uint256"
	}],
	"name": "burn",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "decimals",
	"outputs": [{
		"internalType": "uint8",
		"name": "",
		"type": "uint8"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "subtractedValue",
		"type": "uint256"
	}],
	"name": "decreaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "spender",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "addedValue",
		"type": "uint256"
	}],
	"name": "increaseAllowance",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [],
	"name": "name",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "transfer",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "sender",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "recipient",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "amount",
		"type": "uint256"
	}],
	"name": "transferFrom",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}]