function modalShow1() {
	$("#id_modal").show();
	$(".modal-content:first").css('animation-name', 'show_modal');
}

function modalHide1() {
	$(".modal-content:first").css('animation-name', 'hide_modal');
	setTimeout(function function_name() {
		$("#id_modal").hide();
	}, 400);
}

function modalShow2() {
	$("#modal2").show();
	$(".modal-content:first").css('animation-name', 'show_modal');
}

function modalHide2() {
	$(".modal-content:first").css('animation-name', 'hide_modal');
	setTimeout(function function_name() {
		$("#modal2").hide();
	}, 400);
}

function show_error(pesan) {
	$("#error_modal").find('b').html(pesan);
	$("#error_modal").show();

	// $(".error_form").show();
	// $(".error_form").fadeOut(2500);

	$("#close_error_form").click(function(event) {
		$(".error_form").hide();
		$("#error_modal").hide();
	});
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
    	// console.log(mapel);
    	// console.log(status);
    		$("td#bi").html(mapel);
    		$("td#status").html(status);
    		modalHide2();
    	}
   });

}

$.fn.updateKelas = function () {
	var form = this;
	var status = "";

	form.on("click", function(event) {
    	event.preventDefault();

    	var kelas = $("input[name='kelas']").val();
    	var status = $("input[name='status']:checked").val();
    	//RegEx
		var namaReg = /^[a-zA-Z' ]+$/; //alfabet(besar atau kecil), petik ('), dan spasi saja
		var angka = /^\d+$/; //angka saja

    	if (kelas == "") {
    		show_error("Harap lengkapi data kelas");
    		status = false;
    	} 
    	else {
    	// console.log(kelas);
    	// console.log(status);
    		$("td#10a").html(kelas);
    		$("td#status").html(status);
   		modalHide2();
    	}
   });

}

$.fn.updateJadwal = function () {
	var form = this;
	var status = "";

	form.on("click", function(event) {
    	event.preventDefault();

    	var kelas = $("select[name='kelas']").val();
    	var hari = $("select[name='hari']").val();
    	var pelajaran = $("select[name='pelajaran']").val();
    	var guru = $("input[name='guru']").val();
    	var jam = $("select[name='jam']").val();

    	//RegEx
		var namaReg = /^[a-zA-Z' ]+$/; //alfabet(besar atau kecil), petik ('), dan spasi saja
		var angka = /^\d+$/; //angka saja

    	if (guru == "") {
    		show_error("Harap lengkapi data jadwal");
    		status = false;
    	} 
    	else if (!namaReg.test(guru)) {
    		show_error("Nama guru hanya boleh menggunakan huruf dan tanda petik (')");
    		status = false;
    	}
    	else {
	    	// console.log(jam);
	    	// console.log(hari);
    		$("td#10a").html(kelas);
    		$("td#senin").html(hari);
    		$("td#mtk").html(pelajaran);
    		$("td#indro").html(guru);
    		$("td#waktu").html(jam);
   		modalHide2();
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

$.fn.validasiLogin = function () {
	var form = this;

	this.on("submit", function(event) {
		event.preventDefault();
		var nis = $("input[name='nis']").val();
		var password = $("input[name='password']").val();

		if(nis == "" || password == ""){
			show_error('NIS/NIP dan Password harus di isi');
		}
		else if (nis != "nis" && password != "password") {
            show_error('NIS/NIP atau Password salah. Coba lagi');
		}
		else{
			// document.location.href = "dashboard.html";
			$(this).off("submit").trigger("submit");
		}
	});
}