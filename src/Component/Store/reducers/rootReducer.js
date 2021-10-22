
const initState = {
    user: [
        {id: 1, name: "Binh"},
        {id: 2, name: "Binhbong"},
        {id: 3, name: "Binhbong347"}
    ],
    posts: []
}
// state này không phải giống bên REACT, nó là trạng thái của Redux, nơi lưu trữ data của redux
// action là từ phía REACT truyền action lên như thế nào
const rootReduce = (state = initState, action) => {

    switch(action.type) {
        case "DELETE_USER":
      console.log("Action: ", action)

      let user = state.user
        user = user.filter((item) => item.id !== action.payload.id) 
        
      return {
          ...state, user
      }

       default:
        return state
    }
}

export default rootReduce;