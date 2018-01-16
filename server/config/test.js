var nodePath = require('path')

module.exports = {   
  // 服务器本身配置
  "fa": {
    "port": 9000, //运行端口
    "view": {
      //模板后缀名
      "ext": "tpl",
      "dir": nodePath.join(__dirname, '../views'),
      "cache": true
    },
    "webpack": false
  },
  // 模板引擎配置
  "swig": {
    "cache": false,
    "autoescape": true,
    "varControls": ["{{", "}}"],
    "tagControls": ["{%", "%}"],
    "cmtControls": ["{#", "#}"]
  },

  //中间件顺序配置
  "middleware": {
    "favicon": {
      "level": 0,
      "path": "./favicon.icon"
    },

    "compression": {
      "level": 10,
      //会出一个invalid compression level:10 的错误，先停掉
      "disable": true
    },

    "responseTime": {
      "level": 20 
    },

    "bodyParser": {
      "level": 30,
      "urlencoded": {
        "extended": true
      },
      "json": {
        "limit" : "1000kb"
      }
    },

    "cookieParser": {
      "level": 40,
      "options": {
        "secret": "zmskUKsl*^%"
      }
    },

    "session": {
      "level": 50,
      //使用什么方式来储存 session 如果是object 则直接会传给 express-session ,
      "store":"session-file-store",
      "session-file-store": {
        "path": "./tmp/session",
        "ttl": 1800
      },
      "connect-redis": {
        "prefix": "DLCMSSESSION:",
        "ttl": 1800
      },
      "cookie": {
        "secure": false
      },
      "secret": "FA_SESSION",
      "name": "FA_SID",
      // 是否每次请求都将session重新保存，即使没有改变过
      "resave": false,
      // 未初始化的session 是否也进行储存，不储存可以让用户在不需要使用session的情况，节约服务器资源
      "saveUninitialized": false
    },

    "methodOverride" : {
      "level": 55,
      "disable": true,
      "methods":[
        "X-HTTP-Method",
        "X-HTTP-Method-Override",
        "X-Method-Override",
        "_method"
      ]
    },
    //此中间件提供一个data对象用于操作res上的各种数据
    "data": {
      "level": 60
    },
    //路由中间件
    "horse": {
      "level": 70
    },
    //静态资源目录
    "static": {
      // "disable": true,
      "level": 80,
      "urlPattern": "/public",
      "publicDir": "./public",
      "options": {
        "maxAge": 0
      },
      "disable" : true,
      "notFound": function (err, req, res, next) {
        next()
      }
    }
  },
  //settings of bee
  "bee":{}
}