class Task{
  isItHot(temp, hourOfTheDay){
      if(temp>25 && hourOfTheDay>15){
          return true;
      } return false;
  }  

  isPrime(number){
      if(number<2){
          return false;
      }

      for(let i=2;i< number/2; i++ ){
          if(number%i===0){return false;}
      } return true;
  }

  add(number){

      if(number===''){
          return 0;
      }else if(number==='-'){
          return 'negatives not allowed';
      }

      let sum=0;
      const tab=number.split(/[,\n]/);

      for(let i=0; i<tab.length;i++){
         // sum+= tab[i];
         sum+=parseInt(tab[i]);
      }
      return sum;


  }

}
module.exports=Task;