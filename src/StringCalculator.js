class StringCalculator{

    add(a=''){
        if(a===''){
            return 0;
        }
      
       let sum =0; 
       if(a.includes('-')){
           return 'negatives not allowed';
       }
        
        const tab=a.split(/[,\n]/);
        for(let i =0; i<tab.length;i++){
            sum+=parseInt(tab[i]);
          
          
        }
    
      return sum;
    }

}

module.exports=StringCalculator;