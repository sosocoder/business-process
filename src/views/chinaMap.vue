<template>
  <div>
      <div id="main" ref="echarts" style="width: 700px;height:500px;margin:0 auto"></div>
  </div>
    
  
</template>

<script>
import echarts from "echarts"
import 'echarts/map/js/china'
export default {
  data() {
    return {};
  },
  methods: {
    init() {
    //使用传统dom操作
    //   var myChart = echarts.init(document.getElementById("main"));
    // 使用vue中的ref属性操作
    var myChart = echarts.init(this.$refs.echarts)
      // 指定图表的配置项和数据
      var option = {
       
        series: [
          {
            type:'map',
            map:'china',
            data:[
                {
                    name:"北京",
                    value:1000
                },
                {
                    name:"上海",
                    value:500
                }
            ],
            label:{
                show:true,
                color:'red',
                fontSize:12
            },
            itemStyle:{
                borderColor:'green'

            },
            zoom:1.3,
            emphasis:{
                label:{
                show:true,
                color:'blue',
                fontSize:18
            },
            itemStyle:{
                borderColor:'bule'

            },
            }
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.init();
  },
};
</script>