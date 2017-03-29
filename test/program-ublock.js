var Program = require( '../nanogl' ).Program;
var expect  = require( 'expect.js' );

var testContext = require( './utils/TestContext' );
var gl = testContext.getContext();

Program.debug = true





// prg.uVec4( V4 )
// prg.uVec4( 1, 2, 3, 4 )


// prg.set( 'uVec4',  V4 )

// prg.uVec4.vf( V4 )
// prg.uVec4.v( 1, 2, 3, 4 )

// prg.uniforms.uVec4.f( V4 )
// prg.uniforms.uVec4.fv( 1, 2, 3, 4 )


prg.matrixBlock.setBuffer( uBufferA )
// render

prg.matrixBlock.setBuffer( uBufferB )
// render






describe( "Program Uniform Buffers", function(){

  it( "test", function(){



    var prg = new Program( 
      gl, 
      require( './glsl/complete.vert'),
      require( './glsl/complete.frag')
    );

    

    // prg is compiled, we can create uniform buffer base on uniform block descriptors
    // 
    var desc    = prg.ublockA.getDescriptor();
    var ubuffer = new UniformBuffer( gl, desc );

    // or shortcut with
    ubuffer = prg.ublockA.createBuffer();


    // set uniform buffer like program uniforms API
    // changes -> mark the buffer as invalid
    ubuffer.uMatrix( M4 );
    ubuffer.uPosition( x, y, z );


    // webgl structs 
    // direct change on prg ?
    prg.ublockA_uMatrix( M4 )


    // BLOCK BINDING


    prg.ublockA.bind( ubuffer );
    // at this point, prg should be ready to render with all uniforms of this buffer ok
    // ----------------------------
    //
    // webgl2 > EZ, sync JS/GL buffer if changed, then native uniform buffer binding
    //
    // webgl1 > make all validation process to apply uniforms values
    //
    // prg.ublockA store something representing the actual prg uniforms values gpu side
    //
    // compare input buffer against this rep to apply changed uniforms
    //
    //        A --------- complex but efficient
    //        internal representation is a UniformBuffer too,  with a compare/equal() API?
    //
    //        B --------- simple but inefficient
    //        compare internal and input ArrayBuffer, if one diff , upload all?



    ubuffer.uMatrix( M4 );
    prg.ublockA.bind( ubuffer );


  });

});
