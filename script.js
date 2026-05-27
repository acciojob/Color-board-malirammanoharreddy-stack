//your JS code here. If required.
 const container = document.querySelector(".container"); 
        const total = 800 ;
        for(let i = 0 ; i<800;i++){
            const box = document.createElement("div");
            box.className = "box";
            box.addEventListener("mouseover",function(){
                box.style.backgroundColor = getcolour();
            });
            box.addEventListener("mouseleave",function(){
                setTimeout(() => {
                    box.style.backgroundColor="gray";
                },1000);
            })
            container.appendChild(box);
        }
        function getcolour(){
            const colour = 
            "#"+
            Math.floor(Math.random()*256*256*256)
            .toString(16)
            .padStart(6,"0");
            return colour
        }