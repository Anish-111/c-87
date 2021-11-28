var canvas = new fabric.convas("myCanvas");

block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";

function new_image(get_image) {
	fabric.image.formurl(get_image, function (Img){ 
		block_image_object = img;
        block_image_object.scaletowidth(block_image_width);
		block_image_object.scaletoheight(block_image_height);
        block_image_object.set({
            top:block_x,
            top:block_y

	}};
	canvas.add(block_image_object)
});
}
	window.addEventListener("keydown", my_keydown);

	function my_keydown(e) {
		keyPressed = e.keyCode;
		console.log(keyPressed);

		if (keyPressed == '82') 
		{
	    new_image("rr1.png")	
		console.log("when r key is pressed")
		}
		if (keyPressed == '71') {
			block_x = 200;

			new_image("gr.png")	
			console.log("when g key is pressed")	}

		if (keyPressed == '89') {
			block_x = 350;
			
			new_image("yr.png")	
			console.log("when y key is pressed")
		}
		if (keyPressed == '80') {
			block_x = 600;
			
			new_image("pr.png")	
			console.log("when p key is pressed")
		}
		if (keyPressed == '66') {
			block_x = 700;

			new_image("br.png")	
			console.log("when b key is pressed")
		}

	}