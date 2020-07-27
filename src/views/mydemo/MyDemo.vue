<template src='./mydemo.pug' >
  
</template>

<script>
import md5 from 'js-md5'
import bcrypt from 'bcryptjs'

export default {
  name:'mydemo',
  data(){
    return {
      bar:[
        'kb',
        24
        // {name:kb},
        // {age:24},
      ],
      password:'123459',
      saltRounds:10,
      hashres:''
    }
  },
  methods:{
    // bcrypt加密
    async bcryptHash(str,saltHash){
      let hashResult
      try {
        const salt = await bcrypt.genSalt(saltHash)
        hashResult = bcrypt.hash(str,salt);
      } catch (error) {
        throw error
      }
      return hashResult 
    },
    // bcrypt 校验
    async bcryptCompare(str,hash){
      let isMatch 
      try {
        isMatch =await bcrypt.compare(str,hash)
      } catch (error) {
        throw error
      }
      return isMatch
    },
    hash(){

      let i = md5('')
      console.log("空的MD5运算结果===>",i)
      let str = md5('123456') 
      console.log("123456MD5运算结果===>",str)
      // 另外一种运算bcrypt
      this.bcryptHash(this.password,this.saltRounds).then(res=>{
        console.log(res)
        this.hashres = res
      })

    },
    validity(){
      this.bcryptCompare(this.password,this.hashres).then(console.log)
    }
  },
  components:{
    
  }
}
</script>

<style>
.container{
  display:grid
}


</style>