const tarjet = document.querySelector("#navbar");
tarjet.addEventListener("click", (e) => {
  e.preventDefault();
  let target = "";
  let className = "";

  target += e.target.text;
  className += e.target.className;

  if (className == "list-nav active") {
    const nav = target.toLowerCase().trim();
    ambilData(nav);
  } else {
    console.log("Yang di KLik Bukan Navbar !!!");
  }
});

// Ajax
function ambilData(file) {
  const ajax = new XMLHttpRequest();
  ajax.onload = function () {
    if (ajax.status == 200) {
      loadData(ajax.responseText, file);
    } else {
      console.error("Data Error !!");
    }
  };
  ajax.open("GET", url(), true);
  ajax.send();
}
function url() {
  return "../data/file.json";
}

function loadData(res, file) {
  const data = JSON.parse(res);
  switch (file) {
    case "home":
      mainHome(data[0].biodata[0]);
      break;
    case "profil":
      mainProfile(data[0].biodata[0]);
      break;
    case "pendidikan":
      mainPendidikan(data[1].pendidikan[0]);
      break;
    case "riwayat kerja":
      mainRiwayatKerja(data[2].kerja);
      break;
    case "kemampuan":
      mainKemampuan(data[3].kemampuan[0]);
      break;
    case "hobi":
      mainHobi(data[4].hobi);
      break;
    default:
      console.log("data salah");
  }
}

//Main
function mainHome(dat) {
  const edit = document.querySelector(".main-content");
  edit.innerHTML = `<div class="col-content">
  <h3>Selamat Datang !</h3>
  <h2>Saya <span>ADI NUGROHO</span></h2>
  <p>
    Sekilas tentang saya pribadi, saya merupakan mahasiswa di STMIK
    Insan Pembangunan, Tangerang, Banten. Saya mengambil jurusan
    "Sistem Informasi", karena saya tertarik dalam dunia programmer.
  </p>
  <p>
    Menjadi programmer adalah cita-cita saya. Saya berharap bisa menjadi programmer yang dapat diandalkan.
  </p>
  <div class="btn" onclick="getProfile()">
    <i class="fas fa-user"></i> Lihat profile lainnya
  </div>
</div>`;
}

function getProfile(dat) {
  window.location = "http://samadi-tech.github.io";
}

function mainProfile(dat) {
  const edit = document.querySelector(".main-content");

  edit.innerHTML = `<div class="row-content">
  <div class="list-row">
    <h6>Nama : </h6>
    <h3>${dat.nama}</h3>
  </div>
  <div class="list-row">
    <h6>TTL : </h6>
    <h4>${dat.ttl[0].tempat} / ${dat.ttl[0].tgl}</h4>
  </div>
  <div class="list-row">
    <h6>BB : </h6>
    <h3>${dat.bb} Kg</h3>
  </div>
  <div class="list-row">
    <h6>TB : </h6>
    <h3>${dat.tb} cm</h3>
  </div>
  <div class="list-row">
    <h6>Alamat : </h6>
    <h4>${dat.alamat[0].dusun}, ${dat.alamat[0].desa}, ${dat.alamat[0].kecamatan}, ${dat.alamat[0].kabupaten}, ${dat.alamat[0].provinsi}</h4>
  </div>
  <div class="list-row">
    <h6>Kebangsaan : </h6>
    <h3>${dat.kebangsaan}</h3>
  </div>`;
}
function mainPendidikan(dat) {
  const edit = document.querySelector(".main-content");

  edit.innerHTML = ` <div class="container-slide">
    <div class="slide-col-content activ">
      <h2>${dat.sd}</h2>
      <p>
        2004 - 2010
      </p> <p>
      SD Negeri Sukorejo terletak di kecamatan Suruh, Kabupaten Semarang, Jawa Tengah.
    </p>
    </div>
    <div class="slide-col-content">
      <h2>${dat.smp}</h2>
      <p>
        2010 - 2013
      </p> <p>
      MTs Negeri Salatiga terletak di Kecamatan Tegalrejo, Kota Salatiga, Jawa Tengah.
    </p>
    </div>
    <div class="slide-col-content">
      <h2>${dat.sma}</h2>
      <p>
        2013 - 2016
      </p><p>
      SMK Negeri 1 Tengaran terletak di kecamatan Tengaran, Kabupaten Semarang, Jawa Tengah.
    </p>
    </div>
    <div class="slide-col-content">
    <h2>${dat.univ}</h2>
    <p>
      2020 - Sekarang
    </p> <p>
    STMIK Insan Pembangunan terletak di kecamatan Suruh, Kabupaten Tangerang, Banten.
  </p>
  </div>
    <div class="button-slide">
      <div class="left"><</div>
      <div class="right">></div>
    </div>
  </div>`;
  loadDataSlide();
}

function mainRiwayatKerja(dat) {
  const edit = document.querySelector(".main-content");

  edit.innerHTML = `<div class="container-slide">
  <div class="slide-col-content left-main activ">
    <h5>Nama Perusahaan :</h5>
    <h2>${dat[0][0]}</h2>
    <h5>Kota :</h5>
    <h2>${dat[0][2]}</h2>
    <h5>Tahun :</h5>
    <h2>${dat[0][1]}</h2>
    <h5>Detail :</h5>
    <h2>
    ${dat[0][3]}
    </h2>
  </div>
  <div class="slide-col-content left-main">
    <h5>Nama Perusahaan :</h5>
    <h2>${dat[1][0]}</h2>
    <h5>Kota :</h5>
    <h2>${dat[1][2]}</h2>
    <h5>Tahun :</h5>
    <h2>${dat[1][1]}</h2>
    <h5>Detail :</h5>
    <h2>
    ${dat[1][3]}
    </h2>
  </div>
  <div class="slide-col-content left-main">
    <h5>Nama Perusahaan :</h5>
    <h2>${dat[2][0]}</h2>
    <h5>Kota :</h5>
    <h2>${dat[2][2]}</h2>
    <h5>Tahun :</h5>
    <h2>${dat[2][1]}</h2>
    <h5>Detail :</h5>
    <h2>
    ${dat[2][3]}
    </h2>
  </div>
  <div class="slide-col-content left-main">
    <h5>Nama Perusahaan :</h5>
    <h2>${dat[3][0]}</h2>
    <h5>Kota :</h5>
    <h2>${dat[3][2]}</h2>
    <h5>Tahun :</h5>
    <h2>${dat[3][1]}</h2>
    <h5>Detail :</h5>
    <h2>
    ${dat[3][3]}
    </h2>
  </div>
  <div class="button-slide">
    <div class="left"><</div>
    <div class="right">></div>
  </div>
</div>`;
  loadDataSlide();
}
function mainKemampuan(dat) {
  const edit = document.querySelector(".main-content");

  edit.innerHTML = `<div class="page muncul">
  <div class="row-content">
    <div class="list-row">
      <div class="container-list flex-center">
        <div class="pic">
          <img src="img/pexels-rikka-ameboshi-3358707.jpg" />
        </div>
        <div class="main-detail">
          <h6>HTML</h6>

          <div class="html">
            <i class="persen">95 %</i>
            <i class="fas fa-star icon html"></i
            ><i class="fas fa-star icon html"></i
            ><i class="fas fa-star icon html"></i
            ><i class="fas fa-star icon html"></i
            ><i class="fas fa-star icon html"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="list-row">
      <div class="container-list flex-center">
        <div class="pic"></div>
        <div class="main-detail">
          <h6>CSS</h6>
          <div class="css">
            <i class="persen">90 %</i>
            <i class="fas fa-star icon css"></i
            ><i class="fas fa-star icon css"></i
            ><i class="fas fa-star icon css"></i
            ><i class="fas fa-star icon css"></i
            ><i class="fas fa-star icon css"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="list-row">
      <div class="container-list flex-center">
        <div class="pic"></div>
        <div class="main-detail">
          <h6>JAVASCRIPT</h6>
          <div class="js">
            <i class="persen">80 %</i>
            <i class="fas fa-star icon js"></i
            ><i class="fas fa-star icon js"></i
            ><i class="fas fa-star icon js"></i
            ><i class="fas fa-star icon js"></i
            ><i class="fas fa-star icon js"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="list-row">
      <div class="container-list flex-center">
        <div class="pic"></div>
        <div class="main-detail">
          <h6>PHP</h6>
          <div class="php">
            <i class="persen">75 %</i>
            <i class="fas fa-star icon php"></i
            ><i class="fas fa-star icon php"></i
            ><i class="fas fa-star icon php"></i
            ><i class="fas fa-star icon php"></i
            ><i class="fas fa-star icon php"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="page">
  <div class="row-content">
    <div class="list-row">
      <div class="container-list flex-center">
        <div class="pic">
          <img src="img/pexels-rikka-ameboshi-3358707.jpg" />
        </div>
        <div class="main-detail">
          <h6>MS OFFICE</h6>
          <div class="office">
            <i class="persen">90 %</i>
            <i class="fas fa-star icon office"></i
            ><i class="fas fa-star icon office"></i
            ><i class="fas fa-star icon office"></i
            ><i class="fas fa-star icon office"></i
            ><i class="fas fa-star icon office"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="list-row">
      <div class="container-list flex-center">
        <div class="pic"></div>
        <div class="main-detail">
          <h6>FLUTTER</h6>
          <div class="flutter">
            <i class="persen">65 %</i>
            <i class="fas fa-star icon flutter"></i
            ><i class="fas fa-star icon flutter"></i
            ><i class="fas fa-star icon flutter"></i
            ><i class="fas fa-star icon flutter"></i
            ><i class="fas fa-star icon flutter"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="list-row">
      <div class="container-list flex-center">
        <div class="pic"></div>
        <div class="main-detail">
          <h6>JAVA</h6>
          <div class="java">
            <i class="persen">70 %</i>
            <i class="fas fa-star icon java"></i
            ><i class="fas fa-star icon java"></i
            ><i class="fas fa-star icon java"></i
            ><i class="fas fa-star icon java"></i
            ><i class="fas fa-star icon java"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="page-number">
  <div class="number-page">Halaman :</div>
</div>`;
  document.addEventListener("click", (e) => {
    if (e.target.classList == "number") {
      numberClick(e.target.id);
    }
  });
  loadPage();
  getStar();
}
function mainHobi(dat) {
  const edit = document.querySelector(".main-content");

  edit.innerHTML = `<div class="row-content">
  <div class="list-row">
    <div class="container-list flex-center">
      <div class="pic"> <img src="img/${dat[0][1]}" /></div>
      <div class="main-detail">
        <h6>${dat[0][0].toUpperCase()}</h6>
        <p>
          Membaca merupakan gudang ilmu.
        </p>
      </div>
    </div>
  </div>
  <div class="list-row">
    <div class="container-list flex-center">
      <div class="pic">
      <img src="img/${dat[1][1]}" /></div>
      <div class="main-detail">
        <h6>${dat[1][0].toUpperCase()}</h6>
        <p>
          Dengan berinternet kita menjadi memiliki wawasan yang luas.
        </p>
      </div>
    </div>
  </div>
  <div class="list-row">
    <div class="container-list flex-center">
      <div class="pic">  <img src="img/${dat[2][1]}" /></div>
      <div class="main-detail">
        <h6>${dat[2][0].toUpperCase()}</h6>
        <p>
          Saya tertarik dalam pemprograman karena itu saya suka menghabiskan waktu berlajar pemprograman.
        </p>
      </div>
    </div>
  </div>
  <div class="list-row">
    <div class="container-list flex-center">
      <div class="pic"><img src="img/${dat[3][1]}" /></div>
      <div class="main-detail">
        <h6>${dat[3][0].toUpperCase()}</h6>
        <p>
          Dengan alam kita akan merasakan kedamaian.
        </p>
      </div>
    </div>
  </div>
</div>`;
}

function loadDataSlide() {
  const slide = document.querySelectorAll(".slide-col-content");
  const button = document.querySelector(".button-slide");

  let angka = 0;

  button.addEventListener("click", (a) => {
    if (a.target.className == "left") {
      angka -= 1;

      if (angka < 0) {
        angka = slide.length - 1;
      }

      klik(angka);
    } else if (a.target.className == "right") {
      angka += 1;
      if (angka > slide.length - 1) {
        angka = 0;
      }

      klik(angka);
    }
  });

  function klik(n) {
    slide.forEach((e) => {
      console.log(e);
      e.classList.remove("activ");
      slide[n].classList.add("activ");
    });
  }
}

//Page
function loadPage() {
  const pages = document.querySelectorAll(".page");
  const numAktif = document.querySelector(".page-number");

  for (i = 1; i < pages.length + 1; i++) {
    const div = document.createElement("div");

    div.setAttribute("class", "number");

    div.id = i;
    div.innerHTML = i;
    numAktif.appendChild(div);
    if (i == 1) {
      div.classList.add("aktip");
    }
  }
}
function numberClick(index) {
  let data = index - 1;
  changePage(data);
  numberChange(data);
}
function changePage(index) {
  const pages = document.querySelectorAll(".page");

  pages.forEach((page) => {
    page.classList.remove("muncul");
  });
  pages[index].classList.add("muncul");
}

function numberChange(i) {
  const num = document.querySelectorAll(".number");
  num.forEach((no) => {
    no.classList.remove("aktip");
  });
  num[i].classList.add("aktip");
}
//kemampuan
function getStar() {
  const persen = document.querySelectorAll(".persen");
  const icon = document.querySelectorAll(".icon");

  persen.forEach((per) => {
    if (per.parentElement.className == "html") {
      let data = per.parentElement.className;
      let hasil = hitung(per);
      skill(hasil, data);
    } else if (per.parentElement.className == "css") {
      let data = per.parentElement.className;
      let hasil = hitung(per);
      skill(hasil, data);
    } else if (per.parentElement.className == "js") {
      let data = per.parentElement.className;
      let hasil = hitung(per);
      skill(hasil, data);
    } else if (per.parentElement.className == "php") {
      let data = per.parentElement.className;
      let hasil = hitung(per);
      skill(hasil, data);
    } else if (per.parentElement.className == "office") {
      let data = per.parentElement.className;
      let hasil = hitung(per);
      skill(hasil, data);
    } else if (per.parentElement.className == "flutter") {
      let data = per.parentElement.className;
      let hasil = hitung(per);
      skill(hasil, data);
    } else if (per.parentElement.className == "java") {
      let data = per.parentElement.className;
      let hasil = hitung(per);
      skill(hasil, data);
    }
  });

  function skill(hasil, data) {
    let str = "." + data;
    const item = document.querySelectorAll(str);
    for (i = 1; i < hasil + 1; i++) {
      item[i].classList.add("active");
    }
  }

  function hitung(per) {
    let hasil;
    let satuan = per.innerText.replace("%", "");
    Math.ceil((hasil = satuan / 20));

    return hasil;
  }
}
let data = [];
icon.forEach((php) => {
  if (php.parentElement.className == "php") {
    data.push(php);
  }
});
