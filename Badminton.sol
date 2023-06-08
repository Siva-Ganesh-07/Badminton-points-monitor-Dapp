// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "./ERC20.sol";

contract Badminton is Jimmy{
    address public owner; //Owner of this contract
    uint public playerscount; //Number of players involving in the game
    uint public points; //Points for the each set
    uint public firstPoint; //First player's point for each set
    uint public secondPoint; //Second player's point for each set
    uint public set; //sets in the game
    uint public firstSetFirstPlayerPoints; //First set first player's  point
    uint public firstSetSecondPlayerPoints; //First set second player's  point
    uint public secondSetFirstPlayerPoints; //Second set first player's  point
    uint public secondSetSecondPlayerPoints; //Second set second player's  point
    uint public thirdSetFirstPlayerPoints; //Third set first player's  point
    uint public thirdSetSecondPlayerPoints; //Third set first player's  point
    uint[] public fir; //Array for storing the points in each set
    uint public firstsetWinner; //Id of First set winner 
    uint public secondsetWinner; //Id of Second set winner
    uint public thirdsetWinner; //Id of Third set winner
    uint public firstwinCount; //Winning count of first plyers in each set
    uint public secondwinCount; //Winning count of second plyers in each set
    int[] public samePointsFirst;
    int[] public samePointsSecond;
    int[] public samePointsThird;
    uint public i;
    uint public j;
    uint public k;
       
    constructor(uint _playerscount) {
        owner = msg.sender; 
        playerscount = _playerscount;
        set = 1;
        samePointsFirst.push(0);
        samePointsSecond.push(0);
        samePointsThird.push(0);
        i = 1;
        j = 1;
        k = 1;
    }

    struct players{
        string name;
        uint id;
        //address payable addr;
    }

    players[] public player;

    modifier onlyOwner{
        require(msg.sender == owner);
        _;
    }

    function addPlayers(string memory _name, uint _id) public onlyOwner{
        require(player.length < playerscount);
        player.push(players(_name, _id));
        
    }

    function firstSet(uint playerId) public onlyOwner {
        require(set == 1);
        require(playerId == 1 || playerId == 2);
        if(set == 1 && points < 6){
            if(playerId == 1){
                firstPoint++;
                firstSetFirstPlayerPoints = firstPoint;
                points++;
            }
            else if(playerId == 2){
                secondPoint++;
                firstSetSecondPlayerPoints = secondPoint;
                points++;
            }
        }
        else if(set == 1 && firstSetFirstPlayerPoints >= 3 && firstSetSecondPlayerPoints >= 3){
            if(playerId == 1){
                samePointsFirst.push(1);
                firstPoint++;
                points++;
                if(samePointsFirst[i-1] == samePointsFirst[i]){
                    firstSetFirstPlayerPoints = 0;
                }
                else{
                    i++;
                }
            }
            else if(playerId == 2){
                samePointsFirst.push(2);
                secondPoint++;
                points++;
                if(samePointsFirst[i-1] == samePointsFirst[i]){
                    firstSetSecondPlayerPoints = 0;
                }
                else{
                    i++;
                }
            }
        }

        else{
            set++;
            fir.push(firstPoint);
            fir.push(secondPoint);
            if(fir[0] > fir[1]){
                firstsetWinner = player[0].id;
                firstwinCount++;
                firstPoint = 0;
                secondPoint = 0;
                points = 0;
            }
            else{
                firstsetWinner = player[1].id;
                secondwinCount++;
                firstPoint = 0;
                secondPoint = 0;
                points = 0;
            }
        }

    }

    function secondSet(uint playerId) public onlyOwner {
        require(set == 2);
        if(set == 2 && points < 6){
            if(playerId == 1 ){
                firstPoint++;
                secondSetFirstPlayerPoints = firstPoint;
                points++;
            }
           else if(playerId == 2){
                secondPoint++;
                secondSetSecondPlayerPoints = secondPoint;
                points++;
            }

        }
        else if(set == 2 && secondSetFirstPlayerPoints >= 3 && secondSetSecondPlayerPoints >= 3){
            if(playerId == 1){
                samePointsSecond.push(1);
                firstPoint++;
                points++;
                if(samePointsSecond[j-1] == samePointsSecond[j]){
                    secondSetFirstPlayerPoints = 0;
                }
                else{
                    j++;
                }
            }
            else if(playerId == 2){
                samePointsSecond.push(2);
                secondPoint++;
                points++;
                if(samePointsSecond[j-1] == samePointsSecond[j]){
                    secondSetSecondPlayerPoints = 0;
                }
                else{
                    j++;
                }
            }
        }

        else{
            set++;
            fir.push(firstPoint);
            fir.push(secondPoint);
            if(fir[2] > fir[3]){
                secondsetWinner = player[0].id;
                firstwinCount++;
                firstPoint = 0;
                secondPoint = 0;
                points = 0;
            }
            else{
                secondsetWinner = player[1].id;
                secondwinCount++;
                firstPoint = 0;
                secondPoint = 0;
                points = 0;
            }
        }

    }

    function thirdSet(uint playerId) public onlyOwner {
        require(set == 3);
        if(set == 3 && points < 6){
            if(playerId == 1){
                firstPoint++;
                thirdSetFirstPlayerPoints = firstPoint;
                points++;
            }
            else if(playerId == 2){
                secondPoint++;
                thirdSetSecondPlayerPoints = secondPoint;
                points++;
            }

        }
        else if(set == 3 && thirdSetFirstPlayerPoints >= 3 && thirdSetSecondPlayerPoints >= 3){
            if(playerId == 1){
                samePointsThird.push(1);
                firstPoint++;
                points++;
                if(samePointsThird[k-1] == samePointsThird[k]){
                    thirdSetFirstPlayerPoints = 0;
                }
                else{
                    k++;
                }
            }
            else if(playerId == 2){
                samePointsThird.push(2);
                secondPoint++;
                points++;
                if(samePointsThird[k-1] == samePointsThird[k]){
                    thirdSetSecondPlayerPoints = 0;
                }
                else{
                    k++;
                }
            }
        }

        else{
            set++;
            fir.push(firstPoint);
            fir.push(secondPoint);
            if(fir[4] > fir[5]){
                thirdsetWinner = player[0].id;
                firstwinCount++;
                firstPoint = 0;
                secondPoint = 0;
                points = 0;
            }
            else{
                thirdsetWinner = player[1].id;
                secondwinCount++;
                firstPoint = 0;
                secondPoint = 0;
                points = 0;
            }
        }

    }

    function overallWinner() public view returns(players memory){
        require(firstwinCount >= 2 || secondwinCount >= 2);
        if(firstwinCount > secondwinCount){
            return player[0];
        }
        else if(secondwinCount > firstwinCount){
            return player[1];
        }
    }

    function transfer(address to, uint tokens) public override virtual returns(bool success){
        require(msg.sender == owner);
        Jimmy.transfer(to, tokens);
        return true;
    }

   
}