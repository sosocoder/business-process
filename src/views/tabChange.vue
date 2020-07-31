<template>
  <div>
    <div class="top">
      <input type="text" placeholder="标题" v-model="obj.title" />
      <input type="text" placeholder="发布人" v-model="obj.name" />
      <input type="date" v-model="obj.data" />
      <button @click="add()">新增</button>
    </div>
    <div class="msg">
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>序号</th>
            <th>标题</th>
            <th>发布人</th>
            <th>发布时间</th>
            <th>修改</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in items" :key="item.id">
            <td>{{index+1}}</td>
            <td>{{item.title}}</td>
            <td>{{item.name}}</td>
            <td>{{item.data}}</td>
            <td>
              <span @click="del(index)">删除</span>
              <span @click="edit(item)">修改</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="layer" v-if="layer">
      <div class="mask">
        <div class="title">
          编辑
          <span @click="layer=false">x</span>
        </div>
        <div class="content">
          <input type="text" placeholder="标题" v-model="edititems.title" />
          <input type="text" placeholder="发布人" v-model="edititems.name" />
          <input type="date" placeholder="时间" v-model="edititems.data" />
          <button @click="updata()">更新</button>
          <button @click="layer=false">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layer: false,
      obj: {
        title: "",
        name: "",
        data: "",
      },
      items: [{ title: "标题", name: "苏苏", data: "2020-10-05", id: 1 }],
      edititems: {},
    };
  },
  methods: {
    add: function () {
      if (!this.obj.title || !this.obj.name || !this.obj.data) return;
      var _id =
        Math.max(
          ...this.items.map(function (v) {
            return v.id;
          })
        ) + 1;
      this.items.push({
        title: this.obj.title,
        name: this.obj.name,
        data: this.obj.data,
        id: _id,
      });
      this.obj = {};
    },
    del: function (i) {
      this.items.splice(i, 1);
    },
    edit: function (item) {
      this.layer = true;
      this.edititems = {
        title: item.title,
        name: item.name,
        data: item.data,
        id: item.id,
      };
    },
    updata: function () {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id == this.edititems.id) {
          this.items[i] = this.edititems;
          this.layer = false;
        }
      }
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.top {
  width: 800px;
  border: 1px solid black;
  margin: 50px auto;
  text-align: center;
}
.msg {
  width: 800px;
  margin: 50px auto;
  text-align: center;
}
.msg th {
  width: 150px;
}
#layer {
  width: 600px;
  margin: 50px auto;
  text-align: center;
}
#layer span {
  cursor: pointer;
  float: right;
}
</style>