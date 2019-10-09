
<template>
<div>
	<!-- //banner --> 
	<Header></Header>
	<Menubar></Menubar>
	<Slider></Slider>	
    <div class="banner-bottom">
		<div class="container">
			<div class="col-md-5 wthree_banner_bottom_left">
				<div class="video-img">
					<a class="play-icon popup-with-zoom-anim" href="#small-dialog">
						<span class="glyphicon glyphicon-expand" aria-hidden="true"></span>
					</a>
				</div> 
				<div id="small-dialog" class="mfp-hide"></div> 
			</div>
			<div class="col-md-7 wthree_banner_bottom_right">
				<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
					<ul id="myTab" class="nav nav-tabs" role="tablist">
						<li role="presentation"  class="active col-md-4"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home">Mobiles</a></li>
						<li role="presentation" class="col-md-4"><a href="#audio" role="tab" id="audio-tab" data-toggle="tab" aria-controls="audio">Audio</a></li>
						<li role="presentation" class="col-md-4"><a href="#video" role="tab" id="video-tab" data-toggle="tab" aria-controls="video">Computer</a></li>
					</ul>
					<div id="myTabContent" class="tab-content">
						<div role="tabpanel" class="tab-pane fade active in" id="home" aria-labelledby="home-tab">
							
							<div class="agile_ecommerce_tabs">
								<div class="col-md-4 agile_ecommerce_tab_left" v-for="mobile in mobile_datas" v-bind:key="mobile.id">
									<div class="hs-wrapper">
										<img :src="getImgUrl(mobile.image)" style="height: 276px !important;"  class="img-responsive" />
									</div> 
									<h5><router-link :to="'/product_details/' + mobile.id">{{mobile.product_name}}</router-link></h5>
									<div class="simpleCart_shelfItem">
										<p><span>${{mobile.original_price}}</span> <i class="item_price">${{mobile.product_price}}</i></p>
									</div>
								</div>
								<!-- <div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img src="@/assets/images/4.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/5.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/6.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/7.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/3.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/4.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/5.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/6.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a href="single.html">Mobile Phone2</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$330</span> <i class="item_price">$302</i></p>
										<form action="#" method="post">
											<input type="hidden" name="cmd" value="_cart" />
											<input type="hidden" name="add" value="1" /> 
											<input type="hidden" name="w3ls_item" value="Mobile Phone2" /> 
											<input type="hidden" name="amount" value="302.00" />   
											<button type="submit" class="w3ls-cart">Add to cart</button>
										</form>
									</div>
								</div>
								<div class="col-md-4 agile_ecommerce_tab_left">
									<div class="hs-wrapper">
										<img src="@/assets/images/7.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/6.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/4.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/3.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/5.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/7.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/4.jpg" alt=" " class="img-responsive" />
										<img src="@/assets/images/6.jpg" alt=" " class="img-responsive" />
										<div class="w3_hs_bottom">
											<ul>
												<li>
													<a href="#" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
												</li>
											</ul>
										</div>
									</div>
									<h5><a href="single.html">Mobile Phone3</a></h5>
									<div class="simpleCart_shelfItem">
										<p><span>$250</span> <i class="item_price">$245</i></p>
										<form action="#" method="post">
											<input type="hidden" name="cmd" value="_cart" />
											<input type="hidden" name="add" value="1" /> 
											<input type="hidden" name="w3ls_item" value="Mobile Phone3" /> 
											<input type="hidden" name="amount" value="245.00"/>   
											<button type="submit" class="w3ls-cart">Add to cart</button>
										</form>
									</div>
								</div> -->
								<div class="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="audio" aria-labelledby="audio-tab">
							<div class="agile_ecommerce_tabs">
								<div class="col-md-4 agile_ecommerce_tab_left" v-for="audio in audio_datas" v-bind:key="audio.id">
									<div class="hs-wrapper">
										<img :src="getImgUrl(audio.image)" style="height: 276px !important;"  class="img-responsive" />
									</div>
									<h5><router-link :to="'/product_details/' + audio.id">{{audio.product_name}}</router-link></h5>
									
									<div class="simpleCart_shelfItem">
										<p><span>${{audio.original_price}}</span> <i class="item_price">${{audio.product_price}}</i></p>
									</div>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="video" aria-labelledby="video-tab">
							<div class="agile_ecommerce_tabs">
								<div class="col-md-4 agile_ecommerce_tab_left" v-for="laptop in laptop_datas" v-bind:key="laptop.id">
									<div class="hs-wrapper">
										<img :src="getImgUrl(laptop.image)" style="height: 276px !important;"  class="img-responsive" />
									</div>
									<h5><router-link :to="'/product_details/' + laptop.id">{{laptop.product_name}}</router-link></h5>
									
									<div class="simpleCart_shelfItem">
										<p><span>${{laptop.original_price}}</span> <i class="item_price">${{laptop.product_price}}</i></p>
									</div>
								</div>
								<div class="clearfix"> </div>
							</div>
						</div>
						
					</div>
				</div> 
			</div>
			<div class="clearfix"> </div>
		</div>
    </div>
        <!-- top-brands -->
		<!-- banner-bottom1 -->
	<div class="banner-bottom1">
		<div class="agileinfo_banner_bottom1_grids">
			<div class="col-md-7 agileinfo_banner_bottom1_grid_left">
				<h3>Grand Opening Event With flat<span>20% <i>Discount</i></span></h3>
				<router-link to="/product">Shop Now</router-link>
			</div>
			<div class="col-md-5 agileinfo_banner_bottom1_grid_right">
				<h4>hot deal</h4>
				<div class="timer_wrap">
					<div id="counter"> </div>
				</div>
				<!-- <script src="js/jquery.countdown.js"></script>
				<script src="js/script.js"></script> -->
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
	<!-- //banner-bottom1 --> 
	<!-- special-deals -->
	<div class="special-deals">
		<div class="container">
			<h2>Special Deals</h2>
			<div class="w3agile_special_deals_grids">
				<div class="col-md-7 w3agile_special_deals_grid_left">
					<div class="w3agile_special_deals_grid_left_grid">
						<img src="@/assets/images/21.jpg" alt=" " class="img-responsive" />
						<div class="w3agile_special_deals_grid_left_grid_pos1">
							<h5>30%<span>Off/-</span></h5>
						</div>
						<div class="w3agile_special_deals_grid_left_grid_pos">
							<h4>We Offer <span>Best Products</span></h4>
						</div>
					</div>
					<hooper style="height: 281px" :itemsToShow="1" :progress="true" :autoPlay="true" :playSpeed="2000">
						<slide>
							<div class="banner-wrap" style="height:281px;" >
								<div class="w3agile_special_deals_grid_left_grid1">
									<img src="@/assets/images/t1.png" alt=" " class="img-responsive" />
									<p>Quis autem vel eum iure reprehenderit qui in ea voluptate 
										velit esse quam nihil molestiae consequatur, vel illum qui dolorem 
										eum fugiat quo voluptas nulla pariatur</p>
									<h4>Laura</h4>
								</div>
							</div>
						</slide>
						<slide>
							<div class="banner-wrap" style="height:281px;">
								<div class="w3agile_special_deals_grid_left_grid1">
									<img src="@/assets/images/t2.png" alt=" " class="img-responsive" />
									<p>Quis autem vel eum iure reprehenderit qui in ea voluptate 
										velit esse quam nihil molestiae consequatur, vel illum qui dolorem 
										eum fugiat quo voluptas nulla pariatur</p>
									<h4>Michael</h4>
								</div>
							</div>
						</slide>
						<slide>
							<div class="banner-wrap" style="height:281px;">
								<div class="w3agile_special_deals_grid_left_grid1">
									<img src="@/assets/images/t3.png" alt=" " class="img-responsive" />
									<p>Quis autem vel eum iure reprehenderit qui in ea voluptate 
										velit esse quam nihil molestiae consequatur, vel illum qui dolorem 
										eum fugiat quo voluptas nulla pariatur</p>
									<h4>Rosy</h4>
								</div>
							</div>
						</slide>
					</hooper>
						<!-- <script src="js/jquery.wmuSlider.js"></script> 
						<script>
							$('.example1').wmuSlider();         
						</script> --> 
				</div>
				<div class="col-md-5 w3agile_special_deals_grid_right">
					<img src="@/assets/images/20.jpg" alt=" " class="img-responsive" />
					<div class="w3agile_special_deals_grid_right_pos">
						<h4>Women's <span>Special</span></h4>
						<h5>save up <span>to</span> 30%</h5>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
	
	<!-- new-products -->
	<div class="new-products">
		<div class="container">
			<h3>New Products</h3>
			<div class="agileinfo_new_products_grids">
				<div class="col-md-3 agileinfo_new_products_grid" v-for="new_product in new_products" v-bind:key="new_product.id">
					<div class="agile_ecommerce_tab_left agileinfo_new_products_grid1">
						<div class="hs-wrapper hs-wrapper1">
							<img :src="getImgUrl(new_product.image)"  style="height: 276px !important;" alt=" " class="img-responsive" />
						</div>
						<h5><router-link :to="'/product_details/' + new_product.id">{{new_product.product_name}}</router-link></h5>
						
						<div class="simpleCart_shelfItem">
							<p><span>${{new_product.original_price}}</span> <i class="item_price">${{new_product.product_price}}</i></p>
						</div>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
	<!--top-brands -->
	<div class="top-brands">
		<div class="container">
			<h3>Top Brands</h3>
			<div class="sliderfig">
				<hooper :itemsToShow="3" :progress="true" :autoPlay="true" :playSpeed="2000">
					<slide>
						<img src="@/assets/images/tb1.jpg" alt=" " class="img-responsive" />
					</slide>
					<slide>
						<img src="@/assets/images/tb2.jpg" alt=" " class="img-responsive" />
					</slide>
					<slide>
						<img src="@/assets/images/tb3.jpg" alt=" " class="img-responsive" />
					</slide>
					<slide>
						<img src="@/assets/images/tb4.jpg" alt=" " class="img-responsive" />
					</slide>
					<slide>
						<img src="@/assets/images/tb5.jpg" alt=" " class="img-responsive" />
					</slide>
				</hooper>
				<!-- <ul id="flexiselDemo1">			
					<li>
						<img src="@/assets/images/tb1.jpg" alt=" " class="img-responsive" />
					</li>
					<li>
						<img src="@/assets/images/tb2.jpg" alt=" " class="img-responsive" />
					</li>
					<li>
						<img src="@/assets/images/tb3.jpg" alt=" " class="img-responsive" />
					</li>
					<li>
						<img src="@/assets/images/tb4.jpg" alt=" " class="img-responsive" />
					</li>
					<li>
						<img src="@/assets/images/tb5.jpg" alt=" " class="img-responsive" />
					</li>
				</ul> -->
			</div>
		</div>
	</div>
	
	<!-- //top-brands --> 
	<Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Menubar from '@/components/Menubar.vue';
import Slider from '@/components/Slider.vue';
import Footer from '@/components/Footer.vue';
//import axios from 'axios';
import { Hooper, Slide } from 'hooper';
/* import { TabComponent, TabPlugin } from '@syncfusion/ej2-vue-navigations'; */
import 'hooper/dist/hooper.css';
export default {
	components: {
	  Header,
	  Menubar,
	  Footer,
	  Slider,
      Hooper,
	  Slide, 
	},
	props: {select_menu:'',},
	data () {
		return {
			mobile_datas: [],	
			audio_datas: [],	
			laptop_datas: [],
			new_products: []	
		}
    },
 	mounted() {
		this.fillData(); 
	},
	methods:{
		toggleMessage(loaddata) {
			this.$router.replace({ path: 'product' });
			var select_menu = loaddata;
			 axios.get('/product_category/'+ loaddata)
			.then((response) => {
                this.products = response.data.data.product;
                this.related_products = response.data.data.related_product;
                let count = response.data.data.count;
			})
			.catch(function (error) {
				console.log(error);
			}); 
        },
		getImgUrl(pic) {
			return require('../assets/images/'+pic)
		},
		fillData () {
			axios.get('/product/3')
			.then((response) => {
				// handle success
				console.log(response.data.data);
				this.mobile_datas = response.data.data.mobile;
				this.audio_datas = response.data.data.audio;
				this.laptop_datas = response.data.data.laptop;
				this.new_products = response.data.data.new_product;
				console.log(this.new_products);
				
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	},	    	
}
import "@/assets/js/jquery.flexisel.js";
</script>
<style>
</style>
