/**
 * @param key 将未加密后的值存入localStorage
 */
 function setStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

/**
 * @param key 
 * @return 返回未解密的字符串
 */
 function getStorage(key) {
     try {
        const value = sessionStorage.getItem(key);
        if (value === null || value === undefined || value === "") {
            return null;
        }
        return JSON.parse(sessionStorage.getItem(key));
     } catch (err) {
         return null
     }
}

/**
 * @param key 
 * @return 删除未解密的字符串
 */
function removeStorage(key) {
    sessionStorage.removeItem(key);
}


export {
    setStorage,
    getStorage,
    removeStorage
}