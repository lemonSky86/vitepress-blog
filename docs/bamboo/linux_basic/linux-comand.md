# Linux 命令总结

本篇汇总了常用的 `linux `命令语法以及使用时的注意事项，部分命令结合实例讲解了用法。

## 文件操作相关

### 删除文件

命令格式： `rm [选项] [文件名]`

```powershell
#  rm 命令可用来删除文件或文件夹
## 删除名为200801的文件或文件夹
> rm -rf 200801
## 删除以2008开头的文件或文件夹, ‘*’代表模糊匹配
> rm -rf 2008*

-d    # 直接把欲删除的目录的硬连接数据删除成0，删除该目录；
-f    # 强制删除文件或目录；
-i    # 删除已有文件或目录之前先询问用户；
-I    # 删除三个以上文件前或递归删除时提示一次;比-i更少的侵入性，同时仍然提供了对大多数错误的保护
-r或-R    # 递归处理，将指定目录下的所有文件与子目录一并处理；
--preserve-root    # 不对根目录进行递归操作；
-v    # 显示指令的详细执行过程。

```

::: warning 

删除重要文件时，一定要做好备份。

删除文件时一定要进入对应路径下，避免在父级目录直接执行删除操作。

删除文件时一定要指定文件名，非必须不要一次删除大量文件。
:::

### 编辑文件

以下给是一个编辑文件的基本步骤。

```powershell
# 1. 使用 vi 命令触发编辑文件
## + 号是进入文件时位置为最后一行
[root@localhost ~]# vi + /etc/sysctl.conf

# 2. 按 i 进行插入，此时出现光标就可以修改内容了
## 将 Linux 服务器的 SYN 队列的长度修改为 2048
--- sysctl.conf 文件内容 ----
# System default settings live in /usr/lib/sysctl.d/00-system.conf.
# To override those settings, enter new settings here, or in an /etc/sysctl.d/<name>.conf file
#
net.ipv4.tcp_max_syn_backlog = 2048
# For more information, see sysctl.conf(5) and sysctl.d(5).
---------------------------

# 3. 按 ESC,光标消失后,键入冒号(:)然后, wq! 保存并退出
:wq!
[root@localhost ~]


```

## 磁盘空间相关
