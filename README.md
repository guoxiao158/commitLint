# git_commit

#### 介绍
Husky + Commitlint + Lint-staged()

#### 快速使用
1 现有项目如果想要使用  两步
  #第一步 npm install --save-dev  @commitlint/cli  @commitlint/config-conventional husky	
 #第二步 把项目中 .huskyrc文件 和commitlint.config.js复制到你的目录
现在你commit的时候，就会有检测了 配置规范在commitlint.config。js中

#### 安装教程

1. npm install

#### 使用说明

1. 任意修改src下的js文件
2. git add --all
3. git commit -m "xxxx" (会对js等文件进行prettier美化,然后进行校验commit是否符合规范进行commit)
4. git push -u origin master

 

#### 补充说明

如果想添加Lint-staged
修改 .huskyrc如下
{
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}

huskyrc 插件的作用就是会检测git 钩子函数

####  git commit 提交规范
提交格式（注意冒号后面有空格）
<type>: <subject>
####  常用的type类别
upd：更新某功能（不是 feat, 不是 fix）
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
#### 例子：

git commit -m 'feat: 增加 xxx 功能'
git commit -m 'bug: 修复 xxx 功能'

