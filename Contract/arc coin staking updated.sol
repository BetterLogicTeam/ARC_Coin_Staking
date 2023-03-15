// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;
interface IARC20 {
    function transfer(address to, uint256 value) external returns (bool);

    function approve(address spender, uint256 value) external returns (bool);

    function transferFrom(address from, address to, uint256 value) external returns (bool);

    function totalSupply() external view returns (uint256);

    function balanceOf(address who) external view returns (uint256);

    function allowance(address owner, address spender) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(address indexed owner, address indexed spender, uint256 value);
}

library SafeMath {
    /**

    * @dev Multiplies two unsigned integers, reverts on overflow.

    */

    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the

        // benefit is lost if 'b' is also tested.

        // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522

        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;

        require(c / a == b);

        return c;
    }

    /**

    * @dev Integer division of two unsigned integers truncating the quotient, reverts on division by zero.

    */

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // Solidity only automatically asserts when dividing by 0

        require(b > 0);

        uint256 c = a / b;

        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**

    * @dev Subtracts two unsigned integers, reverts on overflow (i.e. if subtrahend is greater than minuend).

    */

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a);

        uint256 c = a - b;

        return c;
    }

    /**

    * @dev Adds two unsigned integers, reverts on overflow.

    */

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;

        require(c >= a);

        return c;
    }

    /**

    * @dev Divides two unsigned integers and returns the remainder (unsigned integer modulo),

    * reverts when dividing by zero.

    */

    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b != 0);

        return a % b;
    }
}

contract Ownable   {
    address private _owner;

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    /**

     * @dev Initializes the contract setting the deployer as the initial owner.

     */

    constructor()  {
        _owner = msg.sender;

        emit OwnershipTransferred(address(0), _owner);
    }

    /**

     * @dev Returns the address of the current owner.

     */

    function owner() public view returns (address) {
        return _owner;
    }

    /**

     * @dev Throws if called by any account other than the owner.

     */

    modifier onlyOwner() {
        require(_owner == msg.sender, "Ownable: caller is not the owner");

        _;
    }

    /**

     * @dev Transfers ownership of the contract to a new account (`newOwner`).

     * Can only be called by the current owner.

     */

    function transferOwnership(address newOwner) public onlyOwner {
        require(
            newOwner != address(0),
            "Ownable: new owner is the zero address"
        );

        emit OwnershipTransferred(_owner, newOwner);

        _owner = newOwner;
    }
}


contract Staking is Ownable{
    using SafeMath for uint256;

    struct userInfo {
        uint256 DepositeToken;
        uint256 lastUpdated;
        uint256 lockableDays;
        uint256 WithdrawReward;
        uint256 WithdrawAbleReward;
        uint256 depositeTime;
        uint256 WithdrawDepositeAmount;
    }
    
     event Deposite_(address indexed to,address indexed From, uint256 amount, uint256 day,uint256 time);

    
    mapping(uint256 => uint256) public allocation;
    mapping(address => uint256[] ) public depositeToken;
    mapping(address => uint256[] ) public lockabledays;
    mapping(address => uint256[] ) public depositetime;   
    mapping(address =>  userInfo) public Users;
    uint256 minimumDeposit = 10000000000000000; //0.01 arc
    uint256 deductionPercentage=10000000000000000000; // 10%
    
    uint256  time = 1 minutes;

    constructor()   {
        allocation[30]=1500000000000000000;  //1.5 %
        allocation[90] = 6000000000000000000;  //6%
        allocation[180] = 15000000000000000000; //15 %
        allocation[360] = 36000000000000000000; //36 %
        
    }

    receive() external payable{
//  receive the arc
} 

    function farm(uint256 _lockableDays) public payable 
    {
        uint256 arcamt=msg.value;
        require(arcamt >= minimumDeposit, "Invalid amount");
        require(allocation[_lockableDays] > 0, "Invalid day selection");
        depositeToken[msg.sender].push(msg.value);
        depositetime[msg.sender].push(uint40(block.timestamp));
        Users[msg.sender].DepositeToken += arcamt;
        lockabledays[msg.sender].push(_lockableDays);
        emit Deposite_(msg.sender,address(this),arcamt,_lockableDays,block.timestamp);
    }
    



        function pendindRewards(address _add) public view returns(uint256 reward)
    {
        uint256 Reward;
        for(uint256 z=0 ; z< depositeToken[_add].length;z++){
        uint256 lockTime = depositetime[_add][z]+(lockabledays[_add][z]*time);
        if(block.timestamp > lockTime ){
        reward = ((allocation[lockabledays[_add][z]].mul(depositeToken[_add][z]).div(100))).div(1e18);
        Reward += reward;
        }
    }
    return Reward;
    }

  
    
    
    function harvest(uint256 [] memory _index) public 
    {
          for(uint256 z=0 ; z< _index.length;z++){
              
        require( Users[msg.sender].DepositeToken > 0, " Deposite not ");
        
        uint256 lockTime =depositetime[msg.sender][_index[z]]+(lockabledays[msg.sender][_index[z]].mul(time));
        if(block.timestamp > lockTime ){
        uint256 reward = ((allocation[lockabledays[msg.sender][_index[z]]].mul(depositeToken[msg.sender][_index[z]]).div(100))).div(1e18);
        
        Users[msg.sender].WithdrawAbleReward += reward;
        Users[msg.sender].DepositeToken -= depositeToken[msg.sender][_index[z]];
        Users[msg.sender].WithdrawDepositeAmount += depositeToken[msg.sender][_index[z]];
        depositeToken[msg.sender][_index[z]] = 0;
        lockabledays[msg.sender][_index[z]] = 0;
        depositetime[msg.sender][_index[z]] = 0;
    } 
    else{ 
        Users[msg.sender].DepositeToken -= depositeToken[msg.sender][_index[z]];
        uint256 a =(((depositeToken[msg.sender][_index[z]]).mul(deductionPercentage)).div(100)).div(1e18);
        uint256 b =depositeToken[msg.sender][_index[z]]-a;
        Users[msg.sender].WithdrawDepositeAmount += b;
        depositeToken[msg.sender][_index[z]] = 0;
        lockabledays[msg.sender][_index[z]] = 0;
        depositetime[msg.sender][_index[z]] = 0;

    }
    }
            for(uint256 t=0 ; t< _index.length;t++){
            for(uint256 i = _index[t]; i <  depositeToken[msg.sender].length - 1; i++) 
        {
            depositeToken[msg.sender][i] = depositeToken[msg.sender][i + 1];
            lockabledays[msg.sender][i] = lockabledays[msg.sender][i + 1];
            depositetime[msg.sender][i] = depositetime[msg.sender][i + 1];
        }
          depositeToken[msg.sender].pop();
          lockabledays[msg.sender].pop();
          depositetime[msg.sender].pop();
    }
             uint256 totalwithdrawAmount;
             
             totalwithdrawAmount = Users[msg.sender].WithdrawDepositeAmount.add(Users[msg.sender].WithdrawAbleReward);
             payable(msg.sender).transfer(totalwithdrawAmount) ;
             Users[msg.sender].WithdrawReward =Users[msg.sender].WithdrawReward.add(Users[msg.sender].WithdrawAbleReward );
             Users[msg.sender].WithdrawAbleReward =0;
             Users[msg.sender].WithdrawDepositeAmount = 0;
         
    }
    function changeDeductionPercentage(uint256 amount) public onlyOwner{
        deductionPercentage =amount;
    }
    
    function UserInformation(address _add) public view returns(uint256 [] memory , uint256 [] memory,uint256 [] memory){
        return(depositeToken[_add],lockabledays[_add],depositetime[_add]);
    }
 
 
    function emergencyWithdraw(IARC20 _token ,uint256 _amount) external onlyOwner {
         _token.transfer(msg.sender, _amount);
    }
    function emergencyWithdrawARC(uint256 Amount) external onlyOwner {
        payable(msg.sender).transfer(Amount);
    }

    function changetimeCal(uint256 _time) external onlyOwner{
        time=_time;
    }
    function changeMinimmumAmount(uint256 amount) external onlyOwner{
        minimumDeposit=amount;
    }
    function changePercentages(uint256 _30dayspercent,uint256 _90dayspercent,uint256 _180dayspercent,uint256 _360dayspercent) external onlyOwner{
        allocation[30]=_30dayspercent;
        allocation[90] = _90dayspercent;
        allocation[180] = _180dayspercent;
        allocation[360] = _360dayspercent;
    }
    

    
}