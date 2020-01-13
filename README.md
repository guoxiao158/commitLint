# git_commit

#### 介绍
Husky + Commitlint + Lint-staged()

#### 快速使用
1 现有项目如果想要使用  两步
  # 第一步 npm install --save-dev  @commitlint/cli  @commitlint/config-conventional husky	
 # 第二步 把项目中 .huskerc文件 和commitlint.config.js复制到你的目录
现在你commit的时候，就会有检测了 

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


