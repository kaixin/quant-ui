<template>
	<div id="AI-community">
		<nav-bar :navMenuItems="AIComunityMenu"></nav-bar>

		<div class="main">
			<el-row class="community-nav">
				<el-col :span="24" style="padding-left: 50px; background-color: white; border: 1px solid #e6e6e6;">
					<img :src="goBackIcon">
					<span>小市值策略</span>
					<div  style="display: inline-block; float: right; padding-right: 50px;">
						<div>
							<span class="nav-button" :class="{active: activeTab==='edit-strategy'}" @click="switchNavTab('edit-strategy')">编辑策略</span>
							<span class="nav-button" :class="{active: activeTab==='back-test-detail'}" @click="switchNavTab('back-test-detail')">回测详情</span>
							<span style="width: 1px; height: 14px; border-left: 1px solid black; display: inline-block; vertical-align: middle;"></span>	
							<span class="nav-button" :class="{active: activeTab==='compile-list'}" @click="switchNavTab('compile-list')">编译运行列表</span>
							<span class="nav-button" :class="{active: activeTab==='back-test-list'}" @click="switchNavTab('back-test-list')">回测列表</span>
						</div>
					</div>
				</el-col>
			</el-row>
			<div class="community-content">
				<edit-strategy :activeTabChanged="activeTab" v-on:message="receiveMessageFromEditStrategy" :style="{display: activeTab==='edit-strategy' ? 'block' : 'none'}"></edit-strategy>
				<back-test-detail :activeTabChanged="activeTab" :style="{display: activeTab==='back-test-detail' ? 'block' : 'none'}"></back-test-detail>
				<compile-list :style="{display: activeTab==='compile-list' ? 'block' : 'none'}"></compile-list>
				<back-test-list :style="{display: activeTab==='back-test-list' ? 'block' : 'none'}"></back-test-list>
			</div>
		</div>

		<!-- <footer-bar></footer-bar> -->
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar"
import EditStrategy from "@/components/views/AICommunity/MyStrategy/EditStrategy"
import BackTestDetail from "@/components/views/AICommunity/MyStrategy/BackTestDetail"
import CompileList from "@/components/views/AICommunity/MyStrategy/CompileList"
import BackTestList from "@/components/views/AICommunity/MyStrategy/BackTestList"
import FooterBar from "@/components/layout/FooterBar"

export default {
	components: {
		NavBar,
		EditStrategy,
		BackTestDetail,
		CompileList,
		BackTestList,
		FooterBar
	},
	data() {
		return {
			goBackIcon: './static/go-back.png',
			AIComunityMenu: [
				{title: "首页", link: "/", selected: false},
				{title: "智能投顾", link: "/AIadvisor/assetsSteward", selected: false},
				{title: "AI社区",
					link: "",
					selected: false,
					subMenus: [
						{title: "我的策略", link: "/AICommunity/myStrategy"}
					]
				},
				{title: "清华量协", link: "", selected: false},
				{title: "个人账号", link: "", selected: false}
			],
			activeTab: 'edit-strategy',
			shouldRefresh: false
		}
	},
	methods: {
		switchNavTab: function(tabName) {
			if(tabName) {
				this.activeTab = tabName;
			}
		},
		//Get message handler to response to child component message
		receiveMessageFromEditStrategy: function(msg) {
			if(msg === "SHOW_BACK_TEST_DETAIL_TAB") {
				this.activeTab = "back-test-detail";
			}
		}
	}
}
</script>

<style lang="scss">
	#AI-community {
		overflow-y: hidden;
		
		.main {
			font-size: 14px;

			.community-nav {
				height: 56px;
				line-height: 56px;

				.nav-button {
 					margin: 0px 20px;
 					display: inline-block;
 					line-height: 50px;
				}

				.nav-button:hover {
					cursor: pointer;
					color: #00BAE9;
				}

				.active {
					border-bottom: 4px solid #00BAE9;
					color: #00BAE9;
				}
			}
		}
	}
</style>