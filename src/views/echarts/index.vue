<template>
  <div id ='page'>
      <div id = 'main'  ref='main'>

      </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name:'echarts',
    data(){
        return {
        
        }
    },
    mounted(){
        // console.log(echarts)
        let That = this
        // console.log(That.$refs.main)
        // console.log(echarts.init(That.$refs.main))
        // console.log(echarts.init())
      let mychart =  echarts.init(this.$refs.main)
    //   console.log(mychart)
      let options ={
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                type:'category',
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
        mychart.setOption(options)
    },
    components:{
        
    },
    methods:{

    }
}
</script>

<style lang='scss'>
#page{
    width: 90vw;
}
#main{
    width: 400px;   
    height: 400px;
    border: 1px solid red;
}
        
</style>