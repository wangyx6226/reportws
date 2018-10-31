# 笔记

  ## props 
    - 命名: 小驼峰 and 中横线
    - 静态和动态
    - 单向数据流: 子组件内部修改props值
      1.初始值: 将prop转为局部数据
      2.未加工: 定义计算属性computed
      3.传入Array或Object复杂数据类型: 深拷贝后使用
    - 验证
      1.type: String/Number/Boolean/Array/Object/Date/Function/Symbol
      2.default or function default(){}
      3.required
      4.function validator(){}
    - 非prop特性
      1.通过$attrs访问
      2.自动添加到组件根元素
      3.class和style合并
      4.禁用根组件继承特性: inheritAttrs:false (可自行决定将属性添加到哪个元素上)