<template>
    <div>
        <div class="top">
        <input type="text" v-model.lazy="input">
    </div>
    <div class="msg">
        <table cellpadding='0' cellspacing='0'>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>标题</th>
                    <th>单价</th>
                    <th>总价</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "(item, i) in searchData" :key="i">
                    <td>{{item.name}}</td>
                    <td>
                        <button  :disabled="item.count<=0" @click = "item.count -= 1">-</button>
                        {{item.count}}
                        <button @click = "item.count += 1">+</button>
                    </td>
                    <td>{{item.price | priceFilters(2)}}</td>
                    <td>{{item.count * item.price | priceFilters(1)}}</td>
                    
                </tr>
                <tr><td>总共{{totalcount}}件，价格总共{{totalprice}}元</td></tr>
                
                
            </tbody>
        </table>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                input :'',
            items : [
                {name : '苹果',price : 9, count : 2},
                {name : '香蕉',price : 6, count : 3},
                {name : '西瓜',price : 3, count : 5},
                {name : '柠檬',price : 8, count : 1}
            ]
            }
        },
        filters: {
            priceFilters:function(data,n){
                return '$' + data.toFixed(n);
            }
        },
        computed: {
            searchData:function(){
                if(!this.input) return this.items;
                return this.items.filter(item =>{
                    return item.name.includes(this.input);
                })
            },
            totalcount:function(){
                return this.items.reduce(function(total,cur){
                    return total +cur.count
                },0)
            },
            totalprice:function(){
                return this.items.reduce(function(total,cur){
                    return total + cur.price*cur.count
                },0)
            }
        }
    }
</script>
<style scoped>
*{
        margin: 0;
        padding: 0;
    }
    .top{
        width: 800px;
        border: 1px solid black;
        margin: 50px auto;
        text-align: center;
    }
    .msg{
        width: 800px;
        margin: 50px auto;
        text-align: center;

    }
    .msg th{
        width: 150px;
    }
</style>