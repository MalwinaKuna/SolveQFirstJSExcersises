class Greeter {
    
 
    greet(name,time) {
        name.trim();
        name=name.charAt(0).toUpperCase()+ name.slice(1);
        if(time<=12 && time >=6){
             let  greets = 'Good morning ' + name;
             console.log(greets);
             return greets;
         } else if(time<=22 && time >=18){
            let  greets = 'Good evening ' + name;
            console.log(greets);
            return greets;
         }else if(time<24 && time >=22 || time<6 && time>=0){
             let  greets = 'Good night ' + name;
             console.log(greets);
             return greets;}
            
       
      
    }


}
module.exports = Greeter;