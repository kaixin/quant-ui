<template>
	<div id="AI-advisor">
		<nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>

		<div class="main">
			<router-view></router-view>
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
	mounted() {
		document.body.style.overflow = "auto";
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
		}
	}
}
</script>

<style lang="scss">
	#AI-advisor {
		.main {
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