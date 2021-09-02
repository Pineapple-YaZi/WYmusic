<template>
  <div class="searchPannel">
    <van-search
      v-model="value"
      shape="round"
      placeholder="请输入搜索关键词"
      @input="onInput"
    />
    <div class="hotSearch" v-if="!musicList.length">
      <p class="searchTit">热门搜索</p>
      <span v-for="(item, index) in hotTags"
      @click="onTags(item.first)"
      :key="index">{{ item.first }}</span>
    </div>

    <div class="hotSearch" v-else>
      <p class="searchTit">最佳匹配</p>
      <div>
        <MusicItem v-for="item in musicList"
        :name="item.name"
        :key="item.id"
        :authorName="item.ar[0].name"
        ></MusicItem>
      </div>
    </div>
  </div>
</template>

<script>
import MusicItem from '@/components/MusicItem.vue'
import { getTags, musicList } from '@/api/recommend.js'
export default {
  data () {
    return {
      value: '',
      hotTags: [],
      musicList: []
    }
  },

  created () {
    this.getTagsList()
  },

  methods: {
    // 获取热搜标签
    async getTagsList () {
      const res = await getTags()
      this.hotTags = res.data.result.hots
    },
    // 获取音乐列表
    async getMusicList () {
      const res = await musicList({
        keywords: this.value,
        limit: 10
      })
      this.musicList = res.data.result.songs
    },

    onTags (musicName) {
      this.value = musicName
      this.getMusicList()
    },
    onInput () {
      if (this.value === '') {
        this.musicList = []
      }
    }
  },

  components: {
    MusicItem
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
    margin: 0 5px 8px;
  }
}
</style>
