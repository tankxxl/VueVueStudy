<template>
  <div>
    <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="TAB ONE"/>
    <mu-tab value="tab2"  title="TAB TWO"/>
    <mu-tab value="tab3"  @click="handleClick" @active="handleActive" title="TAB ACTIVE"/>
  </mu-tabs>

  <!-- <mobile-tear-sheet> -->

    <!-- <ul>
  <template v-for="item in items">
    <li>{{ item.title }}</li>
    <hr/>
  </template> -->
</ul>

  <mu-list>
    <mu-sub-header>今天</mu-sub-header>

    <template v-for="(item, index) in items">
      <mu-list-item title="这个周末一起吃饭么?" @click.prevent="itemClicked(item, index)">
        <mu-avatar :src="avatar1" slot="leftAvatar"/>
        <span slot="describe">
          <span style="color: rgba(0, 0, 0, .87)">{{item.author}} -</span>
          {{item.content}}
        </span>
        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
          <mu-menu-item title="回复" />
          <mu-menu-item title="标记" />
          <mu-menu-item title="删除" @click="handleDelClicked(item, index)"/>
        </mu-icon-menu>
      </mu-list-item>
      <mu-divider inset/>
    </template>






    <mu-list-item title="这个周末一起吃饭么?">
      <mu-avatar :src="avatar1" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span>
        周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item>
    <mu-divider inset/>
    <mu-list-item title="Alex Qin">
      <mu-avatar :src="avatar2" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">看电影啊</span> <br/>
        我们去看电影，最近有部烂片上映，又有吐槽的了
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item>
    <mu-divider inset/>
    <mu-list-item title="LOL">
      <mu-avatar :src="avatar3" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
        周末一起 LOL
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item>
    <mu-divider inset/>
    <mu-list-item title="Myron Liu">
      <mu-avatar :src="avatar7" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/> 实在遍布下去，这就是个demo
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="回复" />
        <mu-menu-item title="标记" />
        <mu-menu-item title="删除" />
      </mu-icon-menu>
    </mu-list-item>
  </mu-list>
<!-- </mobile-tear-sheet> -->

  </div>

</template>

<script>
import faker from 'faker'
// faker.
// faker.image.avatar()

import avatar1 from "../assets/logo.png"
import avatar2 from "../assets/logo.png"
import avatar3 from "../assets/logo.png"
import avatar4 from "../assets/logo.png"
import avatar5 from "../assets/logo.png"
import avatar6 from "../assets/logo.png"
import avatar7 from "../assets/logo.png"

export default {
  data () {
    return {
      activeTab: 'tab1',

      items: [
        {
          author: 'rgz',
          title: '标题',
          content: '内容',
          pic: avatar1,
          url: 'http://www.baidu.com'

        },
        {
          author: 'rgz',
          title: '标题',
          content: '内容',
          pic: avatar2,
          url: 'http://www.baidu.com'

        },
        {
          author: 'rgz',
          title: '标题',
          content: '内容',
          pic: avatar3,
          url: 'http://www.baidu.com'

        },
        {
          author: 'rgz',
          title: '标题',
          content: '内容',
          pic: avatar4,
          url: 'http://www.baidu.com'

        }
      ],

      // avatar1: faker.image.avatar(),
      // avatar2: faker.image.avatar(),
      // avatar3: faker.image.avatar(),
      // avatar4: faker.image.avatar(),
      // avatar5: faker.image.avatar(),
      // avatar6: faker.image.avatar(),
      // avatar7
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
      console.log('tabs change=' + val)
      if (val === 'tab1') {
        console.log('tab11')
      } else if (val === 'tab2') {
        console.log('tab22')
        this.$router.push({name: 'user', params: { id: '1'} })

        // 字符串
        // router.push('home')

        // 对象
        // router.push({ path: 'home' })

        // 命名的路由
        // router.push({ name: 'user', params: { userId: 123 }})

        // 带查询参数，变成 /register?plan=private
        // router.push({ path: 'register', query: { plan: 'private' }})


      } else {
        console.log('tab33')
        this.$router.push({name: 'detail', params:{id: '2'}})
      }

    },
    handleClick () {
      console.log('handle Click')
    },
    handleActive () {
      console.log('handle Active')
    },
    handleDelClicked (item, index) {
      alert(item.title + ' del ' + index)
    },
    itemClicked(item, index) {
      console.log(item + ' itemClicked ' + index)
      // this.$router.push({ name: 'detail', params: { id: "123" }})
      this.$router.push({name: 'detail', params: { id: '456'} })
    },
    back () {
      window.history.back()
    }
  },
  components: {}
}
</script>

<style>
</style>
