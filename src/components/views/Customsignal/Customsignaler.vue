<template>
	<div class="customer_main">
		<div class="customer_banner">
			<div class="customer_text">
				<p>这是你展现才华的地方</p>
				<p>一起搞事情吧</p>
			</div>
		</div>
			<div class="customer_box">
				<div class="customer_box_top">
					
				</div>
			</div>
		</div>
</template>

<script>
</script>

<style lang="scss">
	p{
		margin: 0;
		padding: 0;
	}
	.customer_banner{
		width: 100%;
		height: 320px;
		background: url(../../../../static/Customsignaler/icon_banner.png) no-repeat;
		background-size: cover;
		padding-top: 180px;
		.customer_text{
			width:60%;
			height:200px;
			margin:auto;
			p{
				width: 100%;
				font-size: 38px;
				line-height: 60px;
				text-align: center;
				color: #fff;
				letter-spacing: 10px;
			}
		}
	}
	.customer_box{
		width: 100%;
		.customer_box_top{
			width: 100%;
			height: 100px;
			background: #e6e6e6;
		}
	}
</style>