

const UnsplashData = {
    datas: [],
}

function UnsplashReduser(store = UnsplashData, action){
    let res
    switch (action.type) {
        case 'LOADDATAS':{
            const { payload } = action
            const { datas } = store
            //console.log('Reduser -------' + payload)
            res = { 
                //...store,
                datas: [...payload]
            }
        }
            break;
    
        default:
            res = store
            break
    }
    return res;
}
export default UnsplashReduser;