<script type="text/javascript">
	function validasi() {
		var nama = document.getElementById("nama").value;
        var tanggal lahir = document.getElementById("tanggal_lahir").value;
        var jenis kelamin = document.getElementById("jenis_kelamin").value;
		var email = document.getElementById("email").value;
        var no hp = document.getElementById("no_hp").value;
        var berat badan = document.getElementById("berat_badan").value;
        var tinggi badan = document.getElementById("tinggi_badan").value;
        var password = document.getElementById("password").value;

		if (nama != "" && tanggal lahir != "" && email!="" && no hp !="" && berat badan != "" && tinggi badan !="" && password != ""&&) {
			return true;
		}else{
			alert('Anda harus mengisi data dengan lengkap !');
		}
	}
</script>