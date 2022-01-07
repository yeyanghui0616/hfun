const Mock = require('mockjs')

const Random = Mock.Random

module.exports = () => {
    // 定义json-server数据结构
    let data = { news:[],aaa:['aaaa'] }

    for(let i = 1;i<=10;i++){
        data.news.push({
            id:i,
            title:Random.cword(10,20),
            content:Random.cparagraph(10)
        })
    }
    return data

}