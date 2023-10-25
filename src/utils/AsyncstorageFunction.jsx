import AsyncStorage from "@react-native-async-storage/async-storage";

async function asyncstorageMultiSet(params){
    try{
        await AsyncStorage.multiSet(params);
        console.log("set data successful...",JSON.stringify(params));
        return true;
    }catch(e){
        console.log("unable to set data...",e,JSON.stringify(params));
        return e;
    }
}
async function asyncstorageMultiGet(params){
    try{
        const res=await AsyncStorage.multiGet(params);
        console.log("get data successful...",JSON.stringify(params));
        return res;
    }catch(e){
        console.log("unable to set data...",e,JSON.stringify(params));
        return e;
    }
}
async function clearAsyncstorageData(keys){
    try{
        await AsyncStorage.multiRemove(keys);
        console.log('keys are cleared...',JSON.stringify(keys))
        return true;
    }catch(e){
        console.log("unable to clear data...",e,JSON.stringify(params));
        return e;
    }
}
export {asyncstorageMultiSet,clearAsyncstorageData,asyncstorageMultiGet};