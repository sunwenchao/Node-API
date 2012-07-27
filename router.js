define(function (require, exports, module) {

    var MainRouter = Backbone.Router.extend({

        routes : {

            'mod/:mod' : 'modCommon',

            '' : 'initRedirect'
        },

        modCommon : function( mod ){

            $( '#' + mod ).parent().addClass( 'active' ).siblings().removeClass( 'active' );

            require.async( './mods/' + mod, function( modData ) {
                initMod( modData );
                sh_highlightDocument();
            });
        },

        initRedirect : function(){
            mainRouter.navigate( 'mod/documentation', { replace : true, trigger : true } );
        }
    });

    var allTmpl = Handlebars.compile( $( '#first_tmpl' ).html() );
    var navTmpl = Handlebars.compile( $( '#nav_tmpl' ).html() )

    function initMod( data ) {
        var attrs = [ 'methods', 'classes', 'properties',
            'miscs', 'modules', 'events', 'globals', 'vars' ];

        $( '#cv_all_li').siblings().remove();

        _.each( attrs, function( key ) {
            if( data[ key ] ){
                var o = {
                    name : fitstUp( key ),
                    data : data[ key ]
                };
                $( '#mods_nav' ).append( navTmpl( o ) );
            }
        });

        toAll( data );
    }

    function toAll( data ){
        $( '#cv_all_li' ).addClass( 'active' ).siblings().removeClass( 'active' );
        $( '#content' ).html( allTmpl( data ) );
    }

    function fitstUp( str ){
        var strLen = str.length,
            firstChar = str.substring(0,1).toUpperCase(),
            afterString = str.substring(1,strLen);
        return firstChar + afterString;
    }

    window.mainRouter = new MainRouter();
});