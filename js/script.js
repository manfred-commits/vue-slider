// Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

var app = new Vue({

    el: "#root",
    data:{
        images:["https://upload.wikimedia.org/wikipedia/commons/5/58/Sunset_2007-1.jpg", "https://i.redd.it/nwxarpze09o21.jpg","https://images.wallpaperscraft.com/image/single/new_york_night_city_skyline_121546_3840x2160.jpg"],
        imagesIndex:0,
        autoplay:null
    },
    mounted:function(){ 
        this.slideInterval()
    },
    methods: {
        counterUp: function() {

            this.imagesIndex++;

            if(this.imagesIndex >= this.images.length){

                this.imagesIndex= 0;

            } 
        },
        counterDown: function( ){
            this.imagesIndex--;

            if(this.imagesIndex < 0){

                this.imagesIndex= this.images.length-1;

            }
        },
        bulletChange: function(num){
            this.imagesIndex=num;
        },
        slideInterval: function () {

            autoplay = setInterval( ()=> {
                this.imagesIndex++;
                console.log(this.imagesIndex);
                if(this.imagesIndex >= this.images.length){

                    this.imagesIndex= 0;
    
                } 
                console.log(this.imagesIndex);

          }, 3000);
         },
        stopInterval: function() {
            if(this.autoplay != null){
                clearInterval(autoplay);
            }
        }
        
    }      
    


});