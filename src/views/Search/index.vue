<template>
  <div class="searchPannel">
    <van-search
      v-model="value"
      shape="round"
      placeholder="请输入搜索关键词"
    />
    <div class="hotSearch">
      <p class="searchTit">热门搜索</p>
      <span>他只是经过</span>
    </div>
  </div>
</template>

<script>
import { getTags } from '@/api/recommend.js'
export default {
  data () {
    return {
      value: '',
      hotTags: []
    }
  },

  created () {
    this.getTagsList()
  },

  methods: {
    async getTagsList () {
      const res = await getTags()
      console.log(res)
    }
  }
}
</script>

<style scoped lang=less>
.searchPannel{
  padding: 0 10px;
  .searchTit{
    color: #999;
    font-size: 13px;
    margin-left: 5px;
  }
  span{
    display: inline-block;
    border: 1px solid #999;
    padding: 5px 10px ;
    font-size: 13px;
    border-radius: 15px;
  }
}
</style>
