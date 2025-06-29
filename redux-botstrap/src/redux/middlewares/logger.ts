const logger = (state : any) =>(next : any) => (action : any) => {
    console.group(action.type)
    console.info("previous state",state.getState());
    console.log('ACTION HERE',action)
   const result =  next(action)
    console.info("NEXT STATE",state.getState());
    console.groupEnd();
    return result;

};
export default logger;