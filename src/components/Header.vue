<template>
<div>
	<div class="modal fade" id="myModal88" tabindex="-1" role="dialog" aria-labelledby="myModal88"
		aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
						&times;</button>
					<h4 class="modal-title" id="myModalLabel">Don't Wait, Login now!</h4>
				</div>
				<div class="modal-body modal-body-sub">
					<div class="row">
						<div class="col-md-8 modal_body_left modal_body_left1" style="border-right: 1px dotted #C2C2C2;padding-right:3em;">
							<ul id="myTabs" class="nav nav-pills nav-justified" role="tablist" data-tabs="tabs">
								<li class="active"><a href="#sign_in" data-toggle="tab">SIGN IN</a></li>
								<li><a href="#sign_up" data-toggle="tab">SIGN UP</a></li>
							</ul>
							<div class="tab-content">
								<div role="tabpanel" class="tab-pane fade in active" id="sign_in">
									<div class="facts" style="margin-top:20px">
										<div class="register">
											<form autocomplete="off" @submit.prevent="login" method="post">			
												<input name="Email" placeholder="Email Address" type="text" required="">						
												<input name="Password" placeholder="Password" type="password" required="">										
												<div class="sign-up">
													<input class="btn btn-default" type="submit" value="Sign in"/>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div role="tabpanel" class="tab-pane fade" id="sign_up">
									<div class="facts" style="margin-top:20px">
										<div class="register">
											<form  @submit="formSubmit">			
												<input placeholder="Name" v-model="name" name="Name" type="text" required="">
												<input placeholder="Email Address" v-model="email" name="Email" type="email" required="">	
												<input placeholder="Password" v-model="password" name="Password" type="password" required="">	
												<input placeholder="Confirm Password" v-model="c_password" name="Password" type="password" required="">
												<div class="sign-up">
													<!-- <input class="btn btn-default" type="submit" value="Create Account"/> -->
													<button type="submit" class="btn btn-default">Create Account</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div id="OR" class="hidden-xs">OR</div>
						</div>
						<div class="col-md-4 modal_body_right modal_body_right1">
							<div class="row text-center sign-with">
								<div class="col-md-12">
									<h3 class="other-nw">Sign in with</h3>
								</div>
								<div class="col-md-12">
									<ul class="social">
										<li class="social_facebook"><a href="#" class="entypo-facebook"></a></li>
										<li class="social_dribbble"><a href="#" class="entypo-dribbble"></a></li>
										<li class="social_twitter"><a href="#" class="entypo-twitter"></a></li>
										<li class="social_behance"><a href="#" class="entypo-behance"></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <div>
		<div class="container">
			<!-- <div class="w3l_login">
				<a href="#" data-toggle="modal" data-target="#myModal88"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></a>
			</div> -->
			<div class="w3l_logo">
				<h1><!-- <a :href="">Electronic Store<span>Your stores. Your place.</span></a> -->
				<router-link to="/">Electronic Store<span>Your stores. Your place.</span></router-link></h1>
			</div>
			<div class="search">
				<input class="search_box" v-model="search_text" type="checkbox" id="search_box">
				<label class="icon-search" for="search_box"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></label>
				<div class="search_form">
					<div class="">
						<input type="text" @input="addEvent" @change="addEvent"/>
						<ul class="list-group" style="width: 380px; height: 140px; overflow: auto" v-if="search_result">
							<li class="list-group-item"  v-for="search in search_result"  v-bind:key="search.id">
								<router-link to=""  @click.native="first(search.id)" >{{search.product_name}}</router-link>
							</li>
							<li class="list-group-item" v-if="search_result.length === 0">
								No Product Found <span>{{search_text}}</span>
							</li>
						</ul>
						
					</div>
				</div>
			</div>
			<!-- <div class="cart cart box_1"> 
				<form action="#" method="post" class="last"> 
					<input type="hidden" name="cmd" value="_cart" />
					<input type="hidden" name="display" value="1" />
					<button class="w3view-cart" type="submit" name="submit" value=""><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
				</form>   
			</div> -->  
		</div>
	</div>
</div>
</template>
<script>
import jQuery from 'jquery'
jQuery(document).ready(function () {	
});
/* import { API_BASE_URL } from '../config' */
export default {

	mounted() {
        //console.log('Component mounted.')
	},
 	//props: ['first', 'second', 'third'],
	data() {
		return {
		fields: {},
		errors: {},
		search: '',
		results: [],
		search_result:{},
		search_text: '',
		isOpen: false,
		name: '',
    	description: '',
		output: '',
		email:'',
		password:'',
		c_password:'',
		}
	},
	methods: {
		 formSubmit(e) {
			e.preventDefault();
			let currentObj = this;
			axios.post('/register', {
				name: this.name,
				email: this.email,
				password: this.password,
				c_password: this.c_password
				
			})
			.then(function (response) {
				currentObj.output = response.data;
			})
			.catch(function (error) {
				currentObj.output = error;
			});
		},
		addEvent({target}) {
			 var serach_product = target.value;
			 //alert(serach_product.length);
			 if(serach_product.length > 1){
				axios.get('/product_search/'+ serach_product)
				.then((response) => {
					this.search_result = response.data.data.product;
				/* this.related_products = response.data.data.related_product;
					this.count = response.data.data.count; */
					console.log(response.data.data.product);
				})
				.catch(function (error) {
					console.log(error);
				});
			 }
		},
		first(id){
			var lastURLSegment = (window.location.href.split('/'));
			var final_url = lastURLSegment[lastURLSegment.length-2];
			if(final_url == "product_details"){
				this.$parent.reload_product(id);
			}
			else{
				this.$router.push({ path: `/product_details/${id}` })
			}
		}	
	},
}
</script>

<style>

</style>
