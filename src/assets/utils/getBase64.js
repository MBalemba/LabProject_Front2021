
 export const getBase64 = (e,dispatch, action) => {
        // console.log(Array.from(e.target.files));

        let arrFiles = Array.from(e.target.files);
        let arrBase64 = [];
        arrFiles.forEach(el => {
            const reader = new FileReader();
            let k = 1;
            reader.onload = ev => {
                debugger
                dispatch(action([{tag:'img', src:  ev.currentTarget.result}]));
            }
            reader.readAsDataURL(el);
            return k;
        })


 }

