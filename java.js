function x(){
    for(var i=1;i<=5;i++){
        function xyz(x){
            setTimeout(function (){
                console.log(x);
            },x*1000);
        }
        xyz(i);
    }
    console.log("nANA");
}
x();