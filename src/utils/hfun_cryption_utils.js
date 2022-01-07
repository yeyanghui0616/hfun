/*
 * @Description: 【尚在完善中】基于 Crypto-JS 封装的 JavaScript 加、解密工具类，支持对变量、数组、对象等不同类型数据加密，实现各类数据加解密全局统一管理。了解更多 Crypto-JS 资料：https://www.npmjs.com/package/crypto-js
                支持 AES、DES、Triple-DES（3DES,CBC模式）、IDEA（略）、TDEA（略）、Blowfish、RC2、RC4、RC5、SKIPJACK、RC5、MD5（略）、SHA、BASE64、RSA、HMAC 算法的加解密
                对称加密支持：AES、DES、Triple-DES（3DES,CBC模式）、
                非对称加密支持：

                常见的对称加密算法：DES、3DES、DESX、Blowfish、IDEA、RC4、RC5、RC6 和 AES
                常见的非对称加密算法：RSA、ECC （移动设备用）、Diffie-Hellman、El Gamal、DSA （数字签名用）
                不可逆算法：MD5
                常见的 Hash 算法：MD2、MD4、MD5、HAVAL、SHA、SHA-1、HMAC、HMAC-MD5、HMAC-SHA1
                分组加密算法中，有ECB,CBC,CFB,OFB这几种算法模式

 * @Author: liyongli
 * @Date: 2021-09-23 14:43:09
 * @LastEditTime: 2021-11-16 16:36:14
 */

const CryptoJS = require('crypto-js'); //引用AES源码JS
const key = CryptoJS.enc.Utf8.parse("2021HFUNCRYPTION"); //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('HFUN2021CRYPTION'); //十六位十六进制数作为密钥偏移量

/**
 * @Description: MD5 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} MD5 加密后的字符串
 * @see https://baike.baidu.com/item/MD5
 */
function encryptByMD5(param) {
    return CryptoJS.MD5(this.paramTypeConversion(param)).toString();
}

/**
 * @Description: HmacMD5 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} HmacMD5 加密后的字符串
 * @see https://baike.baidu.com/item/MD5
 */
function encryptByHmacMD5(param) {
    return CryptoJS.HmacMD5(this.paramTypeConversion(param), key).toString();
}

/**
 * @Description: SHA1 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} SHA1 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-1
 */
function encryptBySHA1(param) {
    return CryptoJS.SHA1(this.paramTypeConversion(param)).toString();
}

/**
 * @Description: HmacSHA1 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} HmacSHA1 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-1
 */
function encryptByHmacSHA1(param) {
    return CryptoJS.HmacSHA1(this.paramTypeConversion(param), key).toString();
}

/**
 * @Description: SHA256 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} SHA256 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-256
 */
function encryptBySHA256(param) {
    return CryptoJS.SHA256(this.paramTypeConversion(param)).toString();
}

/**
 * @Description: HmacSHA256 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} HmacSHA256 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-256
 */
function encryptByHmacSHA256(param) {
    return CryptoJS.HmacSHA256(this.paramTypeConversion(param), key).toString();
}

/**
 * @Description: SHA224 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} SHA224 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-256
 */
function encryptBySHA224(param) {
    return CryptoJS.SHA224(this.paramTypeConversion(param)).toString();
}

/**
 * @Description: HmacSHA224 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} HmacSHA224 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-256
 */
function encryptByHmacSHA224(param) {
    return CryptoJS.HmacSHA224(this.paramTypeConversion(param), key).toString();
}

/**
 * @Description: SHA512 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} SHA512 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-256
 */
function encryptBySHA512(param) {
    return CryptoJS.SHA512(this.paramTypeConversion(param)).toString();
}

/**
 * @Description: HmacSHA512 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} HmacSHA512 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-256
 */
function encryptByHmacSHA512(param) {
    return CryptoJS.HmacSHA512(this.paramTypeConversion(param), key).toString();
}

/**
 * @Description: SHA384 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} SHA384 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-256
 */
function encryptBySHA384(param) {
    return CryptoJS.SHA384(this.paramTypeConversion(param)).toString();
}

/**
 * @Description: HmacSHA384 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} HmacSHA384 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-256
 */
function encryptByHmacSHA384(param) {
    return CryptoJS.HmacSHA384(this.paramTypeConversion(param), key).toString();
}

/**
 * @Description: SHA3 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} SHA3 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-256
 */
function encryptBySHA3(param) {
    return CryptoJS.SHA3(this.paramTypeConversion(param)).toString();
}

/**
 * @Description: HmacSHA3 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} HmacSHA3 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-256
 */
function encryptByHmacSHA3(param) {
    return CryptoJS.HmacSHA3(this.paramTypeConversion(param), key).toString();
}

/**
 * @Description: RIPEMD160 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} RIPEMD160 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-256
 */
function encryptByRipemd160(param) {
    return CryptoJS.RIPEMD160(this.paramTypeConversion(param)).toString();
}

/**
 * @Description: HmacRIPEMD160 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} HmacRIPEMD160 加密后的字符串
 * @see https://baike.baidu.com/item/SHA-256
 */
function encryptByHmacRIPEMD160(param) {
    return CryptoJS.HmacRIPEMD160(this.paramTypeConversion(param), key).toString();
}

/**
 * @Description: AES 加密。
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} AES 加密后的字符串
 * @xxx AES 一句话介绍，更多请：http://xxxxx.com
 */
function encryptByAES(param) {
    let srcs = CryptoJS.enc.Utf8.parse(param);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString();
}

/**
 * @Description: AES 解密
 * @Author: liyongli
 * @param {*} param 待解密数据
 * @return {*} AES 解密后的字符串
 */
function decryptByAES(param) {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(param);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}

/**
 * @Description: DES 加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} DES 加密后的字符串
 */
function encryptByDES(param){
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(param, keyHex, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString();
}

/**
 * @Description: DES 解密
 * @Author: liyongli
 * @param {*} param 待解密数据
 * @return {*} DES 解密后的字符串
 */
function decryptByDES(param){
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({ ciphertext: CryptoJS.enc.Hex.parse(param) }, keyHex, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    var result_value = decrypted.toString(CryptoJS.enc.Utf8);
    return result_value;
}

/**
 * @Description: Triple-DES（3DES,CBC模式）加密
 * @Author: liyongli
 * @param {*} param 待加密数据
 * @return {*} Triple-DES（3DES,CBC模式）加密后的字符串
 */
function encryptByTripleDES(param) {
    let srcs = CryptoJS.enc.Utf8.parse(param);
    let encrypted = CryptoJS.TripleDES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

/**
 * @Description: Triple-DES（3DES,CBC模式）解密
 * @Author: liyongli
 * @param {*} param 待解密数据
 * @return {*} Triple-DES（3DES,CBC模式）解密后的字符串
 */
function decryptByTripleDES(param) {
    let base64 = CryptoJS.enc.Base64.parse(param);
    let src = CryptoJS.enc.Base64.stringify(base64);
    let decrypt = CryptoJS.TripleDES.decrypt(src, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}

/**
 * @Description: 参数类型转换
 * @Author: liyongli
 * @param {*} param 待转换的参数，若参数为基本数据类型则统一转为String；若类型为数据或对象，则转为JSON字符串后继续加解、密处理；若类型为布尔值则直接返回
 * @return {*}
 */
function paramTypeConversion(param){
    if(Object.prototype.toString.call(param) == "[object Number]"){
        // 参数合法性检查
        return String(param);
    }else if(Object.prototype.toString.call(param) == "[object Object]" || Object.prototype.toString.call(param) == "[object Array]"){
        // 将对象和数组转为JSON
        return JSON.stringify(param);
    }else if(Object.prototype.toString.call(param) == "[object Boolean]"){
        // 直接返回
        return param;
    }else{
        // 将基础类型转为String
        return String(param);
    }
}

export default {
    encryptByMD5,
    encryptBySHA1,
    encryptBySHA256,
    encryptBySHA224,
    encryptBySHA512,
    encryptBySHA384,
    encryptBySHA3,
    encryptByRipemd160,
    encryptByHmacMD5,
    encryptByHmacSHA1,
    encryptByHmacSHA256,
    encryptByHmacSHA224,
    encryptByHmacSHA512,
    encryptByHmacSHA384,
    encryptByHmacSHA3,
    encryptByHmacRIPEMD160,

    encryptByAES,
    decryptByAES,
    encryptByDES,
    decryptByDES,
    encryptByTripleDES,
    decryptByTripleDES,
    paramTypeConversion
}