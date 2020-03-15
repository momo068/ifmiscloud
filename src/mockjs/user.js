import Mock from 'mockjs'
import * as mUtils from '@/utils/mUtils'


let List = []
const count = 1000
let typelist = ['联通', '移动', '电信', '铁通']

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: Mock.Random.guid(),
        sortnum: i + 1,
        username: Mock.Random.cname(),
        address: Mock.mock('@county(true)'),
        createTime: Mock.Random.datetime(),
        updateTime: Mock.Random.now(),
        ip:Mock.mock('@ip'),
        region:Mock.mock('@region'),
        areaId:/\d{7}/,
        email: Mock.Random.email(),
        'isp|1': typelist
    }))
}

export default {
    // 用户登录
    login: config => {
        let data = JSON.parse(config.body);
        let userList = {};
        if(data.username === 'admin'){
            userList = {
                token:'admin',
                name:'管理员',
            }
        }else if(data.username === 'editor'){
            userList = {
                token:'editor',
                name:'龙池',
            }
        }else{
            return {
                code: -1,
                data: {
                    msg: "用户名错误",
                    status:'fail'
                }
            }
        }
        return {
            code: 200,
            data: {
                userList: userList
            }
        }
    },
    // 用户登出
    logout: config => {
        return {
            code: 200,
            data: {
                userList: ""
            }
        }
    },
    // 获取登录用户信息
    getUserInfo:config => {
        let data = JSON.parse(config.body);
        let userList = {};
        if(data.token === 'admin'){
            userList = {
                roles: ['admin'],
                name:'admin',
                avatar:'https://wx.qlogo.cn/mmopen/vi_32/un2HbJJc6eiaviaibvMgiasFNlVDlNOb9E6WCpCrsO4wMMhHIbsvTkAbIehLwROVFlu8dLMcg00t3ZtOcgCCdcxlZA/132'
            }
        }else if(data.token === 'editor'){
            userList = {
                roles: ['editor'],
                name:'editor',
                avatar:'https://mirror-gold-cdn.xitu.io/168e088859e325b9d85?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
            }
        }else{
            userList = {}
        }
        return {
            code: 200,
            data: {
                userList: userList
            }
        }
    },
    /**
     * 获取用户列表
     * 要带参数 name, page, limt; name可以不填, page,limit有默认值。
     * @param name, page, limit
     * @return {{code: number, count: number, data: *[]}}
     */
    getUserList:config => {
        const { limit , page } = JSON.parse(config.body);
        let mockList = List;
        const userList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
        return {
            code: 200,
            data: {
                total: mockList.length,
                userList: userList
            }
        }
    },
    getButtonsData:config => {
        let buttonData={
            "data": {
                "title": null,
                "background": true,
                "querybanner": true,
                "buttons": [
                    {
                        "param": null,
                        "ordernum": 1,
                        "classname": "addicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "C1A0F4C9C7ABA3FB9DDAB03B92AC13CC",
                        "title": "新增",
                        "name": "新增",
                        "type":"info",
                        "action": "iperformajust.add",
                        "config": null,
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": false
                    },
                    {
                        "param": null,
                        "ordernum": 2,
                        "classname": "finishicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "89DD9862BAFAE2F9C01A47692E99FCA1",
                        "title": "保存",
                        "name": "保存",
                        "type":"info",
                        "action": "iperformajust.save",
                        "config": null,
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": false
                    },
                    {
                        "param": null,
                        "ordernum": 3,
                        "classname": "nofinishicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "C6C133768D2A7A1EEAE45B1A56D89CBC",
                        "title": "删除",
                        "name": "删除",
                        "type":"text",
                        "action": "iperformajust.delete",
                        "config": null,
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": false
                    },
                    {
                        "param": null,
                        "ordernum": 4,
                        "classname": "refecoclassicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "CC0C730FD2A52A602BD2D9356A1C4E96",
                        "title": "经济分类细化",
                        "name": "经济分类细化",
                        "type":"text",
                        "action": "iperformajust.jfxh",
                        "config": null,
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": true
                    },
                    {
                        "param": null,
                        "ordernum": 5,
                        "classname": "refecoclassicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "AA74F0092BD93824909148B152E89CB7",
                        "title": "重取项目调整后数",
                        "name": "重取项目调整后数",
                        "type":"text",
                        "action": "iperformajust.refetchproinfo",
                        "config": null,
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": false
                    },
                    {
                        "param": null,
                        "ordernum": 6,
                        "classname": "finishicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "ADBC7533E128E8BF610521179445EFCD",
                        "title": "上报",
                        "name": "上报",
                        "type":"success",
                        "action": "iperformajust.doaction",
                        "config": "{action:'audit',remark:true}",
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": false
                    },
                    {
                        "param": null,
                        "ordernum": 6,
                        "classname": "finishicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 0,
                        "guid": "CFC85B7FA5F2FA0F9F845147F3CB0102",
                        "title": "上报",
                        "name": "上报(不校验)",
                        "type":"success",
                        "action": "iperformajust.doactionnocheck",
                        "config": "{action:'audit',remark:true}",
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": true
                    },
                    {
                        "param": null,
                        "ordernum": 7,
                        "classname": "nofinishicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "B6D8104D3AB7C6B1BBD515D8F756030A",
                        "title": "取消上报",
                        "name": "取消上报",
                        "type":"success",
                        "action": "iperformajust.doaction",
                        "config": "{action:'cancelaudit',remark:true}",
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": false
                    },
                    {
                        "param": null,
                        "ordernum": 8,
                        "classname": "nofinishicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "28C291C3907E54E9465C9FB751F1C5CD",
                        "title": "退回",
                        "name": "退回",
                        "type":"success",
                        "action": "iperformajust.doaction",
                        "config": "{action:'back',remark:true}",
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": false
                    },
                    {
                        "param": null,
                        "ordernum": 9,
                        "classname": "backicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "24F0B106A35EEABA67ED9725B757ABDE",
                        "title": "直接退回",
                        "name": "直接退回",
                        "type":"success",
                        "action": "iperformajust.doaction",
                        "config": "{action:'multiback',remark:true}",
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": false
                    },
                    {
                        "param": null,
                        "ordernum": 9,
                        "classname": "examineicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "B60796DC3B1A7AB9BD46558F6EBE27CB",
                        "title": "数据审核",
                        "name": "数据审核",
                        "type":"success",
                        "action": "iperformajust.check",
                        "config": null,
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": false
                    },
                    {
                        "param": null,
                        "ordernum": 10,
                        "classname": "searchicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "BD4A7FD7F81A9005DA074155A2C5BD25",
                        "title": "汇总查询",
                        "name": "汇总查询",
                        "type":"success",
                        "action": "iperformajust.groupquery",
                        "config": null,
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": true
                    },
                    {
                        "param": null,
                        "ordernum": 11,
                        "classname": "searchicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "F126A5EAB7D5BD3989801849182BC6EA",
                        "title": "查询",
                        "name": "查询",
                        "type":"danger",
                        "action": "iperformajust.querynew",
                        "config": null,
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": false
                    },
                    {
                        "param": null,
                        "ordernum": 12,
                        "classname": "searchicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "49DFBD1DBB36F9AD95185EEFB0DB5B48",
                        "title": "清空查询条件",
                        "name": "清空查询条件",
                        "type":"danger",
                        "action": "iperformajust.queryformclear",
                        "config": null,
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": false
                    },
                    {
                        "param": null,
                        "ordernum": 14,
                        "classname": "expExcelicon",
                        "appid": "budget",
                        "code": null,
                        "submitnum": 0,
                        "isvisiable": 1,
                        "guid": "2FEC7DD9FF833AC1F71E388645C0F96E",
                        "title": "转出",
                        "name": "转出",
                        "type":"primary",
                        "action": "iperformajust.exportnew",
                        "config": null,
                        "key": "/budget/performajustinputwl/index/C5C10E3475ECA67A850371CDDE67785E",
                        "disabled": false
                    }
                ]
            }
        }
        //const btns = JSON.parse(one.data);
        return {
            code: 200,
            data: {
                buttonData: buttonData.data
            }
        }
    }

}