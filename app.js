class WnFloatingCart {

    constructor() {
		document.addEventListener( "DOMContentLoaded", () => {
            this.init();
		} );
	}

    init(){

        let cart_buttons    = document.querySelectorAll('.wn_mwh_cart_button'),
            floating_cart   = document.querySelector('.wn_mwh_floating_cart');

        //If cart do not exist then return
        if( !floating_cart ) {
            return;
        }

        this.register_cart_button( cart_buttons, floating_cart );

    }

    register_cart_button( cart_buttons, floating_cart ) {

        Array.prototype.forEach.call( cart_buttons, function( cart_button, i ){
            cart_button.addEventListener( 'click', function(e){

                //if click is insde the cart items do not close it
                if( this.classList.contains( 'wn_mwh_floating_cart' ) && ( e.target != floating_cart ) ) {
                    return;                    
                }
                floating_cart.classList.toggle( 'wn_mwh_floating_cart__active' );
            });
        });
    }
}

new WnFloatingCart();