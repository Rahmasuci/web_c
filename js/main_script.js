function modalShow() {
	$("#id_modal").show();
	$(".modal-content:first").css('animation-name', 'show_modal');
}

function modalHide() {
	$(".modal-content:first").css('animation-name', 'hide_modal');
	setTimeout(function function_name() {
		$("#id_modal").hide();
	}, 400);
}

function modalShow() {
	$("#modal2").show();
	$(".modal-content:first").css('animation-name', 'show_modal');
}

function modalHide() {
	$(".modal-content:first").css('animation-name', 'hide_modal');
	setTimeout(function function_name() {
		$("#modal2").hide();
	}, 400);
}

$.fn.uploadGambar = function () { //extending jquery
	this.change(function(event) {
    	if(this.files.length > 0){
    		console.log(this.files[0]);
 			var name = this.files[0].name;
 			var size = this.files[0].size;

 			var ukuran = "";
 			if (size >= 1000000 ) { //MB
 				size = Math.ceil(size/1000000); 
 				ukuran = size + "MB"; 
 			} 
 			else if (size >= 1000) { //KB
 				size = Math.ceil(size/1000);
 				ukuran = size + "KB";
 			}
 			else if(size < 1000){
 				ukuran = size + "Byte";
 			}
 			
 			$("#file_info").html(`
 				<p>Nama File : `+name+`</p>
 				<p>Ukuran File : `+ukuran+`</p>
 				`
 			);
    		
    		if (this.files && this.files[0]) {
    		  var reader = new FileReader();

    		  reader.onload = function(e) {
    		    $('#avatar_img').show();
    		    $('#avatar_img').attr('src', e.target.result);
    		  }

    		  reader.readAsDataURL(this.files[0]);
    		}
    	}
	});
}

$.fn.updatePelajaran = function () {
	var form = this;
	var status = "";

	form.on("click", function(event) {
    	event.preventDefault();

    	var mapel = $("input[name='mapel']").val();
    	var status = $("input[name='status']:checked").val();
    	//RegEx
		var namaReg = /^[a-zA-Z' ]+$/; //alfabet(besar atau kecil), petik ('), dan spasi saja
		var angka = /^\d+$/; //angka saja

    	if (mapel == "" || status == "" ) {
    		show_error("Harap lengkapi data mata pelajaran");
    		status = false;
    	} 
    	else if (!namaReg.test(mapel)) {
    		show_error("Nama hanya boleh menggunakan huruf dan tanda petik (')");
    		status = false;
    	}
    	else {
    	console.log(mapel);
    	console.log(status);
    		$("td#bi").html(mapel);
    		$("td#status").html(status);
    		modalHide();
   		// $("#modal2").hide("");
    	}
   });

}

function cariTabel() {
	$(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
}