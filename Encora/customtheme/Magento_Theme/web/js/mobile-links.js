
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

require([ 'jquery', 'jquery/ui'], function($){ $(document).ready(function($) {
   $('ul.header.links > li, .authorization-link, .link.wishlist, .my-account').clone().appendTo('#store\\.links');
}); });
