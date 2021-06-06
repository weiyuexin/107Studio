# Git 的常用命令总结

1. 设置使用者用户名和邮箱：

   ```git
   $ git config --global user.name ""   
   $ git config --global user.email ""
   $ git config --global --list//查看用户信息
   ```

2. 在当前目录下创建仓库并初始化：(目录下.git文件用于跟踪管理版本库)

   ```git
   $ mkdir 仓库名
   $ cd 仓库名
   $ git init
   ```

3. 将文件添加到仓库：

   ```git
   $git add 文件名（带后缀）//从工作区提交到暂存区，一次只能能提交一个文件
   $ git commit -m "提交说明"//将暂存区内所有文件提交到版本库
   ```

4. 显示仓库状态：（显示最近修改状态）

   ```
   $ git status
   ```

5. 检查修改内容：

   ```
   $ git diff
   ```

6. 提交日志：

   ```
   $ git log
   ```

7. 退回以前的版本和回到指定版本：(HEAD^是上一个版本，HEAD^^是上上个版本，也可以HEAD~n，往前n个版本)

   ```git
   $ git reset --hard HEAD^
   $ git reset --hard (commit id)
   ```

   8. 记录的每一次命令：(查看每次操作，用于找回commitid)

      ```
      $git reflog
      ```

8. 比较工作区文件和版本库最新版本区别：

   ```
   $ git diff HEAD -- 工作区文件名
   ```

10. 丢弃工作区文件的修改：

    ```
    $ git checkout -- 文件名
    ```

11. 删除版本库文件：

    ```
    $ git rm 文件名
    $ git commit -m "说明"
    ```

11. 关联仓库：

    ```git
    $ git remote add github仓库名 git@github.com:github昵称/仓库名.git
    ```

12. 将本地仓库所有内容推送到远程仓库：(第一次使用-u参数，将本地仓库master分支和远程仓库master分支合并并关联)

    ```
    $ git push -u GitHub仓库名 master
    ```

13. 从远程库克隆：

    ```git
    $ git clone git@github.com:github昵称/仓库名称.git
    ```

14. 创建新的分支和删除分支以及分支切换：

    ```
    $ git checkout -b 分支名//同时切换到该分支
    $ git branch //查看当前分支
    $ git branch -d 分支名//删除分支
    $ git switch -c 分支名//创建并切换分支
    ```

15. 将分支改动合并到master上：

    ```
    $ git merge 分支名
    ```

16. 从远程仓库拉取：

    ```
    $ git pull git@github.com:github昵称/仓库名称.git
    ```

17. 其他常用：

    ```
    $ git touch 文件名（带后缀）//创建文件
    $ git pwd //显示目前路径
    $ git clear //清屏
    ```

    