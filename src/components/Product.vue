<template>
   <div>
        <Header></Header>
	    <Menubar></Menubar>
        <!-- banner -->
        <div class="banner banner1">
            <div class="container">
                <h2>Great Offers on <span>Mobiles</span> Flat <i>35% Discount</i></h2> 
            </div>
        </div> 
        <!-- breadcrumbs -->
        <div class="breadcrumb_dress">
            <div class="container">
                <ul>
                    <li><router-link to="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</router-link> <i>/</i></li>
                    <li>Products</li>
                   
                </ul>
            </div>
        </div>
        <!-- //breadcrumbs --> 
        <!-- mobiles -->
        <div class="mobiles">
            <div class="container">
                <div class="w3ls_mobiles_grids">
                    <div class="col-md-4 w3ls_mobiles_grid_left">
                        <div class="w3ls_mobiles_grid_left_grid">
                            <h3>Categories</h3>
                            <div class="w3ls_mobiles_grid_left_grid_sub">
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingOne">
                                    <h4 class="panel-title asd">
                                        <a class="pa_italic" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span><i class="glyphicon glyphicon-minus" aria-hidden="true"></i>Products
                                        </a>
                                    </h4>
                                    </div>
                                    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="panel-body panel_text">
                                        <ul>
                                            
                                            <li><a class="" href="#" @click.prevent="toggleMessage('Mobile')">Mobile</a></li>
                                            <li><a class="" href="#" @click.prevent="toggleMessage('Laptop')">Laptop</a></li>
                                            <li><a class="" href="#" @click.prevent="toggleMessage('Tv')">Tv</a></li>
                                            <li><a class="" href="#" @click.prevent="toggleMessage('Home Applience')">Home Applience</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title asd">
                                        <a class="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span><i class="glyphicon glyphicon-minus" aria-hidden="true"></i>Accessories
                                        </a>
                                    </h4>
                                    </div>
                                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div class="panel-body panel_text">
                                        <ul>
                                            <li><a class="" href="#" @click.prevent="toggleMessage('heater')">Heater</a></li>
                                            <li><a class="" href="#" @click.prevent="toggleMessage('kids')">Kid's Toys</a></li>
                                            <li><a class="" href="#" @click.prevent="toggleMessage('filter')">Filters</a></li>
                                            <li><a class="" href="#" @click.prevent="toggleMessage('ac')">AC</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <ul class="panel_bottom">
                                   <!--  <li><a href="products.html">Summer Store</a></li>
                                    <li><a href="products.html">Featured Brands</a></li> -->
                                    <li><a href="products.html">Today's Deals</a></li>
                                    <!-- <li><a href="products.html">Latest Watches</a></li> -->
                                </ul>
                            </div>
                        </div>
                       <!--  <div class="w3ls_mobiles_grid_left_grid">
                            <h3>Color</h3>
                            <div class="w3ls_mobiles_grid_left_grid_sub">
                                <div class="ecommerce_color">
                                    <ul>
                                        <li><a href="#"><i></i> Red(5)</a></li>
                                        <li><a href="#"><i></i> Brown(2)</a></li>
                                        <li><a href="#"><i></i> Yellow(3)</a></li>
                                        <li><a href="#"><i></i> Violet(6)</a></li>
                                        <li><a href="#"><i></i> Orange(2)</a></li>
                                        <li><a href="#"><i></i> Blue(1)</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> -->
                        <div class="w3ls_mobiles_grid_left_grid">
                            <h3>Price</h3>
                            <div class="w3ls_mobiles_grid_left_grid_sub">
                                <div class="ecommerce_color ecommerce_size">
                                    <ul>
                                        <li><a class="price_filter" href="#" @click.prevent="price_filter(0,100)">Below $ 100</a></li>
                                        <li><a class="price_filter" href="#" @click.prevent="price_filter(100,300)">$ 100-300</a></li>
                                        <li><a class="price_filter" href="#" @click.prevent="price_filter(300,500)">$ 300-500</a></li>
                                        <li><a class="price_filter" href="#" @click.prevent="price_filter(500,800)">$ 500-800</a></li>
                                        <li><a class="price_filter" href="#" @click.prevent="price_filter(800,1800)">$ Above 800</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 w3ls_mobiles_grid_right">
                        <div class="col-md-6 w3ls_mobiles_grid_right_left">
                            <div class="w3ls_mobiles_grid_right_grid1">
                                <img src="@/assets/images/46.jpg" alt=" " class="img-responsive" />
                                <div class="w3ls_mobiles_grid_right_grid1_pos1">
                                    <h3>Smart Phones<span>Up To</span> 15% Discount</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 w3ls_mobiles_grid_right_left">
                            <div class="w3ls_mobiles_grid_right_grid1">
                                <img src="@/assets/images/47.jpg" alt=" " class="img-responsive" />
                                <div class="w3ls_mobiles_grid_right_grid1_pos">
                                    <h3>Top 10 Latest<span>Mobile </span>& Accessories</h3>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"> </div>

                        <div class="w3ls_mobiles_grid_right_grid2">
                            <div class="w3ls_mobiles_grid_right_grid2_left">
                            <h3>{{current_product}}</h3><h3>Showing Results: {{count}}</h3>
                            </div>
                            <div class="w3ls_mobiles_grid_right_grid2_right">
                                <select name="select_item" id="select_item" class="select_item"  @change="sorting($event)">
                                    <option selected="selected" value="all">Default sorting</option>
                                    <option value="new">Sort by newness</option>
                                    <option value="lowtohigh">Sort by price: low to high</option>
                                    <option value="hightolow">Sort by price: high to low</option>
                                </select>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <!-- <span v-html="HTMLcontent"></span> -->
                        <div class="w3ls_mobiles_grid_right_grid3">
                            <div class="col-md-4"  v-for="product in products" v-bind:key="product.id" style="margin-bottom: 20px;">
                                <div class="agile_ecommerce_tab_left mobiles_grid agileinfo_new_products_grid agileinfo_new_products_grid_mobiles">
                                    <div class="hs-wrapper hs-wrapper2">
                                        <div class="w3_hs_bottom w3_hs_bottom_sub1">
                                            <ul>
                                                <li>
                                                    <a href="#" data-toggle="modal" :data-target="'#'+product.id"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <img :src="getImgUrl(product.image)"  style="height: 276px !important;" alt=" " class="img-responsive" />
                                        
                                    </div>
                                    <h5><router-link :to="'/product_details/' + product.id">{{product.product_name}}</router-link></h5>
                                    <div class="simpleCart_shelfItem">
                                        <p><span>${{product.original_price}}</span> <i class="item_price">${{product.product_price}}</i></p>
                                    </div>
                                    <div class="mobiles_grid_pos" v-if="product.new_product == 1">
									    <h6>New</h6>
								    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>  
        <div class="modal video-modal fade" v-for="product in products" v-bind:key="product.id" :id="product.id" tabindex="-1" role="dialog" aria-labelledby="myModal9">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
                    </div>
                    <section>
                        <div class="modal-body">
                            <div class="col-md-5 modal_body_left">
                                <img :src="getImgUrl(product.image)" v-on:mousemove='imageMouseMove($event)' alt=" " class="img-responsive" />
                            </div>
                            <div class="col-md-7 modal_body_right">
                                <h4>{{product.product_name}} </h4>
                                <p>{{product.product_description}}</p>
                               <!--  <div class="rating">
                                    <div class="rating-left">
                                        <img src="@/assets/images/star-.png" alt=" " class="img-responsive" />
                                    </div>
                                    <div class="rating-left">
                                        <img src="@/assets/images/star-.png" alt=" " class="img-responsive" />
                                    </div>
                                    <div class="rating-left">
                                        <img src="@/assets/images/star-.png" alt=" " class="img-responsive" />
                                    </div>
                                    <div class="rating-left">
                                        <img src="@/assets/images/star.png" alt=" " class="img-responsive" />
                                    </div>
                                    <div class="rating-left">
                                        <img src="@/assets/images/star.png" alt=" " class="img-responsive" />
                                    </div>
                                    <div class="clearfix"> </div>
                                </div> -->
                                
                                <div class="modal_body_right_cart simpleCart_shelfItem">
                                    <p><span>${{product.original_price}}</span> <i class="item_price">${{product.product_price}}</i></p>
                                    <!-- <form action="#" method="post">
                                        <input type="hidden" name="cmd" value="_cart" />
                                        <input type="hidden" name="add" value="1" /> 
                                        <input type="hidden" name="w3ls_item" value="Smart Phone" /> 
                                        <input type="hidden" name="amount" value="245.00"/>   
                                        <button type="submit" class="w3ls-cart">Add to cart</button>
                                    </form> -->
                                    
                                </div>
                                	
                                <!-- <h5>Color</h5>
                                <div class="color-quality">
                                    <ul>
                                        <li><a href="#"><span></span></a></li>
                                        <li><a href="#" class="brown"><span></span></a></li>
                                        <li><a href="#" class="purple"><span></span></a></li>
                                        <li><a href="#" class="gray"><span></span></a></li>
                                    </ul>
                                </div> -->
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <!-- Related Products -->
        <div class="w3l_related_products">
            <div class="container">
                <h3>Other Products</h3>
                <ul>	
                    <hooper :itemsToShow="4" :progress="true" :autoPlay="true" :playSpeed="2000" style="height:500px">	
                    <slide  v-for="related_product in related_products" v-bind:key="related_product.id"  > 
                        <div class="w3l_related_products_grid">
                            <div class="agile_ecommerce_tab_left">
                                <div class="hs-wrapper">
                                   <img :src="getImgUrl(related_product.image)"  style="height: 275px !important;" alt=" " class="img-responsive" />
                                   <!--  <div class="w3_hs_bottom" style="width:208px !important;">
                                        <div class="flex_ecommerce">
                                            <a href="#" data-toggle="modal" data-target="#myModal6"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                        </div>
                                    </div> -->
                                </div>
                                <h5><router-link :to="'/product_details/' + related_product.id">{{related_product.product_name}}</router-link></h5>
                                
                                <div class="simpleCart_shelfItem"> 
                                    <p class="flexisel_ecommerce_cart"><span>${{related_product.original_price}}</span> <i class="item_price">${{related_product.product_price}}</i></p>
                                </div>
                            </div>
                        </div>
                    </slide>
                   </hooper>
                </ul>     
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Menubar from '@/components/Menubar.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import { Hooper, Slide } from 'hooper';

export default {
    components: {
	  Header,
	  Menubar,
	  Footer,
	  Hooper,
      Slide,
      
    },
    data () {
		return {
			products: [],	
            count:'',
            related_products: [],
            current_product:'',
            sort:'',
            min_price:'',
            max_price:'',
           
		}
    },
 	mounted() {
		this.fillData(); 
    },
	methods:{
        toggleMessage(loaddata) {
            var prdt = loaddata;
            this.current_product = prdt.toUpperCase();
            //this.$router.replace({ path: 'product' })
			axios.get('/product_category/'+ loaddata)
			.then((response) => {
                this.products = response.data.data.product;
                this.related_products = response.data.data.related_product;
                this.count = response.data.data.count;
                console.log(this.count);
                 
			})
			.catch(function (error) {
				console.log(error);
			});
        },
         imageMouseMove: function(event) {
            var self = this;
            
            event.target.style.transform = "scale(2)";
            
            self.timeout = setTimeout(function() {
                event.target.style.transformOrigin = ((event.pageX - event.target.getBoundingClientRect().left) / event.target.getBoundingClientRect().width) * 50 + '% ' + ((event.pageY - event.target.getBoundingClientRect().top - window.pageYOffset) / event.target.getBoundingClientRect().height) * 50 + "%";
            }, 50);
            
            self.mouseStop = setTimeout(function() {
                event.target.style.transformOrigin = ((event.pageX - event.target.getBoundingClientRect().left) / event.target.getBoundingClientRect().width) * 50 + '% ' + ((event.pageY - event.target.getBoundingClientRect().top - window.pageYOffset) / event.target.getBoundingClientRect().height) * 50 + "%";
            }, 100);
        },
        price_filter(min,max){
            this.min_price = min;
            this.max_price = max;
            var filter = document.getElementById("select_item");
            this.sort = filter.options[filter.selectedIndex].value;

            //console.log(this.current_product); //console.log(filter);
            
			axios.get('/product_price/'+ this.current_product +"/"+this.sort+"/"+min+"/"+max+"")
			.then((response) => {
                this.products = response.data.data.product;
                this.related_products = response.data.data.related_product;
                this.count = response.data.data.count;  
                console.log(response);
                 
			})
			.catch(function (error) {
				console.log(error);
			});  

        },
        sorting(event) {
            //router.push({ name: 'user', params: { userId: '123' } });
            //console.log(event.target.value);
             this.sort = event.target.value;
            console.log(this.current_product);
            
            //this.$router.replace({ path: 'product' })
			 axios.get('/product_sort/'+ this.current_product +"/"+this.sort)
			.then((response) => {
                 this.products = response.data.data.product;
                this.related_products = response.data.data.related_product;
                this.count = response.data.data.count;  
                console.log(response);
                 
			})
			.catch(function (error) {
				console.log(error);
			});   
        },
		getImgUrl(pic) {
			return require('../assets/images/'+pic)
		},
		fillData () {
            //var pageURL = window.location.href;
            //var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
            this.current_product = "All";
			axios.get('/product_category/all')
			.then((response) => {
                this.products = response.data.data.product;
                this.related_products = response.data.data.related_product;
                this.count = response.data.data.count;
                //console.log( this.count );
                
                //let count = response.data.data.count;
			})
			.catch(function (error) {
				console.log(error);
			});
        },
        doSomething(ids){
            alert(ids);
        },
        first: function() {
            alert("DSf");
        },
        second: function() {},
        another: function() {}
	},
}
import "@/assets/js/jquery.flexisel.js";
</script>
<style scoped>

</style>