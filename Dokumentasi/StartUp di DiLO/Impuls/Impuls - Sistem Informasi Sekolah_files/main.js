$( document ).ready(function() {
	const fitur	= [
		{ icon: 'toga', value: 'Sistem yang dirancang khusus untuk sekolah' },
		{ icon: 'grafik', value: 'Analisa akademik dan non-akademik murid' },
		{ icon: 'dokumen', value: 'Pencatatan nilai hingga cetak rapor' },
		{ icon: 'arsip', value: 'Pengarsipan nilai fisik dan digital' },
		{ icon: 'kunci', value: 'Akses untuk pengajar sampai administrasi' },
		{ icon: 'wali', value: 'Akses murid dan orang tua wali' },
	];
	$(' #fitur-wrapper ').html(fitur.map((o) => (
		"<div class='fitur-impuls'>" +
			"<img src='public/images/icons/sect2_" + o.icon + ".svg'/>" +
			"<div>" + o.value + "</div>" +
		"</div>"
	)).join(""));

	const personel		= ["Guru Mata Pelajaran", "Wali Kelas", "Bidang Akademik", "Bidang Kurikulum", "Bidang Kesiswaan", "Panitia PPDB", "Panitia Peminatan", "Tata Usaha / Administrasi", "Tata Tertib", "Murid", "Wali Murid"];
	$( '#sect3-personel' ).html(personel.map((o) => ("<div><div>" + o + "</div></div>")).join(""))

	const keunggulan	= [
		{ icon: 'globe', title: 'Akses darimana saja', desc: 'Sistem berbasis web sehingga dapat diakses darimana saja dan kapan saja menggunakan perangkat komputer, laptop, atau tablet.' },
		{ icon: 'mata', title: 'Mudah digunakan', desc: 'Antarmuka dirancang untuk mempermudah pengguna mendapatkan informasi yang diinginkan. Tanpa harus memiliki keahlian khusus.' },
		{ icon: 'custom', title: 'Sistem menyesuaikan dan terbarukan', desc: 'Sistem akan disesuaikan dengan kebutuhan setiap sekolah dan selalu menyesuaikan dengan peraturan terbaru.' },
	]
	$( '#sect4-keunggulan' ).html(keunggulan.map((o) => (
		"<div class='keunggulan-impuls'>" +
			"<div class='keunggulan-title'>" +
				"<img id='" + o.icon + "' src='public/images/icons/sect4_" + o.icon + ".svg'/>" +
				"<div>" + o.title + "</div>" +
			"</div>" +
			"<div class='keunggulan-desc'>" + o.desc + "</div>" +
		"</div>"
	)).join(""));

	const another		= [
		{ background: 'isms', title: 'Impuls School Management System', desc: "Sistem informasi sekolah yang mempermudah proses manajemen data akademik, kesiswaan, dan pertukaran informasi di sekolah yang dapat diakses oleh pegawai, orang tua wali, dan murid secara <i>real-time</i>." },
		{ background: 'cbt', title: 'Impuls Computer Based Test', desc: "Sistem informasi yang memfasilitasi kegiatan evaluasi belajar, dari pembuatan soal, ujian serentak dengan laporan keberjalanannya secara <i>real-time</i>, hingga analisis hasil ujian di akhir.", addition: "Rilis awal tahun 2018" },
		{ background: 'elearning', title: 'Impuls E-learning', desc: "Sistem informasi yang dirancang khusus untuk memaksimalkan kegiatan belajar mengajar di luar kelas melalui pembuatan silabus materi dan tugas oleh guru yang dapat diakses murid dimana dan kapan saja.", addition: "Rilis pertengahan tahun 2018" },
	]
	$( '#sect5-another' ).html(another.map((o) => (
		"<div class='sistem-impuls'>" +
			"<div class='sistem-title' style=\"background-image:url('public/images/impuls-sect5-" + o.background + ".jpg');\"><span>" + o.title + "</span></div>" +
			"<div class='sistem-desc'>" + o.desc + "</div>" +
			// (o.addition ? "<div class='sistem-addition'>" + o.addition + "</div>" : "<div id='another-fitur' class='see-fitur cursor-pointer'>Pelajari lebih lanjut</div>") +
		"</div>"
	)).join(""));
	setTimeout(() => {
		let height	= 0;
		$(' .sistem-desc ').each(function() { height = Math.max(height, $(this).outerHeight()); });
		$(' .sistem-desc ').height(height + 18);
	}, 500);

	const form_inputs	= [
		{ label: "Nama / Sekolah Anda", type: 'text', key: 'nama' },
		{ label: "Alamat Email", type: 'email', key: 'email' },
		{ label: "No Telepon", type: 'number', key: 'phone' },
		{ label: "Pesan atau pertanyaan", type: 'text', key: 'message' },
	];
	$( '#sect6-inputs' ).html(form_inputs.map((o) => (
		"<div class='input-group'>" +
			"<input id='" + o.key + "' type='" + o.type + "' required />" +
			"<span class='highlight'></span>" +
			"<span class='bar'></span>" +
			"<label>" + o.label + "</label>" +
		"</div>"
	)).join("") + "<button class='cursor-pointer' type='submit'>Kirimi Saya Proposal</button>");
	$( '#sect6-inputs' ).submit(function( e ) {
		e.preventDefault();

		$( '#sect6-inputs > button' ).hide();
		$( '#spinner' ).show();
		let data	= _.chain(form_inputs).keyBy('key').mapValues((o) => ( $( 'input#' + o.key ).val() )).value();
		$.post( "https://api.impuls.id/subscribe", data, ( res ) => { $( '#section-6' ).addClass('submitted'); });
	});

	const wewuzkangz	= [
		{ name: "Baharudin Afif", code: "udin", job: "Back-end Developer", bio: "Lulusan Teknik Informatika ini lahir di Solo. Memulai karir dengan membangun start up jasa di Bandung. Setelah 2 tahun memutuskan kembali dan membangun produk yang bisa diterapkan di kota asalnya. Gemar berolahraga serta travelling." },
		{ name: "Flora Monica", code: "monca", job: "Project Manager", bio: "Lahir dan besar di Jakarta sebelum meneruskan studi Teknik Informatika di Bandung. Meski berlatar pendidikan eksakta, ia masih aktif di dunia paduan suara, desain, dan tulis-menulis. Baginya keseimbangan adalah kunci segalanya." },
		{ name: "Mahdan Ahmad", code: "mahdan", job: "Front-end Developer", bio: "Tidak ada pekerjaan yang lebih baik daripada bekerja sesuai hobi, dan sejak awal, pemograman adalah hobi lulusan Teknik Informatika ini. <br />Data Enthusiast in the meantime, Digital Nomad in the making." },
		{ name: "Dhendiawan", code: "dhendi", job: "UI/UX Designer", bio: "Ketertarikan terhadap desain bertemu dengan latar belakang Sistem dan Teknologi Informasi mendorongnya mendalami User Centered Design. Selalu bekerja dan berolahraga dengan musik sebagai latar." },
	];
	$( '#section-9 > .section-wrapper' ).html(wewuzkangz.map((o) => (
		"<div class='bio-wrapper'>" +
			"<div class='image-wrapper'>" +
				"<img src='public/images/impuls-" + o.code + ".jpg'/>" +
			"</div>" +
			"<div class='align-center bio-name'>" + o.name + "</div>" +
			"<div class='align-center bio-job'>" + o.job + "</div>" +
			"<div class='bio-desc'>" + o.bio + "</div>" +
		"</div>"
	)));

	changePage('home');
});

function changePage(state) {
	$( 'section' ).hide();
	$( 'section.' + state ).show();
	$( '#header > ul > li' ).removeClass('active');
	$( '#header > ul > li#' + state ).addClass('active');
}

function gotoContact() {
	changePage('home');
	setTimeout(() => { $( 'html, body' ).animate({ scrollTop: $( "#section-6" ).offset().top }, 500); }, 100);
}
