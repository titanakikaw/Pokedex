export const colorFilter = ( style ,type) => {
  

   switch (type) {
      case 'normal':
   
         style.background =  "linear-gradient(90deg, #f3f3f3 0%,  grey 100%)" 
         break;
      case 'fighting':
       
         style.background =  "linear-gradient(90deg, #ed7794 0%, rgb(235, 73, 113) 100%)" 
         break;
      case 'flying':
        
         style.background =  "linear-gradient(90deg, #8da0c7 0%,  rgb(116, 143, 201) 100%)" 
         break;
      case 'poison':
        
         style.background = "linear-gradient(90deg, rgb(165, 132, 204) 0%,   rgb(165, 82, 204) 100%)" 
         break;
      case 'ground':
         
         style.background = "linear-gradient(90deg,#fca781   0%,   rgb(247, 133, 81) 100%)" 
         break;
      case 'rock':
         // rgb(111, 110, 120)
         style.background = "linear-gradient(90deg, #8a8996   0%,    rgb(111, 110, 120)100%)" 
         break;
      case 'bug':
        
         style.background =  "linear-gradient(90deg, #a1d192 0%, rgb(139, 214, 116) 100%)" 

         break;
      case 'ghost':
         // rgb(133, 113, 190);
         style.background =  "linear-gradient(90deg, #9282bf 0%,   rgb(133, 113, 190) 100%)" 
         break;
      case 'steel':
         
         break;
      case 'fire':
         style.background = "linear-gradient(90deg, #fabd84 0% , rgb(255, 167, 86) 98%)"
         break;
      case 'water':
      
         style.background = "linear-gradient(90deg, #95cbfc 0% ,    rgb(88, 171, 246) 98%)"
         break;
      case 'grass':
         style.background =  "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(128,255,202,1) 0%, #82de9b 100%)" 
         break;
      case 'electric':
        
         style.background =  "linear-gradient(90deg, rgb(242, 212, 119) 0%,  rgb(242, 203, 85) 100%)" 

         break;
      case 'psychic':
         // rgb(255, 101, 104)
         style.background = "linear-gradient(90deg,  #fa9698 0% ,  rgb(255, 101, 104) 98%)"
         break;
      case 'ice':
     
         style.background = "linear-gradient(90deg, #a2d6db 0% , rgb(145, 216, 223) 98%)"

         break;
      case 'dragon':
   
         style.background = "linear-gradient(90deg, #a2d6db 0% ,      rgb(115, 131, 185)98%)"
         break;
      case 'dark':
         
         break;
      case 'fairy':
         
         style.background = "linear-gradient(90deg, #edc0d2 0% ,rgb(235, 168, 195) 98%)"
         break;
      case 'unknown':
         
         break;
      case 'shadow':
         
         break;
      default:
         break;
   }
   
   return style
}
