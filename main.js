function nextslide() {
    
    var images = [ 
    "https://jerrymahoney.files.wordpress.com/2013/06/familybook.png",
    "https://www.pngkit.com/png/detail/90-905424_graphic-library-library-fathers-clipart-boy-dad-dad.png",
    "https://www.pngitem.com/pimgs/m/120-1203252_clip-art-mom-png-for-mother-cartoon-png.png",
    "https://www.clipartmax.com/png/middle/221-2216870_brothers-and-sisters-cartoon.png",
    "https://www.clipartkey.com/mpngs/m/158-1584506_school-boy-cartoon-png.png"
   ];

var names = [
    "Family Book",
    "My Dad",
    "My Mum",
    "My Sister",
    "Me"
   ];
   var i = 0;

     if(i == 5)
       {
         i=0;
         i++;
       }
     document.getElementById("album").src = images[i];
     document.getElementById("names").innerHTML = names;
   }