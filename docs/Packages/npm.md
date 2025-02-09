云效npm-registry 怎么获取 _authToken 并应用到 .npmrc 文件中？

```sh
npm config set registry=https://packages.aliyun.com/6777631a5a7e64cf2dfc83f5/npm/npm-registry/
npm login
然后输入用户名和密码，会自动在用户文件夹下生成一个.npmrc文件，将该文件放在代码库根目录即可实现免密登录
```

# 参考文档

- 云效npm-registry 怎么获取 _authToken 并应用到 .npmrc 文件中？  https://developer.aliyun.com/ask/578462