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
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
        </van-list>
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
      musicList: [],
      page: 1,
      loading: true,
      finished: false
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
      if (this.id) {
        clearTimeout(this.id)
      }
      this.page = 1

      if (this.value === '') {
        this.musicList = []
        return
      }
      // 异步更新数据
      this.id = setTimeout(async () => {
        const res = await musicList({
          keywords: this.value,
          limit: 10
        })
        this.musicList = res.data.result.songs
      }, 800)
    },
    async onLoad () {
      this.page++

      const res = await musicList({
        keywords: this.value,
        limit: 10,
        offset: (this.page - 1) * 10
      })
      console.log(res)
      if (res.data.result.songs) {
        this.musicList.push(...res.data.result.songs)
        this.loading = false
      } else {
        // 数据全部加载完成
        this.finished = false
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
  padding: 0 10px 50px;
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
