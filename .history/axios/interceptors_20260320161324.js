//! Requisição

axios.interceptors.request.use(
    function(config){
        console.log("Antes da requisição...")
    }
)