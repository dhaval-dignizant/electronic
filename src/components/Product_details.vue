<template>
    <div>
        <Header></Header>
        <Menubar></Menubar>
        <!-- <Slider></Slider> -->
        <!-- banner -->
        <div class="banner banner10">
            <div class="container">
                <h2>Single Page</h2>
            </div>
        </div>
        <!-- //banner -->
        <!-- breadcrumbs -->
        <div class="breadcrumb_dress">
            <div class="container">
                <ul>
                    <li><router-link to="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</router-link> <i>/</i></li>
                    <li>Single Page</li>
                </ul>
            </div>
        </div>
        <!-- //breadcrumbs -->
        <!-- single -->
        <div class="single">
            <div class="container">
                <div class="col-md-4 single-left">
                    <div class="">
                        <ul class="slides">
                            <li data-thumb="images/a.jpg">
                                <div class="thumb-image"> <img :src="getImgUrl(products.image) " data-imagezoom="true" class="img-responsive" alt=""> </div>
                            </li>
                        </ul>
                    </div>
                    <!-- flexslider -->
                       <!--  <script defer src="js/jquery.flexslider.js"></script>
                        <link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" />
                        <script>
                        // Can also be used with $(document).ready()
                        $(window).load(function() {
                        $('.flexslider').flexslider({
                            animation: "slide",
                            controlNav: "thumbnails"
                        });
                        });
                        </script> -->
                    <!-- flexslider -->
                    <!-- zooming-effect -->
                       <!--  <script src="js/imagezoom.js"></script> -->
                    <!-- //zooming-effect -->
                </div>
                <div class="col-md-8 single-right">
                    <h3>{{products.product_name}}</h3>
                   <!--  <div class="rating1">
                        <span class="starRating">
                            <input id="rating5" type="radio" name="rating" value="5">
                            <label for="rating5">5</label>
                            <input id="rating4" type="radio" name="rating" value="4">
                            <label for="rating4">4</label>
                            <input id="rating3" type="radio" name="rating" value="3" checked>
                            <label for="rating3">3</label>
                            <input id="rating2" type="radio" name="rating" value="2">
                            <label for="rating2">2</label>
                            <input id="rating1" type="radio" name="rating" value="1">
                            <label for="rating1">1</label>
                        </span>
                    </div> -->
                    <div class="description">
                        <h5><i>Description</i></h5>
                        <p>{{products.product_description}}</p>
                    </div>
                    <div class="color-quality">
                        <!-- <div class="color-quality-left">
                            <h5>Color : </h5>
                            <ul>
                                <li><a href="#"><span></span></a></li>
                                <li><a href="#" class="brown"><span></span></a></li>
                                <li><a href="#" class="purple"><span></span></a></li>
                                <li><a href="#" class="gray"><span></span></a></li>
                            </ul>
                        </div> -->
                        <div class="color-quality-right">
                            <!-- <h5>Quality :</h5>
                            <div class="quantity"> 
                                <div class="quantity-select">                           
                                    <div class="entry value-minus1">&nbsp;</div>
                                    <div class="entry value1"><span>1</span></div>
                                    <div class="entry value-plus1 active">&nbsp;</div>
                                </div>
                            </div> -->
                            <!--quantity-->
                                    <!-- <script>
                                    $('.value-plus1').on('click', function(){
                                        var divUpd = $(this).parent().find('.value1'), newVal = parseInt(divUpd.text(), 10)+1;
                                        divUpd.text(newVal);
                                    });

                                    $('.value-minus1').on('click', function(){
                                        var divUpd = $(this).parent().find('.value1'), newVal = parseInt(divUpd.text(), 10)-1;
                                        if(newVal>=1) divUpd.text(newVal);
                                    });
                                    </script> -->
                                <!--quantity-->

                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <!-- <div class="occasional">
                        <h5>RAM :</h5>
                        <div class="colr ert">
                            <div class="check">
                                <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i> </i>3 GB</label>
                            </div>
                        </div>
                        <div class="colr">
                            <div class="check">
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i> </i>2 GB</label>
                            </div>
                        </div>
                        <div class="colr">
                            <div class="check">
                                <label class="checkbox"><input type="checkbox" name="checkbox"><i> </i>1 GB</label>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div> -->
                    <div class="simpleCart_shelfItem">
                        <p><span>${{products.original_price}}</span> <i class="item_price">${{products.product_price}}</i></p>
                        <!-- <form action="#" method="post">
                            <input type="hidden" name="cmd" value="_cart">
                            <input type="hidden" name="add" value="1"> 
                            <input type="hidden" name="w3ls_item" value="Smart Phone"> 
                            <input type="hidden" name="amount" value="450.00">   
                            <button type="submit" class="w3ls-cart">Add to cart</button>
                        </form> -->
                    </div> 
                </div>
                <div class="clearfix"> </div>
            </div>
        </div> 
        <!-- <div class="additional_info">
            <div class="container">
                <div class="sap_tabs">	
                    <div id="horizontalTab1" style="display: block; width: 100%; margin: 0px;">
                        <ul>
                            <li class="resp-tab-item" aria-controls="tab_item-0" role="tab"><span>Product Information</span></li>
                            <li class="resp-tab-item" aria-controls="tab_item-1" role="tab"><span>Reviews</span></li>
                        </ul>		
                        <div class="tab-1 resp-tab-content additional_info_grid" aria-labelledby="tab_item-0">
                            <h3>The Best 3GB RAM Mobile Phone</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
                                odit aut fugit, sed quia consequuntur magni dolores eos qui 
                                ratione voluptatem sequi nesciunt.Ut enim ad minima veniam, quis nostrum 
                                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
                                commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate 
                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
                                quo voluptas nulla pariatur.</p>
                        </div>	

                        <div class="tab-2 resp-tab-content additional_info_grid" aria-labelledby="tab_item-1">
                            <h4>(2) Reviews</h4>
                            <div class="additional_info_sub_grids">
                                <div class="col-xs-2 additional_info_sub_grid_left">
                                    <img src="@/assets/images/t1.png" alt=" " class="img-responsive" />
                                </div>
                                <div class="col-xs-10 additional_info_sub_grid_right">
                                    <div class="additional_info_sub_grid_rightl">
                                        <a href="single.html">Laura</a>
                                        <h5>Oct 06, 2016.</h5>
                                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate 
                                            velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
                                            quo voluptas nulla pariatur.</p>
                                    </div>
                                    <div class="additional_info_sub_grid_rightr">
                                        <div class="rating">
                                            <div class="rating-left">
                                                <img src="@/assets/images/star-.png" alt=" " class="img-responsive">
                                            </div>
                                            <div class="rating-left">
                                                <img src="@/assets/images/star-.png" alt=" " class="img-responsive">
                                            </div>
                                            <div class="rating-left">
                                                <img src="@/assets/images/star-.png" alt=" " class="img-responsive">
                                            </div>
                                            <div class="rating-left">
                                                <img src="@/assets/images/star.png" alt=" " class="img-responsive">
                                            </div>
                                            <div class="rating-left">
                                                <img src="@/assets/images/star.png" alt=" " class="img-responsive">
                                            </div>
                                            <div class="clearfix"> </div>
                                        </div>
                                    </div>
                                    <div class="clearfix"> </div>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            <div class="additional_info_sub_grids">
                                <div class="col-xs-2 additional_info_sub_grid_left">
                                    <img src="@/assets/images/t2.png" alt=" " class="img-responsive" />
                                </div>
                                <div class="col-xs-10 additional_info_sub_grid_right">
                                    <div class="additional_info_sub_grid_rightl">
                                        <a href="single.html">Michael</a>
                                        <h5>Oct 04, 2016.</h5>
                                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate 
                                            velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
                                            quo voluptas nulla pariatur.</p>
                                    </div>
                                    <div class="additional_info_sub_grid_rightr">
                                        <div class="rating">
                                            <div class="rating-left">
                                                <img src="@/assets/images/star-.png" alt=" " class="img-responsive">
                                            </div>
                                            <div class="rating-left">
                                                <img src="@/assets/images/star-.png" alt=" " class="img-responsive">
                                            </div>
                                            <div class="rating-left">
                                                <img src="@/assets/images/star.png" alt=" " class="img-responsive">
                                            </div>
                                            <div class="rating-left">
                                                <img src="@/assets/images/star.png" alt=" " class="img-responsive">
                                            </div>
                                            <div class="rating-left">
                                                <img src="@/assets/images/star.png" alt=" " class="img-responsive">
                                            </div>
                                            <div class="clearfix"> </div>
                                        </div>
                                    </div>
                                    <div class="clearfix"> </div>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            <div class="review_grids">
                                <h5>Add A Review</h5>
                                <form action="#" method="post">
                                    <input type="text" name="Name" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required="">
                                    <input type="email" name="Email" placeholder="Email" required="">
                                    <input type="text" name="Telephone" value="Telephone" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Telephone';}" required="">
                                    <textarea name="Review" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Add Your Review';}" required="">Add Your Review</textarea>
                                    <input type="submit" value="Submit" >
                                </form>
                            </div>
                        </div> 			        					            	      
                    </div>	
                </div>
              
            </div>
        </div> -->
        <!-- Related Products -->
        <!-- Related Products -->
        <div class="w3l_related_products">
            <div class="container">
                <h3>Related Products</h3>
                <ul>	
                    <hooper :itemsToShow="4" :progress="true" :autoPlay="true" :playSpeed="7000" style="height:500px">	
                    <slide  v-for="related_product in related_products" v-bind:key="related_product.id"  > 
                        <div class="w3l_related_products_grid">
                            <div class="agile_ecommerce_tab_left">
                                <div class="hs-wrapper">
                                   <img :src="getImgUrl(related_product.image)"  style="height: 275px !important;" alt=" " class="img-responsive" />
                                </div>
                                <h5><router-link :to="'/product_details/' + related_product.id"  @click.native="toggleMessage(related_product.id)">{{related_product.product_name}}</router-link></h5>
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
        <!-- //Related Products -->
        <!-- //single --> 
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Menubar from '@/components/Menubar.vue';
import Footer from '@/components/Footer.vue';
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
           axios.get('/product_details/'+ loaddata)
			.then((response) => {
                this.products = response.data.data.product;
                this.related_products = response.data.data.related_product;
                //this.count = response.data.data.count;
                //console.log(  this.products );
                
                //let count = response.data.data.count;
			})
			.catch(function (error) {
				console.log(error);
			});
        },
        
        
		getImgUrl(pic) {
			return require('../assets/images/'+pic)
		},
		fillData () {
            var pageURL = window.location.href;
            var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
			axios.get('/product_details/'+ lastURLSegment)
			.then((response) => {
                this.products = response.data.data.product;
                this.related_products = response.data.data.related_product;
                //this.count = response.data.data.count;
                console.log(  this.products );
                
                //let count = response.data.data.count;
			})
			.catch(function (error) {
				console.log(error);
			});
        },
        reload_product (id) {
            this.$router.push({ path: `/product_details/${id}` });
			axios.get('/product_details/'+ id)
			.then((response) => {
                this.products = response.data.data.product;
                this.related_products = response.data.data.related_product;
                //this.count = response.data.data.count;
                console.log(  this.products );
                
                //let count = response.data.data.count;
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}  
 }
</script>

<style scoped>

</style>