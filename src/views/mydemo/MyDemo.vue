<template lang='pug'>
div
  //-  这是注释，测试pug，for循环(1)
  div.title 测试pug，for循环(1)
  ul
      - let foo = [{name:'小站',age:25,sex:0},{name:'王波',age:18,sex:0},{name:'张二',age:30,sex:1}]
      each item in foo
          li
              span.listItem= `名字:${item.name}——`
              span
                = `年龄:${item.age}——`
              span(style= `${Object.is(item.sex,0) ? "color:blue;" : "color:red;"}`)= `性别:${Object.is(item.sex,0) ? "男" : "女"}`
  div
    li(v-for= '(item,index) in bar') Info: {{item}}
  div: p 输入框名字
  div 
    p 输入框名字
  - var text= '<em>文本<em>'
  p= `带有变量的文字${text}`
  //- .语法可以直接换行
  p.  
    这个是一个段纯洁的文本
  //- 这个语法也只能写一个，写两个就报错了
  div  
      |  管道符总是在最开头，
      p  不算前面的缩进
      |  dafadf
  mixin pet(name)
    li= name
  ul  
    +pet('猫猫')
    +pet('狗狗')
    +pet('笨笨')
</template>

<script>
export default {
  name:'mydemo',
  data(){
    return {
      bar:[
        'kb',
        24
        // {name:kb},
        // {age:24},
      ]
    }
  },
  components:{
    
  }
}
</script>

<style>

</style>