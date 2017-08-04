<template>
	<div id="about-us">
		<div class="header">
			<div class="quant-menu">
				<div class="quant-menu-logo-wrapper">
					<img class="quant-menu-logo" :src="logoImage">
				</div>
				<div class="quant-menu-items">
					<ul>
						<li>公司介绍</li>
						<li>产品介绍</li>
						<li>特色</li>
						<li>联系方式</li>
						<li><router-link to="/">返回</router-link></li>
					</ul>
				</div>
			</div>
		</div>

		<div class="main">
			<div class="banner-pane">
				<div style="font-size: 43px; text-align: center; color: white;">
					一流的团队，顶尖的技术，专程为你服务
				</div>
			</div>
			<div class="about-content-wrapper">
				<div class="about-title">公司介绍</div>
				<div class="about-content">
					北京天鸿钧策科技有限公司（2016年7月21日成立），致力于量化投资、人工智能投顾的技术开发及模型研发相关，并提供相关咨询服务。本公司创始人及核心工作团队由清华金融、物理、计算机等专业博士及研究生同学组成，在量化策略、人工智能研发方面有深厚的理论基础，及最先进的量化实现技术。

				</div>

				<div class="about-title">产品介绍</div>
				<div class="about-content">
					<h4>人工智能投顾平台</h4>
					开发人工智能模型，实现人工智能投顾，给金融领域的工作者分担数据分析和投资决策的任务、提供投资决策建议，定制特色化人工智能模块.
					<h4>人工智能技术外包</h4>
					外包人工智能实现技术，给拥有策略或需求策略的投资方提供实现智能投资及自动资产管理的技术。
				</div>
				<div class="pro-intro-image">
					<img src="/static/about-us1.png">
					<img src="/static/about-us2.png">
					<img src="/static/about-us3.png">
					<img src="/static/about-us4.png">
				</div>

				<div class="about-title">特色</div>
				<div class="about-content">
					<h4>1.平台高效率、多品种、稳健性、安全性策略开发支持</h4>
					<h4>2.策略开发及人工智能开发团队强大</h4>
					依托清华学术平台：多位清华、北大的金融、数学、计算机以及其他与数据分析紧密相关专业的博士生、硕士生，在模型开发方面有深厚的理论模型基础及相关投资经验；学校教授、研究院支持.依托清华校友，具有一批业界精英的指导顾问。依托清华大学量化投资协会（于2016年3月19日创办），积聚高校和业界优质资源，创建高端人才社区，打造高校特色品牌，为量化策略开发者提供学习，交流和评价平台，让更多有潜力的高校学生成为具有全球竞争力的量化金融人才。
				</div>

				<div class="about-title">联系方式</div>
				<div class="about-content">
					<p>手机号：15210560798</p>
					<p>微   信：jhytxyy</p>
					<p>邮   箱：wuy.13@sem.tsinghua.edu.cn</p>
					<p>Q    Q :  291660846</p>
				</div>
			</div>
		</div>

		<div class="footer">
			<div class="footer-item">
				<span class="footer-item-title">关于</span>
				<span class="footer-item-link"><router-link to="/aboutUs">关于我们</router-link></span>
			</div>
			<div class="footer-item">帮助</div>
			<div class="footer-item">友情链接</div>
			<div class="footer-item">关注我们</div>
			<div class="footer-QR-code">
				<div style="margin-right: 20px; float: left;">
					<img src="/static/we-chat.png">
					<span>微信公众号</span>
				</div>
				<div style="float: left;">
					<img src="/static/qq.png">
					<span>QQ群</span>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AboutUs",
	data() {
		return {
			logoImage: "/static/logo.png"
		};
	}
}
</script>

<style lang="scss">
	#about-us {
		.main {
			.banner-pane {
				height: 375px;
				background-color: #378DE5;
				line-height: 375px;
				margin: 0px;
			}

			.about-content-wrapper {
				margin: 0px 200px;

				.about-title {
					font-size: 24px;
					margin: 40px 0px 10px 0px;;
				}

				.about-content {
					font-size: 14px;
					padding: 10px 0px;
				}

				.pro-intro-image {
					margin: 40px 0px;;
					position: relative;

					img {
						left: 0px;
						top: 0px;
						max-width: 48%;
						padding-bottom: 20px;
					}

					img:nth-child(2) {
						float: right;
					}

					img:nth-child(4) {
						float: right;
					}
				}

			}

			
		}
	}
</style>