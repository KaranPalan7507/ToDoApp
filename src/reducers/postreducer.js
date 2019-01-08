const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return state.concat([action.data]);
        case 'TOGGLE_COMPLETED':
        return state.map((entries)=>{
            if(entries.key === action.key) {
              return {
                 ...entries,
                 completed: !entries.completed
              }
            } else return entries;
          })
        default:
            return state;
    }
}
export default postReducer;