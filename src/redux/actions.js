export const LOADDATAS = 'LOADDATAS'

export const setDatas = () => {
    return (dispatch , getState) => {
        fetch('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9')
        .then((response) => {
          return response.json();
        })
        .catch((error) => console.warn("fetch error:-------", error))
        .then(function (data) {
            console.log('setDatas')
            dispatch({
                type: LOADDATAS,
                payload: data,
            })
        })
    }
}