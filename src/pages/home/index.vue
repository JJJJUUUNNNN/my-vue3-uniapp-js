<template>
	<view class="container">
		<view class="nav-bar">
			<view class="title">移动客户管理平台</view>
		</view>
		<view class="banner">
			<image mode="widthFix" class="image" src="https://files.axshare.com/gsc/5UOGIT/95/ab/c0/95abc018a8ad4277b311f253c28dba84/images/%E7%A7%BB%E5%8A%A8%E5%AE%A2%E6%88%B7%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/u56.png?pageId=86fb2f17-ea96-48fa-b262-8bbabd31a75c"></image>
		</view>
		<view class="statistics-box">
			<view class="statistics">
				<view class="data-statistics item">
					<view class="top">
						<text>数据统计</text>
						<text class="more" @click="checkMore">查看更多>></text>
					</view>
					<view class="data-item-box">
						<view class="data-item">
						<text class="count">852</text>
						<text class="title">登记客户数</text>
					</view>
					<view class="data-item">
						<text class="count">85</text>
						<text class="title">登记集团数</text>
					</view>
					</view>
				</view>
				<view class="info">
					<view class="personal-info item" @click="setPersonalInfo">
						<image class="image" src="https://files.axshare.com/gsc/5UOGIT/95/ab/c0/95abc018a8ad4277b311f253c28dba84/images/%E7%A7%BB%E5%8A%A8%E5%AE%A2%E6%88%B7%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/u51.svg?pageId=86fb2f17-ea96-48fa-b262-8bbabd31a75c"></image>
						<text>个人/家庭信息登记</text>
					</view>
					<view class="company-produc item" @click="setCompanyProducInfo">
						<image class="image" src="https://files.axshare.com/gsc/5UOGIT/95/ab/c0/95abc018a8ad4277b311f253c28dba84/images/%E7%A7%BB%E5%8A%A8%E5%AE%A2%E6%88%B7%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/u54.png?pageId=86fb2f17-ea96-48fa-b262-8bbabd31a75c"></image>
						<text>集团产品信息登记</text>
					</view>
				</view>
			</view>
		</view>

		<view class="empty"></view>

		<view class="section">
			<view class="section-icon"></view>
			<text>通知公告</text>
			<view @click="handleMessage">未读消息 <text class="num">3</text></view>
		</view>

		<view class="list" v-for="(item,index) in 2" :key="index" @click="getDetail">
			<view class="item-box">
				<view class="text">
					<view class="title">关于用户信息管理方式</view>
					<view class="info">发布于：铁通公司 2022年5月1日</view>
				</view>
				<view class="right">></view>
			</view>
		</view>

		<view class="nav-footer">
			<view class="item">
				<uni-icons custom-prefix="custom-icon" type="home-filled" size="30"></uni-icons>
				<text>首页</text>
			</view>
			<view class="item">
				<uni-icons custom-prefix="custom-icon" type="search" size="30"></uni-icons>
				<text>查询</text>
			</view>
			<view class="item">
				<uni-icons custom-prefix="custom-icon" type="person-filled" size="30"></uni-icons>
				<text>个人中心</text>
			</view>
		</view>
	</view>
</template>

<script setup>

function checkMore(){
	console.log('统计数据')
	uni.navigateTo({
		url:'/pages/statistics/dataStatistics'
	})
}

function setPersonalInfo(){
	console.log('个人信息登记')
	uni.navigateTo({
		url:'/pages/statistics/personalInfo'
	})
}

function setCompanyProducInfo(){
	console.log('集团产品信息登记')
	uni.navigateTo({
		url:'/pages/statistics/companyProductInfo'
	})
}

function handleMessage(){
	console.log('通知公告')
	uni.navigateTo({
		url:'/pages/announcement/index'
	})
}

function getDetail(){
	console.log('平台通知公告')
	uni.navigateTo({
		url:'/pages/announcement/platformAnnouncement/index'
	})
}
</script>

<style lang="scss">
page{
	position: relative;
}
	.container {
		font-size: 14px;
		line-height: 24px;
		box-sizing: border-box;
		
		.nav-bar{
			position: relative;
			height: 4rem;
			padding-left: 0.625rem;

			.title{
				position: absolute;
				font-weight: 700;
				top: 1.8rem;
			}
		}

		.banner{
			width: 100%;

			.image{
				width: 100%;
			}
		}

		.statistics-box{
			position: relative;
			width: 100%;

			.statistics{
				width: 100%;
				position: absolute;
				top: -70px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

			.item{
				background-color: #f2f2f2;
			}

			.data-statistics{
				width: 20.5625rem;
				border-radius: 0.625rem;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
				padding: 0.9375rem;
				box-sizing: border-box;

				.top{
					display: flex;
					justify-content: space-between;
					align-items: center;

					.more{
						color:#aaa
					}
				}

				.data-item-box{
					display: flex;
					justify-content: space-between;
					margin: 0 1.875rem;

					.data-item{
						display: flex;
						flex-direction: column;
						align-items: center;
						padding: 0.625rem;

						.count{
							color:#666EE8;
							font-size: 1.25rem;
						}

						.title{
							color:#333
						}
					}
				}
				
			}

			.info{
				display: flex;
				width: 20.5625rem;
				height: 5.9375rem;
				justify-content: space-between;
				align-items: center;

				.item{
					width: 9.625rem;
					height: 4.9375rem;
					border-radius: 0.3125rem;
					display: flex;
					align-items: center;
					padding: 0.625rem;
					box-sizing: border-box;

					.image{
						width: 2.0625rem;
						height: 1.6875rem;
						margin: 
						9px;
					}
				}
			}
			
			
		}
	}

	.empty{
		height: 160px;
	}

	.section{
		position: relative;
		display: flex;
		justify-content: space-between;
		padding: 0 30px;

		.section-icon{
			height: 0.9375rem;
			position: absolute;
			top: 2px;
			left: 20px;
			border: 0.125rem solid #d9001bfe;
		}

		.num{
				color: #d9001bfe;
			}
	}

	.list{
		margin: 10px 0;
		border-bottom: 0.0625rem solid #ccc;
		padding: 0.3125rem;
		box-sizing: border-box;

		.item-box{
			display: flex;
			justify-content: space-between;
			padding: 0.3125rem 0.625rem;

			.info{
				color:#999999;
				font-size: 0.75rem;
			}

			.right{
				color:#999999;
				font-size: 1.25rem;
			}
		}
	}

	.nav-footer{
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		border-top: 1px solid #ccc;
		padding: 0.625rem 0;
		margin-top: 100px;

		.item{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
	
}
</style>
