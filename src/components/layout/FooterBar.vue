<template>
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
</template>

<script>
export default {
	data() {
		return {

		}
	}
}
</script>

<style lang="scss">
	.footer {
		background-color: #040C36;
		font-size: 26px;
		height: 130px;
		color: white;
		padding: 30px 50px;

		.footer-item {
			width: 19%;
			float: left;
			text-align: center;

			.footer-item-title {
				display: block;
				padding: 10px;
			}

			.footer-item-link {
				display: block;
				font-size: 18px;

				a {
					text-decoration: none;
					color: white;
				}
			}
		}

		.footer-QR-code {
			width: 24%;
			float: left;
			font-size: 14px;

			span{
				display: block;
				text-align: center;
			}
		}
	}
</style>