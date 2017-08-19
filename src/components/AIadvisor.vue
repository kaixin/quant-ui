<template>
	<div id="AI-advisor">
		<nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>

		<div class="main">
			<el-row type="flex" justify="center">

				<el-col :span="3">
					<el-menu default-active="AssetsSteward" class="AI-nav-menu">
						<el-menu-item class="font-18" v-for="item in AIadvisorLeftMenu" :key="item.index" :index="item.index">
							<router-link v-text="item.title" :to="item.index"></router-link>
						</el-menu-item>
					</el-menu>
				</el-col>

				<el-col :span="15">
					<router-view></router-view>
				</el-col>

			</el-row>
		</div>

		<footer-bar></footer-bar>
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar"
import FooterBar from "@/components/layout/FooterBar"

export default {
	components: {
		NavBar,
		FooterBar
	},
	data() {
		return {
			AIadvisorMenu: [
				{title: "首页", link: "/", selected: false},
				{title: "智能投顾", link: "/AIadvisor/assetsSteward", selected: true},
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
			AIadvisorLeftMenu: [
				{title: 'AI资产管家', index: '/AIadvisor/assetsSteward'},
				{title: 'AI产品经理', index: '/AIadvisor/productManager'},
				{title: 'AI策略师', index: '/AIadvisor/strategist'},
				{title: 'AI私家定制', index: '/AIadvisor/customBuilt'}
			]
		}
	}
}
</script>

<style lang="scss">
	#AI-advisor {
		.main {
			margin-top: 50px;
			background-color: white;
		}

		.AI-nav-menu {
			background-color: white;

			a {
				text-decoration: none;
				color: black;

				&.router-link-active {
					color: #20a0ff;
				}
			}		
		}

		.font-18 {
			font-size: 18px;
		}
	}
</style>