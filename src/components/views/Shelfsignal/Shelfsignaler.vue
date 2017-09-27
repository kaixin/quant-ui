<template>

	<div id="shelf-store">
		<div class="shelf-header">
			<img src="../../../../static/go-back.png">
			<span>上架到策略商城</span>
		</div>
		<div class="shelf-text">
			<div class="shelf-text-text">
				<img src="../../../../static/Shelfsignaler/icon_shangjiazuo.png"/>
				<span>上架必读</span>
				<img src="../../../../static/Shelfsignaler/icon_shangjiayou.png"/>
			</div>
			<p class="shelf-standard">1、命名的规范：（标的股票、期货等）—频率—信号名称—信号类别（官方给出选项）</p>
			<p class="shelf-standard">2、信号商城只发布相对独立的信号，经过审核和信息池相关性达到一定标准后即可发布</p>
			<p class="shelf-standard">3、信号说明完整、思路清晰方便审核</p>
		<form action="" class="form">
			<div class="inputDiv">
				<img src="../../../../static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>交易名称</span>
				<input type="text" placeholder="建议策略名称要有吸引力，提高成单量"/>
			</div>
			<div class="inputDiv">
				<img src="../../../../static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>选择分类</span>
				<select name="">
					<option value="">请选择分类</option>
					<option value="">请选择分类</option>
					<option value="">请选择分类</option>
					<option value="">请选择分类</option>
				</select>
			</div>
			<div class="inputDiv">
				<img src="../../../../static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>交易思路</span>
				<textarea name="" rows="" cols="" placeholder="请简要描述交易思路"></textarea>
			</div>
			<div class="inputDiv">
				<img src="../../../../static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>策略优势</span>
				<textarea name="" rows="" cols="" placeholder="请简要描述策略优势"></textarea>
			</div>
			<div class="inputDiv">
				<img src="../../../../static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>选择模拟交易</span>
				<select name="">
					<option value="">模拟交易1</option>
				</select>
			</div>
			<div class="inputDiv">
				<img src="../../../../static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>适合资金</span>
				<input type="text" placeholder="例如：1000"/>
				<span class="money">万元</span>
			</div>
			<div class="inputDiv">
				<img src="../../../../static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>适合的价格</span>
				<input type="text" placeholder="例如：1000"/>
				<span class="money">元</span>
			</div>
			<div class="shelf-sure">
				<img src="../../../../static/Shelfsignaler/icon_weigouxuan.png"/>
				<span>勾选择视为同意根据平台信号优劣，对价格进行调整</span>
			</div>
			<div class="shelf-btn">
				<button class="btn">提交</button>
			</div>
		</form>
		</div>
		<div class="shelf-foot"></div>
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar"
import FooterBar from "@/components/layout/FooterBar"

export default {

	data() {
		
	},
}
</script>
</script>

<style lang="scss">
	body{
		overflow-x: hidden;
	}
	input{
		border: none;
	}
	select{
		border: none;
	}
	.shelf-header{
		width: 100%;
		height: 62px;
		background: #e6e6e6;
		margin-bottom: 42px;
		padding-left:15%;
		img{
			display: inline-block;
			margin-top: 24px;
			margin-right: 14px;
		}
		span{
			display: inline-block;
			font-size: 22px;
			color: #666666;
		}
	}
	.shelf-text{
		width: 600px;
		margin: auto;
		.shelf-text-text{
			width: 250px;
			height: 20px;
			margin:0 auto 24px;
			span{
				display: inline-block;
				margin: 0 20px;
				font-size: 20px;
				color: #00AEFC;
			}
		}
		.shelf-standard{
			font-size: 14px;
			color: #666666;
		}
		.form{
			margin-top: 52px;
			margin-left: 25px;
			.inputDiv{
				width: 578px;
				/*height: 30px;*/
				margin-bottom:30px;
				position:relative;
				span{
					display: inline-block;
					font-size: 16px;
					color: #333333;
					margin-bottom: 10px;
				}
				input{
					display: block;
					width: 578px;
					height: 30px;
					border-bottom:1px solid #dcdcdc;
					font-size: 14px;
					color: #999999;
					position: relative;
				}
				.money{
						display: inline-block;
						position: absolute;
						right: 0;
						bottom: 0;
					}
				select{
					display: block;
					width: 578px;
					height: 30px;
					border-bottom:1px solid #dcdcdc;
					font-size: 14px;
					color: #999999;
				}
				textarea{
					display: block;
					padding: 16px 20px;
					width: 538px;
					height: 50px;
					font-size: 14px;
					color: #999999;
					background: #F5F5F5;
					border:1px solid #dcdcdc;
					border-radius: 4px;
					opacity:1;
				}
			}
			.shelf-sure{
				width: 100%;
				height: 20PX;
				margin-top: -20px;
				img{
					display: inline-block;
					float: left;
					margin-right: 10px;
				}
				span{
					display: inline-block;
					float: left;
					line-height: 15px;
					font-size: 12px;
					color: #F5B050;
				}			
			}
			.shelf-btn{
				width: 100%;
				margin-top: 48px;
				.btn{
					width: 200px;
					height: 38px;
					background: #00AEFC;
					opacity: 0.5;
					font-size: 16px;
					color: #ffffff;
					text-align: center;
					border: none;
					border-radius: 19px;
					margin-left: 180px;
					margin-bottom: 40px;
				}
			}
		}
	}
	.shelf-foot{
		width: 100%;
		height: 20px;
		background: #e6e6e6;
	}
</style>