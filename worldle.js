function appStart( {
    const handleKeydown = (event) =>{

        if(index ===5) return;
        console.log("키가입력",event.key);

        const key = event.key.toUpperCase();
        const keyCode = event.keyCode;
        const thisBLock = document.querySelector(
            `.board-column[data-index=`${attempts}${index}`]`
        );

        if (65<= keyCode && keyCode<= 90){
            thisBlock.innerText = key;
            index +=1;
        }
    };

    window.appEventListerner("Keydown",handleKeydown);
})

appStart()