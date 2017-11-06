# 前言

严格说起来，这也算是我第一个h5动画的一个小项目，看起来比较的简单也没啥复杂的逻辑，加上自己用PS扣图(非常细心地扣的呀)，设想，思考，然后到搭前端框架，再到撸代码，发现问题，思考问题，解决问题，花了自己整个周末的时间。整体交互并没有很复杂，主要还是思路要清晰。

## 技术栈

Node + Express + SASS + Gulp + JS + H5 + CSS3

## 项目运行

```
git clone git@github.com:xmtgithub123/MyThreeSquirrels.git 

cd MyThreeSquirrels

npm install

npm start

```

# 项目布局

```
├── bin         
│   ├── www                                     // 项目启动文件 
├── dist                                        // 编译目录 
│   ├── sass                                    // sass目录  
│   │   ├── style-threeSquirrels.scss           // sass源文件 
├── public                                      // 公共文件
│   ├── images                                  // 图片 
│   ├── javascripts                             // 脚本文件 
│   ├── stylesheets                             // 编译压缩后的样式文件 
├── routes                                      // nodejs路由配置文件 
│   ├── index.ejs
│   ├── users.ejs
├── views                                       // 视图页
│   ├── ThreeSquirrels.ejs                      // 游戏主页 
├── app.js                                      // 配置文件、一些中间件的配置
├── gulpfile.js                                 // gulp配置文件，加载组件模块
├── package.json                                // 项目依赖包、脚本、描述信息

```
  

# 部分截图

### 游戏界面

<img src="https://github.com/xmtgithub123/MyThreeSquirrels/raw/master/public/image/m00.png" alt="" width="365" height="619"> <img src="https://github.com/xmtgithub123/MyThreeSquirrels/raw/master/public/image/m0.png" alt="" width="365" height="619">

<img src="https://github.com/xmtgithub123/MyThreeSquirrels/raw/master/public/image/m4.png" alt="" width="365" height="619"> <img src="https://github.com/xmtgithub123/MyThreeSquirrels/raw/master/public/image/m1.png" alt="" width="365" height="619">

<img src="https://github.com/xmtgithub123/MyThreeSquirrels/raw/master/public/image/m2.png" alt="" width="365" height="619"> <img src="https://github.com/xmtgithub123/MyThreeSquirrels/raw/master/public/image/m3.png" alt="" width="365" height="619">

# 说明

> 如果您觉得有兴趣或者在某个地方帮助到您，您可以点右上角 ‘star’ 支持小的一下哈，三扣思密哒 ~
