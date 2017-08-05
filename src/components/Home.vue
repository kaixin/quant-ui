<template>
	<div>
		<nav-bar :navMenuItems="homeMenu"></nav-bar>

		<div class="main">
			<div class="ad-pane">
				<div style="display: inline-block; text-align: center; float: left; width: 60%; padding-left: 100px;">
					<div>
						<span style="font-size: 35px; color: white;">人工智能课堂</span>
					</div>
					<div>
						<img style="width: 500px; height: 300px;" src="/static/ad-image.png">
					</div>
				</div>
				<div style="display: inline-block; width: 265px; height: 310px; margin: 16px; background-color: white; float: left; position: relative;">
						<span class="ad-pane-circle"></span>
						<span class="ad-pane-circle"></span>
						<span class="ad-pane-circle"></span>
						<span class="ad-pane-circle"></span>
						<div style="margin-top: 40px;">
							<p class="ad-pane-desc">金融、数学</p>
							<p class="ad-pane-desc">计算机</p>
						</div>
						<p class="ad-pane-button ad-pane-button1">开启人工智能之旅</p>
						<p class="ad-pane-button ad-pane-button2">人工智能擂台</p>
				</div>
			</div>
			<div class="signal-city-pane">
				<div class="pane-header">
					<span>信号商城</span>
				</div>
				<div class="pane-content"></div>
				<div class="pane-content-more">加载更多策略>></div>
			</div>
			<div class="link-pane">
				<div class="pane-content">
					<div style="padding: 40px 0px 40px 100px;">
						<div class="link-item">
							<h3>常见问题</h3>
							<span>什么是人工智能</span>
							<span>人工智能在金融领域的应用前景</span>
							<span>我们的特色</span>
							<span>我们的服务</span>
						</div>
						<div class="link-item">
							<h3>在线课堂</h3>
							<span>量化入门</span>
							<span>量化进阶</span>
							<span>多因子系统</span>
							<span>统计套利</span>
							<span>查看更多</span>
						</div>
						<div class="link-item">
							<h3>社区精选</h3>
							<span>THQuant社区干货合集</span>
							<span>【资料分享】Python、研究报告、计量经济</span>
							<span>查看更多</span>
						</div>
					</div>
				</div>
			</div>
			<div class="our-service-pane">
				<div class="pane-header">
					<span>我们提供</span>
				</div>
				<div style="padding-top: 30px; height: 420px;">
					<div class="service-item-wrapper" v-for="service in ourServices">
						<div class="service-item">
							<div class= "service-item-name">
								<span v-text="service.name"></span>
							</div>
							<div class="service-item-description">
								<div style="padding: 10px 10px; font-size: 19px;">
									<span v-text="service.description"></span>
								</div>
								<div class="service-item-detail">
									<span>立即体验</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="advantage-pane">
				<div class="pane-header">
					<span>我们的优势</span>
				</div>
				<div>
					<div v-for="adv in advantages" style="width: calc(100%/4); float: left; height: 230px; text-align: center;">
						<div style="height: 60px;">
							<img :src="adv.icon">
						</div>
						<div style="font-size: 20px;">
							<span v-text="adv.name"></span>
						</div>
						<div style="text-align: left; padding: 20px;">
							<span v-text="adv.description"></span>
						</div>
					</div>
				</div>
			</div>
			<div class="journey-pane">
				<div>
					<h2>开启我的量化投资之旅</h2>
				</div>
				<div style="text-align: center;">
					<span style="border: 1px solid white; padding: 10px 30px;">立即开启</span>
				</div>
			</div>
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
	name: "home",
	data() {
		return {
			homeMenu: [
				{title: "首页", link: "/", selected: true},
				{title: "智能投顾", link: "/AIadvisor", selected: false},
				{title: "AI社区", link: "", selected: false},
				{title: "清华量协", link: "", selected: false},
				{title: "个人账号", link: "", selected: false}
			],
			ourServices: [
				{
					name: "高质量数据",
					description: "我们免费提供2005年至今的A股行情数据、AI信号、定制模块",
					showDetail: true
				},
				{
					name: "精准回测",
					description: "我们免费提供高效，精准的回测引擎，快速验证策略，支持日级、分钟级回测",
					showDetail: false
				},
				{
					name: "模拟交易",
					description: "我们免费提供最准确、实时的沪深A股、期货模拟交易工具，支持日级、分钟级、tick级模拟交易",
					showDetail: false
				},
				{
					name: "人工智能交流社区",
					description: "我们为人工智能爱好者提供线上交流社区，基于清华量协开展学术小组，便于学习交流策略，人工智能知识，一起探索人工智能在金融领域的应用",
					showDetail: false
				}
			],
			advantages: [
				{
					icon: "",//"/static/logo.png",
					name: "强大的技术团队",
					description: "依托清华量协，中美量化人才联盟，顶尖高校教授、研究生、博士等开发团队"
				},
				{
					icon: "",
					name: "开源的人工智能交流社区",
					description: "为人工智能爱好者提供线上交流社区，结合清华量协的线下学术研讨会，以及协会品牌“Q-talk邀请海内外知名学者一起交流、进步"
				},
				{
					icon: "",
					name: "顶级回测体验",
					description: "支持每日、分钟两级回测，提供简洁、强大的API，回测结果实时显示、快速响应、数据全面"
				},
				{
					icon: "",
					name: "顶尖模拟交易",
					description: "提供最准确、实时的沪深A股、ETF模拟交易工具，支持基于tick级的模拟交易"
				},
				{
					icon: "",
					name: "安全",
					description: "本地回测"
				},
				{
					icon: "",
					name: "高效",
					description: "C++底层设计，资源独立，安全性更高、性能更好，同步支持Python、C++等语言"
				},
				{
					icon: "",
					name: "多功能",
					description: "我们提供独家包装好的优化模块、分析模块，协助您便携地把人工智能算法应用到金融领域，使得您的策略提高性能"
				},
				{
					icon: "",
					name: "广阔的教育资源",
					description: "清华校内科研单位支持协会，校友资源服务同学，广大的业界机构合作"
				},

			]
		}
	}
};
</script>

<style lang="scss">
	.main {
		background-color: #F2F3F7;

		.ad-pane {
			padding-top: 30px;
			height: 460px;
			background-color: #378DE5;

			.ad-pane-circle {
				width: 10px;
				height: 10px;
				display: inline-block;
				border: 1px solid #378DE5;
				border-radius: 10px;
				position: absolute;
				left: 0px;
				top: 0px;
			}

			.ad-pane-circle:nth-child(1) {
				margin-left: 16px;
				margin-top: 16px;
			}

			.ad-pane-circle:nth-child(2) {
				left: 100%;
				margin-left: -26px;
				margin-top: 16px;
			}

			.ad-pane-circle:nth-child(3) {
				top: 100%;
				margin-left: 16px;
				margin-top: -26px;
			}
			.ad-pane-circle:nth-child(4) {
				top: 100%;
				left: 100%;
				margin-left: -26px;
				margin-top: -26px;
			}

			.ad-pane-desc {
				font-size: 35px;
				margin: 0px;
				text-align: center;
				color: #378DE5;
			}

			.ad-pane-button {
				font-size: 21px;
				text-align: center;
				border: 1px solid #378DE5;
				margin: 20px;
				padding: 10px 0px;
			}

			.ad-pane-button1 {
				background-color: #378DE5;
				color: white;
			}

			.ad-pane-button2 {
				color: #378DE5;
			}

		}

		.signal-city-pane {
			padding: 45px 0px;
		}

		.pane-header {
			font-size: 31px;
			padding: 0px 0px 20px 100px;
		}

		.pane-content {
			width: 100%;
			height: auto;
			min-height: 300px;
			margin: 0 auto;
		}

		.pane-content-more {
			font-size: 24px;
			text-align: center;
			height: 60px;
			margin-top: 20px;
			background-color: white;
			line-height: 60px;
		}

		.link-pane {
			background-color: white;

			.link-item {
				width: calc(100%/3);
				float: left;
			}

			.link-item h3 {
				margin-bottom: 18px;
				font-size: 24px;
				font-weight: 500;
			}

			.link-item span {
				font-size: 16px;
				display: block;
				margin-bottom: 10px;
			}
		}

		.our-service-pane {
			padding: 45px 100px;

			.pane-header {
				text-align: center;
				padding: 0px 100px;
			}

			.service-item-wrapper {
				width: calc(100%/4);
				float: left;

				.service-item {
					margin-right: 20px;
					transition: all 0.6s;

					.service-item-name {
						text-align: center;
						padding: 10px;
						font-size: 25px;
						height: 150px;
						background-color: #A2B5CD;
						line-height: 150px;
					}

					.service-item-description {
						position: relative;
						background-color: white;
						padding: 10px;
						height: 230px;
					}

					.service-item-detail {
						display: none;
						text-align: center;
						border: 1px solid white;
						color: white;
						background-color: #378DE5;
						font-size: 19px;
						position: absolute;
						bottom: 20px;
						width: 90%;
						padding: 10px 0px;
					}
				}
				.service-item:hover {
					border: 1px solid #378DE5;
					transform: scale(1.1);

					.service-item-name {
						background-color: #B9D3EE;
					}
					.service-item-description {
						background-color: #378DE5;
					}
					.service-item-detail {
						display: block;
					}
				} 
			}
		}

		.advantage-pane {
			background-color: white;
			padding: 45px 100px;
			height: 490px;

			.pane-header{
				text-align: center;
				padding: 0px 100px;
			}
			
		}

		.journey-pane {
			background-color: #378DE5;
			color: white;
			padding: 45px 0px;

			h2 {
				font-size: 36px;
				text-align: center;
				font-weight: normal;
			}
		}
	}
</style>