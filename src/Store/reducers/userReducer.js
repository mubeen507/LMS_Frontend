const initialState = {
state:[],
name: '',
me:'',
order:'',
isLoggedIn: false,
};


const userReducer =(state=initialState,action)=>{
    switch(action.type){
        case "LOGIN_INFO":
            return {
                ...state,
                name: `${action.payload.data.firstname} ${action.payload.data.lastname}`
              }
             case "ME":
                 return{
                     ...state,
                     me: action.payload.data
                 } 
             case "ORDER":
                 return{
                     ...state,
                     order:action.payload
                 }   
                 case 'setIsLoggedIn': 
                 return {
                     ...state,
                     isLoggedIn: action.payload
                 } 
       
            default:
                return state;
    }
}
export default userReducer;