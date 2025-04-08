window.onload = function() {
    let adults = 0; 
    let children = 0; 
    
    
    if (adults < 0) {
    
        adults = 0;
    
    }
    
    if (children < 0) {
    
        children = 0;
    
    }
    
    
    for(let i = 1; i <= adults; i++) {
        console.log("Ticket #" + i); 
    }
    
    
    function calc (adults, children){
        this.adults;
        this.children;
        return (adults * 12) + (children * 5);
    
    }
    
    
        let btn = document.getElementById("btnBuy");
        btn.onclick = function() {
        adults = parseInt(document.getElementById("adults").value);
        children = parseInt(document.getElementById("children").value);
        alert("$" + calc(adults, children));
    }
    
    }