<template>
    <div>
        <div class="todolist">
            <div class="title">
                <p>Vue制定学习计划</p>
                <span>共有{{items.length}}个计划，已完成{{finish}}个，未完成{{items.length - finish}}个</span>
            </div>
            <div class="input">
                <input type="text" placeholder="请输入信息" v-model="input">
                <button @click="add()" :disabled = !input>添加计划</button>
            </div>
            <div class="list">
                <div class="lsit-btn">
                    <a href="#" @click="filterItem(1)" :class="curIndex === 1 ? 'active' :''">所有计划</a>
                    <a href="#" @click="filterItem(2)" :class="curIndex === 2 ? 'active' :''">已完成</a>
                    <a href="#" @click="filterItem(3)" :class="curIndex === 3 ? 'active' :''">未完成</a>
                </div>
                <ul class="list-group">
                    <li v-for="(item,index) in newItems" :key="index" >
                        <input type="checkbox" v-model="item.check">
                        <span :class="item.check ?'line-through':''">{{item.name}}</span>
                        <button @click="del(item)">删除</button>
                        
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                input:'',
                items:[
                {name:'学习语文',check:true,id:1},
                {name:'学习数学',check:true,id:2},
                {name:'学习英语',check:false,id:3},
                ],
                newItems:[],
                curIndex:1

            }
        },
        methods:{
            add(){
                var _id = Math.max(...this.items.map(item =>item.id)) +1
                this.items.unshift({name:this.input,check:false,id:_id})
                this.input = ''//清空
            },
            del(item){
                //使用splice方法
                // this.items.splice(item,1)
                //使用过滤方法
                this.items = this.items.filter(v=>v.id!=item.id) 
            },
            filterItem(n){
                    this.curIndex = n
                switch(n){
                    case 2 :
                        this.newItems = this.items.filter(v=>v.check) 
                        break;
                    case 3 :  
                        this.newItems = this.items.filter(v=>!v.check) 
                        break;
                   default :
                        this.newItems = this.items
                }
            }

        },
        computed:{
            finish(){
                return this.items.filter(v=>v.check).length
            },
            
        },
        mounted(){
            this.filterItem(this.curIndex)
        }
    }
</script>
<style scoped>
.todolist{
    width: 800px;
    height: 600px;
    margin: 0 auto;
    background-color: #ccc;
}
.title{
    width: 100%;
    height: 100px;
    background-color: aqua;
}
.title p{
    font-size: 20px;
    font-weight: 600;
    padding-top: 10px;
}
.input{
    margin: 10px 0;
}
.lsit-btn{
    display: flex;
}
.lsit-btn a{
    
    text-decoration: none;
    flex: 1;
    border: 1px solid black;
    background-color: cadetblue;
}
.active{
    color: red;
}
.list-group{
    list-style: none;
}
.list-group input,.list-group span{
    float: left;
}
.list-group input{
    margin-right: 20px;
}
.list-group button{
    float: right;
    margin-right: 30px;
}
.list-group li{
    width: 100%;
    height: 30px;
    
}
.list-group li:hover{
    background-color: rosybrown;
}

.line-through{
    text-decoration: line-through ;
}
</style>