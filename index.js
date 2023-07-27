 //Connect MetaMask
 let account;
 const connectMetamask = async() => {
     if(window.ethereum !== "undefined") {
         const accounts = await ethereum.request({method: "eth_requestAccounts"});
         account = accounts[0];
         document.getElementById("metaArea").innerHTML = account;
     }
 }

 //Connect Contract
 const connectContract = async() => {
     const ABI = [
         {
             "inputs": [
                 {
                     "internalType": "string",
                     "name": "_name",
                     "type": "string"
                 },
                 {
                     "internalType": "uint256",
                     "name": "_id",
                     "type": "uint256"
                 }
             ],
             "name": "addPlayers",
             "outputs": [],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "uint256",
                     "name": "_playerscount",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "nonpayable",
             "type": "constructor"
         },
         {
             "anonymous": false,
             "inputs": [
                 {
                     "indexed": true,
                     "internalType": "address",
                     "name": "tokenOwner",
                     "type": "address"
                 },
                 {
                     "indexed": true,
                     "internalType": "address",
                     "name": "spender",
                     "type": "address"
                 },
                 {
                     "indexed": false,
                     "internalType": "uint256",
                     "name": "tokens",
                     "type": "uint256"
                 }
             ],
             "name": "Approval",
             "type": "event"
         },
         {
             "inputs": [
                 {
                     "internalType": "address",
                     "name": "spender",
                     "type": "address"
                 },
                 {
                     "internalType": "uint256",
                     "name": "tokens",
                     "type": "uint256"
                 }
             ],
             "name": "approve",
             "outputs": [
                 {
                     "internalType": "bool",
                     "name": "success",
                     "type": "bool"
                 }
             ],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "uint256",
                     "name": "playerId",
                     "type": "uint256"
                 }
             ],
             "name": "firstSet",
             "outputs": [],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "uint256",
                     "name": "playerId",
                     "type": "uint256"
                 }
             ],
             "name": "secondSet",
             "outputs": [],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "uint256",
                     "name": "playerId",
                     "type": "uint256"
                 }
             ],
             "name": "thirdSet",
             "outputs": [],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "address",
                     "name": "to",
                     "type": "address"
                 },
                 {
                     "internalType": "uint256",
                     "name": "tokens",
                     "type": "uint256"
                 }
             ],
             "name": "transfer",
             "outputs": [
                 {
                     "internalType": "bool",
                     "name": "success",
                     "type": "bool"
                 }
             ],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "anonymous": false,
             "inputs": [
                 {
                     "indexed": true,
                     "internalType": "address",
                     "name": "from",
                     "type": "address"
                 },
                 {
                     "indexed": true,
                     "internalType": "address",
                     "name": "to",
                     "type": "address"
                 },
                 {
                     "indexed": false,
                     "internalType": "uint256",
                     "name": "tokens",
                     "type": "uint256"
                 }
             ],
             "name": "Transfer",
             "type": "event"
         },
         {
             "inputs": [
                 {
                     "internalType": "address",
                     "name": "from",
                     "type": "address"
                 },
                 {
                     "internalType": "address",
                     "name": "to",
                     "type": "address"
                 },
                 {
                     "internalType": "uint256",
                     "name": "tokens",
                     "type": "uint256"
                 }
             ],
             "name": "transferFrom",
             "outputs": [
                 {
                     "internalType": "bool",
                     "name": "success",
                     "type": "bool"
                 }
             ],
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "address",
                     "name": "tokenOwner",
                     "type": "address"
                 },
                 {
                     "internalType": "address",
                     "name": "spender",
                     "type": "address"
                 }
             ],
             "name": "allowance",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "remaining",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "address",
                     "name": "tokenOwner",
                     "type": "address"
                 }
             ],
             "name": "balanceof",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "decimmal",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "name": "fir",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "firstPoint",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "firstSetFirstPlayerPoints",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "firstSetSecondPlayerPoints",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "firstsetWinner",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "firstwinCount",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "i",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "j",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "k",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "name",
             "outputs": [
                 {
                     "internalType": "string",
                     "name": "",
                     "type": "string"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "overallWinner",
             "outputs": [
                 {
                     "components": [
                         {
                             "internalType": "string",
                             "name": "name",
                             "type": "string"
                         },
                         {
                             "internalType": "uint256",
                             "name": "id",
                             "type": "uint256"
                         }
                     ],
                     "internalType": "struct Badminton.players",
                     "name": "",
                     "type": "tuple"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "owner",
             "outputs": [
                 {
                     "internalType": "address",
                     "name": "",
                     "type": "address"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "name": "player",
             "outputs": [
                 {
                     "internalType": "string",
                     "name": "name",
                     "type": "string"
                 },
                 {
                     "internalType": "uint256",
                     "name": "id",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "playerscount",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "points",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "name": "samePointsFirst",
             "outputs": [
                 {
                     "internalType": "int256",
                     "name": "",
                     "type": "int256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "name": "samePointsSecond",
             "outputs": [
                 {
                     "internalType": "int256",
                     "name": "",
                     "type": "int256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "name": "samePointsThird",
             "outputs": [
                 {
                     "internalType": "int256",
                     "name": "",
                     "type": "int256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "secondPoint",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "secondSetFirstPlayerPoints",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "secondSetSecondPlayerPoints",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "secondsetWinner",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "secondwinCount",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "set",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "symbol",
             "outputs": [
                 {
                     "internalType": "string",
                     "name": "",
                     "type": "string"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "thirdSetFirstPlayerPoints",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "thirdSetSecondPlayerPoints",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "thirdsetWinner",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         },
         {
             "inputs": [],
             "name": "totalSuppIy",
             "outputs": [
                 {
                     "internalType": "uint256",
                     "name": "",
                     "type": "uint256"
                 }
             ],
             "stateMutability": "view",
             "type": "function"
         }
     ];
     const Address = "0x27D47077DC71F8104b17d176cC791Adbf6f50495";
     window.web3 = await new Web3(window.ethereum);
     window.contract = await new window.web3.eth.Contract(ABI, Address);
     document.getElementById("contractArea").innerHTML = "Contract Connected Successfully";
 }

 //Display Owner
 const Owner = async() => {
     data = await window.contract.methods.owner().call();
     document.getElementById("ownerArea").innerHTML = data;
 }

 //Players count
 const count = async() => {
     data = await window.contract.methods.playerscount().call();
     document.getElementById("playerID").innerHTML = data;
 }

 //Enter players details
 const addPlayer = async() => {
     name = document.getElementById("name").value;
     id = document.getElementById("id").value;
     await window.contract.methods.addPlayers(name, id).send({from: account});
 }

 //Display Player details
 const display = async() => {
     id = document.getElementById("num").value;
     data = await window.contract.methods.player(id).call();
     document.getElementById("arrayValue").innerHTML = JSON.stringify(data, null, 2);
 }
