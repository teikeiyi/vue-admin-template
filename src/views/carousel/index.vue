<template>
    <el-carousel :interval="4000" type="card" height="350px">
      <el-carousel-item v-for="item in pictureData" :key="item.num">
        <h3 class="medium">{{ item.name}}</h3>
      </el-carousel-item>
    </el-carousel>
</template>


<script>
export default{
  data(){s
    return {
     pictureData:[{
       num:'001',
       name:'first，作为图片上传的展示区域',
       src:".."
        },
       {
         um:'002',
         name:'second',
         src:"first"
       },
       {
         um:'003',
         name:'second',
         src:"first"
       },
       {
         um:'004',
         name:'second',
         src:"first"
       },
       {
         um:'005',
         name:'second',
         src:"first"
       },
       {
         um:'006',
         name:'second',
         src:"first"
       },
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
