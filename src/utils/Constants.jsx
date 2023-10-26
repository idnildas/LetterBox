
import DeviceInfo from 'react-native-device-info';
const live="";
const local="";
const appEnv=false;
export default{
    BASEURL:appEnv ? `${live}api/` : `${local}`,
    APP_NAME:"Letter Box",
    ERROR_MESSAGE:"Unable to connect to server, Please try again later.",
    NETWORK_ERROR_MESSAGE:"Network Error",
    BUILD_NO:DeviceInfo.getBuildNumber(),
    VERSION_CODE:DeviceInfo.getVersion(),
}