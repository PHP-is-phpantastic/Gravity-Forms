( function ( GF_Google_Analytics_UTM_Tag_Manager, $ ) {
	/* global localStorage, */
	jQuery( document ).ready( function() {
		var hrefObject = wpAjax.unserialize( window.location.href );
		if ( typeof hrefObject.utm_source !== 'undefined' ) {
			var utmSource = decodeURIComponent( hrefObject.utm_source );
			var utmMedium = '',
				utmCampaign = '',
				utmTerm = '',
				utmContent = '';
			if ( typeof hrefObject.utm_medium !== 'undefined' ) {
				utmMedium = decodeURIComponent( hrefObject.utm_medium );
			}
			if ( typeof hrefObject.utm_campaign !== 'undefined' ) {
				utmCampaign = decodeURIComponent( hrefObject.utm_campaign );
			}
			if ( typeof hrefObject.utm_term !== 'undefined' ) {
				utmTerm = decodeURIComponent( hrefObject.utm_term );
			}
			if ( typeof hrefObject.utm_content !== 'undefined' ) {
				utmContent = decodeURIComponent( hrefObject.utm_content );
			}
			var utmObject = {
				source: utmSource,
				medium: utmMedium,
				campaign: utmCampaign,
				term: utmTerm,
				content: utmContent
			};
			localStorage.setItem( 'googleAnalyticsUTM', JSON.stringify( utmObject ) );
		}
	} );
}( window.GF_Google_Analytics_UTM_Tag_Manager = window.GF_Google_Analytics_UTM_Tag_Manager || {}, jQuery ) );
